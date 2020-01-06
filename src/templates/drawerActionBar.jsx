import PropTypes from 'prop-types';
import React from 'react';
import ActionBar from './actionBar'; // eslint-disable-line import/no-cycle

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    columns: undefined,
    id: undefined,
    style: {},
};

function DrawerActionBar(props) {
    const {
        children,
        className,
        columns,
        id,
        style,
    } = props;

    return (
        <div>
            <ActionBar
                className={className}
                columns={columns}
                id={id}
                style={style}
                moduleType="drawer"
            >
                {children}
            </ActionBar>
        </div>
    );
}

DrawerActionBar.propTypes = propTypes;
DrawerActionBar.defaultProps = defaultProps;

export default DrawerActionBar;
