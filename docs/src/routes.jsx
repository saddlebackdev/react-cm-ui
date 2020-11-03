import {
    isEmpty,
    map,
} from 'lodash';
import { IndexRoute, Route } from 'react-router';
import React from 'react';
import CoreApp from './app/app';
import { navigationItems } from './app/navigationConstants';

const routes = (
    <Route path="/" component={CoreApp}>
        <IndexRoute
            getComponent={(location, callback) => {
                import('./app/home')
                    .then((module) => callback(null, module.default));
            }}
        />

        {map(navigationItems, (levelOne) => (
            <Route
                key={`${levelOne.path}`}
                path={`${levelOne.path}`}
            >
                {map(levelOne.levelTwo, (levelTwo) => (
                    <Route
                        getComponent={!levelTwo.levelThree ? (location, callback) => {
                            import(`./${levelOne.directory}/${levelTwo.component}`)
                                .then((module) => callback(null, module.default));
                        } : null}
                        key={`${levelTwo.path}`}
                        path={`${levelTwo.path}`}
                    >
                        {levelTwo.levelThree && map(levelTwo.levelThree, (levelThree) => (
                            <Route
                                key={`${levelThree.path}`}
                                path={levelThree.path}
                            >
                                <IndexRoute
                                    getComponent={(location, callback) => {
                                        import(`./${levelTwo.directory}/${levelThree.component}`)
                                            .then((module) => callback(null, module.default));
                                    }}
                                />

                                {levelThree.levelFour && map(levelThree.levelFour, (levelFour) => (
                                    <Route
                                        getComponent={(location, callback) => {
                                            import(`./${levelTwo.directory}/${levelThree.component}/${levelFour.component}`)
                                                .then((module) => callback(null, module.default));
                                        }}
                                        key={`${levelFour.path}`}
                                        path={levelFour.path}
                                    />
                                ))}
                            </Route>
                        ))}
                    </Route>
                ))}
            </Route>
        ))}
    </Route>
);

console.log(routes);

export default routes;
