import React from 'react';
import { Breadcrumbs } from 'react-cm-ui';
import ROUTER from '../../../../src/navigation/breadcrumbs/__test__/breadcrumbsMockups';

function BreadcrumbsSample() {
    return (
        <Breadcrumbs
            router={ROUTER}
        />
    );
}

export default BreadcrumbsSample;
