import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames'
import '../../assets/css/App.css';

import Grid from '@material-ui/core/Grid';
import Login from '../Login/Login'
import Drawer from '../Commons/Layouts/Drawer'
import Home from '../Home/Home'
import Header from '../Commons/Layouts/Header'
import Channel from '../ChatService/Channel/Channel'
import RoomDetail from '../Commons/Layouts/Contents'
import Footer from '../Commons/Layouts/Footer'

@inject('app')
@observer
class App extends Component {

  constructor(props) {
    super(props)
    this.success = this.success.bind(this)
  }

  componentDidMount = () => {
    this.props.app.eventStore.on('successLogin', this.success)
  }

  success = () => {
    this.props.history.push('/home');
  }

  render() {
    const leftLayout = classNames('contents', 'left')
    const rightLayout = classNames('contents', 'right')

    return (
      // Fragment는 단순히 감싸주기 위한 역할을 한다. 굳이 div를 별도로 감싸주지 않아도 된다.
      <React.Fragment>
        {/* Material UI CSS를 좀더 정밀하게 다듬어줌 */}
        <CssBaseline />
        {/* 공통 Header */}
        <Header />
        {/* Router Component */}
        <div className="app">
          <Grid container>
            {/* 공통 Left menu Component */}
            <Grid item xs={12} md={2}>
              <div className={leftLayout}>
                <Drawer />
              </div>
            </Grid>
            {/* 공통 Right contents Component */}
            <Grid item xs={12} md={10}>
              <div className={rightLayout}>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/workspace" component={RoomDetail} />
                <Route path="/channelList" component={Channel} />
                <Route path="/channel/:roomNum" component={RoomDetail} />
              </div>
            </Grid>
          </Grid>
          {/* 공통 Footer Component */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App)
