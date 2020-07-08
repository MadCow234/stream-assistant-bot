exports.ROLE = {
    CAST : '🔴 Streaming (Cast) 🔴',
    GUESTS: '🔴 Streaming (Guests) 🔴',
    CREW: 'Crew'
}

exports.CHANNEL = {
    CATEGORY: {
        LIVE: {
            NAME: 'Live',
            PARENT: null
        },
        ARCHIVES: {
            NAME: 'Archives',
            PARENT: null
        }
    },
    TEXT: {
        STREAM_NOTES: {
            NAME: 'stream-notes',
            PARENT: 'Live'
        }
    },
    VOICE: {
        STAGING: {
            NAME: 'Staging',
            PARENT: 'Live'
        },
        STREAMING: {
            NAME: '🔴 Streaming 🔴',
            PARENT: 'Live'
        }
    }
}

exports.EMBED = {
    THUMBNAIL: {
        SUCCESS: 'https://cdn.discordapp.com/attachments/673213456526082053/729887363286695998/success.gif',
        ERROR: 'https://cdn.discordapp.com/attachments/673213456526082053/682402598724436032/general_error.gif',
        LIVE: 'https://cdn.discordapp.com/attachments/673213456526082053/729886822477463572/on-air.gif',
        STOP: 'https://cdn.discordapp.com/attachments/673213456526082053/729885862510198854/stream-stopped.gif'
    }
}

exports.ACTION = {
    SUCCESS: 'Success',
    ERROR: 'Error'
}