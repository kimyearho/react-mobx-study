import React, { Component } from 'react';
import '../../assets/css/App.css';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Commons/Header'
import LeftContents from '../Commons/LeftContents'
import RightContents from '../Commons/RightContents'

class App extends Component {

  // 자식 컴포넌트의 데이터를 받음
  parentCallback = (dataChild) => {
    console.log(dataChild)
  }

  render() {
    return (
      // Fragment는 단순히 감싸주기 위한 역할을 한다. 굳이 div를 별도로 감싸주지 않아도 된다.
      <React.Fragment>
        <CssBaseline />
        {/* Header 공통 컴포넌트 */}
        <Header />
        <div className="App">
          {/* Root Layout */}
          <Grid container>
            {/* Contents Layout */}
            <Grid item xs={12} md={8} className="TestlineBox">
              {/* <Counter callbackData={this.parentCallback} /> */}
              <div className="Contents">
                <LeftContents />
              </div>
            </Grid>
            <Grid item xs={12} md={4} className="TestlineBox">
              <div className="Contents">
                <RightContents />
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App
