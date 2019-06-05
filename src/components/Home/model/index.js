import { extendObservable, computed } from "mobx";

export default class HomeModel {

    constructor(data) {
        extendObservable(this, data)
    }

    @computed
    get getSearchList() {
        return this.items
    }

    get getNextToken() {
        return this.nextPageToken
    }
}
