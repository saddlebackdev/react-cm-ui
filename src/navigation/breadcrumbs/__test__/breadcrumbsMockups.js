export default { // Router mockup
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
