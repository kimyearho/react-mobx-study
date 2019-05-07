import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject('app')
@observer
class MessageContents extends Component {
    render() {
        return(
            <div className="chatContents">
                <div className="chatBody">
                    <h1 className="sample">Chat Message Component</h1>
                </div>
            </div>
        )
    }
}

export default MessageContents