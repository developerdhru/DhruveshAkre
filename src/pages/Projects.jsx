import React, { useEffect, useMemo, useState } from 'react'
import { loadProjects } from '../utils/projectStore.js'

const isPreviewLink = (url) => url.includes('drive.google.com') && url.includes('/preview')

const getPreviewItem = (project) =>
  project.media.find((item) => isPreviewLink(item.url)) || null

export default function Projects() {
  const [activePanel, setActivePanel] = useState('dev')
  const [projects, setProjects] = useState(loadProjects())
  const [selectedIds, setSelectedIds] = useState({ dev: null, media: null })

  useEffect(() => {
    const handleUpdate = () => setProjects(loadProjects())
    window.addEventListener('projects:updated', handleUpdate)
    return () => window.removeEventListener('projects:updated', handleUpdate)
  }, [])

  const devProjects = useMemo(() => projects.dev, [projects])
  const mediaProjects = useMemo(() => projects.media, [projects])

  const activeProjects = activePanel === 'dev' ? devProjects : mediaProjects
  const selectedProject = activeProjects.find((p) => p.id === selectedIds[activePanel])
    || null
  const isDevPanel = activePanel === 'dev'

  useEffect(() => {
    if (activeProjects.length === 0) {
      return
    }
    const currentId = selectedIds[activePanel]
    const exists = activeProjects.some((p) => p.id === currentId)
    if (!exists) {
      setSelectedIds((prev) => ({ ...prev, [activePanel]: activeProjects[0].id }))
    }
  }, [activeProjects, activePanel, selectedIds])

  const activeSelection = selectedProject || activeProjects[0]

  const handleSelect = (id) => {
    setSelectedIds((prev) => ({ ...prev, [activePanel]: id }))
  }

  return (
    <section className="page projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Full stack builds, IoT experiments, and creative media work.</p>
      </div>
      <div className="toggle-wrap" role="tablist" aria-label="Project categories">
        <button
          type="button"
          className={activePanel === 'dev' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActivePanel('dev')}
          aria-pressed={activePanel === 'dev'}
        >
          Programming
        </button>
        <div className="toggle-or">OR</div>
        <button
          type="button"
          className={activePanel === 'media' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActivePanel('media')}
          aria-pressed={activePanel === 'media'}
        >
          Video + Photo
        </button>
      </div>

      <section className="panel-card">
        <div className="panel-head">
          <h3>{activePanel === 'dev' ? 'Programming projects' : 'Video + photo editing'}</h3>
          <p>
            {activePanel === 'dev'
              ? 'Full stack builds, IoT experiments, and web applications.'
              : 'Reels, invitation edits, and cinematic storytelling work.'}
          </p>
        </div>

        {activeProjects.length === 0 ? (
          <p className="empty-state">No projects yet.</p>
        ) : (
          <>
            <div className="project-feed" role="list">
              {activeProjects.map((project) => (
                <article className="project-post" key={project.id}>
                  <div className="project-post-head">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-row">
                    {project.skills.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="media-list">
                    {project.media.length === 0 ? (
                      <span className="meta">No media uploaded yet.</span>
                    ) : (
                      project.media.map((item) => (
                        <div className="media-item" key={item.url}>
                          {!isDevPanel && (
                            <a
                              className="text-link"
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.label}
                            </a>
                          )}
                          {isPreviewLink(item.url) ? (
                            <div className="media-frame">
                              <iframe
                                src={item.url}
                                title={item.label}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <span className="meta">Add a Drive preview link to embed media.</span>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="project-split">
              <div className="project-list" role="tablist" aria-label="Project list">
                {activeProjects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className={project.id === activeSelection?.id ? 'project-list-item active' : 'project-list-item'}
                    onClick={() => handleSelect(project.id)}
                  >
                    <span>{project.title}</span>
                  </button>
                ))}
              </div>

              <article className="project-detail">
                <div className="project-detail-head">
                  <h4>{activeSelection?.title}</h4>
                  <p>{activeSelection?.description}</p>
                </div>
                <div className="tag-row">
                  {activeSelection?.skills.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="media-list">
                  {activeSelection?.media.length === 0 ? (
                    <span className="meta">No media uploaded yet.</span>
                  ) : (
                    activeSelection?.media.map((item) => (
                      <div className="media-item" key={item.url}>
                        {!isDevPanel && (
                          <a
                            className="text-link"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.label}
                          </a>
                        )}
                        {isPreviewLink(item.url) ? (
                          <div className="media-frame">
                            <iframe
                              src={item.url}
                              title={item.label}
                              allow="autoplay; fullscreen"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <span className="meta">Add a Drive preview link to embed media.</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </article>
            </div>
          </>
        )}
      </section>
    </section>
  )
}
