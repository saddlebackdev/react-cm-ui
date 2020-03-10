import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SubNavigation from '../organisms/subNavigation';

const hasClassName = 'drawer-has_navigation';

const propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    selectedColumnIndex: PropTypes.number,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    selectedColumnIndex: 0,
    style: {},
};

class DrawerNavigation extends React.PureComponent {
    componentDidMount() {
        this.drawerNavigationRef.closest('.ui.drawer').classList.add(hasClassName);
    }

    componentWillUnmount() {
        this.drawerNavigationRef.closest('.ui.drawer').classList.remove(hasClassName);
    }

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
                ref={(ref) => { this.drawerNavigationRef = ref; }}
                style={style}
            >
                <SubNavigation
                    border="both"
                    selected={selectedColumnIndex}
                    style={{ margin: 0 }}
                >
                    {_.map(columns, (column, index) => (
                        <SubNavigation.Item
                            key={`drawer-navigation-item-${index}`}
                            label={column.label || 'Need A Label'}
                            onClick={column.onClick}
                        />
                    ))}
                </SubNavigation>
            </div>
        );
    }
}

DrawerNavigation.propTypes = propTypes;
DrawerNavigation.defaultProps = defaultProps;

export default DrawerNavigation;
