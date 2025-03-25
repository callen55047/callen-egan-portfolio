const res = (path: string) => {
    return `${process.env.PUBLIC_URL}/${path}`
}

const LocalImage = {
    Shade: {
        appIcon: res('shade/client/AppIcon1024.png'),
        clientArtistProfile: res('shade/client/sc-artistPage.PNG'),
        clientBooking: res('shade/client/sc-booking.PNG'),
        clientFeed: res('shade/client/sc-feed.PNG'),
        clientMessaging: res('shade/client/sc-messaging.PNG'),
        clientSessions: res('shade/client/sc-sessions.PNG'),
    },
    Trulioo: {
        document: res('trulioo/docv-document.png'),
        selection: res('trulioo/docv-selection.png'),
        instruction: res('trulioo/docv-instruction.png'),
        front: res('trulioo/docv-front.png'),
        frontSuccess: res('trulioo/docv-frontSuccess.png'),
        flip: res('trulioo/docv-flip.png'),
        backError: res('trulioo/docv-backError.png'),
        review: res('trulioo/docv-review.png'),
        complete: res('trulioo/docv-complete.png'),
        appIcon: res('trulioo/Trulioo_app_icon.png'),
    },
    Traqspera: {
        icon: res('traqspera/icon.jpg')
    },
    Serotonin: {
        icon: res('serotonin/jetlagIcon.png')
    },
    Coffee: {
        tower_gameplay: res('coffee/gameplay.gif'),
        board_placement: res('coffee/boardPlacement.gif'),
    },
    Shared: {
        githubIcon: res('shared/githubIcon.png'),
    }
}

const LocalVideo = {
    SHADE_ARTIST_PORTAL: res('shade/portal/shade-artist-portal.mp4'),
    JETLAG_TRAILER: res('serotonin/jetlag3d.mp4')
}



export {
    LocalImage,
    LocalVideo
}