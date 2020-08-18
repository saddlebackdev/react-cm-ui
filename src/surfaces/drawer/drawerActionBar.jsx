import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBar from '../../surfaces/actionBar'; // eslint-disable-line import/no-cycle

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    columns: undefined,
    id: undefined,
    style: {},
};

const HAS_CLASS_NAME = 'drawer-has_action_bar';
const HAS_WING_CLASS_NAME = 'drawer--wing-has_action_bar';
const HAS_SM_SEARCH_VISIBLE_CLASS_NAME = 'drawer--content-has_action_bar_mobile_search_visible';

class DrawerActionBar extends React.PureComponent {
    constructor() {
        super();

        this.toggleSmSearchVisbileClassName = this.toggleSmSearchVisbileClassName.bind(this);
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

    toggleSmSearchVisbileClassName(isVisible) {
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
            id,
            style,
        } = this.props;
        const containerClasses = ClassNames('drawer--action_bar', className);

        return (
            <div
                ref={(ref) => { this.drawerActionBarRef = ref; }}
            >
                <ActionBar
                    className={containerClasses}
                    columns={columns}
                    id={id}
                    style={style}
                    moduleType="drawer"
                    toggleSmSearchVisbileClassName={this.toggleSmSearchVisbileClassName}
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
