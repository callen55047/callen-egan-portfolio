import React, {ReactNode} from 'react'

interface IChildren {
  children: ReactNode
}

export default function ProjectsSection(props: IChildren) {
  return (
    <section className="projects-section">
      <h2 className="section-title">✨ Projects Showcase</h2>

      {props.children}
    </section>
  )
}

interface IProjectCard extends IChildren {
  title: ReactNode,
  description: ReactNode
}

function ProjectCard(props: IProjectCard) {
  return (
    <div className="project-card">
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">
        {props.description}
      </p>

      {props.children}
    </div>
  )
}

export {
  ProjectCard
}