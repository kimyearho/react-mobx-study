import { observable, action } from "mobx"

export default class CounterStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    // 감시 State 
    @observable number = 0;

    // Json Object 형태로 작성가능.
    @observable data = { name: '123', age: 12 }

    @action increase = () => {
        this.number++
    }

    @action decrease = () => {
        this.number--;
    }
}