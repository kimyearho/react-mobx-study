import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

// inject는 mobx-react에 있는 데코레이션 함수로써, 컴포넌트에서 스토어에 접근할 수 있게 해줌.
// 정확히는 스토어에 있는 값을 컴포넌트의 props로 "주입"을 해줌.
// 이때 매개변수는 index.js에서 Provider props명과 동일해야함.
@inject('root')
@observer
class Counter extends Component {

    callbackButton = () => {
        this.props.callbackData({ data: '자식에서 부모로 데이터 전달' })
    }

    render() {
        const { root } = this.props;
        return (
            <div>
                <h1>{root.counterStore.number}</h1>
                <button onClick={root.counterStore.increase}>+1</button>
                &nbsp;
                <button onClick={root.counterStore.decrease}>-1</button>
                <button onClick={this.callbackButton}>부모 데이터 전달</button>
            </div>
        );
    }
}

export default Counter;