const res = (path) => {
    return `${process.env.PUBLIC_URL}/${path}`
}

const LocalImage = {
    Shade: {
        artistPage: res('shade/portal/sp-artist-page.png'),
        skills: res('shade/portal/sp-skills.png'),
        inquiry: res('shade/portal/sp-inquiry.png'),
        messaging: res('shade/portal/sp-messaging.png'),
        newSession: res('shade/portal/sp-newSession.png'),
        bookings: res('shade/portal/sp-bookings.png'),
        history: res('shade/portal/sp-history.png'),
        settings: res('shade/portal/sp-settings.png'),

        appIcon: res('shade/client/AppIcon1024.png'),
        clientArtistProfile: res('shade/client/sc-artistPage.PNG'),
        clientBooking: res('shade/client/sc-booking.PNG'),
        clientFeed: res('shade/client/sc-feed.PNG'),
        clientMessaging: res('shade/client/sc-messaging.PNG'),
        clientSessions: res('shade/client/sc-sessions.PNG'),
    },
    Trulioo: {

    }
}

const LocalVideo = {
    SHADE_ARTIST_PORTAL: res('shade/portal/shade-artist-portal.mp4'),
    TRULIOO_DOCV: res('trulioo/TruliooDocV.MP4'),
}



export {
    LocalImage,
    LocalVideo
}