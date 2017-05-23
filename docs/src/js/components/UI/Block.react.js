'use strict';

import 'components/UI/Block.scss';

import ClassNames from 'classnames';
import React from 'react';

export default class Block extends React.Component {

    render() {
        const containerClasses = ClassNames('ui', 'block', this.props.className, {
            'block-inverse': this.props.inverse,
            'block-nest': this.props.nest
        });

        return (
            <div className={containerClasses} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

}

Block.propTypes = {
    className: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    nest: React.PropTypes.bool,
    style: React.PropTypes.object
};
