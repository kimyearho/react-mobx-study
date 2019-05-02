import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../../assets/css/App.css';

import Header from '../Commons/Header'

class App extends Component {
  render() {
    return (
      // Fragment는 단순히 감싸주기 위한 역할을 한다. 굳이 div를 별도로 감싸주지 않아도 된다.
      <React.Fragment>
        {/* Header 공통 컴포넌트 */}
        <Header />
        <div className="App">
          {/* Root Layout */}
          <Grid container>
            {/* Contents Layout */}
            <Grid item xs={12} md={8} className="TestlineBox">
              <h1>LEFT 사이드</h1>
            </Grid>
            <Grid item xs={12} md={4} className="TestlineBox">
              <h1>RIGHT 사이드</h1>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App
