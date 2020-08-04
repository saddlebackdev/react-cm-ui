import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { EMAIL_LINK_CLASSES } from '../../global/constants';

const propTypes = {
    className: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: null,
    email: null,
    id: null,
    tabIndex: -1,
};

function EmailLink(props) {
    const {
        className,
        email,
        id,
        tabIndex,
    } = props;

    if (!email) {
        return null;
    }

    const rootClasses = ClassNames(
        EMAIL_LINK_CLASSES,
        className,
    );

    return (
        <a
            className={rootClasses}
            id={id}
            href={`mailto:${email}`}
            tabIndex={tabIndex}
        >
            {email}
        </a>
    );
}

EmailLink.propTypes = propTypes;
EmailLink.defaultProps = defaultProps;

export default EmailLink;
