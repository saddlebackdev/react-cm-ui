import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    stretch: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    children: null,
    className: null,
    color: null,
    stretch: null,
    style: null,
};

function ContainerDeprecatedActionBar(props) {
    const {
        as,
        children,
        className,
        color,
        stretch,
        style,
    } = props;

    const rootClasses = ClassNames('container-action-bar', className, {
        'container-action-bar-color-inverse': color === 'inverse',
        'container-action-bar-color-light': color === 'light',
        'container-action-bar-color-nest': color === 'nest',
        'container-action-bar-color-transparent': color === 'transparent',
        'container-stretch': stretch,
    });

    const ElementType = Utils.getElementType(as || 'header', props);

    return (
        <ElementType
            className={rootClasses}
            style={style}
        >
            <div style={{ width: '100%' }}>
                {children}
            </div>
        </ElementType>
    );
}

ContainerDeprecatedActionBar.propTypes = propTypes;
ContainerDeprecatedActionBar.defaultProps = defaultProps;

export default ContainerDeprecatedActionBar;
