import React from 'react';
import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import Main from '../../global/main';
import Example from '../../global/example';
import MarkdownContainer from '../../global/markdownContainer';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Heading from '../../global/heading';
import ComponentApi from '../../global/componentApi';
import SectionalTabsSample from './sectionalTabsSample';
import SectionalTabsSampleWithContent from './sectionalTabsSampleWithContent';
import SectionalTabsSampleSelectedTabKey from './sectionalTabsSampleSelectedTabKey';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/sectionalTabs/sectionalTabs';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function TabsExample(props) {
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

                    <Heading anchorLink="children" variant="h2">
                        Simple Sectional Tabs panel
                    </Heading>

                    <Typography variant="body1">
                        A simple Sectional Tabs panel.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./sectionalTabsSample.jsx').default}>
                    <SectionalTabsSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Panel With Content
                    </Heading>
                    <Typography variant="body1">
                        The panel content can be set inside the tab item object.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./sectionalTabsSampleWithContent.jsx').default}>
                    <SectionalTabsSampleWithContent />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Selected Tab Key
                    </Heading>
                    <Typography variant="body1">
                        The selected tab can programmatically be changed.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./sectionalTabsSampleSelectedTabKey.jsx').default}>
                    <SectionalTabsSampleSelectedTabKey />
                </Example>

                <ComponentApi docs={[rootDoc]} />

                <ComponentVersionIdentifier pathname={pathname} />

            </Main.Content>

        </Main>
    );
}

TabsExample.propTypes = propTypes;

export default TabsExample;
