import {
    camelCase,
} from 'lodash';
import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Main from '../../global/main';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Example from '../../global/example';
import RadioSample from './examples/radioSample';
import RadioSamplePill from './examples/radioSamplePill';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/radio/radio';
/* eslint-enable import/no-named-default, import/extensions */

export default function ElementsRadio() {
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

                    <Heading anchorLink="children" variant="h2">
                        Radio
                    </Heading>

                    <Typography variant="body1">
                        A simple radio.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/radioSample').default}>
                    <RadioSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Standard Radio Button Group
                    </Heading>

                    <Typography variant="body1">
                        Group Radio buttons together in a pill container
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/radioSamplePill').default}>
                    <RadioSamplePill />
                </Example>
            </Main.Content>
        </Main>
    );
}
