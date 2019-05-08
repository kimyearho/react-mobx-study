import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import LoginRegister from 'react-mui-login-register';
import classNames from 'classnames'

@inject('app')
@observer
class Login extends Component {
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

    handleLogin = content => {
        alert(`Logging in with content '${JSON.stringify(content)}'`);
    };

    handleLoginWithProvider = providerId => {
        alert(`Logging in with provider '${providerId}'`);
    };

    handleRegister = content => {
        alert(`Registering with content '${JSON.stringify(content)}'`);
    };

    handleRegisterWithProvider = providerId => {
        alert(`Registering with provider '${providerId}'`);
    };
}

export default Login