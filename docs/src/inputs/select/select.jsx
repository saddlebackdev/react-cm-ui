import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../global/example';
import ExampleDefaultSelect from './examples/exampleDefaultSelect';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/select/select';
/* eslint-enable import/no-named-default, import/extensions */

function DocsSelect() {
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
                        anchorLink="select-default"
                        variant="h2"
                    >
                        Default Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDefaultSelect').default}
                    >
                        <ExampleDefaultSelect />
                    </Example>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsSelect;
