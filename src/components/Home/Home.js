import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import socketIOClient from "socket.io-client";

@inject('app')
@observer
class Home extends Component {

    componentDidMount = () => {
        const socket = socketIOClient('http://localhost:4001');
        socket.emit('connection')
    }

    render() {
        return (
            <div className="sample">
                <h1>Wellcome Home Component</h1>
            </div>
        )
    }
}

export default Home