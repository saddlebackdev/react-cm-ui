'use strict';

import ActionBar from './actionBar.js';
import PropTypes from 'prop-types';
import React from 'react';

class PageActionBar extends React.PureComponent {
    render() {
        return (
            <ActionBar
                {...this.props}
                moduleType="page"
            />
        );
    }
}

PageActionBar.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    id: PropTypes.string,
    style: PropTypes.object,
};

export default PageActionBar;
