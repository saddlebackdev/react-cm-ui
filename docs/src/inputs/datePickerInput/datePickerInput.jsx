import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import { withRouter } from 'react-router';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleDatePickerInputBasic from './examples/exampleDatePickerInputBasic';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/datePickerInput/datePickerInput';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsDatePickerInput(props) {
    const {
        location: {
            pathname,
        },
    } = props;

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
                        anchorLink="default-date-picker-input"
                        variant="h2"
                    >
                        Default DatePickerInput
                    </Heading>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDatePickerInputBasic').default}
                >
                    <ExampleDatePickerInputBasic />
                </Example>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsDatePickerInput.propTypes = propTypes;

export default withRouter(DocsDatePickerInput);
