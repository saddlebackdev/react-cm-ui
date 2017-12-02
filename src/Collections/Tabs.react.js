'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TabsItem from './TabsItem.react';

class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = { selected: props.selected || 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({ selected: nextProps.selected });
        }
    }

    render() {
        const { children } = this.props;
        const containerClasses = ClassNames('ui', 'tabs', this.props.className, {
            'tabs-nest': this.props.nest
        });
        const convertChildren = _.isArray(children) ? children : [ children ];
        let buttons = _.map(convertChildren, (child, index) => {
            let isActive = ClassNames({ 'is-active': this.state.selected === index });

            return (
                <button
                    className={isActive}
                    onClick={this._onTabClick.bind(this, index)}
                    key={'tabs-buttons-' + index}
                >
                    <span className="tab-button-inner">
                        {child.props.label ? <span className="copy">{child.props.label}</span> : null}
                    </span>
                </button>
            );
        });

        return (
            <div className={containerClasses} style={this.props.style}>
                <div className="ui tabs-buttons">
                    {buttons}
                </div>

                {this.props.children[this.state.selected]}
            </div>
        );
    }

    _onTabClick(index, event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(index);
        } else {
            this.setState({ selected: index });
        }

        event.preventDefault();
    }

};

Tabs.Item = TabsItem;

Tabs.propTypes = {
    className: PropTypes.string,
    nest: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.number,
    style: PropTypes.object
};

export default Tabs;
