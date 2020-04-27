import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Utils from '../utils/utils.js';

const propTypes = {
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

function DropdownItem(props) {
    const { className, style } = props;
    const containerClasses = ClassNames('ui', 'dropdown', className);

    return (
        <div className={containerClasses} style={style}>
            asdf
        </div>
    );
}

DropdownItem.propTypes = propTypes;

export default DropdownItem;
