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
import ExampleButtonsBehaviors from './examples/exampleButtonsBehaviors';
import ExampleIconBehaviors from './examples/exampleIconBehaviors';
import ExampleSelectBehaviors from './examples/exampleSelectBehaviors';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/tooltip/tooltip';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsTooltip(props) {
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
                        anchorLink="solid-button"
                        variant="h2"
                    >
                        Behaviors
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Tooltips distinguish actions with related iconography.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleIconBehaviors').default}
                    >
                        <ExampleIconBehaviors />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Tooltips describe differences between similar elements.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonsBehaviors').default}
                    >
                        <ExampleButtonsBehaviors />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        On desktop, tooltips appear in the center of click targets and stay in
                        place while cursor moves with the target.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSelectBehaviors').default}
                    >
                        <ExampleSelectBehaviors />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        If a Tooltip is neeeded for a small object or a text string, it attaches to
                        the curosr instead of the target.
                    </Typography>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsTooltip.propTypes = propTypes;

export default DocsTooltip;
