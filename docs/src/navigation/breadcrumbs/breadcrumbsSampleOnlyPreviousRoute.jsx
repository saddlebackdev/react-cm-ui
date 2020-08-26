import React from 'react';
import { Breadcrumbs } from 'react-cm-ui';
import ROUTER from '../../../../src/navigation/breadcrumbs/__test__/breadcrumbsMockups';

function BreadcrumbsSampleAllRoutes() {
    return (
        <Breadcrumbs
            router={ROUTER}
            showOnlyPreviousRoute
        />
    );
}

export default BreadcrumbsSampleAllRoutes;
