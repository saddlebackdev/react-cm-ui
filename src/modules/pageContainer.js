'use strict';

import ClassNames from 'classnames';
import React from 'react';

const PageContainer = (props) => {
    const { children, className, style } = props;
    const containerClasses = ClassNames('ui', 'page--container', className);

    return (
        <div className={containerClasses} style={style}>
            {children}
        </div>
    );
};

export default PageContainer;
