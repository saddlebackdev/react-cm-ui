import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.string,
    formattedNumber: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: null,
    formattedNumber: null,
    id: null,
    number: null,
    tabIndex: -1,
};

function TelephoneLink(props) {
    const {
        className,
        formattedNumber,
        id,
        number,
        tabIndex,
    } = props;

    if (!number) {
        return null;
    }

    return (
        <a
            className={className}
            id={id}
            href={`tel:${number}`}
            tabIndex={tabIndex}
        >
            {formattedNumber || number}
        </a>
    );
}

TelephoneLink.propTypes = propTypes;
TelephoneLink.defaultProps = defaultProps;

export default TelephoneLink;
