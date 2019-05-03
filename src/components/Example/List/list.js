import React, { Component } from "react"

class List extends Component {

    state = {
        list: []
    }
    
    componentDidMount() {
        this.fetch()
    }

    fetch = () => {
        const item = [1, 2, 3, 4, 5, 6, 7, 8]
        this.setState({
            list: item
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default List