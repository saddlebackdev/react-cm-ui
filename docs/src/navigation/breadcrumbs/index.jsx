import React from 'react';
import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
    startCase,
} from 'lodash';
import PropTypes from 'prop-types';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Heading from '../../global/heading';
import BreadcrumbsSample from './breadcrumbsSample';
import BreadcrumbsSampleAllRoutes from './breadcrumbsSampleOnlyPreviousRoute';
import BreadcrumbsSampleDividerString from './breadcrumbsSampleDividerString';
import ComponentApi from '../../global/componentApi';
import Example from '../../global/example';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/breadcrumbs/breadcrumbs';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function BreadcrumbsExample(props) {
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

            <TitleBar title={startCase(displayName)} />

            <Main.Content>

                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading anchorLink="children" variant="h2">
                        Breadcrumbs
                    </Heading>

                    <Typography variant="body1">
                        A simple navigation tabs panel.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./breadcrumbsSample').default}>
                    <BreadcrumbsSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Only Previous Route
                    </Heading>
                    <Typography variant="body1">
                        Show only the previous route from the current path location.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./breadcrumbsSampleOnlyPreviousRoute').default}>
                    <BreadcrumbsSampleAllRoutes />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Divider String
                    </Heading>
                    <Typography variant="body1">
                        The default divider string can be modified
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./breadcrumbsSampleDividerString').default}>
                    <BreadcrumbsSampleDividerString />
                </Example>

                <ComponentApi docs={[rootDoc]} />

                <ComponentVersionIdentifier pathname={pathname} />

            </Main.Content>

        </Main>
    );
}

BreadcrumbsExample.propTypes = propTypes;

export default BreadcrumbsExample;
