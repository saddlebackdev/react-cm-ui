import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import ActionBar from '../../surfaces/actionBar'; // eslint-disable-line import/no-cycle

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    columns: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer_action_bar`,
    id: undefined,
    style: {},
};

const HAS_CLASS_NAME = 'drawer-has_action_bar';
const HAS_WING_CLASS_NAME = 'drawer--wing-has_action_bar';
const HAS_SM_SEARCH_VISIBLE_CLASS_NAME = 'drawer--content-has_action_bar_mobile_search_visible';

class DrawerActionBar extends React.PureComponent {
    constructor() {
        super();

        this.toggleSmSearchVisibleClassName = this.toggleSmSearchVisibleClassName.bind(this);
    }

    componentDidMount() {
        const closestDrawer = this.drawerActionBarRef.closest('.ui.drawer');
        const closestWing = this.drawerActionBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.add(HAS_WING_CLASS_NAME);

            return null;
        }
        
        closestDrawer.classList.add(HAS_CLASS_NAME);

        return null;
    }

    componentWillUnmount() {
        const closestDrawer = this.drawerActionBarRef.closest('.ui.drawer');
        const closestWing = this.drawerActionBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.remove(HAS_WING_CLASS_NAME);

            return null;
        }

        closestDrawer.classList.remove(HAS_CLASS_NAME);

        return null;
    }

    toggleSmSearchVisibleClassName(isVisible) {
        const closestDrawerContent = this.drawerActionBarRef.closest('.ui.drawer')
            .querySelector('.ui.drawer--content');

        if (isVisible) {
            closestDrawerContent.classList.add(HAS_SM_SEARCH_VISIBLE_CLASS_NAME);
        } else {
            closestDrawerContent.classList.remove(HAS_SM_SEARCH_VISIBLE_CLASS_NAME);
        }
    }

    render() {
        const {
            children,
            className,
            columns,
            dataTestId,
            id,
            style,
        } = this.props;

        const containerClasses = ClassNames('drawer--action_bar', className);

        return (
            <div
                data-testid={dataTestId}
                ref={(ref) => { this.drawerActionBarRef = ref; }}
            >
                <ActionBar
                    className={containerClasses}
                    columns={columns}
                    id={id}
                    style={style}
                    moduleType="drawer"
                    toggleSmSearchVisibleClassName={this.toggleSmSearchVisibleClassName}
                >
                    {children}
                </ActionBar>
            </div>
        );
    }
}

DrawerActionBar.propTypes = propTypes;
DrawerActionBar.defaultProps = defaultProps;

export default DrawerActionBar;
