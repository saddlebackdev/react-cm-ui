import ActionBar from './actionBar';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    columns: undefined,
    id: undefined,
    style: {},
};

class DrawerActionBar extends React.PureComponent {
    render() {
        return (
            <div>
                <ActionBar
                    {...this.props}
                    moduleType="drawer"
                />
            </div>
        );
    }
}

DrawerActionBar.propTypes = propTypes;
DrawerActionBar.defaultProps = defaultProps;

export default DrawerActionBar;
