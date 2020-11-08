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
import TabsSample from './tabsSample';
import TabsSampleWithContent from './tabsSampleWithContent';
import TabsSampleSelectedTabKey from './tabsSampleSelectedTabKey';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/tabs/tabs';

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
                        Simple Tabs panel
                    </Heading>

                    <Typography variant="body1">
                        A simple Tabs panel.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./tabsSample.jsx').default}>
                    <TabsSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Panel With Content
                    </Heading>
                    <Typography variant="body1">
                        The panel content can be set inside the tab item object.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./tabsSampleWithContent.jsx').default}>
                    <TabsSampleWithContent />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Selected Tab Key
                    </Heading>
                    <Typography variant="body1">
                        The selected tab can programmatically be changed.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./tabsSampleSelectedTabKey.jsx').default}>
                    <TabsSampleSelectedTabKey />
                </Example>

                <ComponentVersionIdentifier pathname={pathname} />
            </Main.Content>
        </Main>
    );
}

TabsExample.propTypes = propTypes;

export default TabsExample;
