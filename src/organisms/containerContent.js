
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/utils.js';

class ContainerContent extends Component {
    render() {
        const {
            as, className, maxWidth, style,
        } = this.props;
        const containerClasses = ClassNames('container-content', className, {
            'container-content-max-width-laptop': maxWidth === 'laptop',
        });
        const ElementType = Utils.getElementType(as || 'section', this.props);
        const containerStyle = _.merge(style, {
            maxWidth: _.isNumber(maxWidth) ? maxWidth : null,
        });

        return (
            <ElementType className={containerClasses} style={containerStyle}>
                {this.props.children}
            </ElementType>
        );
    }
}

const asEnums = ['div', 'section'];

ContainerContent.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    style: PropTypes.shape({}),
};

export default ContainerContent;
