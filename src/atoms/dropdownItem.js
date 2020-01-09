'use strict';

import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Utils from '../global/utils/utils.js';

class DropdownItem extends Component {
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
    className: PropTypes.string,
    iconColor: PropTypes.oneOf(Utils.colorEnums()),
    iconInverse: PropTypes.bool,
    iconType: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    label: PropTypes.string,
    style: PropTypes.object,
};

export default DropdownItem;
