import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoItem from './components/video/list'
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: `${10}px ${0}px ${20}px ${10}px`
    },
    gridItem: {
        marginBottom: `${20}px`
    }
});

@inject('app')
@observer
class Home extends Component {

    constructor(props) {
        super(props)
        this.home = this.props.app.homeStore
        this.loading = false
    }

    // 랜더링 되기전에 이미 이벤트를 받을 준비한다.
    componentWillMount = () => {
        const event = this.props.app.eventStore;
        event.on('reload', this.reload)
    }

    // 랜더링이 완료된 후 실행
    componentDidMount = () => {
        this.reload()
    }

    // 컴포넌트가 종료되면 이벤트 리스너를 제거한다.
    componentWillUnmount = () => {
        const event = this.props.app.eventStore;
        event.removeAllListeners('reload')
    }

    reload = () => {
        const searchQuery = this.home.searchQuery ? this.home.searchQuery : ''
        this.home.findAllSearch(searchQuery)
    }

    render() {
        // store에서 observable을 props로 주입받음.
        const { classes, app } = this.props;
        // observable을 바라보고 있음.
        // view에서 observable를 dispatch 하면 갱신 됨. 
        const searchList = app.homeStore.data.list;
        return (
            <div>
                <Grid container style={{ padding: '40px', background: 'rgba(0, 0, 0, 0.84)' }}>
                    {
                        searchList.map((item, index) => (
                            <Grid className={classes.gridItem} item xs={12} key={index}>
                                <VideoItem data={item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(Home));