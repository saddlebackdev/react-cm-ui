import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ExampleClearableSelect from '../examples/exampleClearableSelect';
import ExampleCreatableSelect from '../examples/exampleCreatableSelect';
import ExampleCreatableAdvancedSelect from '../examples/exampleCreatableAdvancedSelect';
import ExampleDisableSelect from '../examples/exampleDisableSelect';
import ExampleLabelSelect from '../examples/exampleLabelSelect';
import ExampleMultipleSelect from '../examples/exampleMultipleSelect';
import ExampleRequiredSelect from '../examples/exampleRequiredSelect';
import ExampleSearchableSelect from '../examples/exampleSearchableSelect';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/select/select';
/* eslint-enable import/no-named-default, import/extensions */

function ElementsSelect() {
    const {
        description,
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading
                        anchorLink="select-label"
                        variant="h2"
                    >
                        Label Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleLabelSelect').default}
                    >
                        <ExampleLabelSelect />
                    </Example>

                    <Heading
                        anchorLink="select-required"
                        variant="h2"
                    >
                        Required Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleRequiredSelect').default}
                    >
                        <ExampleRequiredSelect />
                    </Example>

                    <Heading
                        anchorLink="select-disable"
                        variant="h2"
                    >
                        Disable Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleDisableSelect').default}
                    >
                        <ExampleDisableSelect />
                    </Example>

                    <Heading
                        anchorLink="select-clearable"
                        variant="h2"
                    >
                        Clearable Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleClearableSelect').default}
                    >
                        <ExampleClearableSelect />
                    </Example>

                    <Heading
                        anchorLink="select-searchable"
                        variant="h2"
                    >
                        Searchable Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleSearchableSelect').default}
                    >
                        <ExampleSearchableSelect />
                    </Example>

                    <Heading
                        anchorLink="select-multiple"
                        variant="h2"
                    >
                        Multiple Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleMultipleSelect').default}
                    >
                        <ExampleMultipleSelect />
                    </Example>

                    <Heading
                        anchorLink="select-creatable"
                        variant="h2"
                    >
                        Creatable Select (Add custom options)
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleCreatableSelect').default}
                    >
                        <ExampleCreatableSelect />
                    </Example>

                    <Heading
                        anchorLink="select-creatable-advanced"
                        variant="h2"
                    >
                        Creatable Advanced Select (Option Component, Value Component & Prompt Text Creator )
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleCreatableAdvancedSelect').default}
                    >
                        <ExampleCreatableAdvancedSelect />
                    </Example>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default ElementsSelect;
