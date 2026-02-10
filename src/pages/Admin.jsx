import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  addProject,
  loadProjects,
  removeProject,
  updateProject,
} from '../utils/projectStore.js'
import { logout } from '../utils/authStore.js'

const emptyMedia = { label: '', url: '' }

const parseSkills = (value) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

const isPreviewLink = (url) => url.includes('drive.google.com') && url.includes('/preview')

export default function Admin() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('dev')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [skills, setSkills] = useState('')
  const [mediaItems, setMediaItems] = useState([{ ...emptyMedia }])
  const [projects, setProjects] = useState(loadProjects())
  const [editingId, setEditingId] = useState(null)

  const activeProjects = useMemo(() => projects[category], [projects, category])

  const updateMedia = (index, field, value) => {
    setMediaItems((items) =>
      items.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    )
  }

  const addMediaRow = () => {
    setMediaItems((items) => [...items, { ...emptyMedia }])
  }

  const removeMediaRow = (index) => {
    setMediaItems((items) => items.filter((_, idx) => idx !== index))
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setSkills('')
    setMediaItems([{ ...emptyMedia }])
    setEditingId(null)
  }

  const handleEdit = (project) => {
    setEditingId(project.id)
    setTitle(project.title)
    setDescription(project.description)
    setSkills(project.skills.join(', '))
    setMediaItems(project.media.length > 0 ? project.media : [{ ...emptyMedia }])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextProject = {
      id: editingId,
      title: title.trim(),
      description: description.trim(),
      skills: parseSkills(skills),
      media: mediaItems
        .map((item) => ({
          label: item.label.trim() || 'Media link',
          url: item.url.trim(),
        }))
        .filter((item) => item.url),
    }

    const next = editingId
      ? updateProject(category, nextProject)
      : addProject(category, nextProject)

    setProjects(next)
    resetForm()
  }

  const handleRemove = (id) => {
    const next = removeProject(category, id)
    setProjects(next)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <section className="page admin">
      <div className="section-head">
        <div>
          <h2>Admin panel</h2>
          <p>Add new projects without editing code. Data is saved in your browser.</p>
        </div>
        <button type="button" className="ghost-btn" onClick={handleLogout}>Log out</button>
      </div>

      <div className="admin-layout">
        <form className="panel-card admin-form" onSubmit={handleSubmit}>
          <div className="admin-tabs" role="tablist">
            <button
              type="button"
              className={category === 'dev' ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setCategory('dev')}
            >
              Programming
            </button>
            <button
              type="button"
              className={category === 'media' ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setCategory('media')}
            >
              Video + Photo
            </button>
          </div>

          <label className="field">
            <span>Main heading</span>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Project title"
              required
            />
          </label>

          <label className="field">
            <span>Description</span>
            <textarea
              rows="4"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Short summary of what you built"
              required
            />
          </label>

          <label className="field">
            <span>Skills (comma separated)</span>
            <input
              type="text"
              value={skills}
              onChange={(event) => setSkills(event.target.value)}
              placeholder="React, Vite, Node.js"
            />
          </label>

          <div className="media-block">
            <div className="media-head">
              <h4>Media links</h4>
              <button type="button" className="ghost-btn" onClick={addMediaRow}>Add link</button>
            </div>
            <p className="media-help">
              Use Drive preview links for videos or images (Share &gt; Embed &gt; copy the preview URL).
            </p>
            {mediaItems.map((item, index) => (
              <div className="media-row" key={`media-${index}`}>
                <input
                  type="text"
                  value={item.label}
                  onChange={(event) => updateMedia(index, 'label', event.target.value)}
                  placeholder="Media label"
                />
                <input
                  type="url"
                  value={item.url}
                  onChange={(event) => updateMedia(index, 'url', event.target.value)}
                  placeholder="https://drive.google.com/.../preview"
                />
                <button type="button" className="ghost-btn" onClick={() => removeMediaRow(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button type="submit" className="btn primary">Save project</button>
          {editingId && (
            <button type="button" className="ghost-btn" onClick={resetForm}>
              Cancel edit
            </button>
          )}
        </form>

        <aside className="panel-card admin-list">
          <div className="panel-head">
            <h3>Saved projects</h3>
            <p>Click edit to change a project, or remove to delete it.</p>
          </div>
          <div className="admin-items">
            {activeProjects.length === 0 ? (
              <p className="empty-state">No projects yet.</p>
            ) : (
              activeProjects.map((project) => (
                <div className="admin-item" key={project.id}>
                  <div>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                    <span className="meta">{project.skills.join(', ') || 'No skills added'}</span>
                  </div>
                  <div className="admin-actions">
                    <button type="button" className="ghost-btn" onClick={() => handleEdit(project)}>
                      Edit
                    </button>
                    <button type="button" className="ghost-btn" onClick={() => handleRemove(project.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="media-tip">
            <p>
              Tip: Only links stored in your browser. Exported in the next step if you want to save
              them permanently.
            </p>
          </div>
        </aside>
      </div>

      <div className="panel-card admin-note">
        <h3>Why Drive links?</h3>
        <p>
          GitHub Pages cannot upload files at runtime, so we use hosted media links instead. Drive
          preview links load inside the portfolio without extra code edits.
        </p>
        <p>
          If you want permanent storage later, we can connect a real database or use a CMS.
        </p>
      </div>

      <div className="panel-card admin-preview">
        <h3>Live preview link test</h3>
        <p>Drive preview example is shown below if you add a media link.</p>
        <div className="media-preview">
          {activeProjects.flatMap((project) => project.media).filter((item) => isPreviewLink(item.url)).slice(0, 1).map((item) => (
            <iframe
              key={item.url}
              src={item.url}
              title={item.label}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
