import PropTypes from 'prop-types';
import React from 'react';
import ButtonV2 from './buttonV2';
import ButtonDeprecated from './buttonDeprecated';

const propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.number,
};

const defaultProps = {
    version: 1,
};

function Button(props) {
    const {
        children,
        version,
        ...otherProps
    } = props;

    if (version === 2) {
        return (
            <ButtonV2
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {children}
            </ButtonV2>
        );
    }

    return (
        <ButtonDeprecated
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </ButtonDeprecated>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
