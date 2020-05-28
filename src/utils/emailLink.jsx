import PropTypes from 'prop-types';
import React from 'react';
import A from '../atoms/a';

const propTypes = {
    className: PropTypes.string,
    email: PropTypes.string,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: undefined,
    email: undefined,
    tabIndex: -1,
};

function EmailLink(props) {
    const {
        className,
        email,
        tabIndex,
    } = props;

    if (!email) {
        return null;
    }

    const onClick = (event) => {
        event.stopPropagation();

        window.location.href = `mailto:${email}`;
    };

    return (
        <A
            className={className}
            onClick={onClick}
            tabIndex={tabIndex}
        >
            {email}
        </A>
    );
}

EmailLink.propTypes = propTypes;
EmailLink.defaultProps = defaultProps;

export default EmailLink;
