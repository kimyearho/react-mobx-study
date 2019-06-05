import { extendObservable, computed } from "mobx";

export default class VideoModel {

    constructor(data) {
        extendObservable(this, data)
    }

    get getOneVideo() {
        return this.items[0].snippet
    }

    get getVideoId() {
        return this.items[0].videoId
    }
    
}
