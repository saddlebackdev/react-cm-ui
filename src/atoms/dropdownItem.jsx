import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../global/utils';

function DropdownItem(props) {
    const { className, style } = props;
    const containerClasses = ClassNames('ui', 'dropdown', className);

    return (
        <div className={containerClasses} style={style}>
            asdf
        </div>
    );
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
