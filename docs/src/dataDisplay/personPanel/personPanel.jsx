import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Example from '../../global/example';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import PersonPanelControlledAccordionExample from './personPanelControlledAccordionExample';
import PersonPanelSimpleExample from './personPanelSimpleExample';
import PersonPanelCustomColumnsExample from './personPanelCustomColumnsExample';
/* eslint-disable import/no-named-default, import/extensions */
import { default as personPanelDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personPanel/personPanel';
import { default as personPanelDetailsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personPanel/personPanelDetails';
import { default as personPanelSummaryDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personPanel/personPanelSummary';
/* eslint-enable import/no-named-default, import/extensions */

function DocsPersonPanel() {
    const descriptionCopy = personPanelDoc.description;

    return (
        <Main page="headers">
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {descriptionCopy}
                    </Typography>

                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Simple Person Panel
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./personPanelSimpleExample').default}
                    >
                        <PersonPanelSimpleExample />
                    </Example>

                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Controlled Accordion
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Extend the default person panel behavior to create an accordion with the
                        PersonPanel component.
                    </Typography>

                    <Example
                        // eslint-disable-next-line global-require, import/no-webpack-loader-syntax
                        rawCode={require('!!raw-loader!./personPanelControlledAccordionExample').default}
                    >
                        <PersonPanelControlledAccordionExample />
                    </Example>

                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Children
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        PersonPanel children are rendered by being mapped and returned exactly as
                        the consumer has been setup, except for PersonPanelDetails and
                        PersonPanelSummary. The latter are cloned and it their props are passed
                        through.
                    </Typography>

                    <Heading
                        anchorLink="customColumns"
                        variant="h3"
                    >
                        Custom Columns
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The example below shows how you can have a checkbox column to the left and
                        some text to the right of the PersonPanelSummary.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./personPanelCustomColumnsExample').default}
                    >
                        <PersonPanelCustomColumnsExample />
                    </Example>
                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        personPanelDoc,
                        personPanelDetailsDoc,
                        personPanelSummaryDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsPersonPanel;
