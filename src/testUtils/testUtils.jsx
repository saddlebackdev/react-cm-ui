import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import theme from '../styles/theme';
import ThemeProvider from '../styles/themeProvider';

// eslint-disable-next-line react/prop-types
const providers = () => ({ children }) => (
    <ThemeProvider
        theme={theme}
    >
        {children}
    </ThemeProvider>
);

const customRender = (
    component,
) => render(
    component,
    {
        wrapper: providers(),
    },
);

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

export {
    customRender as render,
    fireEvent,
    screen,
    waitFor,
};
