import React, {ReactNode} from 'react'

export default function ProjectsSection(props: { children: ReactNode }) {
  return (
    <section className="projects-section">
      <h2 className="section-title">✨ Projects Showcase</h2>

      {props.children}
    </section>
  )
}