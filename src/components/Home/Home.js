import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject('app')
@observer
class Home extends Component {
    render() {
        return (
            <div className="sample">
                <h1>Wellcome Home Component</h1>
            </div>
        )
    }
}

export default Home