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
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import ExampleSnackbar from './examples/exampleSnackbar';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/feedback/snackbar/snackbar';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsSnackbar(props) {
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
                        anchorLink="left-aligned-modal"
                        variant="h2"
                    >
                        Left Aligned Modal
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Used in situations when 2 or more data capture elements are needed that
                        differ in component type and or context. Exceptions to these principles are
                        rare.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSnackbar').default}
                    >
                        <ExampleSnackbar />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsSnackbar.propTypes = propTypes;

export default DocsSnackbar;
