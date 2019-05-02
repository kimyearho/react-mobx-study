import { observable, action } from "mobx"

/**
 * 적의 상태정보를 관리
 */
class EnemyStatusStore {

    // 생성자
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable
    enemyStatus = {
        level: 10,
        attack: 150
    }

    @action
    enemyAttack = () => {
        // 적 공격력
        const enemyAttack = this.enemyStatus.attack;

        // 유저 방어력
        const userDef = this.rootStore.userStore.userStatus.def

        // 데미지 공식
        // (적공격력 - 유저방어력 / 2) / 2 * 0.5
        let mostDamage = Math.floor(((enemyAttack - userDef / 2) / 2) * 0.5)

        let userMinHp = this.rootStore.userStore.userStatus.minHp;
        let damageResult = userMinHp - mostDamage

        // 데미지 결과가 0보다 크면 대입하고, 작으면 0을 대입
        this.rootStore.userStore.userStatus.minHp = damageResult > 0 ? damageResult : 0
    }

}

export default EnemyStatusStore