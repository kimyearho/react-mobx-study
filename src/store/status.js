import { observable, action } from "mobx"

class UserStatusStore {

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

    @observable
    enemyStatus = {
        level: 10,
        attack: 150
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

    @action
    enemyAttack = () => {
        // 적 공격력
        const enemyAttack = this.enemyStatus.attack;

        // 유저 방어력
        const userDef = this.userStatus.def

        // 데미지 공식
        // (적공격력 - 유저방어력 / 2) / 2 * 0.5
        let mostDamage = Math.floor(((enemyAttack - userDef / 2) / 2) * 0.5)

        let userMinHp = this.userStatus.minHp;
        let damageResult = userMinHp - mostDamage

        // 데미지 결과가 0보다 크면 대입하고, 작으면 0을 대입
        this.userStatus.minHp = damageResult > 0 ? damageResult : 0
    }

}

export default new UserStatusStore()