import PropTypes from 'prop-types';
import React from 'react';

class TabsItem extends React.Component {
    render() {
        return (
            <div className="ui tabs-content" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

TabsItem.propTypes = {
    label: PropTypes.string,
    style: PropTypes.shape({}),
};

export default TabsItem;
