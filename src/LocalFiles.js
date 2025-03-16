const res = (path) => {
    return `${process.env.PUBLIC_URL}/${path}`
}

const LocalImage = {
    Shade: {
        artistPage: res('images/sp-artist-page.png'),
        skills: res('images/sp-skills.png'),
        inquiry: res('images/sp-inquiry.png'),
        messaging: res('images/sp-messaging.png'),
        newSession: res('images/sp-newSession.png'),
        bookings: res('images/sp-bookings.png'),
        history: res('images/sp-history.png'),
        settings: res('images/sp-settings.png'),
    },
    Trulioo: {

    }
}

const LocalVideo = {
    SHADE_ARTIST_PORTAL: res('videos/shade-artist-portal.mp4')
}



export {
    LocalImage,
    LocalVideo
}