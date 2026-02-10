import seedProjects from '../data/seedProjects.js'

const STORAGE_KEY = 'portfolioProjects_v1'

const normalizeProject = (project) => ({
  id: project.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  title: project.title || 'Untitled project',
  description: project.description || '',
  skills: Array.isArray(project.skills) ? project.skills : [],
  media: Array.isArray(project.media) ? project.media : [],
})

const normalizeCollection = (collection) =>
  Array.isArray(collection) ? collection.map(normalizeProject) : []

const normalizeData = (data) => ({
  dev: normalizeCollection(data?.dev),
  media: normalizeCollection(data?.media),
})

export const loadProjects = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return normalizeData(seedProjects)
    }
    return normalizeData(JSON.parse(stored))
  } catch {
    return normalizeData(seedProjects)
  }
}

// Editing helpers removed with admin dashboard.
