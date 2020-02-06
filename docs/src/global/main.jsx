import './main.scss';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import MainContent from './mainContent';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    page: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    page: undefined,
    style: undefined,
};

function Main(props) {
    const {
        children,
        className,
        page,
        style,
    } = props;
    const containerClasses = ClassNames('main', className, {
        [`page-${page}`]: !!page,
    });

    return (
        <main className={containerClasses} style={style}>
            {children}
        </main>
    );
}

Main.Content = MainContent;

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
