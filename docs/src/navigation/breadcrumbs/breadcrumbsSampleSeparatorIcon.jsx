import React from 'react';
import { Breadcrumbs } from 'react-cm-ui';
import ROUTER from '../../../../src/navigation/breadcrumbs/__test__/breadcrumbsMockups';

function BreadcrumbsSampleSeparatorIcon() {
    return (
        <Breadcrumbs
            router={ROUTER}
            separatorIconType="caret-right"
        />
    );
}

export default BreadcrumbsSampleSeparatorIcon;
