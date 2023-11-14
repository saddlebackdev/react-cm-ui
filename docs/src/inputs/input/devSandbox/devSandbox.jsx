import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ExampleInputAutocomplete from '../examples/exampleInputAutocomplete';
import ExampleInputAutoFocus from '../examples/exampleInputAutoFocus';
import ExampleInputDisabled from '../examples/exampleInputDisabled';
import ExampleInputError from '../examples/exampleInputError';
import ExampleInputErrorWithText from '../examples/exampleInputErrorWithText';
import ExampleInputFluid from '../examples/exampleInputFluid';
import ExampleInputIcon from '../examples/exampleInputIcon';
import ExampleInputIconCustom from '../examples/exampleInputIconCustom';
import ExampleInputInverse from '../examples/exampleInputInverse';
import ExampleInputLabel from '../examples/exampleInputLabel';
import ExampleInputLabelPosition from '../examples/exampleInputLabelPosition';
import ExampleInputLoading from '../examples/exampleInputLoading';
import ExampleInputMaxMin from '../examples/exampleInputMaxMin';
import ExampleInputMaxLength from '../examples/exampleInputMaxLength';
import ExampleInputMinLength from '../examples/exampleInputMinLength';
import ExampleInputOnBlur from '../examples/exampleInputOnBlur';
import ExampleInputOnChange from '../examples/exampleInputOnChange';
import ExampleInputOnClick from '../examples/exampleInputOnClick';
import ExampleInputOnFocus from '../examples/exampleInputOnFocus';
import ExampleInputOnKeyDown from '../examples/exampleInputOnKeyDown';
import ExampleInputPlaceholder from '../examples/exampleInputPlaceholder';
import ExampleInputRequired from '../examples/exampleInputRequired';
import ExampleInputType from '../examples/exampleInputType';
import ExampleInputMask from '../examples/exampleInputMask';
import ExampleInputIsRedacted from '../examples/exampleInputIsRedacted';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/inputs/input/input';
/* eslint-enable import/no-named-default, import/extensions */

function InputDevSandbox() {
    const {
        description: componentDescription,
        displayName: componentName,
    } = componentDoc;

    return (
        <Main page={camelCase(componentName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {componentDescription}
                    </Typography>

                    <Heading
                        anchorLink="auto-complete"
                        variant="h2"
                    >
                        Auto Complete
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Indicates whether the value of the control can be automatically completed by the browser.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputAutocomplete').default}
                >
                    <ExampleInputAutocomplete />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="auto-focus"
                        variant="h2"
                    >
                        Auto Focus
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Allows the Input to receive focus on load.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputAutoFocus').default}
                >
                    <ExampleInputAutoFocus />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="disabled"
                        variant="h2"
                    >
                        Disable
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Indicates that the input is not available for interaction.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputDisabled').default}
                >
                    <ExampleInputDisabled />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="error"
                        variant="h2"
                    >
                        Error
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Indicates that the input has an error by passing an boolean value.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputError').default}
                >
                    <ExampleInputError />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="error-custom-message"
                        variant="h2"
                    >
                        Error with custom message
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Indicates that the input has an error by passing an string with a message.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputErrorWithText').default}
                >
                    <ExampleInputErrorWithText />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="fluid"
                        variant="h2"
                    >
                        Fluid
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        An input can take on the size of its container.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputFluid').default}
                >
                    <ExampleInputFluid />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="icon"
                        variant="h2"
                    >
                        Icon
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        An input can be formatted with an icon.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputIcon').default}
                >
                    <ExampleInputIcon />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="icon-custom-jsx"
                        variant="h2"
                    >
                        Icon (Custom JSX)
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        An input can be formatted with an icon. You can either supply a string or add a custom icon by passing a node.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputIconCustom').default}
                >
                    <ExampleInputIconCustom />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="inverse"
                        variant="h2"
                    >
                        Inverse
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Format to appear on dark backgrounds.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputInverse').default}
                >
                    <ExampleInputInverse />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="label"
                        variant="h2"
                    >
                        Label
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Optional Label to display on top of the Input.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputLabel').default}
                >
                    <ExampleInputLabel />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="label-position"
                        variant="h2"
                    >
                        Label Position
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Position the label above or below the input.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputLabelPosition').default}
                >
                    <ExampleInputLabelPosition />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="loading"
                        variant="h2"
                    >
                        Loading
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        An icon input field can show that it is currently loading data.

                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputLoading').default}
                >
                    <ExampleInputLoading />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="max-and-min"
                        variant="h2"
                    >
                        Max & Min
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Specifies the minimum and maximum value that the field can have.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputMaxMin').default}
                >
                    <ExampleInputMaxMin />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="max-length"
                        variant="h2"
                    >
                        Max Length
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Specifies the maximum number of characters that the user can enter.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputMaxLength').default}
                >
                    <ExampleInputMaxLength />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="min-length"
                        variant="h2"
                    >
                        Min Length
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Specifies the minimum number of characters that the user needs to enter.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputMinLength').default}
                >
                    <ExampleInputMinLength />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="onblur"
                        variant="h2"
                    >
                        onBlur Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Will call an <code>onBlur</code> event handler function provided by the parent.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputOnBlur').default}
                >
                    <ExampleInputOnBlur />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="onchange"
                        variant="h2"
                    >
                        onChange Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The Input can be used as a controlled component by providing a function to the <code>onChange</code> prop along with the <code>value</code> prop.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputOnChange').default}
                >
                    <ExampleInputOnChange />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="onclick"
                        variant="h2"
                    >
                        onClick Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Will call an <code>onClick</code> event handler function provided by the parent.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputOnClick').default}
                >
                    <ExampleInputOnClick />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="onfocus"
                        variant="h2"
                    >
                        onFocus Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Will call an <code>onFocus</code> event handler function provided by the parent.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputOnFocus').default}
                >
                    <ExampleInputOnFocus />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="onkeydown"
                        variant="h2"
                    >
                        onKeyDown Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Will call an <code>onKeyDown</code> event handler function provided by the parent.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputOnKeyDown').default}
                >
                    <ExampleInputOnKeyDown />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="placeholder"
                        variant="h2"
                    >
                        Placeholder
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A hint to the user of what can be entered in the input.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputPlaceholder').default}
                >
                    <ExampleInputPlaceholder />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="required"
                        variant="h2"
                    >
                        Required
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Specifies that the user must fill in a value before submitting a form.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputRequired').default}
                >
                    <ExampleInputRequired />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="type"
                        variant="h2"
                    >
                        Type
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The HTML input type.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputType').default}
                >
                    <ExampleInputType />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="mask"
                        variant="h2"
                    >
                        Mask
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Is an array that defines how the user input is going to be masked.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputMask').default}
                >
                    <ExampleInputMask />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="isRedacted"
                        variant="h2"
                    >
                        isRedacted
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        To prevent sensitive data from being read, we need to be able to block the contents of the control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleInputIsRedacted').default}
                >
                    <ExampleInputIsRedacted />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default InputDevSandbox;
