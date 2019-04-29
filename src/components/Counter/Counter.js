import React, { Component } from 'react'
import { observer, inject  } from 'mobx-react';

// inject는 mobx-react에 있는 데코레이션 함수로써, 컴포넌트에서 스토어에 접근할 수 있게 해줌.
// 정확히는 스토어에 있는 값을 컴포넌트의 props로 "주입"을 해줌.
// 이때 매개변수는 index.js에서 Provider props명과 동일해야함.
@inject('counterstore')
@observer
class Counter extends Component {
    render() {
        // propvider props 매개변수와 동일
        const { counterstore } = this.props;
        return (
            <div>
                <h1>{counterstore.number}</h1>
                <button onClick={counterstore.increase}>+1</button>
                &nbsp;
                <button onClick={counterstore.decrease}>-1</button>
            </div>
        );
    }
}

export default Counter;