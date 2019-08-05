import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class DrawerContent extends React.PureComponent {
    render() {
        const { children, className, style } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--content', className);

        return (
            <div
                className={containerClasses}
                style={style}
            >
                {children}
            </div>
        );
    }
}

DrawerContent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

export default DrawerContent;
