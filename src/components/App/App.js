import React, { Component } from 'react';
import '../../assets/css/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Commons/Layouts/Header'
import Body from '../Commons/Index'
import Footer from '../Commons/Layouts/Footer'

class App extends Component {

  render() {
    return (
      // Fragment는 단순히 감싸주기 위한 역할을 한다. 굳이 div를 별도로 감싸주지 않아도 된다.
      <React.Fragment>
        <CssBaseline />
        {/* Header */}
        <Header />
        {/* Root Layout */}
        <Body />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App
