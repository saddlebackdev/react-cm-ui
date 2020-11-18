import React, {
    Component,
} from 'react';
import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { BEM_NAVIGATION_TAB_ROOT_CLASS } from '../../global/constants';
import Typography from '../../dataDisplay/typography';
import withStyles from '../../styles/withStyles';

const propTypes = {
    /**
     * Content to be rendered as the title
     */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    /**
     * Aditional classNames to handle the tab states styles (disabled/selected)
     */
    classNames: PropTypes.string.isRequired,
    /**
     * Aditional classes passed from the parent <TabsTabs /> component to
     * override the label styling.
     */
    classes: PropTypes.shape({
        mobile: PropTypes.string,
        inverse: PropTypes.string,
        root: PropTypes.string,
        label: PropTypes.string,
        selected: PropTypes.string,
        withContent: PropTypes.string,
    }),
    /**
     * Tab identifier
     */
    id: PropTypes.string.isRequired,
    /**
     * If `true`, Tab will be formatted to appear on dark backgrounds.
     */
    inverse: PropTypes.bool,
    /**
     * If `true`, Tabs will look more like actionable buttons.
     */
    mobile: PropTypes.bool,
    /**
     * General <TabsTabs /> onChange function, called on <TabsTab /> click.
     */
    onChange: PropTypes.func,
    /**
     * Independent <TabsTab /> onClick function.
     */
    onClick: PropTypes.func,
    /**
     * Key passed from the <TabsTabs /> items objects.
     */
    originalKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /**
     * Boolean used to apply the 'tabLabelSelected' class.
     */
    selected: PropTypes.bool.isRequired,
    /**
     * Renders the content set inside the item object under the tabs panel
     */
    withContent: PropTypes.bool,
};

const defaultProps = {
    classes: {},
    children: undefined,
    inverse: false,
    mobile: false,
    onChange: undefined,
    onClick: undefined,
    withContent: false,
};

const styles = ({
    palette,
    shape,
    spacing,
    typography,
}) => ({
    inverse: {},
    mobile: {},
    label: {
        color: palette.text.secondary,
        fontSize: typography.pxToRem(14),
        fontWeight: typography.fontWeightMedium,
        paddingBottom: 5,
        position: 'relative',
        transition: 'color 0.1s, border-bottom 0.1s',
        '&:not($withContent):hover': {
            color: palette.text.primary,
        },
        '&:not($withContent)$mobile': {
            borderRadius: shape.borderRadius.main,
            backgroundColor: palette.hexToRGBA(palette.background.primary, 0.31),
            color: palette.text.contrastText,
            fontWeight: typography.fontWeightBold,
            lineHeight: '30px',
            padding: [[0, 11]],
        },
        '&:not($mobile):not($withContent)$inverse': {
            color: palette.hexToRGBA(palette.background.primary, 0.31),
            fontWeight: typography.fontWeightBold,
        },
        '&:not($withContent)$selected': {
            color: palette.text.primary,
            '&:not($mobile):not($withContent)::after': {
                backgroundColor: palette.active.main,
                bottom: -3,
                content: '""',
                height: 2,
                left: 0,
                position: 'absolute',
                right: 0,
            },
            '&$mobile': {
                backgroundColor: palette.background.primary,
                color: palette.text.primary,
            },
            '&:not($mobile):not($withContent)$inverse': {
                color: palette.text.contrastText,
                '&::after': {
                    backgroundColor: palette.background.primary,
                },
            },
        },
        '&$withContent': {
            color: palette.text.contrastText,
            lineHeight: 'inherit',
            padding: 0,
            '&$selected': {
                color: palette.text.primary,
            },
        },
    },
    root: {
        cursor: 'pointer',
        outline: 'none',
        padding: [[0, spacing(1)]],
        whiteSpace: 'nowrap',
        '&:not(:first-child):not($mobile):not($withContent)': {
            padding: [[0, spacing(1)]],
        },
        '&:not($withContent)$mobile': {
            padding: [[0, 4, 0]],
        },
        '&$withContent': {
            alignItems: 'center',
            backgroundColor: palette.grey[500],
            border: 0,
            borderRadius: [[shape.borderRadius.main, shape.borderRadius.main, 0, 0]],
            color: palette.text.primary,
            display: 'inline-flex',
            fontSize: typography.pxToRem(14),
            fontWeight: typography.fontWeightMedium,
            height: 39,
            justifyContent: 'center',
            letterSpacing: '.7px',
            lineHeight: '39px',
            outline: 'none',
            padding: [[0, spacing(2), 3]],
            position: 'relative',
            transition: 'background-color 200ms linear, background-image 250ms linear, box-shadow 200ms linear, color 200ms linear',
            zIndex: 1,
            '&:not(:first-child)::before, &::after': {
                backgroundRepeat: 'no-repeat',
                bottom: 0,
                content: '""',
                height: shape.borderRadius.main,
                opacity: 0,
                position: 'absolute',
                transition: 'opacity 200ms linear',
                visibility: 'hidden',
                width: shape.borderRadius.main,
                zIndex: 3,
            },
            '&::before': {
                backgroundImage: 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iM3B4IiBoZWlnaHQ9IjNweCIgdmlld0JveD0iNTEyIDExMyAzIDMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPHBhdGggZD0iTTUxMiwxMTMgQzUxMi40ODE1NjcsMTE1Ljc1NjM0OCA1MTUsMTE2IDUxNSwxMTYgTDUxNC41MDQ1MTcsMTE2IEw1MTIsMTE2IEw1MTIsMTEzIFoiIGlkPSJUcmlhbmdsZS1Db3B5IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTEzLjUwMDAwMCwgMTE0LjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNTEzLjUwMDAwMCwgLTExNC41MDAwMDApICI+PC9wYXRoPgo8L3N2Zz4=\')',
                left: -shape.borderRadius.main,
            },
            '&::after': {
                backgroundImage: 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld0JveD0iNDk2IDExMyA0IDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8cGF0aCBkPSJNNDk3LDExMyBDNDk3LjQ4MTU2NywxMTUuNzU2MzQ4IDUwMCwxMTYgNTAwLDExNiBMNDk5LjUwNDUxNywxMTYgTDQ5NywxMTYgTDQ5NywxMTMgWiIgaWQ9IlRyaWFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPgo8L3N2Zz4=\')',
                right: -2,
            },
            '&:not(:first-child)': {
                boxShadow: `inset 1px 0px 0 0 ${palette.grey[600]}`,
                marginLeft: -shape.borderRadius.main,
            },
            '&:not(:first-child):not($selected)': {
                borderRadius: [[0, shape.borderRadius.main, 0, 0]],
            },
            '&$selected': {
                backgroundColor: palette.background.primary,
                boxShadow: `inset 1px 1px 0 0 ${palette.border.secondary}, inset -1px 0 0 0 ${palette.border.secondary}`,
                color: palette.text.primary,
                cursor: 'auto',
                zIndex: 2,
                '&::before, &::after': {
                    opacity: 1,
                    visibility: 'visible',
                },
            },
        },
    },
    selected: {},
    withContent: {},
});

/**
 * Used to render pages sections, built from the <TabsTabs /> parent component.
 */
class TabsTab extends Component {
    constructor(props) {
        super(props);

        this.onTabClick = this.onTabClick.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const {
            children,
            classNames,
            selected,
        } = this.props;

        return children !== nextProps.children ||
            selected !== nextProps.selected ||
            classNames !== nextProps.classNames;
    }

    onTabClick(evt) {
        const {
            onChange,
            onClick,
            originalKey,
        } = this.props;

        if (isFunction(onClick)) {
            onClick(this.props);
        }

        if (isFunction(onChange)) {
            onChange(originalKey, evt);
        }
    }

    render() {
        const {
            children,
            classes,
            classNames,
            mobile,
            id,
            inverse,
            selected,
            withContent,
        } = this.props;

        const rootClasses = ClassNames(
            classes.root,
            classNames,
            {
                [classes.mobile]: mobile,
                [classes.withContent]: withContent,
                [classes.selected]: selected,
            },
        );

        return (
            <div
                className={rootClasses}
                id={id}
                onClick={this.onTabClick}
                ref={(e) => { this.tab = e; }}
                role="presentation"
            >
                <Typography
                    className={ClassNames(
                        `${BEM_NAVIGATION_TAB_ROOT_CLASS}_label`,
                        classes.label,
                        {
                            [classes.mobile]: mobile,
                            [classes.inverse]: inverse,
                            [classes.selected]: selected,
                            [`${BEM_NAVIGATION_TAB_ROOT_CLASS}_label-selected`]: selected,
                            [classes.withContent]: withContent,
                        },
                    )}
                    component="div"
                    variant="h4"
                >
                    {children}
                </Typography>
            </div>
        );
    }
}

TabsTab.propTypes = propTypes;
TabsTab.defaultProps = defaultProps;

export default withStyles(styles)(TabsTab);
