import React, {
    Component,
} from 'react';
import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { BEM_NAVIGATION_TAB_ROOT_CLASS } from '../../global/constants';
import withStyles from '../../styles/withStyles';
import Typography from '../../dataDisplay/typography';

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
};

const defaultProps = {
    classes: {},
    children: undefined,
    inverse: false,
    mobile: false,
    onChange: undefined,
    onClick: undefined,
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
        fontSize: 14,
        fontWeight: typography.fontWeightMedium,
        paddingBottom: 5,
        position: 'relative',
        transition: 'color 0.1s, border-bottom 0.1s',
        '&:hover': {
            color: palette.text.primary,
        },
        '&$mobile': {
            borderRadius: shape.borderRadius.main,
            backgroundColor: palette.hexToRGBA(palette.background.primary, 0.31),
            color: palette.text.contrastText,
            fontWeight: typography.fontWeightBold,
            lineHeight: '30px',
            padding: [[0, 11]],
        },
        '&$inverse:not($mobile)': {
            color: palette.hexToRGBA(palette.background.primary, 0.31),
            fontWeight: typography.fontWeightBold,
        },
    },
    root: {
        cursor: 'pointer',
        outline: 'none',
        padding: [[0, spacing(1)]],
        whiteSpace: 'nowrap',
        '&:not(:first-child):not($mobile)': {
            padding: [[0, spacing(1)]],
        },
        '&$mobile': {
            padding: [[0, 4, 0]],
        },
    },
    selected: {
        color: palette.text.primary,
        '&:not($mobile)::after': {
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
        '&:not($mobile)$inverse': {
            color: palette.text.contrastText,
            '&::after': {
                backgroundColor: palette.background.primary,
            },
        },
    },
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
        } = this.props;

        const rootClasses = ClassNames(
            classes.root,
            classNames,
            {
                [classes.mobile]: mobile,
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
                        `${BEM_NAVIGATION_TAB_ROOT_CLASS}-label`,
                        classes.label,
                        {
                            [classes.mobile]: mobile,
                            [classes.inverse]: inverse,
                            [classes.selected]: selected,
                            [`${BEM_NAVIGATION_TAB_ROOT_CLASS}-label_selected`]: selected,
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
