'use strict';

import ClassNames from 'classnames';
import React from 'react';

const PageDataGroups = (props) => {
    const { children, className, style } = props;
    const containerClasses = ClassNames('ui', 'page--data_groups', className);

    return (
        <div className={containerClasses} style={style}>
            {children}
        </div>
    );
};

export default PageDataGroups;
