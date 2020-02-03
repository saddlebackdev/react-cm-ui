import './mainContent.scss';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    style: undefined,
};

function Main(props) {
    const {
        children,
        className,
        style,
    } = props;
    const containerClasses = ClassNames('main--content', className);

    return (
        <div className={containerClasses} style={style}>
            {children}
        </div>
    );
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
