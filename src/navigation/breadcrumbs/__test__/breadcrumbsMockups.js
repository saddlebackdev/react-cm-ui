export default { // Router mockup
    location: {
        pathname: '/my-section/sub-section/some-status/cool-stuff',
    },
    params: {},
    // eslint-disable-next-line no-console
    push: (to) => { console.log(`it would push to: ${to}`); },
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
                                title: 'Very Long Sub Section Title So It Will Not Be Entirely Displayed',
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
