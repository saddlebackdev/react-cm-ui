'use strict';

import React, { Component } from 'react';

class TreeMenuItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { className, collapsible, collapseIcon, expandIcon, id } = this.props;
        const containerClasses = ClassNames('tree-menu-item', className);

        return (
            <div className={containerClasses}></div>
        );
    }
}

TreeMenuItem.propTypes = {
    checkboxFactory: React.PropTypes.func,
    checkbox: React.PropTypes.bool,
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    collapsed : React.PropTypes.bool,
    collapsible : React.PropTypes.bool,
    collapseIconClass: React.PropTypes.string,
    expandIconClass: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    labelFactory: React.PropTypes.func,
    labelFilter: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onCheckChange: React.PropTypes.func,
    onCollapseChange: React.PropTypes.func,
    onSelectChange: React.PropTypes.func,
    stateful: React.PropTypes.bool
};

export default TreeMenuItem;
