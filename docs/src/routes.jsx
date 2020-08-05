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
                {!isEmpty(levelOne.subSections) ? map(levelOne.subSections, (levelTwo) => (
                    <Route
                        key={`${levelTwo.path}`}
                        path={`${levelTwo.path}`}
                    >
                        {map(levelTwo.items, (levelTwoItem) => (
                            <Route
                                getComponent={(location, callback) => {
                                    import(`./${levelTwo.directory}/${levelTwoItem.component}`)
                                        .then((module) => callback(null, module.default));
                                }}
                                key={`${levelTwoItem.path}`}
                                path={levelTwoItem.path}
                            />
                        ))}
                    </Route>
                )) : map(levelOne.items, (levelOneItem) => (
                    <Route
                        getComponent={(location, callback) => {
                            import(`./${levelOne.directory}/${levelOneItem.component}`)
                                .then((module) => callback(null, module.default));
                        }}
                        key={`${levelOneItem.path}`}
                        path={levelOneItem.path}
                    />
                ))}
            </Route>
        ))}
    </Route>
);

export default routes;
