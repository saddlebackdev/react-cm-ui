import React, {
    Component,
} from 'react';
import {
    isFunction,
    noop,
} from 'lodash';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import Typography from '../../dataDisplay/typography';
import { BEM_NAVIGATION_TAB_ROOT_CLASS } from '../../global/constants';

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
     * Aditional classes passed from the parent <SectionalTabs /> component to override the label styling.
     */
    classes: PropTypes.shape({
        sectionalTabLabel: PropTypes.string,
        sectionalTabLabelSelected: PropTypes.string,
    }),
    /**
     * Sectional Tab identifier
     */
    id: PropTypes.string.isRequired,
    /**
     * General <SectionalTabs /> onChange function, called on <SectionalTab /> click.
     */
    onChange: PropTypes.func,
    /**
     * Independent <SectionalTab /> onClick function.
     */
    onClick: PropTypes.func,
    /**
     * Key passed from the <SectionalTabs /> items objects.
     */
    originalKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /**
     * Boolean used to apply the 'sectionalTabLabelSelected' class.
     */
    selected: PropTypes.bool.isRequired,
};

const defaultProps = {
    classes: {},
    children: undefined,
    onChange: undefined,
    onClick: undefined,
};

/**
 * Used to render pages sections, built from the <SectionalTabs /> parent component.
 */
class SectionalTab extends Component {
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

        const tabLabelClassNames = Classnames(
            classes.sectionalTabLabel,
            `${BEM_NAVIGATION_TAB_ROOT_CLASS}-label`,
            {
                [classes.sectionalTabLabelSelected]: selected,
                [`${BEM_NAVIGATION_TAB_ROOT_CLASS}-label_selected`]: selected,
            },
        );

        return (
            <Typography
                className={tabLabelClassNames}
                component="span"
                variant="h5"
            >
                {children}
            </Typography>
        );
    }

    render() {
        const {
            classNames,
            id,
            selected,
        } = this.props;

        return (
            <button
                aria-selected={selected}
                className={classNames}
                id={id}
                onClick={this.onTabClick}
                onKeyDown={noop}
                ref={(e) => { this.tab = e; }}
                role="tab"
                tabIndex={0}
                type="button"
            >
                {this.renderTab()}
            </button>
        );
    }
}

SectionalTab.propTypes = propTypes;
SectionalTab.defaultProps = defaultProps;

export default SectionalTab;
