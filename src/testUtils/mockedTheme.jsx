import React from 'react';
import { theme, ThemeProvider } from '../styles';

// eslint-disable-next-line react/prop-types
export default function MockedTheme({ children }) {
    return (
        <ThemeProvider
            theme={theme}
        >
            {children}
        </ThemeProvider>
    );
}
