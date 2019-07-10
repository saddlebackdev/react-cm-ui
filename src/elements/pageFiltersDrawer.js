'use strict';

import ClassNames from 'classnames';
import Drawer from '../modules/drawer.js';
import Icon from './icon.js';
import MediaQuery from 'react-responsive';
import React from 'react';

const PaageFiltersDrawer = (props) => {
    const {
        children,
        isOpen,
        onClose,
    } = props;
    const containerClasses = ClassNames('ui', 'page--filters_drawer');
    const RenderDrawer = (
        <Drawer
            className={containerClasses}
            closeButton={<Icon compact onClick={onClose} type="times" />}
            isOpen={isOpen}
            onClose={onClose}
            title={
                <div className="ui header title" title="Filters">
                    <Icon size="medium" type="filter" />
                </div>
            }
        >
            <React.Fragment>
                {children}
            </React.Fragment>
        </Drawer>
    );

    return (
        <MediaQuery
            maxWidth={767}
        >
            {RenderDrawer}
        </MediaQuery>
    );
};

export default PaageFiltersDrawer;
