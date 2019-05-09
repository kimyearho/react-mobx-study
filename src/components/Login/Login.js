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
        if(login) {
            this.setState({
                isLogin: this.props.app.userStore.getItem()
            })
            this.props.history.push('/home');
        }
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
        // 로그인 후 로그인 성공 이벤트를 LEFT 메뉴에 전달해야함.
        props.eventStore.emit('successLogin', true)
    };

    handleLoginWithProvider = providerId => {};

    handleRegister = content => {};

    handleRegisterWithProvider = providerId => {};
}

export default withRouter(Login)