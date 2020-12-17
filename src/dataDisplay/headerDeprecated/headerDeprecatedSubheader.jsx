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

function HeaderDeprecatedSubheader(props) {
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

HeaderDeprecatedSubheader.propTypes = propTypes;
HeaderDeprecatedSubheader.defaultProps = defaultProps;

export default HeaderDeprecatedSubheader;
