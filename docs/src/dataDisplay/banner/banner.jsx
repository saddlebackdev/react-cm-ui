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
import ExampleAlertBanner from './examples/exampleAlertBanner';
import ExampleInformativeBanner from './examples/exampleInformativeBanner';
import ExampleConfirmingBanner from './examples/exampleConfirmingBanner';
import ExampleStandardBanner from './examples/exampleStandardBanner';
import ExampleWarningBanner from './examples/exampleWarningBanner';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/banner/banner';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsBanner(props) {
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
                        anchorLink="alert-banner"
                        variant="h2"
                    >
                        Standard Banner
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleStandardBanner').default}
                    >
                        <ExampleStandardBanner />
                    </Example>

                    <Heading
                        anchorLink="alert-banner"
                        variant="h2"
                    >
                        Alert Banner
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleAlertBanner').default}
                    >
                        <ExampleAlertBanner />
                    </Example>

                    <Heading
                        anchorLink="alert-banner"
                        variant="h2"
                    >
                        Warning Banner
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleWarningBanner').default}
                    >
                        <ExampleWarningBanner />
                    </Example>

                    <Heading
                        anchorLink="alert-banner"
                        variant="h2"
                    >
                        Informative Banner
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleInformativeBanner').default}
                    >
                        <ExampleInformativeBanner />
                    </Example>

                    <Heading
                        anchorLink="alert-banner"
                        variant="h2"
                    >
                        Confirming Banner
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleConfirmingBanner').default}
                    >
                        <ExampleConfirmingBanner />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsBanner.propTypes = propTypes;

export default DocsBanner;
