import PropTypes from 'prop-types';
import React from 'react';

class BannerItem extends React.PureComponent {
    render() {
        const {
            children,
        } = this.props;

        return (
            <div className="accordion-item">
                {children}
            </div>
        );
    }
}

BannerItem.propTypes = {
    children: PropTypes.node,
};

BannerItem.defaultProps = {
    children: undefined,
};

export default BannerItem;
