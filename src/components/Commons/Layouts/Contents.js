import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import RoomHeader from '../../ChatService/Header/index'
import InputMessage from '../../ChatService/InputMessage/index'
import MessageContents from '../../ChatService/MessageContents/index'

@inject('app')
@observer
class RightContents extends Component {
    render() {
        // const { classes } = this.props;
        return (
            <div>
                <RoomHeader/>
                <MessageContents/>
                <InputMessage/>
            </div>
        );
    }
}


export default RightContents;
