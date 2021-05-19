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
import ExampleTelephoneLink from './examples/exampleTelephoneLink';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personCoreMilestones/personCoreMilestones';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsTelephoneLink(props) {
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
                        anchorLink="record-types"
                        variant="h2"
                    >
                        Telephone Link
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleTelephoneLink').default}
                    >
                        <ExampleTelephoneLink />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsTelephoneLink.propTypes = propTypes;

export default DocsTelephoneLink;
