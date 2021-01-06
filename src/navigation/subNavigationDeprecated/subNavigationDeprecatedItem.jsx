import PropTypes from 'prop-types';
import React from 'react';

class SubNavigationDeprecatedItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

SubNavigationDeprecatedItem.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
};

export default SubNavigationDeprecatedItem;
