import {
    Typography,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleImage from './devSandbox/examples/exampleImage';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions, import/no-unresolved */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/dataDisplay/image/image';
/* eslint-enable import/no-named-default, import/extensions, import/no-unresolved */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsImage({
    location: {
        pathname,
    },
}) {
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
                        anchorLink="image"
                        variant="h2"
                    >
                        Image
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./devSandbox/examples/exampleImage').default} // eslint-disable-line import/no-unresolved, import/extensions
                    >
                        <ExampleImage />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsImage.propTypes = propTypes;

export default DocsImage;
