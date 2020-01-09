
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class BannerItem extends Component {
    render() {
        return (
            <div className="accordion-item">
                {this.props.children}
            </div>
        );
    }
}

const levelEnums = ['error', 'secondary', 'success', 'warning'];

BannerItem.propTypes = {
    className: PropTypes.string,
    level: PropTypes.oneOf(levelEnums),
    levelIcon: PropTypes.string,
    message: PropTypes.string,
    style: PropTypes.shape({}),
    title: PropTypes.string,
};

export default BannerItem;
