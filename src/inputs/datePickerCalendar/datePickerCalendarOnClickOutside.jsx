import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerCalendar from './datePickerCalendar';

const propTypes = {
    onClose: PropTypes.func.isRequired,
};

class DatePickerCalendarOnClickOutside extends React.PureComponent {
    handleClickOutside(event) {
        const { onClose } = this.props;

        onClose(event);
    }

    render() {
        return (
            <DatePickerCalendar
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...this.props}
            />
        );
    }
}

DatePickerCalendarOnClickOutside.propTypes = propTypes;

export default onClickOutside(DatePickerCalendarOnClickOutside);
