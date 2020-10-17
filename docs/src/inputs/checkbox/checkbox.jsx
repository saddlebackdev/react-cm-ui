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
import ExampleMiniCheckbox from './examples/exampleMiniCheckbox';
import ExampleMiniCheckboxTotals from './examples/exampleMiniCheckboxTotals';
import ExampleMiniToggle from './examples/exampleMiniToggle';
import ExampleStandardCheckbox from './examples/exampleStandardCheckbox';
import ExampleStandardToggle from './examples/exampleStandardToggle';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/button/button';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsCheckbox(props) {
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
                        anchorLink="standard-checkbox"
                        variant="h2"
                    >
                        Standard Checkbox
                    </Heading>

                    <Typography>
                        General Use
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleStandardCheckbox').default}
                    >
                        <ExampleStandardCheckbox />
                    </Example>

                    <Heading
                        anchorLink="mini-checkbox"
                        variant="h2"
                    >
                        Mini Checkbox
                    </Heading>

                    <Typography>
                        Used in the Filters Rail and Settings Rail
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleMiniCheckbox').default}
                    >
                        <ExampleMiniCheckbox />
                    </Example>

                    <Heading
                        anchorLink="mini-checkbox-with-totals"
                        variant="h2"
                    >
                        Mini Checkbox with Totals
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleMiniCheckboxTotals').default}
                    >
                        <ExampleMiniCheckboxTotals />
                    </Example>

                    <Heading
                        anchorLink="standard-toggle"
                        variant="h2"
                    >
                        Standard Toggle
                    </Heading>

                    <Typography>
                        General Use
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleStandardToggle').default}
                    >
                        <ExampleStandardToggle />
                    </Example>

                    <Heading
                        anchorLink="mini-toggle"
                        variant="h2"
                    >
                        Mini Toggle
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleMiniToggle').default}
                    >
                        <ExampleMiniToggle />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsCheckbox.propTypes = propTypes;

export default DocsCheckbox;
