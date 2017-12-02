'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
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
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    checkboxFactory: PropTypes.func,
    collapseIcon: PropTypes.string,
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    expandIcon: PropTypes.string,
    id: PropTypes.string,
    labelFactory: PropTypes.func,
    labelFilter: PropTypes.func,
    onTreeMenuAction: PropTypes.func,
    sort: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.function
    ]),
    stateful: PropTypes.bool,
    style: PropTypes.object
};

export default TreeMenu;
