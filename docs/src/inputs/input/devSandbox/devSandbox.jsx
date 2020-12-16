import {
    Button,
    Typography,
    Icon,
    Input,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Block from '../../../global/block';
import Highlighter from '../../../global/highlighter';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/input/input';
/* eslint-enable import/no-named-default, import/extensions */

const inputSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class InputSample extends React.Component {

    render() {
        return (
            <Input />
        );
    }

}`;

const autoCompleteSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class AutoCompleteSample extends React.Component {

    render() {
        return (
            <Input autoComplete="off" />
        );
    }

}`;

const autoFocusSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class AutoCompleteSample extends React.Component {

    render() {
        return (
            <Input autoFocus={true} />
        );
    }

}`;

const disabledSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Input disable value="So cool!" />
        );
    }

}`;

const errorSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class ErrorSample extends React.Component {

    render() {
        return (
            <Input error={true} value="No, you did it wrong!" /><br /><br />

            <Input error="The worst." value="Totally wrong value ..." />
        );
    }

}`;

const fluidSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Input fluid={true} value="I'm totally the longest string you have ever seen. Ship it!" />
        );
    }

}`;

const actionsSample = `import React from 'react';
import {
    Button,
    Icon,
    Input,
} from 'react-cm-ui';

export default class IconSample extends React.Component {
    onIconClick() {
        window.alert('Look at my action.');
    }

    render() {
        return (
            <Input
                actions={(
                    <Button
                        icon
                        onClick={this.onIconClick.bind(this)}
                    >
                        <Icon
                            compact
                            type="calendar"
                        />
                    </Button>
                )}
            />
        );
    }
}`;

const inverseSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class InverseSample extends React.Component {

    render() {
        return (
            <Input inverse={true} />
        );
    }

}`;

const labelSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class LabelSample extends React.Component {

    render() {
        return (
            <Input label="Name" />
        );
    }

}`;

const labelPositionSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class LabelPositionSample extends React.Component {

    render() {
        return (
            <div>
                <Input label="Bottom Label" labelPosition="bottom" /><br /><br />

                <Input label="Top Label" labelPosition="top" />
            </div>
        );
    }

}`;

const maxminSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MaxMinSample extends React.Component {

    render() {
        return (
            <div>
                <Input label="How many years has it been since the Reformation?" max={510} type="number" /><br /><br />
                <Input label="Age" max={99} min={0} type="number" value={0} />
                <Input label="Age without spinners" max={99} min={0} type="number" showSpinners={false} value={0} />
            </div>
        );
    }

}`;

const maxLengthSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MaxLengthSample extends React.Component {

    render() {
        return (
            <Input label="Maximum Characters Is 2" maxLength={2} />
        );
    }

}`;

const minLengthSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MinLengthSample extends React.Component {

    render() {
        return (
            <Input label="Minimum Characters Is 2" maxLength={2} />
        );
    }

}`;

const onBlurSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnBlurSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onBlur={this.onBlur.bind(this)} />
        );
    }

    onBlur() {
        window.alert('Are you sure you are done?');
    }

}`;

const onChangeSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnChangeSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onChange={this.onChange.bind(this)} value={this.state.onChangeValue} />
        );
    }

    onChange(value) {
        this.setState({ onChangeValue: value });
    }

}`;

const onClickSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onClick={this.onClick.bind(this)} />
        );
    }

    onClick() {
        window.alert('You did it! You clicked the input.');
    }

}`;

const onFocusSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnFocusSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onFocus={this.onFocus.bind(this)} />
        );
    }

    onFocus() {
        console.log('Your focus determins your reality.');
    }

}`;

const onKeyDownSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnKeyDownSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onKeyDown={this.onKeyDown.bind(this)} />
        );
    }

    onKeyDown(event) {
        window.alert('You just pressed the ' + event.key + ' key');
    }

}`;

const placeholderSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class PlaceholderSample extends React.Component {

    render() {
        return (
            <Input label="Name" placeholder="First & Last Name" />
        );
    }

}`;

const requiredSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class RequiredSample extends React.Component {

    render() {
        return (
            <Input label="Name" placeholder="First & Last Name" required={true} />
        );
    }

}`;

const typeSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class TypeSample extends React.Component {

    render() {
        return (
            <Input label="Email" type="email" /><br /><br />
            <Input label="Number" type="number" min={25} max={99}/> <span>Min: 25, Max: 99</span><br /><br />
            <Input label="Number" type="number" required={true} min={25} max={99}/> <span>Min: 25, Max: 99</span><br /><br />
            <Input label="Password" type="password" /><br /><br />
            <Input label="Telephone" type="tel" /><br /><br />
            <Input label="Text" type="text" />
        );
    }

}`;

const maskSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MaskSample extends React.Component {

    render() {
        return (
            <Input
                guide={true}
                keepCharPositions={true}
                label="Phone Number"
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder="(555) 495-3947"
            />
        );
    }

}`;

class DocsDevSandbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { onChangeValue: '' };
    }

    onBlur() {
        window.alert('Are you sure you are done?');
    }

    onChange(value) {
        this.setState({ onChangeValue: value });
    }

    onClick() {
        window.alert('You did it! You clicked the input.');
    }

    onFocus() {
        console.log('Your focus determins your reality.');
    }

    onKeyDown(event) {
        window.alert('You just pressed the ' + event.key + ' key');
    }

    onIconClick() {
        window.alert('Look at my action.');
    }

    render() {
        const {
            displayName,
        } = rootDoc;

        return (
            <Main page={camelCase(displayName)}>
                <Main.Content>
                    <MarkdownContainer>
                        {/* Input */}
                        <Typography anchor="input" variant="h2" style={{ marginTop: '55px' }} sub>
                            Input
                        </Typography>

                        <Typography variant="body1">
                            A standard input is text input.
                        </Typography>

                        <Input />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {inputSample}
                        </Highlighter>

                        {/* Auto Complete */}
                        <Typography anchor="auto-complete" variant="h2" style={{ marginTop: '55px' }} sub>
                            Auto Complete
                        </Typography>

                        <Typography variant="body1">
                            Indicates whether the value of the control can be automatically
                            completed by the browser.
                        </Typography>

                        <Input autoComplete="off" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {autoCompleteSample}
                        </Highlighter>

                        {/* Auto Focus */}
                        <Typography anchor="auto-complete" variant="h2" style={{ marginTop: '55px' }} sub>
                            Auto Focus
                        </Typography>

                        <Typography variant="body1">
                            Allows the Input to receive focus on load.
                        </Typography>

                        <Input autoFocus />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {autoFocusSample}
                        </Highlighter>

                        {/* Disabled */}
                        <Typography anchor="disable" variant="h2" style={{ marginTop: '55px' }} sub>
                            Disable
                        </Typography>

                        <Typography variant="body1">
                            Indicates that the input is not available for interaction.
                        </Typography>

                        <Input disable value="So cool!" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {disabledSample}
                        </Highlighter>

                        {/* Error */}
                        <Typography anchor="error" variant="h2" style={{ marginTop: '55px' }} sub>
                            Error
                        </Typography>

                        <Typography variant="body1">
                            Indicates that the input has an error. You can either supply a
                            boolean value or a string with a message.
                        </Typography>

                        <Input error value="No, you did it wrong!" />

                        <br />
                        <br />

                        <Input error="The worst." value="Totally wrong value ..." />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {errorSample}
                        </Highlighter>

                        {/* Fluid */}
                        <Typography anchor="fluid" variant="h2" style={{ marginTop: '55px' }} sub>
                            Fluid
                        </Typography>

                        <Typography variant="body1">
                            An input can take on the size of its container.
                        </Typography>

                        <Input fluid value="I'm totally the longest string you have ever seen. Ship it!" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {fluidSample}
                        </Highlighter>

                        {/* Icon */}
                        <Typography anchor="icon" variant="h2" style={{ marginTop: '55px' }} sub>
                            Icon
                        </Typography>

                        <Typography variant="body1">
                            An input can be formatted with an icon. You can either supply a
                            string or add a custom icon by passing a node.
                        </Typography>

                        <Input
                            actions={(
                                <Button
                                    icon
                                    onClick={this.onIconClick.bind(this)}
                                >
                                    <Icon
                                        compact
                                        type="calendar"
                                    />
                                </Button>
                            )}
                        />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {actionsSample}
                        </Highlighter>

                        {/* Inverse */}
                        <Typography anchor="inverse" variant="h2" style={{ marginTop: '55px' }} sub>
                            Inverse
                        </Typography>

                        <Typography variant="body1">
                            Format to appear on dark backgrounds.
                        </Typography>

                        <Block inverse>
                            <Input inverse />
                        </Block>

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {inverseSample}
                        </Highlighter>

                        {/* Label */}
                        <Typography anchor="label" variant="h2" style={{ marginTop: '55px' }} sub>
                            Label
                        </Typography>

                        <Typography variant="body1">
                            Optional Label to display on top of the Input.
                        </Typography>

                        <Input label="Name" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {labelSample}
                        </Highlighter>

                        {/* Label Position */}
                        <Typography anchor="label-position" variant="h2" style={{ marginTop: '55px' }} sub>
                            Label Position
                        </Typography>

                        <Typography variant="body1">
                            Position the label above or below the input.
                        </Typography>

                        <Input label="Bottom Label" labelPosition="bottom" />
                        <br />
                        <br />

                        <Input label="Top Label" labelPosition="top" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {labelPositionSample}
                        </Highlighter>

                        {/* Max & Min */}
                        <Typography anchor="max-length" variant="h2" style={{ marginTop: '55px' }} sub>
                            Max & Min
                        </Typography>

                        <Typography variant="body1">
                            Specifies the minimum and maximum value that the field can have.
                        </Typography>

                        <Input label="How many years has it been since the Reformation?" max={510} type="number" />
                        <br />
                        <br />
                        <Input label="Age" max={99} min={0} type="number" value={0} />
                        <br />
                        <br />
                        <Input label="Age without spinners" max={99} min={0} type="number" showSpinners={false} value={0} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {maxminSample}
                        </Highlighter>

                        {/* Max Length */}
                        <Typography anchor="max-length" variant="h2" style={{ marginTop: '55px' }} sub>
                            Max Length
                        </Typography>

                        <Typography variant="body1">
                            Specifies the maximum number of characters that the user can enter.
                        </Typography>

                        <Input label="Maximum Characters Is 2" maxLength={2} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {maxLengthSample}
                        </Highlighter>

                        {/* Min Length */}
                        <Typography anchor="min-length" variant="h2" style={{ marginTop: '55px' }} sub>
                            Min Length
                        </Typography>

                        <Typography variant="body1">
                            Specifies the minimum number of characters that the user needs to enter.
                        </Typography>

                        <Input label="Minimum Characters Is 2" maxLength={2} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {minLengthSample}
                        </Highlighter>

                        {/* onBlur Event Handler */}
                        <Typography anchor="onblur" variant="h2" style={{ marginTop: '55px' }} sub>
                            onBlur Event Handler
                        </Typography>

                        <Typography variant="body1">
                            Can handle an
                            {' '}
                            <code>onBlur</code>
                            {' '}
                            event from parent.
                        </Typography>

                        <Input label="Check It!" onBlur={this.onBlur.bind(this)} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {onBlurSample}
                        </Highlighter>

                        {/* onChange Event Handler */}
                        <Typography anchor="onchange" variant="h2" style={{ marginTop: '55px' }} sub>
                            onChange Event Handler
                        </Typography>

                        <Typography variant="body1">
                            Can handle an
                            {' '}
                            <code>onChange</code>
                            {' '}
                            event from parent. The
                            {' '}
                            <code>value</code>
                            {' '}
                            prop is required along with this handler.
                        </Typography>

                        <Input label="Check It!" onChange={this.onChange.bind(this)} value={this.state.onChangeValue} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {onChangeSample}
                        </Highlighter>

                        {/* onClick Event Handler */}
                        <Typography anchor="onclick" variant="h2" style={{ marginTop: '55px' }} sub>
                            onClick Event Handler
                        </Typography>

                        <Typography variant="body1">
                            Can handle an
                            {' '}
                            <code>onClick</code>
                            {' '}
                            event from parent.
                        </Typography>

                        <Input label="Check It!" onClick={this.onClick.bind(this)} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {onClickSample}
                        </Highlighter>

                        {/* onFocus Event Handler */}
                        <Typography anchor="onfocus" variant="h2" style={{ marginTop: '55px' }} sub>
                            onFocus Event Handler
                        </Typography>

                        <Typography variant="body1">
                            Can handle an
                            {' '}
                            <code>onFocus</code>
                            {' '}
                            event from parent.
                        </Typography>

                        <Input label="Check It!" onFocus={this.onFocus.bind(this)} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {onFocusSample}
                        </Highlighter>

                        {/* onKeyDown Event Handler */}
                        <Typography anchor="onkeydown" variant="h2" style={{ marginTop: '55px' }} sub>
                            onKeyDown Event Handler
                        </Typography>

                        <Typography variant="body1">
                            Can handle an
                            {' '}
                            <code>onKeyDown</code>
                            {' '}
                            event from parent.
                        </Typography>

                        <Input label="Check It!" onKeyDown={this.onKeyDown.bind(this)} />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {onKeyDownSample}
                        </Highlighter>

                        {/* Placeholder */}
                        <Typography anchor="placeholder" variant="h2" style={{ marginTop: '55px' }} sub>
                            Placeholder
                        </Typography>

                        <Typography variant="body1">
                            A hint to the user of what can be entered in the input.
                        </Typography>

                        <Input label="Name" placeholder="First & Last Name" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {placeholderSample}
                        </Highlighter>

                        {/* Required */}
                        <Typography anchor="required" variant="h2" style={{ marginTop: '55px' }} sub>
                            Required
                        </Typography>

                        <Typography variant="body1">
                            Specifies that the user must fill in a value before submitting a
                            form.
                        </Typography>

                        <Input label="Name" placeholder="First & Last Name" required />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {requiredSample}
                        </Highlighter>

                        {/* Type */}
                        <Typography anchor="type" variant="h2" style={{ marginTop: '55px' }} sub>
                            Type
                        </Typography>

                        <Typography variant="body1">
                            The HTML input type.
                        </Typography>

                        <Input label="Email" type="email" />
                        <br />
                        <br />
                        <Input label="Number" type="number" min={25} max={99} style={{ width: 75 }} />
                        {' '}
                        <span>Min: 25, Max: 99</span>
                        <br />
                        <br />
                        <Input label="Number" type="number" required min={25} max={99} style={{ width: 75 }} />
                        {' '}
                        <span>Min: 25, Max: 99</span>
                        <br />
                        <br />
                        <Input label="Password" type="password" />
                        <br />
                        <br />
                        <Input label="Telephone" type="tel" />
                        <br />
                        <br />
                        <Input label="Text" type="text" />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {typeSample}
                        </Highlighter>

                        {/* Mask */}
                        <Typography anchor="mask" variant="h2" style={{ marginTop: '55px' }} sub>
                            Mask
                        </Typography>

                        <Typography variant="body1">
                            Is an array that defines how the user input is going to be masked.
                        </Typography>

                        <Input
                            guide
                            keepCharPositions
                            label="Phone Number"
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            placeholder="(555) 495-3947"
                            type="tel"
                        />

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {maskSample}
                        </Highlighter>
                    </MarkdownContainer>
                </Main.Content>
            </Main>
        );
    }
}

export default DocsDevSandbox;
