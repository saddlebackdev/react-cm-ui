// .storybook/preview.js
// import React from 'react'

import {ThemeProvider} from '@material-ui/core'
import theme from '../src/styles/theme'
import '../src/style.scss';

// import { addDecorator } from '@storybook/react';
// import { jsxDecorator } from 'storybook-addon-jsx';

// addDecorator(jsxDecorator);

export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
  ),
]


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
