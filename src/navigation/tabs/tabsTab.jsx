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
     * Aditional classes passed from the parent <TabsTabs /> component to override the label styling.
     */
    classes: PropTypes.shape({
        inverse: PropTypes.string,
        root: PropTypes.string,
        tabLabel: PropTypes.string,
        tabLabelSelected: PropTypes.string,
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
    onChange: undefined,
    onClick: undefined,
};

const styles = {
    inverse: {},
    root: {},
};

/**
 * Used to render pages sections, built from the <TabsTabs /> parent component.
 */
class TabsTab extends Component {
    constructor(props) {
        super(props);
        this.onTabClick = this.onTabClick.bind(this);
        this.renderTab = this.renderTab.bind(this);
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

    renderTab() {
        const {
            children,
            classes,
            selected,
        } = this.props;

        return (
            <Typography
                className={ClassNames(
                    `${BEM_NAVIGATION_TAB_ROOT_CLASS}-label`,
                    classes.tabLabel,
                    {
                        [classes.tabLabelSelected]: selected,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}-label_selected`]: selected,
                    },
                )}
                component="div"
                variant="h4"
            >
                {children}
            </Typography>
        );
    }

    render() {
        const {
            classes,
            classNames,
            id,
            inverse,
        } = this.props;

        const rootClasses = ClassNames(
            classes.root,
            classNames,
            {
                [classes.inverse]: inverse,
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
                {this.renderTab()}
            </div>
        );
    }
}

TabsTab.propTypes = propTypes;
TabsTab.defaultProps = defaultProps;

export default withStyles(styles)(TabsTab);
