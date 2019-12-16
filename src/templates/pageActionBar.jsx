import PropTypes from 'prop-types';
import React from 'react';
import ActionBar from './actionBar';

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

function PageActionBar(props) {
    const {
        children,
        className,
        columns,
        id,
        style,
    } = props;

    return (
        <ActionBar
            className={className}
            columns={columns}
            id={id}
            moduleType="page"
            style={style}
        >
            {children}
        </ActionBar>
    );
}

PageActionBar.propTypes = propTypes;
PageActionBar.defaultProps = defaultProps;

export default PageActionBar;
