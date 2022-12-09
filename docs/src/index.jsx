/* eslint-disable import/order */
/* eslint-disable import/first */
import '@babel/register';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'css-cm-ui';

import { browserHistory, Router } from 'react-router';
import {
    theme,
    // ThemeProvider,
} from '@saddlebackchurch/react-cm-ui/styles';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { appReduxStore } from './global/configureReduxStore';
import routes from './routes';

// import { ThemeProvider } from '@material-ui/core/styles';
/**
 * `theme` is being pushed into the global window object for documentation purposes. This gives
 * developers, designers, and business some documentation in UI without needing to look through
 * source code.
 */
window.theme = theme;

const onUpdate = () => {
    const { hash } = window.location;

    if (hash !== '') {
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView();
            }
        }, 0);
    } else {
        window.scrollTo(0, 0);
    }
};
console.log('index theme', theme);

import { Typography } from '@material-ui/core';

import {
    ThemeProvider,
    withStyles,
} from '@mui/styles';

import {
    // ThemeProvider,
    // withStyles,
    // createTheme,
} from '@material-ui/core/styles';

const Cont = (props) => {
    const {
        children,
    } = props;

    return (
        <div>
            {children}
        </div>
    );
};

const ContWithStyles = withStyles((innertheme) => {
    console.log('withStyles', innertheme);
    return {
        root: {},
    };
})(Cont);

const newTheme = {
    ...theme,
    typography: {
        fontSize: 5,
    },
};

console.log('newTheme', newTheme);

const render = () => {
    ReactDOM.render(
        <ThemeProvider theme={newTheme}>
            <ContWithStyles>
                <h1>
                    hello
                </h1>
                <Typography variant="h1">h1. Heading</Typography>
            </ContWithStyles>
            {/* <Provider store={appReduxStore}>
                <Router
                    history={browserHistory}
                    onUpdate={onUpdate}
                    routes={routes}
                />
            </Provider> */}
        </ThemeProvider>,
        document.getElementById('coreApp'),
    );
};

render();
