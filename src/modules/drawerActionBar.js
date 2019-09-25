'use strict';

import ActionBar from './actionBar.js';
import PropTypes from 'prop-types';
import React from 'react';

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

DrawerActionBar.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    id: PropTypes.string,
    style: PropTypes.object,
};

export default DrawerActionBar;
