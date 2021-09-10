import PropTypes from 'prop-types';
import React from 'react';
import Button from './button';
import ButtonDeprecated from './buttonDeprecated';

const propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Dependant on the designVersion number, the component can either use our old Button component
     * or the new Button component.
     */
    designVersion: PropTypes.number,
};

const defaultProps = {
    designVersion: 1,
};

// eslint-disable-next-line prefer-arrow-callback
const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
    const {
        children,
        designVersion,
        ...otherProps
    } = props;

    if (designVersion === 2) {
        return (
            <Button
                ref={ref}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {children}
            </Button>
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

ButtonBase.propTypes = propTypes;
ButtonBase.defaultProps = defaultProps;

export default ButtonBase;
