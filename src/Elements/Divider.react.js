'use strict';

import ClassNames from 'classnames';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class Divider extends Component {

    render() {
        const { className, color, compact, hidden, inverse, relaxed, style } = this.props;

        const containerClasses = ClassNames('ui', 'divider', className, {
            'divider-color-alternate': color === 'alternate',
            'divider-color-highlight': color === 'highlight',
            'divider-color-inverse': color === 'inverse',
            'divider-color-inverse-alternate': color === 'inverse-alternate',
            'divider-color-primary': !color || color === 'primary',
            'divider-compact': compact,
            'divider-hidden': hidden,
            'divider-inverse': inverse,
            'divider-relaxed': relaxed,
            'divider-relaxed-very': relaxed === 'very'
        });

        return (
            <div className={containerClasses} style={style} />
        );
    }

}
Divider.propTypes = {
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(Utils.colorEnums()),
    compact: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    relaxed: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf([ 'very' ])
    ]),
    style: React.PropTypes.object
};

export default Divider;
