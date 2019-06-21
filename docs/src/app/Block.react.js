'use strict';

import './Block.scss';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
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
    className: PropTypes.string,
    inverse: PropTypes.bool,
    nest: PropTypes.bool,
    style: PropTypes.object
};
