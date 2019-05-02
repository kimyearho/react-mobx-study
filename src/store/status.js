import { observable, action } from "mobx"

/**
 * 사용자의 상태정보를 관리
 */
class UserStatusStore {

    // 생성자
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable
    userInfo = {
        userName: "Actor",
        userJob: "Knight"
    }

    @observable
    userStatus = {
        level: 1,
        minHp: 200,
        maxHp: 200,
        maxMp: 30,
        minMp: 30,
        str: 10,
        def: 5
    }

    @action
    levelUp = () => {
        this.userStatus.level++
        this.userStatus.maxHp += 50
        this.userStatus.maxMp += 10
        this.userStatus.str += 2
        this.userStatus.def += 1
    }

    @action
    usePotion = () => {
        // 현제 체력에서 포션 회복치만큼 회복한 체력의 값
        let recoveryHp = this.userStatus.minHp + 30;
        // 포션을 사용했을때 체력의 결과값이 최대 체력보다 낮을경우
        if (recoveryHp < this.userStatus.maxHp) {
            // 현재 체력을 갱신
            this.userStatus.minHp = recoveryHp
        } else {
            // 현재 체력을 최대체력으로 갱신
            this.userStatus.minHp = this.userStatus.maxHp
        }
    }

}

export default UserStatusStore