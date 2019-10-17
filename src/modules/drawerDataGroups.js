import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class DrawerDataGroups extends React.PureComponent {
    render() {
        const { children, className, style } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--data_groups', className);

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

DrawerDataGroups.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

export default DrawerDataGroups;
