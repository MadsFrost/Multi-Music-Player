export const YoutubeParser = (url: string) => {
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match
}

export const SoundcloudParser = (url: string) => {
    var regExp = /^(?:(https?):\/\/)?(?:(?:www|m)\.)?(soundcloud\.com|snd\.sc)\/(.*)$/;
    var match = url.match(regExp);
    return match
}

export const SwitchPlayer = (url: string) => {
    if (YoutubeParser(url)) {
        return 'YouTube'
    }
    if (SoundcloudParser(url)) {
        return 'Soundcloud'
    }

    else {
        return 'None'
    }
}