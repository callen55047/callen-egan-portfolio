import React, {ReactNode} from 'react'
import {FlexBox, HorizontalSpacer, IChildren} from "./ViewLayouts";


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

interface IImageDescription {
  imageSource: string,
  title: string,
  description: string,
}
function ImageDescription(props: IImageDescription) {
  const { imageSource, title, description } = props
  return (
    <FlexBox justify={'flex-start'}>
      <div className="image-gallery">
        <img src={imageSource} alt="image-with-description" />
      </div>

      <HorizontalSpacer size={20} />

      <FlexBox vertical justify={'flex-start'} style={{maxWidth: '50%'}}>
        <h4>{title}</h4>
        <p className="project-description">{description}</p>
      </FlexBox>
    </FlexBox>
  )
}

export {
  ProjectCard,
  ImageDescription,
}