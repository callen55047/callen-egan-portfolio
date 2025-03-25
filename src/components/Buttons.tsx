import React from 'react'

interface IAppIconLink {
  url: string,
  imageSource: string,
  description?: string
}
const AppIconLink = (props: IAppIconLink) => {
  const { url, imageSource, description } = props

    return (
        <div className="app-store-link">
            <img src={imageSource} alt="App Icon" className="app-store-badge" />
            <div style={{width: '25px'}} />

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h3>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {description || 'View on the App Store'}
                    </a>
                </h3>
            </div>

        </div>
    )
}

export {
    AppIconLink,
}