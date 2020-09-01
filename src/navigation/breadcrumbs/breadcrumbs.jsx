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
     * breadcrums will be generated automatically using the routes object structure,
     * location and push function.
     */
    router: PropTypes.shape({}).isRequired,
    /**
     * When false, is going to show only the previous route from the current location
     */
    showOnlyPreviousRoute: PropTypes.bool,
    /**
     * Separation String between breadcrumbs
     */
    separatorString: PropTypes.string,
};

const defaultProps = {
    showOnlyPreviousRoute: false,
    separatorString: '/',
};

const useStyles = makeStyles((theme) => {
    const borderRadiusMain = get(theme, 'shape.borderRadius.main');
    const colorGrey500 = get(theme, 'palette.grey[500]');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    const fontWeightBold = get(theme, 'typography.fontWeightBold');
    const textColorPrimary = get(theme, 'palette.text.primary');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const transitionDurationShortest = get(theme, 'transitions.duration.shortest');

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
                    color: textColorSecondary,
                    cursor: 'pointer',
                    display: 'inline',
                    padding: ({ showOnlyPreviousRoute }) => (showOnlyPreviousRoute ? '0 5px 0 0' : '0 5px 0 0'),
                    transition: `color ${transitionDurationShortest}ms`,
                    '& .icon-use-path': {
                        transition: `fill ${transitionDurationShortest}ms !important`,
                    },
                    [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator`]: {
                        display: 'inline',
                        padding: '0 5px 0 0',
                        '&_typography': {
                            display: 'inline',
                        },
                        '& .icon': {
                            marginRight: 5,
                        },
                    },
                    [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to`]: {
                        display: 'inline',
                        transition: `color ${transitionDurationShortest}ms`,
                        '&_typography': {
                            display: 'inline',
                        },
                    },
                    '&:hover': {
                        '& .icon-use-path': {
                            fill: colorHighlight,
                        },
                        [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to`]: {
                            color: colorHighlight,
                        },
                    },
                    '&_is_last': {
                        [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to`]: {
                            fontWeight: fontWeightBold,
                            color: textColorPrimary,
                            '&:hover': {
                                color: `${textColorPrimary} !important`,
                                cursor: 'auto',
                            },
                        },
                        '&:hover': {
                            color: `${textColorSecondary} !important`,
                            cursor: 'auto',
                            [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to`]: {
                                color: `${textColorPrimary} !important`,
                                cursor: 'auto',
                            },
                        },
                    },
                    [`& .${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_typography`]: {
                        display: 'inline',
                        '& > div': {
                            display: 'inline',
                        },
                    },
                },
            },
        },
        tooltip: {
            backgroundColor: colorGrey500,
            borderRadius: borderRadiusMain,
            fontSize: 12,
        },
    };
});

const BREADCRUMB_TITLE_MAX_LENGTH = 20;
const ICON_TYPE_FIRST_BREADCRUMB = 'chevron-left';

function Breadcrumbs(props) {
    const {
        router,
        showOnlyPreviousRoute,
        separatorString,
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
                            `${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb`, {
                                [`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_is_last`]: isLast,
                            },
                        );

                        let breadcrumbTo = (
                            <Typography
                                variant={isLast ? 'h3' : 'h4'}
                                className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to_typography`}
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
                                <div className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator`}>
                                    {isFirst ? (
                                        <Icon
                                            type={ICON_TYPE_FIRST_BREADCRUMB}
                                            size="xsmall"
                                            color="static"
                                        />
                                    ) : (
                                        <Typography
                                            variant="h4"
                                            className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_separator_typography`}
                                        >
                                            {separatorString}
                                        </Typography>
                                    )}
                                </div>
                                <div className={`${BEM_NAVIGATION_BREADCRUMBS}--breadcrumb_to`}>
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
