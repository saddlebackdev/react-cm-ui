'use strict';

import 'Collections//Views/Card.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';

export default class Card extends React.Component {

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
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    compact: React.PropTypes.bool,
    nest: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object
};
