import MUIDivider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React from 'react';
import {
    DIVIDER_DEPRECATED_PROP_TYPES,
} from './constants';
import DividerDeprecated from './dividerDeprecated';

const propTypes = {
    /**
     * Absolutely position the element.
     */
    absolute: PropTypes.bool,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.shape({}),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, a vertical divider will have the correct height when used in flex container.
     * (By default, a vertical divider will have a calculated height of `0px` if it is the child of
     * a flex container.)
     */
    flexItem: PropTypes.bool,
    /**
     * If `true`, the divider will have a lighter color.
     */
    light: PropTypes.bool,
    /**
     * The divider orientation.
     */
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
    version: PropTypes.number,
    ...DIVIDER_DEPRECATED_PROP_TYPES,
};

const defaultProps = {
    absolute: false,
    classes: null,
    component: 'hr',
    flexItem: false,
    light: false,
    orientation: 'horizontal',
    variant: 'fullWidth',
    version: 1,
};

function Divider(props) {
    const {
        children,
        version,
        ...otherProps
    } = props;

    if (version === 2) {
        return (
            <MUIDivider
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            />
        );
    }

    return (
        <DividerDeprecated
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </DividerDeprecated>
    );
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
