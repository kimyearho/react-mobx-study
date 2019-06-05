import EventStore from './event'
import HometStore from './home'
import UserStore from './user'

/**
 * Multiple Store
 * 인스턴스의 초기화 파라메터의 "this"는 RootStore를 가리킴.
 */
class RootStore {

    constructor() {
        this.eventStore = new EventStore(this)
        this.userStore = new UserStore(this)
        this.homeStore = new HometStore(this)
    }

}

export default new RootStore()