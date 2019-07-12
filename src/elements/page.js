'use strict';

import ClassNames from 'classnames';
import PageActionBar from './pageActionBar.js';
import PageContainer from './pageContainer.js';
import PageContent from './pageContent.js';
import PageFiltersDrawer from './pageFiltersDrawer.js';
import PageFiltersRail from './pageFiltersRail.js';
import PageGrid from './pageGrid.js';
import PageTable from './pageTable.js';
import React from 'react';

const Page = (props) => {
    const { children, className, style } = props;
    const containerClasses = ClassNames('ui', 'page', className);

    return (
        <main className={containerClasses} style={style}>
            {children}
        </main>
    );
};

Page.ActionBar = PageActionBar;
Page.Container = PageContainer;
Page.Content = PageContent;
Page.FiltersDrawer = PageFiltersDrawer;
Page.FiltersRail = PageFiltersRail;
Page.Grid = PageGrid;
Page.Table = PageTable;

export default Page;
