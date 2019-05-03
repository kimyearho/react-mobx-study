import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Card from '../Card/Card'

@inject('app')
@observer
class LeftContents extends Component {

    state = {
        exampleList: []
    }

    get = () => {
        const arrays = [
            { url: 'https://i.ytimg.com/vi/7O6oi_FxloA/maxresdefault.jpg', data: 1 },
            { url: 'https://i.ytimg.com/vi/KBRXklpeHwM/maxresdefault.jpg', data: 2 },
            { url: 'https://i.ytimg.com/vi/Zjy-p4AUI6A/maxresdefault.jpg', data: 3 },
            { url: 'https://i.ytimg.com/vi/BJ0EERmmlB0/maxresdefault.jpg', data: 4 },
            { url: 'https://i.ytimg.com/vi/qWGjbDm4w5s/maxresdefault.jpg', data: 5 },
            { url: 'https://i.ytimg.com/vi/ZNswbkSGHGI/maxresdefault.jpg', data: 6 }
        ]
        this.setState({
            exampleList: Object.assign([], arrays)
        })
    }

    componentDidMount = () => {
        this.get()
    }

    render() {
        const { app } = this.props;
        return (
            <div>
                {
                    this.state.exampleList.map((item, i) =>
                        <div key={i} className="CardList">
                            <Card data={item} />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default LeftContents;