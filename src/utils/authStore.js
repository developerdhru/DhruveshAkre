const AUTH_KEY = 'portfolioAuth_v1'
const CRED_KEY = 'portfolioAdminCreds_v1'

const DEFAULT_ADMIN = {
  username: 'dhruveshakre',
  passwordHash: 'df34f95d3676d615ecf1bcdeddc984a542a67d83f10d65b46da5690d43b03022',
}

const toHex = (buffer) =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')

const hashText = async (value) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(value)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return toHex(digest)
}

const getCredentials = () => {
  try {
    const stored = localStorage.getItem(CRED_KEY)
    if (!stored) {
      return DEFAULT_ADMIN
    }
    const parsed = JSON.parse(stored)
    if (!parsed?.username || !parsed?.passwordHash) {
      return DEFAULT_ADMIN
    }
    return parsed
  } catch {
    return DEFAULT_ADMIN
  }
}

export const isAuthenticated = () => Boolean(localStorage.getItem(AUTH_KEY))

export const login = (username) => {
  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify({ username, ts: Date.now() })
  )
}

export const logout = () => {
  localStorage.removeItem(AUTH_KEY)
}

export const verifyCredentials = async (username, password) => {
  const creds = getCredentials()
  if (username !== creds.username) {
    return false
  }
  const hash = await hashText(password)
  return hash === creds.passwordHash
}

export const setCredentials = async (username, password) => {
  const passwordHash = await hashText(password)
  const next = { username, passwordHash }
  localStorage.setItem(CRED_KEY, JSON.stringify(next))
  return next
}
