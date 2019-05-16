import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import LoginRegister from 'react-mui-login-register';
import classNames from 'classnames';

@inject('app')
@observer
class Login extends Component {

    state = {
        isLogin: false
    }

    componentDidMount = () => {
        const login = this.props.app.userStore.getItem();
        if(login) {}
    }

    render() {
        const styles = classNames('sample', 'mgt200')
        return (
            <div className={styles}>
                <LoginRegister
                    onLogin={this.handleLogin}
                    onLoginWithProvider={this.handleLoginWithProvider}
                    onRegister={this.handleRegister}
                    onRegisterWithProvider={this.handleRegisterWithProvider}
                />
            </div>
        )
    }

    // 로그인
    handleLogin = content => {
        const data = JSON.stringify(content);
        const props = this.props.app
        props.userStore.setItem(data)
        this.props.history.push('/home')
    };

    handleLoginWithProvider = providerId => {};

    handleRegister = content => {};

    handleRegisterWithProvider = providerId => {};
}

export default withRouter(Login)