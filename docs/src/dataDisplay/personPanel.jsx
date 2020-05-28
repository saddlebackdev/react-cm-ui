import {
    Header,
    TitleBar,
    Typography,
} from 'react-cm-ui';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';
import ComponentApi from '../global/componentApi';
import Main from '../global/main';
import Example from '../global/example';
import PersonPanelControlledAccordionExample from './personPanelControlledAccordionExample';
import PersonPanelSimpleExample from './personPanelSimpleExample';

const apiPersonPanel = [
    {
        name: 'className',
        type: 'string',
        default: '',
        description: 'Assign additional class names to the container.',
        allowedTypes: '',
    }, {
        name: 'color',
        type: 'enum',
        default: 'backgroundColorHighlight',
        description: 'Assign an ID.',
        allowedTypes: 'backgroundColorHighlight, backgroundColorStatic',
    }, {
        name: 'id',
        type: 'string',
        default: '',
        description: 'Assign an ID to the container.',
        allowedTypes: '',
    }, {
        name: 'size',
        type: 'number',
        default: '68',
        description: 'Changes the size.',
        allowedTypes: '',
    }, {
        name: 'style',
        type: 'object',
        default: '{}',
        description: 'Assign inline styles the container.',
        allowedTypes: '',
    },
];
const apiPersonPanelSummary = [];
const apiPersonPanelDetails = [];

const useStyles = makeStyles({
    description: {
        margin: '44px 0',
    },
});

function DocsPersonPanel() {
    const classes = useStyles();

    return (
        <Main page="headers">
            <TitleBar title="Person Panel" />

            <Main.Content>
                <Typography
                    className={classes.description}
                    variant="body1"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et fringilla eros.
                    Sed ut fringilla nisi, sed ullamcorper dolor.
                </Typography>

                <Header
                    anchor="simplePersonPanel"
                    size="large"
                    style={{ marginTop: '33px' }}
                >
                    Simple Person Panel
                </Header>

                <Example
                    // eslint-disable-next-line global-require, import/no-webpack-loader-syntax
                    rawCode={require('!!raw-loader!./personPanelSimpleExample').default}
                >
                    <PersonPanelSimpleExample />
                </Example>

                <Header
                    anchor="controlledAccordion"
                    size="large"
                    style={{ marginTop: '33px' }}
                    sub
                >
                    Controlled Accordion
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            Extend the default person panel behavior to create an accordion with the
                            PersonPanel component.
                        </p>
                    </Header.Subheader>
                </Header>

                <Example
                    // eslint-disable-next-line global-require, import/no-webpack-loader-syntax
                    rawCode={require('!!raw-loader!./personPanelControlledAccordionExample').default}
                >
                    <PersonPanelControlledAccordionExample />
                </Example>

                <ComponentApi
                    api={[
                        {
                            heading: 'PersonalPanel Props',
                            props: apiPersonPanel,
                        }, {
                            heading: 'PersonalPanelDetails Props',
                            props: apiPersonPanelDetails,
                        }, {
                            heading: 'PersonalPanelSummary Props',
                            props: apiPersonPanelSummary,
                        },
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsPersonPanel;
