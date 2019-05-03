import React, { Component } from "react"

class EventHandler extends Component {

    state = {
        message: "버튼을 클릭하시오!"
    }

    clickEvent1 = () => {
        this.setState({
            message: "버튼1을 클릭했음"
        })
    }

    clickEvent2 = (id, str) => {
        console.log(id,  str)
    }

    render() {
        return (
            <div>
                <div>
                    <h2>버튼 이벤트 예제</h2>
                    {this.state.message}
                    <button onClick={this.clickEvent1}>클릭 1</button>
                    <br/><br/>
                    <h2>콘솔로그 예제</h2>
                    
                    {/* 버튼 이벤트경우 arrow function 형태를 사용하지 않으면 버튼을 클릭하지 않아도 이벤트기 동작되므로 주의  */}
                    <button onClick={() => this.clickEvent2({id: 'event!!!'}, 'Text!')}>클릭 2</button>
                </div>
            </div>
        )
    }
}

export default EventHandler