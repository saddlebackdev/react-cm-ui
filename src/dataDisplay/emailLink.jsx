import PropTypes from 'prop-types';
import React from 'react';

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

    return (
        <a
            className={className}
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
