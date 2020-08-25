import React from 'react';
import {
    Card,
    Header,
    TitleBar,
    Breadcrumbs,
    Typography,
} from 'react-cm-ui';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import Heading from '../../global/heading';
import BreadcrumbsSample from './breadcrumbsSample';
import BreadcrumbsSampleAllRoutes from './breadcrumbsSampleOnlyPreviousRoute';
import BreadcrumbsSampleSeparatorIcon from './breadcrumbsSampleSeparatorIcon';
import ComponentApi from '../../global/componentApi';
import Example from '../../global/example';
// eslint-disable-next-line import/no-named-default
import { default as breadcrumbsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/breadcrumbs/index.jsx';

function BreadcrumbsExample() {
    return (
        <Main page="headers">
            <TitleBar title="Breadcrumbs" />
            <Main.Content>

                <MarkdownContainer>
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
                        Separator Icon Type
                    </Heading>
                    <Typography variant="body1">
                        The defaul separator icon type can be changed for one of the existent types in the icon section.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./breadcrumbsSampleSeparatorIcon').default}>
                    <BreadcrumbsSampleSeparatorIcon />
                </Example>

                <ComponentApi docs={[breadcrumbsDoc]} />
            </Main.Content>
        </Main>
    );
}

export default BreadcrumbsExample;
