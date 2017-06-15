'use strict';

import React from 'react';

export default class AccordionContent extends React.Component {

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
