import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
    get,
} from 'lodash';
import Classnames from 'classnames';
import Typography from '../../dataDisplay/typography';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';
import {
    BEM_BLOCK_NAME,
} from './breadcrumbsConstants';
import {
    routesToArray,
    getPathNameBreadcrumbs,
} from './breadcrumbsUtils';

const propTypes = {
    /**
     * Instance of react-router core, breadcrums will be generated automatically using the routes object structure, location and push function.
     */
    router: PropTypes.shape({}).isRequired,
    /**
     * When false, is going to show only the previous route from the current location
     */
    showOnlyPreviousRoute: PropTypes.bool,
    /**
     * Applied for all the breadcrumbs but the last item
     */
    separatorIconType: PropTypes.string,
};

const defaultProps = {
    showOnlyPreviousRoute: false,
    separatorIconType: 'chevron-left',
};

const useStyles = makeStyles((theme) => {
    // console.log('theme', theme);
    const textColorPrimary = get(theme, 'palette.text.primary');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const fontWeightRegular = get(theme, 'typography.fontWeightRegular');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    return {
        root: {
            overflow: 'hidden',
            width: '100%',
            [`& .${BEM_BLOCK_NAME}--breadcrumbs`]: { // here:: tengo que acomodar las classes
                overflow: 'hidden',
                padding: 0,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                margin: '-3px 0 -3px 0',
                [`& .${BEM_BLOCK_NAME}--breadcrumb`]: {
                    cursor: 'pointer',
                    display: 'inline',
                    padding: '0 5px 0 0',
                    transition: 'color 0.1s',
                    '&:hover': {
                        '& .icon-use-path': {
                            fill: colorHighlight,
                        },
                    },
                    '&-is-last': {
                        '& div': {
                            fontWeight: fontWeightRegular,
                        },
                        [`& .${BEM_BLOCK_NAME}--breadcrumb-separator`]: {
                            padding: '0 5px 0 0',
                        },
                    },
                    '& .MuiTypography-root': {
                        display: 'inline',
                        '& > div': {
                            display: 'inline',
                        },
                    },
                },
                // --------------------------------------------------------------------
                '&:hover': {
                    // border: '1px solid red',
                    [`& .${BEM_BLOCK_NAME}--breadcrumb-is-last`]: {
                        color: textColorSecondary,
                        '&:hover': {
                            color: textColorPrimary,
                        },
                    },
                },
            },
        },
    };
});

function Breadcrumbs(props) {
    const {
        separatorIconType,
        showOnlyPreviousRoute,
        router,
    } = props;

    const classes = useStyles();

    const [existentRoutes, setExistentRoutes] = useState([]);
    const [pathBreadcrumbs, setPathBreadcrumbs] = useState([]);

    const pathName = get(router, 'location.pathname');
    const pathParams = get(router, 'params');
    const routerPushFunction = get(router, 'push');

    const prevPathName = useRef();

    // console.log('BREADCRUMBS', pathName, '\nrouter', router, '\n',
    // existentRoutes
    // );

    useEffect(() => {
        const routes = get(router, 'routes', []);
        const currentExistentRoutes = routesToArray(routes);
        // console.log('DID_MOUNT_BREADCRUMBS');
        setExistentRoutes(currentExistentRoutes);
        const currentBreadCrumbs = getPathNameBreadcrumbs(
            pathName,
            pathParams,
            routerPushFunction,
            currentExistentRoutes,
        );
        // console.log('DID_MOUNT_BREADCRUMBS', pathName, currentBreadCrumbs);
        setPathBreadcrumbs(currentBreadCrumbs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // didMount

    useEffect(() => {
        const shouldUpdatePathBreadcrumbs = prevPathName.current &&
            prevPathName.current !== pathName;
        // console.log('SHOULD_UPDATE_BREADCRUMBS', shouldUpdatePathBreadcrumbs, prevPathName.current, pathName);
        if (shouldUpdatePathBreadcrumbs) {
            const currentBreadCrumbs = getPathNameBreadcrumbs(
                pathName,
                pathParams,
                routerPushFunction,
                existentRoutes,
            );
            // console.log('currentBreadCrumbs', currentBreadCrumbs);
            setPathBreadcrumbs(currentBreadCrumbs);
        }
        prevPathName.current = pathName;
        // console.log('DID_UPDATE_BREADCRUMBS');
    }); // didUpdate

    const lastSeparator = '/';
    // console.log('pathBreadcrumbs', pathBreadcrumbs);
    return (
        <div className={classes.root}>
            <ul
                aria-label="breadcrumbs"
                className={`${BEM_BLOCK_NAME}--breadcrumbs`}
            >
                {pathBreadcrumbs
                    .map((breadcrumb, index) => {
                        const {
                            onBreadcrumbClick,
                            to,
                            title,
                        } = breadcrumb;

                        const isLast = index === pathBreadcrumbs.length - 1;
                        const isPrevious = index === pathBreadcrumbs.length - 2;
                        const breadcrumbClasses = Classnames(
                            `${BEM_BLOCK_NAME}--breadcrumb`, {
                                [`${BEM_BLOCK_NAME}--breadcrumb-is-last`]: isLast,
                                [`${BEM_BLOCK_NAME}--breadcrumb-is-previous`]: isPrevious,
                            },
                        );

                        return (
                            <li
                                key={`${BEM_BLOCK_NAME}--breadcruumb-key-${to}`}
                                onClick={onBreadcrumbClick}
                                role="presentation"
                                className={breadcrumbClasses}
                            >
                                <Typography variant="h3">
                                    <div className={`${BEM_BLOCK_NAME}--breadcrumb-separator`}>
                                        {isLast ? (
                                            lastSeparator
                                        ) : (
                                            <Icon
                                                type={separatorIconType}
                                                size="xsmall"
                                            />
                                        )}
                                    </div>
                                    <div className={`${BEM_BLOCK_NAME}--breadcrumb-to`}>
                                        {title}
                                    </div>
                                </Typography>
                            </li>
                        );
                    })
                    .filter((breadcrumb, index) => {
                        const shouldRenderBreadcrumb = !showOnlyPreviousRoute || (
                            showOnlyPreviousRoute && (
                                index === pathBreadcrumbs.length - 1 ||
                                index === pathBreadcrumbs.length - 2
                            )
                        );

                        return shouldRenderBreadcrumb;
                    })}
            </ul>
        </div>
    );
}

Breadcrumbs.defaultProps = defaultProps;
Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
