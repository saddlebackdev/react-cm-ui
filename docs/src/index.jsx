import '@babel/register';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// eslint-disable-next-line import/no-unresolved
import 'css-cm-ui';

import { browserHistory, Router } from 'react-router';
import { StylesProvider } from '@material-ui/styles';
// eslint-disable-next-line import/no-unresolved
import { theme, ThemeProvider } from '@saddlebackchurch/react-cm-ui/styles';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { appReduxStore } from './global/configureReduxStore';
import routes from './routes';
import jssPreset from './app/jssPreset';

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

const jss = jssPreset();

const render = () => {
    ReactDOM.render(
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <Provider store={appReduxStore}>
                    <Router
                        history={browserHistory}
                        onUpdate={onUpdate}
                        routes={routes}
                    />
                </Provider>
            </ThemeProvider>
        </StylesProvider>,
        document.getElementById('coreApp'),
    );
};

render();
