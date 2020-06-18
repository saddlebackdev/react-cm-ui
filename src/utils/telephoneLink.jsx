import PropTypes from 'prop-types';
import React from 'react';
import A from '../atoms/a';

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

    const onClick = (event) => {
        event.stopPropagation();

        window.location.href = `tel:${number}`;
    };

    return (
        <A
            className={className}
            id={id}
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
