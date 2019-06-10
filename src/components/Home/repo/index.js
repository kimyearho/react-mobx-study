import axios from "axios";

class HomeRepo {

    API_URL = "https://www.googleapis.com/youtube/v3/"
    API_KEY = "AIzaSyDHpgyP8vCtw78G-oYCVEfFCijEfxSJ8b8"

    constructor(url, key) {
        this.API_URL = url || this.API_URL
        this.API_KEY = key || this.API_KEY
    }

    findSearch = () => {
        const url =
            this.API_URL +
            `search?part=snippet&q=【HD】Fate/Zero OP2 - Kalafina - to the beginning` +
            `&type=video&maxResults=50&safeSearch=strict&key=${this.API_KEY}`;
        return axios.get(url);
    };

    findPageSearch = nextToken => {
        if (nextToken) {
            const url =
                this.API_URL +
                `search?part=snippet&q=audio` +
                `&type=video,playlist,channel&maxResults=50&safeSearch=strict` +
                `&pageToken=${nextToken}&key=${this.API_KEY}`
            return axios.get(url);
        }
    };

    findVideo = videoId => {
        const url =
            this.API_URL +
            `videos?part=snippet&id=${videoId}` +
            `&key=${this.API_KEY}`;
        return axios.get(url);
    };
}

// Singleton
export default new HomeRepo()