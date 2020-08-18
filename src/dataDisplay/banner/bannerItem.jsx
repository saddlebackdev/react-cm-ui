import PropTypes from 'prop-types';
import React from 'react';

class BannerItem extends React.Component {
    render() {
        return (
            <div className="accordion-item">
                {this.props.children}
            </div>
        );
    }
}

BannerItem.propTypes = {
    className: PropTypes.string,
    level: PropTypes.oneOf([ 'error', 'secondary', 'success', 'warning' ]),
    levelIcon: PropTypes.string,
    message: PropTypes.string,
    style: PropTypes.shape({}),
    title: PropTypes.string
};

export default BannerItem;
