import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
    startCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import Example from '../../global/example';
import AppBarSample from './appBarSample';
import AppBarSamplePlacement from './appBarSamplePlacement';
import AppBarSampleClasses from './appBarSampleClasses';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
/* eslint-disable import/no-named-default, import/extensions */
import { default as appBarDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/appBar/appBar';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsAppBar(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const {
        description,
        displayName,
    } = appBarDoc;

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
                        anchorLink="example"
                        variant="h2"
                    >
                        Simple App Bar
                    </Heading>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./appBarSample.jsx').default}>
                    <AppBarSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Children Placement
                    </Heading>
                    <Typography variant="body1">
                        The children position can be set using the&nbsp;
                        <code>placement</code>
                        &nbsp;
                        prop.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./appBarSamplePlacement.jsx').default}>
                    <AppBarSamplePlacement />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Overriding Styles
                    </Heading>
                    <Typography variant="body1">
                        We can override the styles using the&nbsp;
                        <code>classes</code>
                        &nbsp;
                        prop.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./appBarSampleClasses.jsx').default}>
                    <AppBarSampleClasses />
                </Example>

                <ComponentApi
                    docs={[
                        appBarDoc,
                    ]}
                />

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsAppBar.propTypes = propTypes;

export default DocsAppBar;
