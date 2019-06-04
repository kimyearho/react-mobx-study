import { extendObservable, computed } from "mobx";

class HomeModel {
    constructor(data) {
        extendObservable(this, data)
    }

    @computed
    get searchItems() {
    }
}