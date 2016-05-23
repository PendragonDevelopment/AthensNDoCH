import React, {Component, PropTypes} from 'react';
//import ReactDOM from 'react-dom';
//import Datetime from '../../node_modules/react-datetime/dist/react-datetime.min';

export default class ScheduleField extends Component {
    handleChange (event) {
        const { onValueChange, name } = this.props;
        onValueChange('add', name, event);
    }
    render() {
        const { name, value, type, placeholder, displayName } = this.props;

        return <div className="form-group">
            <label htmlFor={name}>{displayName}</label>
            { type === 'date' ? <Datetime />
                : <input type={type} name={name} className="form-control" placeholder={placeholder} value={value}
                onChange={this.handleChange.bind(this)} /> }
        </div>
    }
}

ScheduleField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
};