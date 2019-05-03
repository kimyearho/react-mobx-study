import React, { Component } from "react";

class Counter extends Component {
    // state 는 컴포넌트 내부에서 사용되는 객체임.
    // Vue로 비유하자면 data() 내부 객체
    state = {
        number: 0,
        message: "기본 메세지 입니다."
    }

    countPlus = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    countMinus = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    setText = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div><input placeholder="메세지 양방향 바인딩" onChange={this.setText} /></div>
                <br/><hr />
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.countPlus}>증가</button>
                <button onClick={this.countMinus}>감소</button>
            </div>
        )
    }
}

export default Counter