import '@babel/register';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'css-cm-ui';

import { browserHistory, Router } from 'react-router';
import { theme, ThemeProvider } from 'react-cm-ui/styles';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { appReduxStore } from './global/configureReduxStore';
import routes from './routes';

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

window.theme = theme;

const render = () => {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Provider store={appReduxStore}>
                <Router
                    history={browserHistory}
                    onUpdate={onUpdate}
                    routes={routes}
                />
            </Provider>
        </ThemeProvider>,
        document.getElementById('coreApp'),
    );
};

render();
