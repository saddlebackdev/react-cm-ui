import PropTypes from 'prop-types';
import React from 'react';

class SubNavigationItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

SubNavigationItem.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
};

export default SubNavigationItem;
