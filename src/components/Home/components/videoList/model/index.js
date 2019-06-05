import { extendObservable, computed } from "mobx";

export default class VideoModel {

    constructor(data) {
        extendObservable(this, data)
    }

    @computed
    get getOneVideo() {
        return this.items[0]
    }

    @computed
    get getVideoId() {
        return this.getOneVideo.id
    }
}
