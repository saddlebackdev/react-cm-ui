import React from 'react';
import {
    Card,
    Header,
    TitleBar,
    Breadcrumbs,
} from 'react-cm-ui';
import Main from '../../global/main';
import {
    breadcrumbsNameMap,
    pathBreadcrumbs,
} from './breadcrumbsConstants';

function BreadcrumbsExample() {
    return (
        <Main page="headers">
            <TitleBar title="Breadcrumbs" />
            <Card>
                <Header size="large">Props</Header>
            </Card>
            <Breadcrumbs
                nameMap={breadcrumbsNameMap}
                pathBreadcrumbs={pathBreadcrumbs}
                separator="/"
            />
        </Main>
    );
}

export default BreadcrumbsExample;
