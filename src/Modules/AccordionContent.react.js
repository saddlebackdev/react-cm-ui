'use strict';

import React, { Component } from 'react';

class AccordionContent extends Component {

    render() {
        return (
            <div className="accordion-item-content" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

AccordionContent.propTypes = {
    style: React.PropTypes.object
};

export default AccordionContent;
