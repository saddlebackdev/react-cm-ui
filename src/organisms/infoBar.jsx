import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../global/utils';

function InfoBar(props) {
    const {
        as,
        children,
        className,
        color,
        style,
    } = props;
    const containerClasses = ClassNames('ui', 'info-bar', className, {
        'info-bar-color-one': color === 1,
        'info-bar-color-two': color === 2,
        'info-bar-color-three': color === 3,
        'info-bar-color-four': color === 4,
        'info-bar-color-five': color === 5,
        'info-bar-color-six': color === 6,
        'info-bar-color-seven': color === 7,
        'info-bar-color-eight': color === 8,
        'info-bar-color-nine': color === 9,
        'info-bar-color-ten': color === 10,
        'info-bar-color-eleven': color === 11,
    });
    const ElementType = Utils.getElementType(as, props);

    return (
        <ElementType
            className={containerClasses}
            style={style}
        >
            {children}
        </ElementType>
    );
}

const asEnums = ['div', 'section'];
const colorEnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

InfoBar.propTypes = {
    as: PropTypes.oneOf(asEnums),
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(colorEnums),
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

InfoBar.defaultProps = {
    as: 'div',
    children: undefined,
    className: undefined,
    color: undefined,
    style: {},
};

export default InfoBar;
