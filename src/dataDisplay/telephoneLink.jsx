import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TELEPHONE_LINK_CLASSES } from '../global/constants';

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

    const rootClasses = ClassNames(
        TELEPHONE_LINK_CLASSES,
        className,
    );

    return (
        <a
            className={rootClasses}
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
