'use strict';

import 'components/UI/Elements/Divider.scss';

import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/UI/Utils.js';

export default class Divider extends React.Component {

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
            'divider-relaxed': relaxed
        });

        return (
            <div className={containerClasses} style={style} />
        );
    }

}
Divider.propTypes = {
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(UIUtils.colorEnums()),
    compact: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    relaxed: React.PropTypes.bool,
    style: React.PropTypes.object
};
