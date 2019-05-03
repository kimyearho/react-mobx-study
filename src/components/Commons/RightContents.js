import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject('app')
@observer
class RightContents extends Component {


    render() {
        const { app } = this.props;
        return (
            <div>
                <div>
                    <h1>
                        Right Content
                    </h1>
                </div>
            </div>
        );
    }
}

export default RightContents;