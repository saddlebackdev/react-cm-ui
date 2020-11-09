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
        contained: PropTypes.string,
        inverse: PropTypes.string,
        root: PropTypes.string,
        label: PropTypes.string,
        selected: PropTypes.string,
    }),
    /**
     * If `true`, Tab will be contained.
     */
    contained: PropTypes.bool,
    /**
     * Tab identifier
     */
    id: PropTypes.string.isRequired,
    /**
     * If `true`, Tab will be formatted to appear on dark backgrounds.
     */
    inverse: PropTypes.bool,
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
    contained: false,
    inverse: false,
    onChange: undefined,
    onClick: undefined,
};

const styles = ({
    palette,
    shape,
    typography,
}) => ({
    contained: {},
    inverse: {},
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
        '&$contained': {
            borderRadius: shape.borderRadius.main,
            backgroundColor: palette.hexToRGBA(palette.background.primary, 0.31),
            color: palette.text.primary,
            fontWeight: typography.fontWeightBold,
            lineHeight: '30px',
            padding: [[0, 11]],
        },
        '&$inverse:not($contained)': {
            color: palette.hexToRGBA(palette.background.primary, 0.31),
            fontWeight: typography.fontWeightBold,
        },
    },
    root: {
        cursor: 'pointer',
        zIndex: 1,
        whiteSpace: 'nowrap',
        padding: '10px 10px 0 0',
        outline: 'none',
        '&:not(:first-child):not($contained)': {
            padding: '10px 11px 0 11px',
        },
        '&$contained': {
            padding: [[10, 4, 0]],
        },
    },
    selected: {
        color: palette.text.primary,
        '&:not($contained)::after': {
            backgroundColor: palette.active.main,
            bottom: -3,
            content: '""',
            height: 2,
            left: 0,
            position: 'absolute',
            right: 0,
        },
        '&$contained': {
            backgroundColor: palette.background.primary,
        },
        '&:not($contained)$inverse': {
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
            contained,
            id,
            inverse,
            selected,
        } = this.props;

        const rootClasses = ClassNames(
            classes.root,
            classNames,
            {
                [classes.contained]: contained,
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
                            [classes.contained]: contained,
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
