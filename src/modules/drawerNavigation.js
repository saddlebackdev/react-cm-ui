import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SubNavigation from '../views/subNavigation.js';

const hasClassName = 'has-drawer--navigation';

class DrawerNavigation extends React.PureComponent {
    render() {
        const { columns, className, style } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--navigation', className);

        return (
            <div
                className={containerClasses}
                ref={ref => this._drawerNavigationRef = ref}
                style={style}
            >
                <SubNavigation
                    border="both"
                    style={{ margin: 0 }}
                >
                    {_.map(columns, column => {
                        return (
                            <SubNavigation.Item
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

    _onItemClick(index, label, onChildClick, event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(index, label);
        } else {
            if (!_.isUndefined(onChildClick)) {
                onChildClick(index, label);
            }

            this.setState({ selected: index });
        }

        event.preventDefault();
    }
}

DrawerNavigation.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default DrawerNavigation;
