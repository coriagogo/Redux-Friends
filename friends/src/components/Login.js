import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';


class Login extends React.Component {
    state = {
        credentials : {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/protected'));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                            'Log In'                        
                        )}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(Login);