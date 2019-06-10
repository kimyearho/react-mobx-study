import { extendObservable, toJS, computed } from "mobx";

export default class VideoModel {

    constructor(data) {
        extendObservable(this, data)
    }

    @computed
    get getOneVideo() {
        return toJS(this.items[0].snippet)
    }

    get getVideoId() {
        return toJS(this.items[0].id);
    }
    
}
