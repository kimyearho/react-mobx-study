import React, { Component } from 'react'
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
    @observable number = 0;

    @action
    increase = () => {
        this.number++;
    }

    @action
    decrease = () => {
        this.number--;
    }

    render() {
        return (
            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        );
    }
}


// **** decorate 는 더 이상 필요 없어집니다.
// decorate(Counter, {
//   number: observable,
//   increase: action,
//   decrease: action
// })

// export default observer(Counter);
// **** observer 는 코드의 상단으로 올라갑니다.
export default Counter;