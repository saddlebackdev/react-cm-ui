import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SubNavigation from '../views/subNavigation.js';

const hasClassName = 'has-drawer--navigation';

class DrawerNavigation extends React.PureComponent {
    render() {
        const {
            columns,
            className,
            selectedColumnIndex,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--navigation', className);

        return (
            <div
                className={containerClasses}
                ref={ref => this._drawerNavigationRef = ref}
                style={style}
            >
                <SubNavigation
                    border="both"
                    selected={selectedColumnIndex}
                    style={{ margin: 0 }}
                >
                    {_.map(columns, (column, index) => {
                        return (
                            <SubNavigation.Item
                                key={`drawer-navigation-item-${index}`}
                                label={column.label || 'Need A Label'}
                                onClick={column.onClick}
                            />
                        );
                    })}
                </SubNavigation>
            </div>
        );
    }

    componentDidMount() {
        this._drawerNavigationRef.closest('.ui.drawer').classList.add(hasClassName);
    }

    componentWillUnmount() {
        this._drawerNavigationRef.closest('.ui.drawer').classList.remove(hasClassName);
    }
}

DrawerNavigation.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    selectedColumnIndex: PropTypes.number,
    style: PropTypes.object,
};

DrawerNavigation.defaultProps = {
    className: undefined,
    selectedColumnIndex: 0,
    style: {},
};

export default DrawerNavigation;
