import { FlowRouter } from 'meteor/kadira:flow-router';
import { saveSchedule } from '../../lib/methods';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export function addSchedule(schedule) {
    return (dispatch, getState) => {
        // Call our Meteor method
        saveSchedule.call( schedule, ( error ) => {
            if ( error ) {
                dispatch(addScheduleFailed(error.reason));
            } else {
                dispatch(addScheduleSucceeded());
                FlowRouter.go('/');
            }
        });
    }
}

export const ADD_SCHEDULE_SUCCEEDED = 'ADD_SCHEDULE_SUCCEEDED';
export function addScheduleSucceeded() {
    return {
        type: ADD_SCHEDULE_SUCCEEDED
    }
}

export const ADD_SCHEDULE_FAILED = 'ADD_SCHEDULE_FAILED';
export function addScheduleFailed(errorReason) {
    return {
        type: ADD_SCHEDULE_FAILED,
        errorReason
    }
}

export const ADD_SCHEDULE_IN_PROGRESS = "ADD_SCHEDULE_IN_PROGRESS";
export function addScheduleInProgress(fieldName, newValue) {
    return {
        type: ADD_SCHEDULE_IN_PROGRESS,
        fieldName,
        newValue
    }
}

export const EDIT_SCHEDULE = 'EDIT_SCHEDULE';
export function editSchedule(schedule) {
    return (dispatch, getState) => {
        // Call our Meteor method
        saveSchedule.call( schedule, ( error ) => {
            if ( error ) {
                dispatch(editScheduleFailed(error.reason));
            } else {
                dispatch(editScheduleSucceeded());
                FlowRouter.go('/');
            }
        });
    }
}

export const EDIT_SCHEDULE_SUCCEEDED = 'EDIT_SCHEDULE_SUCCEEDED';
export function editScheduleSucceeded() {
    return {
        type: EDIT_SCHEDULE_SUCCEEDED
    }
}

export const EDIT_SCHEDULE_FAILED = 'EDIT_SCHEDULE_FAILED';
export function editScheduleFailed(errorReason) {
    return {
        type: EDIT_SCHEDULE_FAILED,
        errorReason
    }
}

export const EDIT_SCHEDULE_IN_PROGRESS = "EDIT_SCHEDULE_IN_PROGRESS";
export function editScheduleInProgress(fieldName, newValue) {
    return {
        type: EDIT_SCHEDULE_IN_PROGRESS,
        fieldName,
        newValue
    }
}

export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';
export function deleteSchedule(email, password) {
    return (dispatch, getState) => {
        // Call our Meteor method
        Meteor.loginWithPassword( email, password, ( error ) => {
            if ( error ) {
                dispatch(deleteScheduleFailed(error.reason));
            } else {
                dispatch(deleteScheduleSucceeded());
                FlowRouter.go('/');
            }
        });
    }
}

export const DELETE_SCHEDULE_SUCCEEDED = 'DELETE_SCHEDULE_SUCCEEDED';
export function deleteScheduleSucceeded() {
    return {
        type: DELETE_SCHEDULE_SUCCEEDED
    }
}

export const DELETE_SCHEDULE_FAILED = 'DELETE_SCHEDULE_FAILED';
export function deleteScheduleFailed(errorReason) {
    return {
        type: DELETE_SCHEDULE_FAILED,
        errorReason
    }
}