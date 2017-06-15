'use strict';

import React from 'react';

export default class AccordionCheckbox extends React.Component {

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
