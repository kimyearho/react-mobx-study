import EnemyStatusStore from './enemy'
import UserStatusStore from './status'
import CounterStore from './counter'
import RequestStore from './request'

/**
 * Multiple Store
 * 인스턴스의 초기화 파라메터의 "this"는 RootStore를 가리킴.
 */
class RootStore {

    constructor() {
        this.counterStore = new CounterStore(this)
        this.userStore = new UserStatusStore(this)
        this.enemyStore = new EnemyStatusStore(this)
        this.requestStore = new RequestStore(this)
    }

}

export default new RootStore()