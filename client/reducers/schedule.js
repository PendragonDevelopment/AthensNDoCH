import * as actions from '../actions/schedule';

const initialState = {
    scheduleToAdd: {
        name: '',
        description: '',
        location: '',
        scheduleTime: ''
    },
    schedules: [],
    errorReason: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.ADD_SCHEDULE:
            return {
                ...state
            };
        case actions.ADD_SCHEDULE_SUCCEEDED:
            return {
                ...state,
                scheduleToAdd: {
                    name: '',
                    description: '',
                    location: '',
                    scheduleTime: ''
                },
                errorReason: null
            };
        case actions.ADD_SCHEDULE_FAILED:
            return {
                ...state,
                errorReason: action.errorReason
            };
        case actions.ADD_SCHEDULE_IN_PROGRESS:
            return {
                ...state,
                scheduleToAdd: {
                    ...state.scheduleToAdd,
                    [action.fieldName]: action.newValue
                },
                errorReason: null
            };
        case actions.EDIT_SCHEDULE:
            return {
                ...state
            };
        case actions.EDIT_SCHEDULE_SUCCEEDED:
            return {
                ...state,
                errorReason: null
            };
        case actions.EDIT_SCHEDULE_FAILED:
            return {
                ...state,
                errorReason: action.errorReason
            };
        case actions.EDIT_SCHEDULE_IN_PROGRESS:
            return {
                ...state,
                //TODO: Figure out the whole editing a single schedule in progress thing.
                loginForm: {
                    ...state.loginForm,
                    [action.fieldName]: action.newValue
                },
                errorReason: null
            };
        case actions.USER_LOGOUT:
            return {
                ...state,
                user: Meteor.user(),
                errorReason: null
            };
        case actions.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                user: Meteor.user(),
                errorReason: null
            };
        case actions.USER_LOGOUT_FAILURE:
            return {
                ...state,
                user: Meteor.user(),
                errorReason: action.errorReason
            };
        default:
            return state;
    }
}
