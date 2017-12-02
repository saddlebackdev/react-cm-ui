'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {

    render() {
        const containerClasses = ClassNames('ui', 'card', this.props.className, {
            'card-active': this.props.active,
            'card-clickable': this.props.onClick,
            'card-compact': this.props.compact,
            'card-nest': this.props.nest
        });

        return (
            <section className={containerClasses} onClick={this._onClick.bind(this)} style={this.props.style}>
                {this.props.children}
            </section>
        );
    }

    _onClick() {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

};

Card.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    compact: PropTypes.bool,
    nest: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
};

export default Card;
