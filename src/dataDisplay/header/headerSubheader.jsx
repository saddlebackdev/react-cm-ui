import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    id: undefined,
    style: {},
};

function HeaderSubheader(props) {
    const {
        children,
        className,
        id,
        style,
    } = props;
    const containerClassName = ClassNames('ui', 'subheader', className);

    return (
        <div
            className={containerClassName}
            id={id}
            style={style}
        >
            {children}
        </div>
    );
}

HeaderSubheader.propTypes = propTypes;
HeaderSubheader.defaultProps = defaultProps;

export default HeaderSubheader;
