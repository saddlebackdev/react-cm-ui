import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ContainerDeprecatedActionBar from './containerDeprecatedActionBar';
import ContainerDeprecatedContent from './containerDeprecatedContent';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    children: null,
    className: null,
    color: null,
    style: null,
};

function ContainerDeprecated(props) {
    const {
        as,
        children,
        className,
        color,
        style,
    } = props;

    const rootClasses = ClassNames('ui', 'container', className, {
        'container-color-inverse': color === 'inverse',
        'container-color-light': color === 'light',
        'container-color-nest': color === 'nest',
        'container-color-transparent': color === 'transparent',
    });

    const ElementType = Utils.getElementType(as || 'main', props);

    return (
        <ElementType
            className={rootClasses}
            style={style}
        >
            {children}
        </ElementType>
    );
}

ContainerDeprecated.ActionBar = ContainerDeprecatedActionBar;
ContainerDeprecated.Content = ContainerDeprecatedContent;

ContainerDeprecated.propTypes = propTypes;
ContainerDeprecated.defaultProps = defaultProps;

export default ContainerDeprecated;
