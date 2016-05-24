import { FlowRouter } from 'meteor/kadira:flow-router';

export const USER_LOGIN = 'USER_LOGIN';
export function userLogin(email, password) {
    return (dispatch, getState) => {
        // Call our Meteor method
        Meteor.loginWithPassword( email, password, ( error ) => {
            if ( error ) {
                dispatch(userLoginFailed(error.reason));
            } else {
                dispatch(userLoginSucceeded());
                FlowRouter.go('/');
            }
        });
    }
}

export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export function userLoginSucceeded() {
    return {
        type: USER_LOGIN_SUCCEEDED
    }
}

export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export function userLoginFailed(errorReason) {
    return {
        type: USER_LOGIN_FAILED,
        errorReason
    }
}

export const USER_LOGIN_IN_PROGRESS = "USER_LOGIN_IN_PROGRESS";
export function userLoginInProgress(fieldName, newValue) {
    return {
        type: USER_LOGIN_IN_PROGRESS,
        fieldName,
        newValue
    }
}

export const USER_LOGOUT = "USER_LOGOUT";
export function userLogout() {
    return (dispatch, getState) => {
        Meteor.logout(error => {
            if(error) {
                dispatch(userLogoutFailure(error.reason))
            } else {
                dispatch(userLogoutSuccess());
            }
        });
    }
}

export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export function userLogoutSuccess() {
    return {
        type: USER_LOGOUT_SUCCESS
    }
}

export const USER_LOGOUT_FAILURE = "USER_LOGOUT_FAILURE";
export function userLogoutFailure(errorReason) {
    return {
        type: USER_LOGOUT_FAILURE,
        errorReason
    }
}