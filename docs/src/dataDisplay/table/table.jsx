import { Typography } from 'react-cm-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import Example from '../../global/example';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import ExampleMedium from './examples/exampleMedium';
import ExampleSmall from './examples/exampleSmall';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/table';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsTable(props) {
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
                        anchorLink="children"
                        variant="h2"
                    >
                        Medium Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Default
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleMedium').default}
                    >
                        <ExampleMedium />
                    </Example>
                </MarkdownContainer>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Small Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Custom
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSmall').default}
                    >
                        <ExampleSmall />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsTable.propTypes = propTypes;

export default DocsTable;
