import React from 'react';
import { Breadcrumbs } from 'react-cm-ui';

const router = { // Router mockup
    location: {
        pathname: '/my-section/sub-section/some-status/cool-stuff',
    },
    params: {},
    push: (to) => { alert(`it would push to: ${to}`); },
    routes: [
        {
            path: '/',
            indexRoute: {
                title: 'Home',
            },
            childRoutes: [
                {
                    path: 'my-section',
                    indexRoute: {
                        title: 'My Section',
                    },
                    childRoutes: [
                        {
                            path: 'sub-section',
                            indexRoute: {
                                title: 'Sub Section',
                            },
                            childRoutes: [
                                {
                                    path: 'some-status',
                                    indexRoute: {
                                        title: 'Some Status',
                                    },
                                    childRoutes: [
                                        {
                                            path: 'cool-stuff',
                                            title: 'Cool Stuff',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

function BreadcrumbsSample() {
    return (
        <Breadcrumbs
            router={router}
        />
    );
}

export default BreadcrumbsSample;
