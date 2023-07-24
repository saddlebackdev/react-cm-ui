import {
    Typography,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ExampleAvatarImages from './examples/exampleAvatarImages';
import ExampleImageSizes from './examples/exampleImageSizes';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions, import/no-unresolved */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/dataDisplay/image/image';
/* eslint-enable import/no-named-default, import/extensions, import/no-unresolved */

function DocsImageSandbox() {
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

                    {/**
                     * Avatar Images
                     */}
                    <Heading
                        anchorLink="avatar-images"
                        variant="h2"
                    >
                        Avatar Images
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleAvatarImages').default} // eslint-disable-line import/no-unresolved, import/extensions
                    >
                        <ExampleAvatarImages />
                    </Example>

                    {/**
                     * Image Sizes
                     */}
                    <Heading
                        anchorLink="image-sizes"
                        variant="h2"
                    >
                        Image Sizes
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleImageSizes').default} // eslint-disable-line import/no-unresolved, import/extensions
                    >
                        <ExampleImageSizes />
                    </Example>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsImageSandbox;
