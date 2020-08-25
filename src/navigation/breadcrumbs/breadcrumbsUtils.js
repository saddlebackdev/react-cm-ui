import {
    get,
    uniqBy,
    find,
} from 'lodash';

const extractChildRoutes = (route, prefix) => {
    let paths = [];
    const shouldAddIndexRoute = route.indexRoute && route.path;

    if (shouldAddIndexRoute) {
        const indexRouteString = `${prefix}`.replace('//', '/');
        const title = get(route, 'indexRoute.title');
        if (title) {
            // console.log('_extractChildRoutes', title);
        }
        // if (indexRouteString && indexRouteString.includes('active') || indexRouteString.includes('inactive')) {
        //     console.log('indexRouteString', indexRouteString, indexRouteString.split('/').reverse());
        // }
        paths.push({
            path: indexRouteString,
            title: title || indexRouteString.split('/').filter((subPath) => subPath !== '').reverse()[0],
        });
    }

    const childRoutes = route.props && route.props.children ?
        route.props.children :
        route.childRoutes;

    if (childRoutes) {
        if (Array.isArray(childRoutes)) {
            childRoutes.forEach((r) => {
                paths = paths.concat(extractRoute(r, prefix, shouldAddIndexRoute));
            });
        } else {
            paths = paths.concat(extractRoute(childRoutes, prefix, shouldAddIndexRoute));
        }
    }

    return paths;
};

const extractRoute = (route, prefix, shouldAddRoute = true) => {
    const path = route.props && route.props.path ? route.props.path : route.path;
    let paths = [];

    if (!path) {
        if (Array.isArray(route)) {
            route.forEach((r) => {
                paths = paths.concat(extractRoute(r, prefix, shouldAddRoute));
            });

            return paths;
        }
        return extractChildRoutes(route, prefix);
    }
    const currentPath = (
        `${prefix || ''}${path}`.replace(/\/+/g, '/')
    );

    const pathString = `${currentPath.startsWith('/') ? '' : '/'}${currentPath}`;
    // if (!/:|\*/.test(currentPath)) {
    const title = get(route, 'title');
    if (title) {
        // console.log('-extractRoute', title, pathString);
    }
    // if (pathString && pathString.includes('active') || pathString.includes('inactive')) {
    //     console.log('pathString', pathString, pathString.split('/').filter((subPath) => subPath !== '').reverse());
    // }
    if (!route.childRoutes) {
        paths.push({
            path: pathString,
            title: title || pathString.split('/').filter((subPath) => subPath !== '').reverse()[0],
        });
    }

    paths = paths.concat(extractChildRoutes(route, `${currentPath}/`));

    return paths;
};

export const parsePath = (path, params, inversed = true) => {
    const paramsKeys = Object.keys(params);
    let formattedPath = path;
    for (let i = 0; i < paramsKeys.length; i += 1) {
        const currentKey = paramsKeys[i];
        const currentValue = params[currentKey];
        formattedPath = inversed ?
            formattedPath.replace(currentValue, `:${currentKey}`) :
            formattedPath.replace(`:${currentKey}`, currentValue);
    }
    return formattedPath || '';
};

export const getPathPossibleBreadcrumbs = (path) => {
    let auxPath = path;
    const possibleBreadcrumbs = [];
    while (auxPath.includes('/')) {
        const lastSlashIndex = auxPath.lastIndexOf('/');
        auxPath = auxPath.substr(0, lastSlashIndex);
        possibleBreadcrumbs.push(
            auxPath,
        );
    }

    return possibleBreadcrumbs;
};

export const getPathBreadcrumbs = (path, existentRoutes) => {
    const pathPossibleCrumbs = getPathPossibleBreadcrumbs(path);
    const validBreadcrumbs = pathPossibleCrumbs.filter(
        (breadcrumb) => existentRoutes.includes(breadcrumb),
    );

    return validBreadcrumbs;
}

export const getCurrentPathCrumbs = (location, params, existentRoutes = []) => {
    const isThereEnoughInfo = location && params && existentRoutes.length > 0;

    if (!isThereEnoughInfo) {
        return [];
    }

    const formattedPath = parsePath(location.pathname, params);
    const pathBreadcrumbs = getPathBreadcrumbs(formattedPath, existentRoutes);
    return pathBreadcrumbs;
}

export const transformPathsWithOptionalParams = (paths) => {
    let optionalPaths = [];
    const replacements = { '(': '', ')': '' };
    for (let i = 0; i < paths.length; i += 1) {
        const auxPath = paths[i];
        if (auxPath.path.includes('(')) {
            const subPaths = auxPath.path.split('(');
            let pathPrefix = subPaths[0];
            optionalPaths.push({
                path: pathPrefix,
                title: auxPath.title,
            });

            for (let j = 1; j < subPaths.length; j += 1) {
                const pathSufix = subPaths[j];
                let optionalPath;
                const isNestedOptionalPath = pathSufix.includes('))');
                if (isNestedOptionalPath) {
                    const previousSufix = subPaths[j - 1];
                    pathPrefix = `${pathPrefix}${previousSufix}`;
                    optionalPath = `${pathPrefix}${pathSufix}`;
                } else {
                    optionalPath = `${pathPrefix}${pathSufix}`;
                }
                optionalPaths.push({
                    path: optionalPath,
                    title: auxPath.title,
                });
            }
        } else {
            optionalPaths.push(auxPath);
        }
    }
    // console.log('optionalPaths', optionalPaths);
    optionalPaths = optionalPaths
        .map((auxPath) => ({
            ...auxPath,
            path: auxPath.path.replace(/[\(\)]/g, (char) => replacements[char]),
        }))
        .map((auxPath) => {
            // console.log('auxPath', auxPath);
            if (auxPath.path.length > 2) {
                return {
                    ...auxPath,
                    path: auxPath.path.replace(/\/$/, ''),
                };
            }
            return auxPath;
        });

    return optionalPaths;
}

export const routesToArray = (route) => {
    let paths = [];
    if (Array.isArray(route)) {
        route.forEach((r) => {
            paths = paths.concat(extractRoute(r));
        });
    } else {
        paths = paths.concat(extractRoute(route));
    }
    paths = transformPathsWithOptionalParams(paths);
    paths = uniqBy(paths, 'path');
    // for (let i = 0; i < paths.length - 1; i++) {
    //     let counter = 0;
    //     for (let j = i+1; j < paths.length; j++) {
    //         if (paths[i].path === paths[j].path) {
    //             counter++;
    //         }
    //     }
    //     if (counter > 0) {
    //         console.log('REPEATED', paths[i]);
    //     }
    // }
    // console.log('ROUTES_TO_ARRAY', paths);
    // console.log('----------------------------------------------------------------------------------------------')
    paths.forEach((auxPath) => {
        if (auxPath.path.includes('ministries-central')) {
            console.log('path', auxPath);
        }
    });

    return paths;
};

export const getPathNameBreadcrumbs = (pathName, pathParams, routerPushFunction, existentRoutes) => {
    const originalPath = parsePath(pathName, pathParams);
    // console.log('PATHS:', '\n', originalPath, '\n', pathName, '\n\n');
    const pathNames = pathName.split('/').filter((x) => x);
    const originalPathNames = originalPath.split('/').filter((x) => x);

    const pathBreadcrumbs = pathNames
        .reduce((currentBreadcrumbs, path, index) => {
            const reverseParsedPath = `/${originalPathNames.slice(0, index + 1).join('/')}`;
            // const doesPathExist = existentRoutes.includes(reverseParsedPath);
            const existenPath = find(existentRoutes, { path: reverseParsedPath });
            if (existenPath) {
                const to = `/${pathNames.slice(0, index + 1).join('/')}`;
                currentBreadcrumbs.push({
                    to,
                    originalPath: reverseParsedPath,
                    title: existenPath.title,
                    onBreadcrumbClick: () => routerPushFunction(to),
                });
            }
            return currentBreadcrumbs;
        }, [{
            to: '/',
            reverseParsedPath: '/',
            title: 'Home',
            onBreadcrumbClick: () => routerPushFunction('/'),
        }]);

    return pathBreadcrumbs;
};
