import React, {PropTypes} from 'react';

export default ScheduleGrid = ({schedules}) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {schedules.map(function(schedule) {
                    return <tr key={schedule.$id}>
                        <td>{ schedule.name }</td>
                        <td>{ schedule.description }</td>
                        <td>{ schedule.location }</td>
                        <td>{schedule.scheduleTime }</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

ScheduleGrid.propTypes = {
    schedules: PropTypes.array.isRequired
};
