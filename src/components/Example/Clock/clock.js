import React, { Component } from "react"

class Clock extends Component {

    // 로컬 데이터
    // Vue: data function object
    state = {
        date: new Date(),
        timerID: 0
    }

    // DOM 랜더링 후 시작
    // Vue: Mounted Hook
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }

    // DOM이 제거되거나, 삭제되면 실행
    // Vue: destory or beforeDestory 
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    // 일반 메소드
    tick() {
        // state 설정
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello,&nbsp;
                    <strong>
                        {this.props.name}
                    </strong>
                </h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock