import React, {Component, PropTypes} from 'react';

export default class LoginField extends Component {
    handleChange (event) {
        const { onValueChange, name } = this.props;
        onValueChange(name, event);
    }
    render() {
        const { name, value, type, placeholder, displayName } = this.props;

        return <div className="form-group">
            <label htmlFor={name}>{displayName}</label>
            <input type={type} name={name} className="form-control" placeholder={placeholder} value={value}
                   onChange={this.handleChange.bind(this)} />
        </div>
    }
}

LoginField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
};