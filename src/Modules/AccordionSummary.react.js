'use strict';

import React, { Component } from 'react';

class AccordionSummary extends Component {

    render() {
        return (
            <div className="accordion-item-summary" onClick={this._onClick.bind(this)}>
                {this.props.children}
            </div>
        );
    }

    _onClick() {
        this.props.onClick();
    }
}

AccordionSummary.propTypes = {
    onClick: React.PropTypes.func
};

export default AccordionSummary;
