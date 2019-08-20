'use strict';

import ClassNames from 'classnames';
import Drawer from '../modules/drawer.js';
import Icon from '../elements/icon.js';
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
            isOpen={isOpen}
            onClose={onClose}
        >
            <Drawer.TitleBar
                closeButton={
                    <Icon
                        compact
                        onClick={onClose}
                        type="times"
                    />
                }
                title={
                    <div className="ui header title" title="Filters">
                        <Icon
                            color="static"
                            size="medium"
                            type="filter"
                        />
                    </div>
                }
            />

            <Drawer.Content>
                {children}
            </Drawer.Content>
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
