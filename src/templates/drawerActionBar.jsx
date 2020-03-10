import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBar from './actionBar'; // eslint-disable-line import/no-cycle

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

const hasClassName = 'drawer-has_action_bar';
const hasWingClassName = 'drawer--wing-has_action_bar';

class DrawerActionBar extends React.PureComponent {
    componentDidMount() {
        const closestDrawer = this.drawerActionBarRef.closest('.ui.drawer');
        const closestWing = this.drawerActionBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.add(hasWingClassName);

            return null;
        }

        closestDrawer.classList.add(hasClassName);

        return null;
    }

    componentWillUnmount() {
        const closestDrawer = this.drawerActionBarRef.closest('.ui.drawer');
        const closestWing = this.drawerActionBarRef.closest('.ui.drawer--wing');

        if (closestWing) {
            closestWing.classList.remove(hasWingClassName);

            return null;
        }

        closestDrawer.classList.remove(hasClassName);

        return null;
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
