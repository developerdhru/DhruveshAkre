import React, { useState } from 'react'

const isPreviewLink = (url) => url.includes('drive.google.com') && url.includes('/preview')

export default function Projects() {
  const [activePanel, setActivePanel] = useState('dev')
  const [selectedIds, setSelectedIds] = useState({ dev: 'dev-1', media: 'media-1' })

  // MANUALLY EDIT YOUR PROJECTS HERE
  const devProjects = [
    {
      id: 'dev-1',
      title: 'Project showcase coming soon',
      description: 'I am curating my strongest builds and case studies.',
      skills: ['Full Stack', 'IoT', 'Creative'],
      media: [],
    },
    {
      id: 'dev-2',
      title: 'Flask + SQL Web App',
      description: 'Scalable backend with clean UI and structured data flow.',
      skills: ['Flask', 'SQL', 'JavaScript'],
      media: [],
    },
  ]

  const mediaProjects = [
    {
      id: 'media-1',
      title: 'Creative Editing Suite',
      description: 'Video and photo edits focused on storytelling and rhythm.',
      skills: ['Premiere Pro', 'Photoshop', 'After Effects'],
      media: [
        {
          label: 'Drive preview',
          url: 'https://drive.google.com/file/d/1u0rbqg55qnbbjkPl2zDv6oKUaD99k50D/preview',
        },
      ],
    },
    {
      id: 'media-2',
      title: 'Reel Editing Showcase',
      description: 'Short-form edits optimized for social engagement.',
      skills: ['Reels', 'Transitions', 'Sound design'],
      media: [],
    },
  ]

  const activeProjects = activePanel === 'dev' ? devProjects : mediaProjects
  const selectedProject = activeProjects.find((p) => p.id === selectedIds[activePanel]) || activeProjects[0]
  const isDevPanel = activePanel === 'dev'

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
                    className={project.id === selectedProject?.id ? 'project-list-item active' : 'project-list-item'}
                    onClick={() => handleSelect(project.id)}
                  >
                    <span>{project.title}</span>
                  </button>
                ))}
              </div>

              <article className="project-detail">
                <div className="project-detail-head">
                  <h4>{selectedProject?.title}</h4>
                  <p>{selectedProject?.description}</p>
                </div>
                <div className="tag-row">
                  {selectedProject?.skills.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="media-list">
                  {selectedProject?.media.length === 0 ? (
                    <span className="meta">No media uploaded yet.</span>
                  ) : (
                    selectedProject?.media.map((item) => (
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
