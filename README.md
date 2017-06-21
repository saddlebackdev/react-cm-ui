# React-CM-UI
UI Assets for Church Management and related projects

## Installation

Install React-CM-UI from NPM.

```
npm install react-cm-ui --save
```

## Usage

#### Components

```
import { Button, Header, Grid } from 'react-cm-ui';
```

#### Styles

If you are using Webpack to build your App you can use `resolve.alias` and import the React-CM-UI's CSS.

In your Webpack config file.

```
resolve: {
    alias: {
        'css-cm-ui': path.join(__dirname, '/node_modules/react-cm-ui/lib/css/Style.css')
    }
}
```

In your app.

```
import 'css-cm-ui';
```

## Run Docs

```
npm run docs:dev
```
