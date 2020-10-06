import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import * as React from 'react';
import mediaQuery from 'css-mediaquery';
import { theme, ThemeProvider } from '../styles';

const getThemeProviderWrappingComponent = (customTheme) => ({ children }) => (
    <ThemeProvider
        theme={customTheme || theme}
    >
        {children}
    </ThemeProvider>
);

export const createMatchMedia = (width) => {
    return (query) => ({
        matches: mediaQuery.match(query, { width }),
        addListener: () => {},
        removeListener: () => {},
    });
};

export const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));

        wrapper.update();
    });
};

function mountWithTheme(component, customTheme) {
    const wrapper = mount(
        component, {
            wrappingComponent: getThemeProviderWrappingComponent(customTheme),
        },
    );

    return wrapper;
}

export default mountWithTheme;
