/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/breadcrumbs/__test__/breadcrumbsUtils.test.js
 */
import {
    getPathNameBreadcrumbs,
    parsePath,
    routesToArray,
} from '../breadcrumbsUtils';
import ROUTER from './breadcrumbsMockups';

describe('breadcrumbUtils.js', () => {
    describe('getPathNameBreadcrumbs function', () => {
        it('returns all valid breadcrumbs given the router location information', () => {
            const validRoutes = routesToArray(ROUTER.routes);
            let breadcrumbs = getPathNameBreadcrumbs(
                '/my-section',
                {},
                jest.fn(),
                validRoutes,
            );

            expect(breadcrumbs.length).toBe(2);

            expect(breadcrumbs[0].to).toBe('/');
            expect(breadcrumbs[0].originalPath).toBe('/');
            expect(breadcrumbs[0].title).toBe('Home');

            expect(breadcrumbs[1].to).toBe('/my-section');
            expect(breadcrumbs[1].originalPath).toBe('/my-section');
            expect(breadcrumbs[1].title).toBe('My Section');

            breadcrumbs = getPathNameBreadcrumbs(
                '/my-section/sub-section/some-status/cool-stuff',
                {},
                jest.fn(),
                validRoutes,
            );

            expect(breadcrumbs[4].to).toBe('/my-section/sub-section/some-status/cool-stuff');
            expect(breadcrumbs[4].originalPath).toBe('/my-section/sub-section/some-status/cool-stuff');
            expect(breadcrumbs[4].title).toBe('Cool Stuff');
        });
    });
    describe('parsePath function', () => {
        it('transforms the routes structure into an array', () => {
            let parsedPath = parsePath('/some/path/with/params', {});
            expect(parsedPath).toBe(parsedPath);

            parsedPath = parsePath('/some/path/with/params', { param1: 'params' });
            expect(parsedPath).toBe('/some/path/with/:param1');

            parsedPath = parsePath('/some/path/with/params', { param1: 'with', param2: 'params' });
            expect(parsedPath).toBe('/some/path/:param1/:param2');

            parsedPath = parsePath('/some/path/with/:param1', { param1: 'params' }, false);
            expect(parsedPath).toBe('/some/path/with/params');

            parsedPath = parsePath('/some/path/:param1/:param2', { param1: 'with', param2: 'params' }, false);
            expect(parsedPath).toBe('/some/path/with/params');
        });
    });
    describe('routesToArray function', () => {
        it('transform the routes structure into an array', () => {
            const validRoutes = routesToArray(ROUTER.routes);

            expect(validRoutes).toEqual([
                { path: '/', title: 'Home' },
                { path: '/my-section', title: 'My Section' },
                { path: '/my-section/sub-section', title: 'Very Long Sub Section Title So It Will Not Be Entirely Displayed' },
                { path: '/my-section/sub-section/some-status', title: 'Some Status' },
                { path: '/my-section/sub-section/some-status/cool-stuff', title: 'Cool Stuff' },
            ]);
        });

        it('takes the final pathname section as title when the route title is not set', () => {
            const routes = [
                {
                    path: '/',
                    indexRoute: {},
                    childRoutes: [
                        {
                            path: 'my-section',
                            indexRoute: {},
                            childRoutes: [
                                {
                                    path: 'sub-section',
                                    indexRoute: {},
                                    childRoutes: [
                                        {
                                            path: 'some-status',
                                            indexRoute: {},
                                            childRoutes: [
                                                { path: 'cool-stuff' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ];
            const validRoutes = routesToArray(routes);

            expect(validRoutes).toEqual([
                { path: '/', title: 'Home' },
                { path: '/my-section', title: 'my-section' },
                { path: '/my-section/sub-section', title: 'sub-section' },
                { path: '/my-section/sub-section/some-status', title: 'some-status' },
                { path: '/my-section/sub-section/some-status/cool-stuff', title: 'cool-stuff' },
            ]);
        });

        it('doesn\'t include the index route when is not set in the route group', () => {
            const routes = [
                {
                    path: '/',
                    childRoutes: [
                        {
                            path: 'my-section',
                            indexRoute: {
                                title: 'My Section',
                            },
                            childRoutes: [
                                {
                                    path: 'sub-section',
                                    childRoutes: [
                                        {
                                            path: 'some-status',
                                            childRoutes: [
                                                { path: 'cool-stuff', title: 'Cool Stuff' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ];
            const validRoutes = routesToArray(routes);

            expect(validRoutes).toEqual([
                { path: '/my-section', title: 'My Section' },
                { path: '/my-section/sub-section/some-status/cool-stuff', title: 'Cool Stuff' },
            ]);
        });

        it('handles multiple nested route groups', () => {
            const routes = [
                {
                    path: '/',
                    childRoutes: [
                        {
                            path: 'my-section',
                            indexRoute: {
                                title: 'My Section',
                            },
                            childRoutes: [
                                {
                                    path: 'sub-section',
                                    childRoutes: [
                                        {
                                            path: 'some-status',
                                            childRoutes: [
                                                { path: 'cool-stuff', title: 'Cool Stuff' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: 'not-my-section',
                            indexRoute: {
                                title: 'Not My Section',
                            },
                            childRoutes: [
                                {
                                    path: 'not-my-sub-section',
                                    childRoutes: [
                                        {
                                            path: 'not-my-some-status',
                                            childRoutes: [
                                                { path: 'not-my-cool-stuff', title: 'Not My Cool Stuff' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ];
            const validRoutes = routesToArray(routes);

            expect(validRoutes).toEqual([
                { path: '/my-section', title: 'My Section' },
                { path: '/my-section/sub-section/some-status/cool-stuff', title: 'Cool Stuff' },
                { path: '/not-my-section', title: 'Not My Section' },
                { path: '/not-my-section/not-my-sub-section/not-my-some-status/not-my-cool-stuff', title: 'Not My Cool Stuff' },
            ]);
        });

        it('handles routes with optional params', () => {
            const routes = [
                {
                    path: '/',
                    childRoutes: [
                        {
                            path: 'my-section',
                            indexRoute: { title: 'My Section' },
                            childRoutes: [
                                {
                                    path: 'sub-section',
                                    childRoutes: [
                                        {
                                            path: 'some-status',
                                            childRoutes: [
                                                {
                                                    path: 'cool-stuff(/optional_1/:param_1(/optional_2/:param_2))',
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
            ];
            const validRoutes = routesToArray(routes);

            expect(validRoutes).toEqual([
                { path: '/my-section', title: 'My Section' },
                { path: '/my-section/sub-section/some-status/cool-stuff', title: 'Cool Stuff' },
                { path: '/my-section/sub-section/some-status/cool-stuff/optional_1/:param_1', title: 'Cool Stuff' },
                { path: '/my-section/sub-section/some-status/cool-stuff/optional_1/:param_1/optional_2/:param_2', title: 'Cool Stuff' },
            ]);
        });
    });
});
