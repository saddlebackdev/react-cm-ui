import ClassNames from 'classnames';
import React from 'react';
import { DIVIDER_DEPRECATED_PROP_TYPES } from './constants';

const propTypes = {
    ...DIVIDER_DEPRECATED_PROP_TYPES,
};

function Divider(props) {
    const {
        className,
        color,
        compact,
        hidden,
        inverse,
        relaxed,
        style,
    } = props;

    const containerClasses = ClassNames(
        'ui',
        'divider',
        className,
        {
            'divider-color-alternate': color === 'alternate',
            'divider-color-highlight': color === 'highlight',
            'divider-color-inverse': color === 'inverse',
            'divider-color-inverse-alternate': color === 'inverse-alternate',
            'divider-color-light': color === 'light',
            'divider-color-primary': !color || color === 'primary',
            'divider-compact': compact,
            'divider-hidden': hidden,
            'divider-inverse': inverse,
            'divider-relaxed': relaxed,
            'divider-relaxed-very': relaxed === 'very',
        },
    );

    return (
        <div className={containerClasses} style={style} />
    );
}

Divider.propTypes = propTypes;

export default Divider;
