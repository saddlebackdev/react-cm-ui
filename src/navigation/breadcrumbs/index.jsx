import React from 'react';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import BreadcrumbsMUI from '@material-ui/core/Breadcrumbs';
import PropTypes from 'prop-types';
import {
    Typography,
    Icon,
} from 'react-cm-ui';
import {
    get,
} from 'lodash';
import makeStyles from '../../styles/makeStyles';
import {
    BEM_BLOCK_NAME,
} from './breadcrumbsConstants';
import Classnames from 'classnames';

const propTypes = {
    pathBreadcrumbs: PropTypes.shape([]).isRequired,
    nameMap: PropTypes.shape([]).isRequired,
};

const defaultProps = {
    // pathBreadcrumbs: [],
    // nameMap: [],
    showOnlyPrevious: true,
};
const useStyles = makeStyles((theme) => {
    console.log('theme', theme);
    const textColorPrimary = get(theme, 'palette.text.primary');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const fontWeightRegular = get(theme, 'typography.fontWeightRegular');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    return {
        root: {
            overflow: 'hidden',
            width: '100%',
            [`& .${BEM_BLOCK_NAME}--breadcrumbs`]: {
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
        nameMap,
        pathBreadcrumbs,
        separator,
        showOnlyPrevious,
    } = props;
    console.log('showOnlyPrevious', showOnlyPrevious)
    const classes = useStyles();

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
                        } = breadcrumb;

                        const isLast = index === pathBreadcrumbs.length - 1;
                        const isPrevious = index === pathBreadcrumbs.length - 2;
                        const breadcrumbClasses = Classnames(
                            `${BEM_BLOCK_NAME}--breadcrumb`, {
                                [`${BEM_BLOCK_NAME}--breadcrumb-is-last`]: isLast,
                                [`${BEM_BLOCK_NAME}--breadcrumb-is-previous`]: isPrevious,
                            },
                        );
                        const currentSeparator = isLast ? separator : '<';
                        return (
                            <li
                                onClick={onBreadcrumbClick}
                                role="presentation"
                                className={breadcrumbClasses}
                            >
                                <Typography variant="h3">
                                    <div className={`${BEM_BLOCK_NAME}--breadcrumb-separator`}>
                                        {isLast ? (
                                            currentSeparator
                                        ) : (
                                            <Icon
                                                type="chevron-left"
                                                size="xsmall"
                                            />
                                        )}
                                    </div>
                                    <div className={`${BEM_BLOCK_NAME}--breadcrumb-to`}>
                                        {nameMap[to]}
                                    </div>
                                </Typography>
                            </li>
                        );
                    })
                    .filter((breadcrumb, index) => {
                        const shouldRenderBreadcrumb = !showOnlyPrevious || (
                            showOnlyPrevious && (
                                index === pathBreadcrumbs.length - 1 ||
                                index === pathBreadcrumbs.length - 2
                            )
                        );
                        console.log('shouldRenderBreadcrumb', shouldRenderBreadcrumb);
                        return shouldRenderBreadcrumb;
                    })}
            </ul>
        </div>
    );
}

Breadcrumbs.defaultProps = defaultProps;
Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
