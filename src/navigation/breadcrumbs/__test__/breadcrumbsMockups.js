export const ROUTER = {
    location: {
        pathname: '/my-section/sub-section/some-status/cool-stuff',
    },
    params: {},
    push: () => {},
    routes: [
        {
            path: '/',
            title: 'Home',
            indexRoute: {},
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

export const a = '';