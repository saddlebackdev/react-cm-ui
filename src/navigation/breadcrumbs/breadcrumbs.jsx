/* eslint-disable linebreak-style */
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
     * Instance of react-router core,
     * breadcrumbs will be generated automatically using the routes object structure,
     * location and push function.
     */
    router: PropTypes.shape({}).isRequired,
    /**
     * When true, it'll show only the current location breadcrumb and the previous path breadcrumb.
     * When false, it'll show the whole navigation breadcrumbs structure for the current location.
     */
    showOnlyPreviousRoute: PropTypes.bool,
    /**
     * Separation String between breadcrumbs
     */
    dividerString: PropTypes.string,
};

const defaultProps = {
    showOnlyPreviousRoute: false,
    dividerString: '/',
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
            margin: '-3px 0 -3px 0',
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

const BREADCRUMB_TITLE_MAX_LENGTH = 20;
const ICON_TYPE_FIRST_BREADCRUMB = 'chevron-left';

/**
 * Indicates the current location inside the application and the previous routes to navigate back.
 * The breadcrumbs will be automatically generated using the passed react-router core instance
 * (Each route must have a 'title' prop set).
 */
function Breadcrumbs(props) {
    const {
        router,
        showOnlyPreviousRoute,
        dividerString,
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

    const breadcrumbsListClasses = Classnames(
        `${BEM_NAVIGATION_BREADCRUMBS}--list`,
        classes.breadcrumbsList,
    );
    const breadcrumbSeparatorClasses = Classnames(
        classes.breadCrumbSeparator,
        `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator`,
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

    return (
        <div className={classes.root}>
            <ul className={breadcrumbsListClasses}>
                {pathBreadcrumbs
                    .filter((breadcrumb, index) => {
                        const shouldRenderBreadcrumb = !showOnlyPreviousRoute || (
                            showOnlyPreviousRoute && (
                                index === pathBreadcrumbs.length - 1 || // last route
                                index === pathBreadcrumbs.length - 2 // previous route from the current one
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

                        const shouldTitleBeEllipsed = title.length > BREADCRUMB_TITLE_MAX_LENGTH;
                        const parsedTitle = shouldTitleBeEllipsed ?
                            `${title.substring(0, BREADCRUMB_TITLE_MAX_LENGTH)}...` :
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
                                key={`${BEM_NAVIGATION_BREADCRUMBS}--breadcruumb_key_${to}`}
                                onClick={!isLast && onBreadcrumbClick}
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
