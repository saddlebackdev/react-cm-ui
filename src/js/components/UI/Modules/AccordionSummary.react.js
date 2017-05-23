'use strict';

import React from 'react';

export default class AccordionSummary extends React.Component {

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
