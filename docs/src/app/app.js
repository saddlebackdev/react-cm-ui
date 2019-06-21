'use strict';

import '@babel/register';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'css-cm-ui';
import 'app.scss';

import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import Header from './header.js';
import Navigation from './navigation.js';
import { DOMUtils } from 'react-cm-ui';
import MediaQuery from 'react-responsive';
import React from 'react';
import ReactDOM from 'react-dom';

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
                <Navigation toggleNavigation={this._onToggleNavigation.bind(this)} />

                <div className="layout">
                    <MediaQuery maxWidth={767}>
                        <Header onToggleNavigation={this._onToggleNavigation.bind(this)} />
                    </MediaQuery>

                    {this.props.children}
                </div>
            </section>
        );
    }

    componentWillMount() {
        document.querySelector('html').classList.add(DOMUtils.browserDetect());
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
        <IndexRoute
            getComponent={(location, callback) => {
                import('components/GettingStartedIntroduction.react')
                    .then(module => callback(null, module.default));
            }}
        />
        <Route
            getComponent={(location, callback) => {
                import('components/GettingStartedIntroduction.react')
                    .then(module => callback(null, module.default));
            }}
            path="/introduction"
        />
        <Route path="/style-guide">
            <Route
                getComponent={(location, callback) => {
                    import('components/StyleGuideColors.react')
                        .then(module => callback(null, module.default));
                }}
                path="colors"
            />
        </Route>

        <Route path="/elements">
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsButton.react')
                        .then(module => callback(null, module.default));
                }}
                path="button"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsCheckbox.react')
                        .then(module => callback(null, module.default));
                }}
                path="checkbox"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsComment.react')
                        .then(module => callback(null, module.default));
                }}
                path="comment"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsDivider.react')
                        .then(module => callback(null, module.default));
                }}
                path="divider"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsHeader.react')
                        .then(module => callback(null, module.default));
                }}
                path="header"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsIcon.react')
                        .then(module => callback(null, module.default));
                }}
                path="icon"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsImage.react')
                        .then(module => callback(null, module.default));
                }}
                path="image"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsInput.react')
                        .then(module => callback(null, module.default));
                }}
                path="input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsLabel.react')
                        .then(module => callback(null, module.default));
                }}
                path="label"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsList.react')
                        .then(module => callback(null, module.default));
                }}
                path="list"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsLoader.react')
                        .then(module => callback(null, module.default));
                }}
                path="loader"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsRadio.react')
                        .then(module => callback(null, module.default));
                }}
                path="radio"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsRail.react')
                        .then(module => callback(null, module.default));
                }}
                path="rail"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ElementsTextArea.react')
                        .then(module => callback(null, module.default));
                }}
                path="text-area"
            />
        </Route>

        <Route path="collections">
            <Route
                getComponent={(location, callback) => {
                    import('components/CollectionsGrid.react')
                        .then(module => callback(null, module.default));
                }}
                path="grid"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/CollectionsTable.react')
                        .then(module => callback(null, module.default));
                }}
                path="table"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/CollectionsTabs.react')
                        .then(module => callback(null, module.default));
                }}
                path="tabs"
            />
        </Route>

        <Route path="views">
            <Route
                getComponent={(location, callback) => {
                    import('components/ViewsBanner.react')
                        .then(module => callback(null, module.default));
                }}
                path="banner"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ViewsInfoBar.react')
                        .then(module => callback(null, module.default));
                }}
                path="info-bar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ViewsCard.react')
                        .then(module => callback(null, module.default));
                }}
                path="card"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ViewsSubNavigation.react')
                        .then(module => callback(null, module.default));
                }}
                path="sub-navigation"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ViewsTitleBar.react')
                        .then(module => callback(null, module.default));
                }}
                path="title-bar"
            />
        </Route>

        <Route path="modules">
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesAccordion.react')
                        .then(module => callback(null, module.default));
                }}
                path="accordion"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesDatePicker.react')
                        .then(module => callback(null, module.default));
                }}
                path="date-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesDatePickerCalendar.react')
                        .then(module => callback(null, module.default));
                }}
                path="date-picker-calendar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesDatePickerInput.react')
                        .then(module => callback(null, module.default));
                }}
                path="date-picker-input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesDrawer.react')
                        .then(module => callback(null, module.default));
                }}
                path="drawer"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesDropdown.react')
                        .then(module => callback(null, module.default));
                }}
                path="dropdown"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesDurationPicker.react')
                        .then(module => callback(null, module.default));
                }}
                path="duration-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesModal.react')
                        .then(module => callback(null, module.default));
                }}
                path="modal"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesPhoneInput.react')
                        .then(module => callback(null, module.default));
                }}
                path="phone-input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesPrompt.react')
                        .then(module => callback(null, module.default));
                }}
                path="prompt"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesSegmentedControls.react')
                        .then(module => callback(null, module.default));
                }}
                path="segmented-controls"
            />
            <Route
                getComponent={(location, callback) => {
                    import('components/ModulesTimePicker.react')
                        .then(module => callback(null, module.default));
                }}
                path="time-picker"
            />
        </Route>
    </Route>
);

ReactDOM.render(
    <Router history={browserHistory} onUpdate={onUpdate} routes={routes} />,
    document.getElementById('coreApp')
);
