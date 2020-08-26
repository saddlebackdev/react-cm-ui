import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Classnames from 'classnames';
import Typography from '../../dataDisplay/typography';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';
import { BEM_NAVIGATION_BREADCRUMBS } from '../../global/constants';
import {
    routesToArray,
    getPathNameBreadcrumbs,
} from './breadcrumbsUtils';

const propTypes = {
    /**
     * Instance of react-router core,
     * breadcrums will be generated automatically using the routes object structure,
     * location and push function.
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
    const textColorPrimary = get(theme, 'palette.text.primary');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const fontWeightRegular = get(theme, 'typography.fontWeightRegular');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    return {
        root: {
            overflow: 'hidden',
            width: '100%',
            [`& .${BEM_NAVIGATION_BREADCRUMBS}--list`]: {
                overflow: 'hidden',
                padding: 0,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                margin: '-3px 0 -3px 0',
                [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb`]: {
                    cursor: 'pointer',
                    display: 'inline',
                    padding: ({ showOnlyPreviousRoute }) => (showOnlyPreviousRoute ? '0 5px 0 0' : '0 10px 0 0'),
                    transition: 'color 0.1s',
                    '&:hover': {
                        '& .icon-use-path': {
                            fill: colorHighlight,
                        },
                    },
                    '&_is_last': {
                        '& div': {
                            fontWeight: fontWeightRegular,
                        },
                        [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator`]: {
                            padding: '0 5px 0 0',
                        },
                    },
                    [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_typography`]: {
                        display: 'inline',
                        '& > div': {
                            display: 'inline',
                        },
                    },
                },
                '&:hover': {
                    [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_is_last`]: {
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

    const classes = useStyles(props);
    const [existentRoutes, setExistentRoutes] = useState([]);
    const [pathBreadcrumbs, setPathBreadcrumbs] = useState([]);
    const pathName = get(router, 'location.pathname');
    const pathParams = get(router, 'params');
    const prevPathName = useRef();
    const routerPushFunction = get(router, 'push');

    useEffect(() => {
        const routes = get(router, 'routes', []);
        const currentExistentRoutes = routesToArray(routes);
        setExistentRoutes(currentExistentRoutes);
        const currentBreadCrumbs = getPathNameBreadcrumbs(
            pathName,
            pathParams,
            routerPushFunction,
            currentExistentRoutes,
        );
        setPathBreadcrumbs(currentBreadCrumbs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // didMount

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const shouldUpdatePathBreadcrumbs = prevPathName.current &&
            prevPathName.current !== pathName;

        if (shouldUpdatePathBreadcrumbs) {
            const currentBreadCrumbs = getPathNameBreadcrumbs(
                pathName,
                pathParams,
                routerPushFunction,
                existentRoutes,
            );

            setPathBreadcrumbs(currentBreadCrumbs);
        }

        prevPathName.current = pathName;
    }); // didUpdate

    return (
        <div className={classes.root}>
            <ul className={`${BEM_NAVIGATION_BREADCRUMBS}--list`}>
                {pathBreadcrumbs
                    .map((breadcrumb, index) => {
                        const {
                            onBreadcrumbClick,
                            to,
                            title,
                        } = breadcrumb;

                        const isLast = index === pathBreadcrumbs.length - 1;
                        const breadcrumbClasses = Classnames(
                            `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb`, {
                                [`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_is_last`]: isLast,
                            },
                        );

                        return (
                            <li
                                className={breadcrumbClasses}
                                key={`${BEM_NAVIGATION_BREADCRUMBS}--breadcruumb_key_${to}`}
                                onClick={!isLast && onBreadcrumbClick}
                                role="presentation"
                            >
                                <Typography variant="h3" className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_typography`}>
                                    <div className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator`}>
                                        {isLast ? (
                                            '/'
                                        ) : (
                                            <Icon
                                                type={separatorIconType}
                                                size="xsmall"
                                            />
                                        )}
                                    </div>
                                    <div className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to`}>
                                        {title}
                                    </div>
                                </Typography>
                            </li>
                        );
                    })
                    .filter((breadcrumb, index) => {
                        const shouldRenderBreadcrumb = !showOnlyPreviousRoute || (
                            showOnlyPreviousRoute && (
                                index === pathBreadcrumbs.length - 1 || // the last route
                                index === pathBreadcrumbs.length - 2 // the previous route from the current
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
