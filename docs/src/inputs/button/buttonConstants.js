// eslint-disable-next-line import/prefer-default-export
export const buttonDocProps = [
    {
        name: 'as',
        type: 'div | button',
        default: 'button',
        description: 'An element type to render as.',
    }, {
        name: 'children',
        type: 'node',
        default: '',
        description: 'Primary content.',
    }, {
        name: 'className',
        type: 'string',
        default: '',
        description: 'Additional classes.',
    }, {
        name: 'color',
        type: 'alert<br />| alternate<br />| disable<br />| light<br />| outline<br />| primary<br />| success<br />| warning',
        default: 'primary',
        description: 'Color of the button.',
    }, {
        name: 'compact',
        type: 'bool',
        default: 'false',
        description: 'A button can reduce its padding.',
        allowedTypes: '',
    }, {
        name: 'disable',
        type: 'bool',
        default: 'false',
        description: 'A button can be disabled.',
        allowedTypes: '',
    }, {
        name: 'fluid',
        type: 'bool',
        default: 'false',
        description: 'A button can stretch the width of it\'s container.',
        allowedTypes: '',
    }, {
        name: 'href',
        type: 'string',
        default: '',
        description: 'A button can be a simple link.',
        allowedTypes: '',
    }, {
        name: 'icon',
        type: 'bool',
        default: 'false',
        description: 'A button can be fixed height and width with an icon in the center.',
        allowedTypes: '',
    }, {
        name: 'id',
        type: 'string',
        default: '',
        description: 'Assign the button an id attribute value.',
        allowedTypes: '',
    }, {
        name: 'inverse',
        type: 'bool',
        default: 'false',
        description: 'A button can be formatted to appear on dark backgrounds better.',
        allowedTypes: '',
    }, {
        name: 'onClick',
        type: 'function',
        default: '',
        description: 'Called after the end-user\'s click.',
        allowedTypes: '',
    }, {
        name: 'outlined',
        type: 'bool',
        default: 'false',
        description: 'A button can be outlined.',
        allowedTypes: '',
    }, {
        name: 'relax',
        type: 'bool',
        default: 'false',
        description: 'A button can relax its padding.',
        allowedTypes: '',
    }, {
        name: 'style',
        type: 'object',
        default: '',
        description: 'Supply any inline styles to the Button\'s container. Mainly used for padding and margins.',
        allowedTypes: '',
    }, {
        name: 'width',
        type: 'number',
        default: '',
        description: 'Set a fixed width.',
        allowedTypes: '',
    },
];
