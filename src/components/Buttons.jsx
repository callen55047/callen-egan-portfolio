import React from 'react'

const AppStoreLink = ({ url, imageSource }) => {
    return (
        <div className="app-store-link">
            <img src={imageSource} alt="App Icon" className="app-store-badge" />
            <div style={{width: '25px'}} />

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h3>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        View on the App Store
                    </a>
                </h3>
            </div>

        </div>
    )
}

export {
    AppStoreLink,
}