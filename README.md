# React CM UI
UI Assets for **Healthy Church** and related projects

[![Build Status](https://dev.azure.com/saddlebackchurch/Church%20Management/_apis/build/status%2FHealthyChurch%2F(yaml)%20HC-UI-Docs?branchName=dev)](https://dev.azure.com/saddlebackchurch/Church%20Management/_build/latest?definitionId=258&branchName=dev)
&nbsp;
[![npm version](https://img.shields.io/npm/v/@saddlebackchurch/react-cm-ui.svg?style=flat)](https://www.npmjs.com/package/@saddlebackchurch/react-cm-ui)

## Powered By
[![React JS](/readme-assets/react.svg "React JS")](https://react.dev/)
&nbsp;
&nbsp;
[![Material UI](/readme-assets/mui.svg "Material UI")](https://mui.com/material-ui/)

## Installation

Install React CM UI from NPM.

```
npm install @saddlebackchurch/react-cm-ui --save
```

## Usage

#### Components

```JavaScript
import {
    Button,
    Grid,
    Icon,
    Typography
} from '@saddlebackchurch/react-cm-ui';
```

#### Styles

If you are using Webpack to build your App you can use `resolve.alias` and import the React CM UI's CSS.

In your Webpack config file.

```JavaScript
resolve: {
    alias: {
        'css-cm-ui': path.join(__dirname, '/node_modules/@saddlebackchurch/react-cm-ui/core/style.css')
    }
}
```

In your app.

```JavaScript
import 'css-cm-ui';
```

## Run the UI Documentation web app

```
cd /docs
npm start
```
(runs on port 8082, i.e. http://localhost:8082)
