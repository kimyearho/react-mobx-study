import EnemyStatusStore from './enemy'
import UserStatusStore from './status'

/**
 * Multiple Store
 * 인스턴스의 초기화 파라메터의 "this"는 RootStore를 가리킴.
 */
class RootStore {

    constructor() {
        this.userStore = new UserStatusStore(this)
        this.enemyStore = new EnemyStatusStore(this)
    }

}

export default new RootStore()