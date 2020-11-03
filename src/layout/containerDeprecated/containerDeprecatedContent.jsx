import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    children: null,
    className: null,
    maxWidth: null,
    style: null,
};

function ContainerDeprecatedContent(props) {
    const {
        as,
        children,
        className,
        maxWidth,
        style,
    } = props;

    const rootClasses = ClassNames('container-content', className, {
        'container-content-max-width-laptop': maxWidth === 'laptop',
    });

    const ElementType = Utils.getElementType(as || 'section', props);

    const rootStyle = _.merge(style, {
        maxWidth: _.isNumber(maxWidth) ? maxWidth : null,
    });

    return (
        <ElementType
            className={rootClasses}
            style={rootStyle}
        >
            {children}
        </ElementType>
    );
}

ContainerDeprecatedContent.propTypes = propTypes;
ContainerDeprecatedContent.defaultProps = defaultProps;

export default ContainerDeprecatedContent;
