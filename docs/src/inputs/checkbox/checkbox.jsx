import {
    Card,
    Checkbox,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const checkboxSample = `import React from 'react';

import { Checkbox } from 'react-cm-ui';
export default class CheckboxSample extends React.Component {

    render() {
        return (
            <Checkbox />
        );
    }

}`;

const labelSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class LabelSample extends React.Component {

    render() {
        return (
            <Checkbox label="Do you want to check the box?" />
        );
    }

}`;

const alignSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class AlignSample extends React.Component {

    render() {
        return (
            <Checkbox align="left" label="Do you want to check the box?" /><br /><br />
            <Checkbox align="right" label="You know you want too, don't you?" />
        );
    }

}`;

const checkedSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class CheckedSample extends React.Component {

    render() {
        return (
            <Checkbox checked={true} label="Do you want to check the box?" />
        );
    }

}`;

const disabledSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Checkbox disable label="This checkbox has been disabled, true or false?" />
        );
    }

}`;

const fluidSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Checkbox align="left" fluid={true} label="It's better on the right, yeah?" />
            <Checkbox align="right" fluid={true} label="It's better on the right, yeah?" />
        );
    }

}`;

const labelClickSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class LabelClickSample extends React.Component {

    render() {
        return (
            <Checkbox labelClick={false} label="Sorry, you can no longer click here to check the box." />
        );
    }

}`;

const onChangeSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class OnChangeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    render() {
        return (
            <Checkbox
                checked={this.state.onChangeSample}
                label="on change question."
                onChange={this._onChange.bind(this)}
            />
        );
    }

    _onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

}`;

const sizeSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class SizeSample extends React.Component {
    render() {
        return (
            <Checkbox size="small" />
        );
    }
}`;

const toggleSample = `import React from 'react';
import { Checkbox } from 'react-cm-ui';

export default class ToggleSample extends React.Component {

    render() {
        return (
            <Checkbox toggle={true} /><br /><br />
            <Checkbox label="Give me the sweet checkbox!" toggle={true} /><br /><br />
            <Checkbox align="right" label="It's better on the right, yeah?" toggle={true} /><br /><br />
            <Checkbox align="left" fluid={true} label="It's better on the right, yeah?" toggle={true} />
            <Checkbox align="right" fluid={true} label="It's better on the right, yeah?" toggle={true} />
        );
    }

}`;

export default class ElementsCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    render() {
        const props = [
            {
                name: 'align',
                type: 'enum',
                default: '',
                description: 'Aligns the label\'s definition to the left or right.',
                allowedTypes: 'left, right',
            }, {
                name: 'checked',
                type: 'bool',
                default: '',
                description: 'Indicates whether a checkbox is checked or not.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'disable',
                type: 'bool',
                default: '',
                description: 'Indicates that the checkbox is not available for interaction.',
                allowedTypes: '',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'A checkbox can take on the size of its container.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give a checkbox an id.',
                allowedTypes: '',
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional label to display with the checkbox.',
                allowedTypes: '',
            }, {
                name: 'labelClick',
                type: 'bool',
                default: '',
                description: 'Disable the label\'s definition onClick handler.',
                allowedTypes: '',
            }, {
                name: 'name',
                type: 'string',
                default: '',
                description: 'Radio input\'s name.',
                allowedTypes: '',
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: '',
            }, {
                name: 'size',
                type: 'enum',
                default: '',
                description: 'A checkbox can be small or large.',
                allowedTypes: 'small, large',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the checkbox\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'toggle',
                type: 'bool',
                default: '',
                description: 'Styles a checkbox to look like a toggle.',
                allowedTypes: '',
            }, {
                name: 'value',
                type: 'string',
                default: '',
                description: 'Checkbox value.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Checkbox */}
                    <Heading variant="h2">
                        Checkbox
                    </Heading>

                    <Typography variant="body1">
                        A standard checkbox.
                    </Typography>

                    <Checkbox id="ui-checkbox--basic" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {checkboxSample}
                    </Highlighter>

                    {/* Label */}
                    <Heading variant="h2">
                        Label
                    </Heading>

                    <Typography variant="body1">
                        A checkbox can have a label defined.
                    </Typography>

                    <Checkbox label="Do you want to check the box?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelSample}
                    </Highlighter>

                    {/* Align */}
                    <Heading variant="h2">
                        Align
                    </Heading>

                    <Typography variant="body1">
                        A label definition can sit on the right or left side of the checkbox.
                    </Typography>

                    <Checkbox align="left" label="Do you want to check the box?" /><br /><br />
                    <Checkbox align="right" label="You know you want too, don't you?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {alignSample}
                    </Highlighter>

                    {/* Checked */}
                    <Heading variant="h2">
                        Checked
                    </Heading>

                    <Typography variant="body1">
                        A checkbox can be checked from it's parent.
                    </Typography>

                    <Checkbox checked label="Do you want to check the box?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {checkedSample}
                    </Highlighter>

                    {/* Disabled */}
                    <Heading variant="h2">
                        Disabled
                    </Heading>

                    <Typography variant="body1">
                        Disable a checkbox.
                    </Typography>

                    <Checkbox
                        disable
                        label="This checkbox has been disabled, true or false?"
                        onChange={this._onDisabledCheckBoxChange.bind(this)}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disabledSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Heading variant="h2">
                        Fluid
                    </Heading>

                    <Typography variant="body1">
                        A checkbox can stretch as wide as the parent container.
                    </Typography>

                    <Block style={{ maxWidth: '400px' }}>
                        <Checkbox align="left" fluid label="It's better on the right, yeah?" />
                    </Block><br />

                    <Block style={{ maxWidth: '400px' }}>
                        <Checkbox align="right" fluid label="It's better on the right, yeah?" />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fluidSample}
                    </Highlighter>

                    {/* Label Click */}
                    <Heading variant="h2">
                        Label Click
                    </Heading>

                    <Typography variant="body1">
                        Sometimes you may want to disable a checkbox from being checked by clicking it's label definition.
                    </Typography>

                    <Checkbox labelClick={false} label="Sorry, you can no longer click here to check the box." />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelClickSample}
                    </Highlighter>

                    {/* OnChange */}
                    <Heading variant="h2">
                        OnChange
                    </Heading>

                    <Typography variant="body1">
                        Can handle an <code>onChange</code> event from parent. The <code>checked</code> prop is required along with this handler.
                    </Typography>

                    <Checkbox
                        checked={this.state.onChangeSample}
                        label="on change question."
                        onChange={this._onChange.bind(this)}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onChangeSample}
                    </Highlighter>

                    {/* Size */}
                    <Heading variant="h2">
                        Size
                    </Heading>

                    <Typography variant="body1">
                        A checkbox can be small or large.
                    </Typography>

                    <Checkbox size="small" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {sizeSample}
                    </Highlighter>

                    {/* Toggle */}
                    <Heading variant="h2">
                        Toggle
                    </Heading>

                    <Typography variant="body1">
                        A checkbox can be transformed into a toggle switch.
                    </Typography>

                    <Checkbox toggle /><br /><br />
                    <Checkbox label="Give me the sweet checkbox!" toggle /><br /><br />
                    <Checkbox align="right" label="It's better on the right, yeah?" toggle /><br /><br />

                    <Block style={{ maxWidth: '400px' }}>
                        <Checkbox align="left" fluid label="It's better on the right, yeah?" toggle />
                    </Block><br />

                    <Block style={{ maxWidth: '400px' }}>
                        <Checkbox align="right" fluid label="It's better on the right, yeah?" toggle />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {toggleSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

    _onDisabledCheckBoxChange(id, checked) {
        console.log('You should NOT be seeing this console log because the checkbox is disabled!'); // eslint-disable-line no-console
    }
}
