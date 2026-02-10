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

export const saveProjects = (projects) => {
  const normalized = normalizeData(projects)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
  window.dispatchEvent(new CustomEvent('projects:updated'))
  return normalized
}

export const addProject = (type, project) => {
  const current = loadProjects()
  const normalized = normalizeProject(project)
  const next = {
    ...current,
    [type]: [normalized, ...current[type]],
  }
  return saveProjects(next)
}

export const removeProject = (type, id) => {
  const current = loadProjects()
  const next = {
    ...current,
    [type]: current[type].filter((project) => project.id !== id),
  }
  return saveProjects(next)
}

export const updateProject = (type, updatedProject) => {
  const current = loadProjects()
  const normalized = normalizeProject(updatedProject)
  const next = {
    ...current,
    [type]: current[type].map((project) =>
      project.id === normalized.id ? normalized : project
    ),
  }
  return saveProjects(next)
}
