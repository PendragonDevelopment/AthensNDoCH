import React, {Component, PropTypes} from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {_i18n as i18n} from 'meteor/universe:i18n';
import reactMixin from 'react-mixin';
import {connect} from 'react-redux';
import _ from 'lodash';
import ScheduleGrid from '../components/ScheduleGrid';
import ScheduleField from '../components/ScheduleField';
import {
    addSchedule,
    addScheduleInProgress,
    addScheduleSucceeded,
    addScheduleFailed,
    editSchedule,
    editScheduleInProgress,
    editScheduleSucceeded,
    editScheduleFailed
} from '../actions/schedule';

class ScheduleGridContainer extends Component {
    getMeteorData() {
        const handle = Meteor.subscribe('schedules');
        return {
            ready: handle.ready(),
            savedSchedules: Schedules.find({}, {sort: {scheduleTime: 1}}).fetch(),
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errorReason) {
            alert('Error! ' + JSON.stringify(nextProps.errorReason, null, 2));
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.scheduleToAdd.scheduleTime = new Date();
        this.props.dispatch(addSchedule(this.props.scheduleToAdd));
    }
    handleChange(type, field, event) {
        if(type === 'add') {
            this.props.dispatch(addScheduleInProgress(field, event.target.value));
        }
    }
    render() {
        const {schedules, scheduleToAdd} = this.props;
        return <div>
                <form id="scheduleForm" onSubmit={this.handleSubmit.bind(this)}>
                    <ScheduleField name="name" value={ scheduleToAdd.name } onValueChange={ this.handleChange.bind(this) } type="text" placeholder="Event Name" displayName="Event Name" />
                    <ScheduleField name="description" value={ scheduleToAdd.description } onValueChange={ this.handleChange.bind(this) } type="text" placeholder="Event Description" displayName="Event Description" />
                    <ScheduleField name="location" value={ scheduleToAdd.location } onValueChange={ this.handleChange.bind(this) } type="text" placeholder="Event Location" displayName="Event Location" />
                    <ScheduleField name="scheduleTime" value={ scheduleToAdd.scheduleTime } onValueChange={ this.handleChange.bind(this) } type="date" placeholder="Event Time" displayName="Event Time" />
                    <input type="submit" value="Add Event" />
                </form>
                <ScheduleGrid schedules={schedules}></ScheduleGrid>
            </div>
    }
}

reactMixin(ScheduleGridContainer.prototype, ReactMeteorData);

function mapStateToProps({schedule}) {
    return {
        scheduleToAdd: schedule.scheduleToAdd,
        schedules: schedule.schedules,
        errorReason: schedule.errorReason,
    }
}

export default connect(mapStateToProps)(ScheduleGridContainer);
