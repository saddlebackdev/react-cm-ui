import {
    Checkbox,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../../global/block';
import Highlighter from '../../../global/highlighter';
import Main from '../../../global/main';
import Heading from '../../../global/heading';

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
                onChange={this.onChange.bind(this)}
            />
        );
    }

    onChange(id, checked) {
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

export default class ElementsCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

    onDisabledCheckBoxChange(id, checked) {
        console.log('You should NOT be seeing this console log because the checkbox is disabled!'); // eslint-disable-line no-console
    }

    render() {
        return (
            <Main page="headers">
                <Main.Content>
                    {/* Checkbox */}
                    <Heading
                        anchorLink="checkbox"
                        variant="h2"
                    >
                        Checkbox
                    </Heading>

                    <Typography>
                        A standard checkbox.
                    </Typography>

                    <Checkbox id="ui-checkbox--basic" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {checkboxSample}
                    </Highlighter>

                    {/* Label */}
                    <Heading
                        anchorLink="label"
                        variant="h2"
                    >
                        Label
                    </Heading>

                    <Typography>
                        A checkbox can have a label defined.
                    </Typography>

                    <Checkbox label="Do you want to check the box?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelSample}
                    </Highlighter>

                    {/* Align */}
                    <Heading
                        anchorLink="align"
                        variant="h2"
                    >
                        Align
                    </Heading>

                    <Typography>
                        A label definition can sit on the right or left side of the checkbox.
                    </Typography>

                    <Checkbox align="left" label="Do you want to check the box?" /><br /><br />
                    <Checkbox align="right" label="You know you want too, don't you?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {alignSample}
                    </Highlighter>

                    {/* Checked */}
                    <Heading
                        anchorLink="checked"
                        variant="h2"
                    >
                        Checked
                    </Heading>

                    <Typography>
                        A checkbox can be checked from it's parent.
                    </Typography>

                    <Checkbox checked label="Do you want to check the box?" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {checkedSample}
                    </Highlighter>

                    {/* Disabled */}
                    <Heading
                        anchorLink="disabled"
                        variant="h2"
                    >
                        Disabled
                    </Heading>

                    <Typography>
                        Disable a checkbox.
                    </Typography>

                    <Checkbox
                        disable
                        label="This checkbox has been disabled, true or false?"
                        onChange={this.onDisabledCheckBoxChange.bind(this)}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disabledSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Heading
                        anchorLink="fluid"
                        variant="h2"
                    >
                        Fluid
                    </Heading>

                    <Typography>
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
                    <Heading
                        anchorLink="label-click"
                        variant="h2"
                    >
                        Label Click
                    </Heading>

                    <Typography>
                        Sometimes you may want to disable a checkbox from being checked by clicking it's label definition.
                    </Typography>
                    <Checkbox labelClick={false} label="Sorry, you can no longer click here to check the box." />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelClickSample}
                    </Highlighter>

                    {/* OnChange */}
                    <Heading
                        anchorLink="on-change"
                        variant="h2"
                    >
                        OnChange
                    </Heading>

                    <Typography>
                        Can handle an <code>onChange</code> event from parent. The <code>checked</code> prop is required along with this handler.
                    </Typography>

                    <Checkbox
                        checked={this.state.onChangeSample}
                        label="on change question."
                        onChange={this.onChange.bind(this)}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onChangeSample}
                    </Highlighter>

                    {/* Size */}
                    <Heading
                        anchorLink="size"
                        variant="h2"
                    >
                        Size
                    </Heading>

                    <Typography>
                        A checkbox can be small or large.
                    </Typography>

                    <Checkbox size="small" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {sizeSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
