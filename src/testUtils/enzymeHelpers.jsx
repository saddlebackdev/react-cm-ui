import { theme, ThemeProvider } from '../styles';
import { mount } from 'enzyme';
import * as React from 'react';

const getThemeProviderWrappingComponent = (customTheme) => ({ children }) => (
    <ThemeProvider
        theme={customTheme || theme}
    >
        {children}
    </ThemeProvider>
);

function mountWithTheme(component, customTheme) {
    const wrapper = mount(
        component, {
            wrappingComponent: getThemeProviderWrappingComponent(customTheme),
        },
    );

    return wrapper;
}

export default mountWithTheme;
