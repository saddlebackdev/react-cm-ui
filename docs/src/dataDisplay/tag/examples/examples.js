export const LABEL_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class InputSample extends React.Component {

    render() {
        return (
            <Tag>Label</Tag>
        );
    }

}`;

export const COLOR_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class ColorSample extends React.Component {

    render() {
        return (
            <div>
                <Tag color="alert">Alert</Tag>
                <Tag color="highlight">Highlight</Tag>
                <Tag color="success">Success</Tag>
                <Tag color="primary">Primary</Tag>
                <Tag color="transparent">Transparent</Tag>
                <Tag color="warning">Warning</Tag>
            </div>
        );
    }

}`;

export const FLUID_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Tag fluid={true}>A Fluid Label</Tag>
        );
    }

}`;

export const INVERSE_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <div>
                <Tag color="alert" inverse={true}>Alert</Tag>
                <Tag color="highlight" inverse={true}>Highlight</Tag>
                <Tag color="success" inverse={true}>Success</Tag>
                <Tag color="primary" inverse={true}>Primary</Tag>
                <Tag color="transparent" inverse={true}>Transparent</Tag>
                <Tag color="warning" inverse={true}>Warning</Tag>
            </div>
        );
    }

}`;

export const ON_CLICK_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Tag onClick={this._onClick.bind(this)}>Click Me</Tag>
        );
    }

    _onClick() {
        console.log('Label has been clicked!');
    }

}`;

export const ON_CLEAR_CLICK_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class OnClearClickSample extends React.Component {

    render() {
        return (
            <Tag color="alert" onClearClick={this._onClearClick.bind(this)}>Alert</Tag>
            <Tag color="highlight" onClearClick={this._onClearClick.bind(this)}>Highlight</Tag>
            <Tag color="success" onClearClick={this._onClearClick.bind(this)}>Success</Tag>
            <Tag color="primary" onClearClick={this._onClearClick.bind(this)}>Primary</Tag>
            <Tag color="transparent" onClearClick={this._onClearClick.bind(this)}>Transparent</Tag>
            <Tag color="warning" onClearClick={this._onClearClick.bind(this)}>Warning</Tag>
        );
    }

    _onClearClick() {
        console.log('Label removed.');
    }

}`;
