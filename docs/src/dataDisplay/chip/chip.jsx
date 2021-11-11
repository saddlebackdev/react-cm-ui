import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleChip from './examples/exampleChip';
import ExampleDeletableChip from './examples/exampleDeletableChip';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/chip/chip';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsChip(props) {
    const {
        location: {
            pathname,
        },
    } = props;

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
                        anchorLink="address"
                        variant="h2"
                    >
                        Chips
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleChip').default}
                    >
                        <ExampleChip />
                    </Example>

                    <Heading
                        anchorLink="address"
                        variant="h2"
                    >
                        Deletable Chips
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDeletableChip').default}
                    >
                        <ExampleDeletableChip />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsChip.propTypes = propTypes;

export default DocsChip;
