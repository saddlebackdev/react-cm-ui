import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function DrawerDataGroups(props) {
    const { children, className, style } = props;
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

DrawerDataGroups.defaultProps = {
    className: '',
    style: {},
};

DrawerDataGroups.propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

export default DrawerDataGroups;
