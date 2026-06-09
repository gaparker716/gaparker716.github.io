import { useState } from 'react'
import { Icon } from "@iconify/react"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page container">
      <header className="page-head">
        <p className="eyebrow">Let's start working together</p>
        <h1>Contact</h1>
      </header>

      <section className="contact-layout">
        <aside className="contact-meta">
          <div className="card">
            <h3>Get in touch</h3>
            <ul className="link-list">
              <li><a href="mailto:graceparkermt@gmail.com" rel="noreferrer"><Icon icon="clarity:email-solid" height={16} />graceparkermt@gmail.com</a></li>
              <li><a href="tel:+14063812797" rel="noreferrer"><Icon icon="clarity:phone-handset-solid" height={16} />+1 406 381 2797</a></li>
              <li><a href="http://www.github.com/gaparker716" rel="noreferrer"><Icon icon="mdi:github" height={16} />GitHub</a></li>
              <li><a href="http://www.linkedin.com/in/graceparker0716" rel="noreferrer"><Icon icon="mdi:linkedin" height={16} />LinkedIn</a></li>
            </ul>
          </div>
        </aside>

   { /* TODO: secure form submission   
        <form className="contact-form card" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Placeholder name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="placeholder@example.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea rows={6} placeholder="Placeholder message…" required />
          </label>
          <button type="submit" className="btn btn-primary">
            {sent ? 'Sent (placeholder)' : 'Send message'}
          </button>
        </form> */}
      </section>
    </div>
  )
}
