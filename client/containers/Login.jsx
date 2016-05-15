import React, {Component, PropTypes} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import reactMixin from 'react-mixin';
import { Accounts } from 'meteor/accounts-base'
import {connect} from 'react-redux';
import LoginField from '../components/LoginField';
import {
userLogin,
userLoginFailed,
userLoginSucceeded,
userLoginInProgress,
userLogout,
userLogoutSuccess,
userLogoutFailure
} from '../actions/login'

class Login extends Component {
    getMeteorData() {
        return {
            hasUser: !!Meteor.user(),
            user: Meteor.user()
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errorReason) {
            //alert('Error! ' + JSON.stringify(nextProps.errorReason, null, 2));
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {dispatch, email, password} = this.props;
        dispatch(userLogin(email, password));
    }
    handleChange(field, event) {
        this.props.dispatch(userLoginInProgress(field, event.target.value));
    }
    logout() {
        this.props.dispatch(userLogout());
    }
    render() {
        const {email, password, errorReason} = this.props;
        const user = this.data.user;
        return <div>
            { !user ?
                <div>
                    <h1>Login</h1>
                    <form id="login" className="login" onSubmit={this.handleSubmit.bind(this)}>
                        <LoginField name="email" value={ email } onValueChange={ this.handleChange.bind(this) } type="email" placeholder="Email Address" displayName="Email Address" />
                        <LoginField name="password" value={ password } onValueChange={ this.handleChange.bind(this) } type="password" placeholder="Password" displayName="Password" />
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Login" />
                        </div>
                        { errorReason ? <span>{errorReason}</span> : '' }
                    </form>
                </div>
                : <div>
                    <span>Welcome { user.profile.name.first }</span>
                    <button onClick={this.logout.bind(this)}>Log Out</button>
                  </div>
                }
        </div>
    }
}

reactMixin(Login.prototype, ReactMeteorData);

function mapStateToProps({login, errorReason}) {
    return {
        email: login.loginForm.email,
        password: login.loginForm.password,
        errorReason: login.errorReason
    }
}

export default connect(mapStateToProps)(Login);