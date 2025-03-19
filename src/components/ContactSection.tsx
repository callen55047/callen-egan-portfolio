import React from 'react'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="section-title">📬 Contact</h2>
      <p className="contact-description">If you're interested in working together, feel free to reach out:</p>
      <ul className="contact-list">
        <li>📧 <a href="mailto:callenegan94@gmail.com" className="contact-link">callenegan94@gmail.com</a></li>
        <li>💼 <a href="https://www.linkedin.com/in/callen-egan-2983b218b" className="contact-link">LinkedIn</a></li>
        <li>💻 <a href="https://github.com/callen55047" className="contact-link">GitHub</a></li>
      </ul>
    </section>
  )
}