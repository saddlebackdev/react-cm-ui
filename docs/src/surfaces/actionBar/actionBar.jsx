import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
    startCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBarMdSample from './actionBarMdSample';
import ActionBarSmSample from './actionBarSmSample';
import ActionBarBasicSearchMdSample from './actionBarBasicSearchMdSample';
import ActionBarBasicSearchSmSample from './actionBarBasicSearchSmSample';
import ComponentApi from '../../global/componentApi';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/actionBar/actionBar';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsActionBar(props) {
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
                        anchorLink="example"
                        variant="h2"
                    >
                        Standard Action Bar
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        Small (<code>sm</code>) breakpoint.
                    </Typography>
                </MarkdownContainer>

                <Example
                    iframe
                    maxWidth={397}
                    rawCode={require('!!raw-loader!./actionBarMdSample').default}
                    title="ActionBar Small (sm) Breakpoint Example"
                >
                    <ActionBarSmSample />
                </Example>

                <MarkdownContainer>
                    <Typography
                        variant="body1"
                    >
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        Medium (<code>md</code>) breakpoint.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./actionBarSmSample').default}
                >
                    <ActionBarMdSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Basic Search
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        Small (<code>sm</code>) breakpoint.
                    </Typography>
                </MarkdownContainer>

                <Example
                    iframe
                    maxWidth={397}
                    rawCode={require('!!raw-loader!./actionBarBasicSearchSmSample').default}
                    title="ActionBar Small (sm) Breakpoint Example"
                >
                    <ActionBarBasicSearchSmSample />
                </Example>

                <MarkdownContainer>
                    <Typography
                        variant="body1"
                    >
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        Medium (<code>md</code>) breakpoint.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./actionBarBasicSearchMdSample.jsx').default}
                >
                    <ActionBarBasicSearchMdSample />
                </Example>

                <ComponentApi
                    docs={[
                        rootDoc,
                    ]}
                />

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsActionBar.propTypes = propTypes;

export default DocsActionBar;
