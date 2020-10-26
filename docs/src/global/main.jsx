import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
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

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        padding: `${theme.height.appHeader.md}px 22px 22px`,
        '& > h1:first-child': {
            marginTop: 0,
        },
        '& > :last-child': {
            marginBottom: 0,
        },
    },
}));

function Main(props) {
    const {
        children,
        className,
        page,
        style,
    } = props;

    const classes = useStyles();

    const rootClasses = ClassNames(
        'main',
        classes.root,
        className,
        {
            [`page-${page}`]: !!page,
        },
    );

    return (
        <main
            className={rootClasses}
            style={style}
        >
            {children}
        </main>
    );
}

Main.Content = MainContent;

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
