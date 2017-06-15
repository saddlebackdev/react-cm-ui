'use strict';

import 'components/UI/Views/SubNavigation.scss';

import ClassNames from 'classnames';
import React from 'react';

import SubNavigationItem from 'components/UI/Views/SubNavigationItem.react';

export default class SubNavigation extends React.Component {

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
        const { className, drawer, style } = this.props;
        const containerClasses = ClassNames('ui', 'sub-navigation', className, {
            'sub-navigation-drawer': drawer
        });
        let buttons = _.map(this.props.children, (child, index) => {
            const { label, onClick, style } = child.props;
            let isActive = ClassNames({ 'is-active': this.state.selected === index });

            return (
                <button
                    className={isActive}
                    onClick={this._onItemClick.bind(this, index, label, onClick)}
                    key={'sub-navigation-buttons-' + index}
                    style={style}
                >
                    <span className="sub-navigation-button-inner">
                        <span className="copy">{label}</span>
                        <span className="button-is-active-indicator"/>
                    </span>
                </button>
            );
        });

        return (
            <div className={containerClasses} style={style}>
                <div className="sub-navigation-scroll-indicator" />

                <div className="sub-navigation-scroll">
                    <div className="sub-navigation-item-container">
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }

    _onItemClick(index, label, onChildClick, event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(index, label);
        } else {
            if (!_.isUndefined(onChildClick)) {
                onChildClick(index, label);
            }

            this.setState({ selected: index });
        }

        event.preventDefault();
    }

}

SubNavigation.Item = SubNavigationItem;

SubNavigation.propTypes = {
    className: React.PropTypes.string,
    drawer: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.number,
    style: React.PropTypes.object
};
