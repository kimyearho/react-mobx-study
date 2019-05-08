import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames'
import '../../assets/css/App.css';

import Grid from '@material-ui/core/Grid';
import Login from '../Login/Login'
import Drawer from '../Commons/Layouts/Drawer'
import Home from '../Home/Home'
import Header from '../Commons/Layouts/Header'
import RoomDetail from '../Commons/Layouts/Contents'
import Footer from '../Commons/Layouts/Footer'

class App extends Component {

  render() {
    const leftLayout = classNames('contents', 'left')
    const rightLayout = classNames('contents', 'right')
    return (
      // Fragment는 단순히 감싸주기 위한 역할을 한다. 굳이 div를 별도로 감싸주지 않아도 된다.
      <React.Fragment>
        <CssBaseline />
        {/* Header */}
        <Header />
        {/* Router Component */}
        <div className="app">
          <Grid container>
            {/* Left menu Component */}
            <Grid item xs={12} md={2}>
              <div className={leftLayout}>
                <Drawer />
              </div>
            </Grid>
            {/* Right contents Component */}
            <Grid item xs={12} md={10}>
              <div className={rightLayout}>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/myworkspace" component={RoomDetail}/>
                <Route path="/channelList" component={RoomDetail}/>
                <Route path="/channel/:roomNum" component={RoomDetail}/>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* Footer Component */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App
