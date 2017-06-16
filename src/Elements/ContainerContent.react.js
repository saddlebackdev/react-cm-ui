'use strict';

import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/Utils.js';

export default class ContainerContent extends React.Component {

    render() {
        const { as, className, maxWidth, style } = this.props;
        const containerClasses = ClassNames('container-content', className, {
            'container-content-max-width-laptop': maxWidth === 'laptop'
        });
        const ElementType = UIUtils.getElementType(as || 'section', this.props);
        const containerStyle = _.merge(style, {
            maxWidth: _.isNumber(maxWidth) ? maxWidth : null
        });

        return (
            <ElementType className={containerClasses} style={containerStyle}>
                {this.props.children}
            </ElementType>
        );
    }

}

const asEnums = [ 'div', 'section' ];

ContainerContent.propTypes = {
    as: React.PropTypes.oneOf(asEnums),
    className: React.PropTypes.string,
    maxWidth: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    style: React.PropTypes.object
};
