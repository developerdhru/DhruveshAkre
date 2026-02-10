import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, verifyCredentials } from '../utils/authStore.js'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const ok = await verifyCredentials(username.trim(), password)
    if (!ok) {
      setError('Invalid login. Check your ID and password.')
      setLoading(false)
      return
    }

    login(username.trim())
    setLoading(false)
    navigate('/admin')
  }

  return (
    <section className="page auth-page">
      <div className="panel-card auth-card">
        <div className="panel-head">
          <h2>Admin login</h2>
          <p>Only authorized access for managing projects.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Admin ID</span>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="username"
              required
            />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
              required
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? 'Checking...' : 'Login'}
          </button>
        </form>
        <p className="auth-note">
          Passwords are stored as SHA-256 hashes in your browser, not plain text.
        </p>
      </div>
    </section>
  )
}
