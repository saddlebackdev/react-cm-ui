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

// eslint-disable-next-line prefer-arrow-callback
const Button = React.forwardRef(function Button(props, ref) {
    const {
        children,
        version,
        ...otherProps
    } = props;

    if (version === 2) {
        return (
            <ButtonV2
                ref={ref}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {children}
            </ButtonV2>
        );
    }

    return (
        <ButtonDeprecated
            ref={ref}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </ButtonDeprecated>
    );
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
