'use strict';

import React, { Component } from 'react';

class AccordionItem extends Component {

    render() {
        return (
            <div className="accordion-item">
                {this.props.children}
            </div>
        );
    }
}

AccordionItem.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    subAccordion: React.PropTypes.bool
};

export default AccordionItem;
