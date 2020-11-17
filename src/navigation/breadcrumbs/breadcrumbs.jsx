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
import ToolTip from '../../dataDisplay/tooltip';
import makeStyles from '../../styles/makeStyles';
import { BEM_NAVIGATION_BREADCRUMBS } from '../../global/constants';
import {
    routesToArray,
    getPathNameBreadcrumbs,
} from './breadcrumbsUtils';

const propTypes = {
    /**
     * Separation String between breadcrumbs
     */
    dividerString: PropTypes.string,
    /**
     * Instance of react-router core,
     * breadcrumbs will be generated automatically using the routes object structure,
     * location and push function.
     */
    router: PropTypes.shape({}),
    /**
     * Manually defines the crumbs
     */
    staticCrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            onBreadcrumbClick: PropTypes.string,
            originalPath: PropTypes.string,
            title: PropTypes.string,
            to: PropTypes.string,
        }),
    ),
    /**
     * You can pass an object to apply custom titles
     * when using a router instance to build the breadcrumbs automatically.
     */
    routesNameMapper: PropTypes.arrayOf(
        PropTypes.shape({
            route: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
    /**
     * When true, it'll show only the current location breadcrumb and the previous path breadcrumb.
     * When false, it'll show the whole navigation breadcrumbs structure for the current location.
     */
    showOnlyPreviousRoute: PropTypes.bool,
    /**
     * Max breadcrumb title length
     */
    titlesMaxLength: PropTypes.number,
};

const defaultProps = {
    dividerString: '/',
    router: undefined,
    staticCrumbs: [],
    routesNameMapper: [],
    showOnlyPreviousRoute: false,
    titlesMaxLength: 20,
};

const useStyles = makeStyles((theme) => {
    const borderRadiusMain = get(theme, 'shape.borderRadius.main');
    const colorGrey500 = get(theme, 'palette.grey[500]');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    const fontWeightBold = get(theme, 'typography.fontWeightBold');
    const fontWeightMedium = get(theme, 'typography.fontWeightMedium');
    const textColorPrimary = get(theme, 'palette.text.primary');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const transitionDurationShortest = get(theme, 'transitions.duration.shortest');

    return {
        root: {
            overflow: 'hidden',
            width: '100%',
        },
        tooltip: {
            backgroundColor: colorGrey500,
            borderRadius: borderRadiusMain,
            fontSize: 12,
        },
        breadcrumbsList: {
            overflow: 'hidden',
            padding: 0,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            margin: '0 0 -1px 0',
        },
        breadcrumb: {
            color: textColorSecondary,
            cursor: 'pointer',
            display: 'inline',
            padding: ({ showOnlyPreviousRoute }) => (showOnlyPreviousRoute ? '0 5px 0 0' : '0 5px 0 0'),
            transition: `color ${transitionDurationShortest}ms`,
            '& .navigation_breadcrumbs--breadcrumb_title > p': {
                fontWeight: fontWeightMedium,
                fontSize: 12,
                color: textColorSecondary,
            },
            '& .icon-use-path': {
                transition: `fill ${transitionDurationShortest}ms !important`,
            },
            '&:hover': {
                '& .icon-use-path': {
                    fill: colorHighlight,
                },
                '& .navigation_breadcrumbs--breadcrumb_title > p': {
                    color: colorHighlight,
                },
            },
        },
        breadcrumbLast: {
            '& .navigation_breadcrumbs--breadcrumb_title > p': {
                fontWeight: fontWeightBold,
                fontSize: 16,
                color: textColorPrimary,
            },
            '&:hover': {
                '& .navigation_breadcrumbs--breadcrumb_title > p': {
                    color: textColorPrimary,
                },
            },
        },
        breadCrumbSeparator: {
            display: 'inline',
            padding: '0 5px 0 0',
            '& .icon': {
                marginRight: 5,
            },
        },
        breadCrumbSeparatorTypography: {
            display: 'inline',
        },
        breadcrumbTitle: {
            display: 'inline',
            transition: `color ${transitionDurationShortest}ms`,
        },
        breadcrumbTitleTypography: {
            display: 'inline',
        },
    };
});

const ICON_TYPE_FIRST_BREADCRUMB = 'chevron-left';

/**
 * Indicates the current location inside the application and the previous routes to navigate back.
 * The breadcrumbs will be automatically generated using the passed react-router core instance
 * (Each route must have a 'title' prop set).
 */
function Breadcrumbs(props) {
    const {
        dividerString,
        router,
        routesNameMapper,
        showOnlyPreviousRoute,
        staticCrumbs,
        titlesMaxLength,
    } = props;

    const classes = useStyles(props);
    const [existentRoutes, setExistentRoutes] = useState([]);
    const [pathBreadcrumbs, setPathBreadcrumbs] = useState([]);
    const pathName = get(router, 'location.pathname');
    const pathParams = get(router, 'params');
    const prevPathName = useRef();
    const prevRoutesNameMapper = useRef();
    const routerPushFunction = get(router, 'push');

    useEffect(() => {
        if (!staticCrumbs.length > 0 && router) {
            const routerRoutes = get(router, 'routes', []);
            const currentExistentRoutes = routesToArray(routerRoutes);
            setExistentRoutes(currentExistentRoutes);
            const currentBreadCrumbs = getPathNameBreadcrumbs(
                pathName,
                pathParams,
                routerPushFunction,
                currentExistentRoutes,
                routesNameMapper,
            );
            setPathBreadcrumbs(currentBreadCrumbs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // didMount

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const shouldUpdatePathBreadcrumbs = !staticCrumbs.length > 0 && router &&
            prevPathName.current && prevPathName.current !== pathName;

        if (shouldUpdatePathBreadcrumbs) {
            const currentBreadCrumbs = getPathNameBreadcrumbs(
                pathName,
                pathParams,
                routerPushFunction,
                existentRoutes,
                routesNameMapper,
            );

            setPathBreadcrumbs(currentBreadCrumbs);
        }

        prevPathName.current = pathName;
        prevRoutesNameMapper.current = routesNameMapper;
    }); // didUpdate

    const breadcrumbsListClasses = Classnames(
        `${BEM_NAVIGATION_BREADCRUMBS}--list`,
        classes.breadcrumbsList,
    );

    const breadcrumbSeparatorTypographyClasses = Classnames(
        classes.breadCrumbSeparatorTypography,
        `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator_typography`,
        'breadcrumbSeparator',
    );
    const breadcrumbTitleClasses = Classnames(
        classes.breadcrumbTitle,
        `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_title`,
    );
    const breadcrumbTitleTypographyClasses = Classnames(
        classes.breadcrumbTitleTypography,
        `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_title_typography`,
    );

    const shouldUseStaticBreadcrumbs = Array.isArray(staticCrumbs);
    const shouldUseDynamicBreadcrumbs = !!(staticCrumbs?.length === 0 && router);
    let finalBreadcrumbs;

    if (shouldUseStaticBreadcrumbs) {
        finalBreadcrumbs = staticCrumbs;
    }
    if (shouldUseDynamicBreadcrumbs) {
        finalBreadcrumbs = pathBreadcrumbs;
    }

    return (
        <div className={classes.root}>
            <ul className={breadcrumbsListClasses}>
                {finalBreadcrumbs
                    .filter((breadcrumb, index, originalArray) => {
                        const shouldRenderBreadcrumb = !showOnlyPreviousRoute || (
                            showOnlyPreviousRoute && (
                                index === originalArray.length - 1 || // last route
                                index === originalArray.length - 2 // previous route from the current one
                            )
                        );

                        return shouldRenderBreadcrumb;
                    })
                    .map((breadcrumb, index, arr) => {
                        const {
                            onBreadcrumbClick,
                            to,
                            title,
                        } = breadcrumb;

                        const shouldTitleBeEllipsed = title.length > titlesMaxLength;
                        const parsedTitle = shouldTitleBeEllipsed ?
                            `${title.substring(0, titlesMaxLength)}...` :
                            title;
                        const isFirst = index === 0;
                        const isLast = index === arr.length - 1;
                        const breadcrumbClasses = Classnames(
                            classes.breadcrumb,
                            `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb`,
                            {
                                [classes.breadcrumbLast]: isLast,
                                [`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_is_last`]: isLast,
                            },
                        );
                        const breadcrumbSeparatorClasses = Classnames(
                            classes.breadCrumbSeparator,
                            `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator`,
                            {
                                [`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb-divider_first`]: isFirst,
                            },
                        );

                        let breadcrumbTo = (
                            <Typography
                                variant="body1"
                                className={breadcrumbTitleTypographyClasses}
                            >
                                {parsedTitle}
                            </Typography>
                        );

                        if (shouldTitleBeEllipsed) {
                            breadcrumbTo = (
                                <ToolTip
                                    title={title}
                                    classes={{
                                        tooltip: classes.tooltip,
                                    }}
                                >
                                    {breadcrumbTo}
                                </ToolTip>
                            );
                        }

                        return (
                            <li
                                className={breadcrumbClasses}
                                key={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_key_${to}`}
                                onClick={onBreadcrumbClick}
                                role="presentation"
                            >
                                <div className={breadcrumbSeparatorClasses}>
                                    {isFirst ? (
                                        <Icon
                                            type={ICON_TYPE_FIRST_BREADCRUMB}
                                            size="xsmall"
                                            color="static"
                                        />
                                    ) : (
                                        <Typography
                                            variant="h4"
                                            className={breadcrumbSeparatorTypographyClasses}
                                        >
                                            {dividerString}
                                        </Typography>
                                    )}
                                </div>
                                <div className={breadcrumbTitleClasses}>
                                    {breadcrumbTo}
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

Breadcrumbs.defaultProps = defaultProps;
Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
