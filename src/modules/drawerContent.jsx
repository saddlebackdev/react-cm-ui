import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    style: {},
};

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

DrawerContent.propTypes = propTypes;
DrawerContent.defaultProps = defaultProps;

export default DrawerContent;
