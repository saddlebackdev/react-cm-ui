'use strict';

import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/UI/Utils.js';

export default class DropdownItem extends React.Component {

    render() {
        const { className, style } = this.props;
        const containerClasses = ClassNames('ui', 'dropdown', className);

        return (
            <div className={containerClasses} style={style}>
                asdf
            </div>
        );
    }

}

DropdownItem.propTypes = {
    className: React.PropTypes.string,
    iconColor: React.PropTypes.oneOf(UIUtils.colorEnums()),
    iconInverse: React.PropTypes.bool,
    iconType: React.PropTypes.string,
    id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    label: React.PropTypes.string,
    style: React.PropTypes.object
};
