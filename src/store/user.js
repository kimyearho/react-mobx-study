import { observable, action } from "mobx"

export default class UserStore {

    // RootStore 인스턴스
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action
    getItem = () => {
        return window.sessionStorage.getItem('user') ? true : false
    }

    @action
    setItem = (data) => {
        window.sessionStorage.setItem('user', data)
    }

}