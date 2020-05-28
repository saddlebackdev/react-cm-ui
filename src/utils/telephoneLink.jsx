import PropTypes from 'prop-types';
import React from 'react';
import A from '../atoms/a';

const propTypes = {
    className: PropTypes.string,
    formattedNumber: PropTypes.string,
    number: PropTypes.string,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: undefined,
    number: undefined,
    formattedNumber: undefined,
    tabIndex: -1,
};

function TelephoneLink(props) {
    const {
        className,
        formattedNumber,
        number,
        tabIndex,
    } = props;

    if (!number) {
        return null;
    }

    const onClick = (event) => {
        event.stopPropagation();

        window.location.href = `tel:${number}`;
    };

    return (
        <A
            className={className}
            onClick={onClick}
            tabIndex={tabIndex}
        >
            {formattedNumber || number}
        </A>
    );
}

TelephoneLink.propTypes = propTypes;
TelephoneLink.defaultProps = defaultProps;

export default TelephoneLink;
