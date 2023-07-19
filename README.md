# React CM UI
UI Assets for **Healthy Church** and related projects

[![Build Status](https://dev.azure.com/saddlebackchurch/Church%20Management/_apis/build/status%2FHealthyChurch%2F(yaml)%20React-CM-UI?branchName=refs%2Fpull%2F451%2Fmerge)](https://dev.azure.com/saddlebackchurch/Church%20Management/_build/latest?definitionId=258&branchName=refs%2Fpull%2F451%2Fmerge) [![npm version](https://badge.fury.io/js/@saddlebackchurch%2Freact-cm-ui.svg)](https://badge.fury.io/js/@saddlebackchurch%2Freact-cm-ui)

## Powered By
[![React JS](/readme-assets/react.svg)](https://react.dev/)
&nbsp;
&nbsp;
[![Material UI](/readme-assets/mui.svg)](https://mui.com/material-ui/)

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

```JSON
resolve: {
    alias: {
        'css-cm-ui': path.join(__dirname, '/node_modules/react-cm-ui/core/style.css')
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
