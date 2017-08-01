'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import React, { Component } from 'react';
import ReactTreeMenu from 'react-tree-menu';

import TreeMenuItem from './TreeMenuItem.react';

class TreeMenu extends Component {

    render() {
        const { checkboxFactory, className, collapsible, collapseIcon, expandIcon, id, stateful } = this.props;
        const containerClasses = ClassNames('ui', 'tree-menu', className);

        return (
            <ReactTreeMenu
                checkboxFactory={checkboxFactory || this._checkboxRenderer.bind(this)}
                classNamePrefix={containerClasses}
                collapsible={collapsible || true}
                collapseIconClass={`ui icon i-${collapseIcon || 'chevron-wl-down'} icon-size-xxsmall`}
                expandIconClass={`ui icon i-${expandIcon || 'chevron-wl-right'} icon-size-xxsmall`}
                id={id}
                onTreeNodeClick={this._onTreeMenuAction.bind(this, 'clicked')}
                onTreeNodeCollapseChange={this._onTreeMenuAction.bind(this, 'collapsed')}
                onTreeNodeCheckChange={this._onTreeMenuAction.bind(this, 'checked')}
                stateful={stateful || true}
            >
                {this.props.children}
            </ReactTreeMenu>
        );
    }

    _checkboxRenderer(className, isChecked) {
        return (
            <div className="ui checkbox">
                <input checked={isChecked} className="input" onChange={_.noop} readOnly type="checkbox" />
                <label className="label"></label>
            </div>
        );
    }

    _onTreeMenuAction(action, col) {
        if (!_.isUndefined(this.props.onTreeMenuAction)) {
            this.props.onTreeMenuAction();
        } else {
            const toggleEvents = [ 'collapsed', 'checked', 'selected' ];
            const key = `lastAction${col}`;
            let mutation = {};
            mutation[key] = { event: action };

            this.setState(mutation);
        }
    }
}

TreeMenu.Item = TreeMenuItem;

TreeMenu.propTypes = {
    className: React.PropTypes.string,
    collapsible: React.PropTypes.bool,
    checkboxFactory: React.PropTypes.func,
    collapseIcon: React.PropTypes.string,
    data: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    expandIcon: React.PropTypes.string,
    id: React.PropTypes.string,
    labelFactory: React.PropTypes.func,
    labelFilter: React.PropTypes.func,
    onTreeMenuAction: React.PropTypes.func,
    sort: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.function
    ]),
    stateful: React.PropTypes.bool,
    style: React.PropTypes.object
};

export default TreeMenu;
