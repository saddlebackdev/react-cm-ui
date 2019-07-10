'use strict';

import ClassNames from 'classnames';
import React from 'react';

const PageActionBar = (props) => {
    const { children, className, style } = props;
    const containerClasses = ClassNames('ui', 'page--action_bar', className);

    return (
        <header className={containerClasses} style={style}>
            <div style={{ width: '100%' }}>
                {children}
            </div>
        </header>
    );
};

export default PageActionBar;
