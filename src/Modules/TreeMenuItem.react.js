'use strict';

import PropTypes from 'prop-types';
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
    checkboxFactory: PropTypes.func,
    checkbox: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    collapsed : PropTypes.bool,
    collapsible : PropTypes.bool,
    collapseIconClass: PropTypes.string,
    expandIconClass: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    labelFactory: PropTypes.func,
    labelFilter: PropTypes.func,
    onClick: PropTypes.func,
    onCheckChange: PropTypes.func,
    onCollapseChange: PropTypes.func,
    onSelectChange: PropTypes.func,
    stateful: PropTypes.bool
};

export default TreeMenuItem;
