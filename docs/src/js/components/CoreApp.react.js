'use strict';

import 'components/CoreApp.scss';

import 'babel-core/register';
import 'babel-polyfill';

import MediaQuery from 'react-responsive';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Structure Components
import CoreAppHeader from 'components/CoreAppHeader.react';
import CoreAppNavigation from 'components/CoreAppNavigation.react';

// Page Components
import CollectionsGrid from 'components/CollectionsGrid.react';
import CollectionsSubNavigation from 'components/CollectionsSubNavigation.react';
import CollectionsSegmentedControls from 'components/CollectionsSegmentedControls.react';
import CollectionsTable from 'components/CollectionsTable.react';
import CollectionsTabs from 'components/CollectionsTabs.react';
import GettingStartedIntroduction from 'components/GettingStartedIntroduction.react';
import ElementsButton from 'components/ElementsButton.react';
import ElementsCheckbox from 'components/ElementsCheckbox.react';
import ElementsDivider from 'components/ElementsDivider.react';
import ElementsHeader from 'components/ElementsHeader.react';
import ElementsIcon from 'components/ElementsIcon.react';
import ElementsLoader from 'components/ElementsLoader.react';
import ElementsInput from 'components/ElementsInput.react';
import ElementsRadio from 'components/ElementsRadio.react';
import ElementsTextArea from 'components/ElementsTextArea.react';
import ModulesAccordion from 'components/ModulesAccordion.react';
import ModulesDatePicker from 'components/ModulesDatePicker.react';
import ModulesDrawer from 'components/ModulesDrawer.react';
import ModulesDropdown from 'components/ModulesDropdown.react';
import ModulesModal from 'components/ModulesModal.react';
import ModulesTimePicker from 'components/ModulesTimePicker.react';
import StyleGuideColors from 'components/StyleGuideColors.react';
import ViewsCard from 'components/ViewsCard.react';
import ViewsTitleBar from 'components/ViewsTitleBar.react';

import DOMUtils from 'utils/UI/DOMUtils.js';

if (location.hash && location.hash[0] === '#' && location.hash[1] === '!') {
    history.pushState({}, '', location.hash.substring(2));
}

export default class CoreApp extends React.Component {

    constructor(props) {
        super(props);

        this._curScrollPos = null;
    }

    render() {
        return (
            <section className="core-app-root">
                <CoreAppNavigation toggleNavigation={this._onToggleNavigation.bind(this)} />

                <div className="layout">
                    <MediaQuery maxWidth={767}>
                        <CoreAppHeader onToggleNavigation={this._onToggleNavigation.bind(this)} />
                    </MediaQuery>

                    {this.props.children}
                </div>
            </section>
        );
    }

    _onToggleNavigation(event) {
        if (DOMUtils.hasClassName(document.body, 'pushed-right')) {
            document.body.classList.remove('pushed-right');
        } else {
            this._curScrollPos = DOMUtils.scrollPos();

            document.body.classList.add('pushed-right');
        }
    }

}

function onUpdate() {
    const { hash } = window.location;

    if (hash !== '') {
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView();
            }
        }, 0);
    } else {
        window.scrollTo(0, 0);
    }
}

let routes = (
    <Route path="/" component={CoreApp}>
        <IndexRoute component={GettingStartedIntroduction} />

        <Route path="introduction" component={GettingStartedIntroduction} />

        <Route path="style-guide">
            <Route path="colors" component={StyleGuideColors} />
        </Route>

        <Route path="elements">
            <Route path="button" component={ElementsButton} />
            <Route path="checkbox" component={ElementsCheckbox} />
            <Route path="divider" component={ElementsDivider} />
            <Route path="header" component={ElementsHeader} />
            <Route path="icon" component={ElementsIcon} />
            <Route path="input" component={ElementsInput} />
            <Route path="loader" component={ElementsLoader} />
            <Route path="radio" component={ElementsRadio} />
            <Route path="text-area" component={ElementsTextArea} />
        </Route>

        <Route path="collections">
            <Route path="grid" component={CollectionsGrid} />
            <Route path="sub-navigation" component={CollectionsSubNavigation} />
            <Route path="segmented-controls" component={CollectionsSegmentedControls} />
            <Route path="table" component={CollectionsTable} />
            <Route path="tabs" component={CollectionsTabs} />
        </Route>

        <Route path="views">
            <Route path="card" component={ViewsCard} />
            <Route path="title-bar" component={ViewsTitleBar} />
        </Route>

        <Route path="modules">
            <Route path="accordion" component={ModulesAccordion} />
            <Route path="date-picker" component={ModulesDatePicker} />
            <Route path="drawer" component={ModulesDrawer} />
            <Route path="dropdown" component={ModulesDropdown} />
            <Route path="modal" component={ModulesModal} />
            <Route path="time-picker" component={ModulesTimePicker} />
        </Route>
    </Route>
);

ReactDOM.render(
    <Router history={browserHistory} onUpdate={onUpdate} routes={routes} />,
    document.getElementById('coreApp')
);
