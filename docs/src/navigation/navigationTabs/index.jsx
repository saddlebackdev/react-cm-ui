import React from 'react';
import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import {
    startCase,
    camelCase,
} from 'lodash';
import Main from '../../global/main';
import Example from '../../global/example';
import MarkdownContainer from '../../global/markdownContainer';
import Heading from '../../global/heading';
import ComponentApi from '../../global/componentApi';
import NavigationTabsSample from './navigationTabsSample';
import NavigationTabsSampleWithContent from './navigationTabsSampleWithContent';
import NavigationTabsSampleSelectedTabKey from './navigationTabsSampleSelectedTabKey';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/navigationTabs/tabs';

function TabsExample() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <TitleBar title={startCase(displayName)} />
            <Main.Content>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Simple Navigation Tabs panel
                    </Heading>
                    <Typography variant="body1">
                        A simple navigation tabs panel.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./navigationTabsSample.jsx').default}>
                    <NavigationTabsSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Tabs Panel With Content
                    </Heading>
                    <Typography variant="body1">
                        A navigation tabs panel rendering content set inside the tab item object.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./navigationTabsSampleWithContent.jsx').default}>
                    <NavigationTabsSampleWithContent />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Selected Tab Key
                    </Heading>
                    <Typography variant="body1">
                        The selected tab can programmatically be changed.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./navigationTabsSampleSelectedTabKey.jsx').default}>
                    <NavigationTabsSampleSelectedTabKey />
                </Example>

                <ComponentApi docs={[rootDoc]} />
            </Main.Content>
        </Main>
    );
}

export default TabsExample;
