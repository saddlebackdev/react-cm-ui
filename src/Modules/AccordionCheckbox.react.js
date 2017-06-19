'use strict';

import React, { Component } from 'react';

class AccordionCheckbox extends Component {

    render() {
        return (
            <div
                className="accordion-checkbox"
                style={{
                    flex: '0 1 auto',
                    minWidth: '44px'
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

AccordionCheckbox.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};

export default AccordionCheckbox;
