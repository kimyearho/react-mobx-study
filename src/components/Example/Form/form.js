import React, { Component } from "react"

class Form extends Component {
    state = {
        name: '',
        phone: '',
        num: ''
    }

    // Computed property names 문법
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    setChange = (e) => {
        // input field name에 따른 바인딩
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.setChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.setChange}
                    name="phone"
                />
                <input
                    placeholder="전화번호2"
                    value={this.state.num}
                    onChange={this.setChange}
                    name="num"
                />
                <div>{this.state.name} {this.state.phone} {this.state.num}</div>
            </form>
        );
    }
}

export default Form