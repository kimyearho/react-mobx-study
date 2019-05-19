import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../../assets/css/App.css';

import classNames from 'classnames'
import Grid from '@material-ui/core/Grid';
import Login from '../Login/Login'
import Drawer from '../Commons/Layouts/Drawer'
import Home from '../Home/Home'
import Detail from '../Card/CardDetail'
import Header from '../Commons/Layouts/Header'
import Footer from '../Commons/Layouts/Footer'

@inject('app')
@observer
class App extends Component {

  render() {
    const rightLayout = classNames('contents', 'right')
    const isLogin = this.props.app.userStore.getItem();

    // 현재 로그인이 되어 있으면
    if (isLogin) {
      return (
        // Fragment는 감싸주기 위한 역할을 한다. 굳이 div를 별도로 감싸주지 않아도 된다.
        <React.Fragment>
          {/* Material UI CSS를 좀더 정밀하게 다듬어줌 */}
          <CssBaseline />
          {/* 공통 Header */}
          <Header />
          {/* Router Component */}
            <Grid container className="app">
              {/* 공통 Left menu Component */}
              <Grid item xs={12} md={2}>
                <Drawer />
              </Grid>
              {/* 공통 Right contents Component */}
              <Grid item xs={12} md={10} className={rightLayout}>
                {/* 로그인 되었을때 '/' 루트 주소로 이동했을때 페이지 */}
                <Route exact path="/" component={Home} />
                {/* Switch 컴포넌트는 매칭되는 첫번째 컴포넌트만 출력하고, 그외는 출력하지 않음  */}
                {/* 주의할건 비교대상의 2뎁스 경로는 반드시 상위로 올라와야할 것.   */}
                <Switch>
                  {/* 라우트별 표시 페이지 */}
                  <Route path="/home/detail/:id" component={Detail} />
                  <Route path="/home" component={Home} />
                </Switch>
              </Grid>
            </Grid>
            {/* 공통 Footer Component */}
            <Footer />
        </React.Fragment>
      );
    } else {
      // 현재 비로그인일경우
      return (
        <Route exact path="/" component={Login} />
      )
    }
  }
}

export default withRouter(App)
