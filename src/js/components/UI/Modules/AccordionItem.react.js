'use strict';

import React from 'react';

export default class AccordionItem extends React.Component {

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
    id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    onClick: React.PropTypes.func,
    selected: React.PropTypes.number,
    style: React.PropTypes.object
};
