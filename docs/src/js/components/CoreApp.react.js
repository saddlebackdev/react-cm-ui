'use strict';

import 'babel-core/register';
import 'babel-polyfill';

import 'css-cm-ui';
import 'components/CoreApp.scss';

import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { DOMUtils } from 'react-cm-ui';

// Structure Components
import CoreAppHeader from 'components/CoreAppHeader.react';
import CoreAppNavigation from 'components/CoreAppNavigation.react';

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
                require.ensure([], require => {
                    callback(null, require('components/GettingStartedIntroduction.react'))
                }, 'GettingStartedIntroduction')
            }}
        />

        <Route
            path="introduction"
            getComponent={(location, callback) => {
                require.ensure([], require => {
                    callback(null, require('components/GettingStartedIntroduction.react'))
                }, 'GettingStartedIntroduction')
            }}
        />

        <Route path="style-guide">
            <Route
                path="colors"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/StyleGuideColors.react'))
                    }, 'StyleGuideColors')
                }}
            />
        </Route>

        <Route path="elements">
            <Route
                path="button"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsButton.react'))
                    }, 'ElementsButton')
                }}
            />
            <Route
                path="checkbox"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsCheckbox.react'))
                    }, 'ElementsCheckbox')
                }}
            />
            <Route
                path="comment"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsComment.react'))
                    }, 'ElementsComment')
                }}
            />
            <Route
                path="divider"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsDivider.react'))
                    }, 'ElementsDivider')
                }}
            />
            <Route
                path="header"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsHeader.react'))
                    }, 'ElementsHeader')
                }}
            />
            <Route
                path="icon"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsIcon.react'))
                    }, 'ElementsIcon')
                }}
            />
            <Route
                path="image"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsImage.react'))
                    }, 'ElementsImage')
                }}
            />
            <Route
                path="input"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsInput.react'))
                    }, 'ElementsInput')
                }}
            />
            <Route
                path="label"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsLabel.react'))
                    }, 'ElementsLabel')
                }}
            />
            <Route
                path="list"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsList.react'))
                    }, 'ElementsList')
                }}
            />
            <Route
                path="loader"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsLoader.react'))
                    }, 'ElementsLoader')
                }}
            />
            <Route
                path="radio"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsRadio.react'))
                    }, 'ElementsRadio')
                }}
            />
            <Route
                path="rail"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsRail.react'))
                    }, 'ElementsRail')
                }}
            />
            <Route
                path="text-area"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ElementsTextArea.react'))
                    }, 'ElementsTextArea')
                }}
            />
        </Route>

        <Route path="collections">
            <Route
                path="grid"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/CollectionsGrid.react'))
                    }, 'CollectionsGrid')
                }}
            />
            <Route
                path="table"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/CollectionsTable.react'))
                    }, 'CollectionsTable')
                }}
            />
            <Route
                path="tabs"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/CollectionsTabs.react'))
                    }, 'CollectionsTabs')
                }}
            />
        </Route>

        <Route path="views">
            <Route
                path="banner"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ViewsBanner.react'))
                    }, 'ViewsBanner')
                }}
            />
            <Route
                path="info-bar"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ViewsInfoBar.react'))
                    }, 'ViewsInfoBar')
                }}
            />
            <Route
                path="card"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ViewsCard.react'))
                    }, 'ViewsCard')
                }}
            />
            <Route
                path="sub-navigation"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ViewsSubNavigation.react'))
                    }, 'ViewsSubNavigation')
                }}
            />
            <Route
                path="title-bar"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ViewsTitleBar.react'))
                    }, 'ViewsTitleBar')
                }}
            />
        </Route>

        <Route path="modules">
            <Route
                path="accordion"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesAccordion.react'))
                    }, 'ModulesAccordion')
                }}
            />
            <Route
                path="date-picker"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesDatePicker.react'))
                    }, 'ModulesDatePicker')
                }}
            />
            <Route
                path="date-picker-input"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesDatePickerInput.react'))
                    }, 'ModulesDatePickerInput')
                }}
            />
            <Route
                path="drag-and-drop"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesDragAndDrop.react'))
                    }, 'ModulesDragAndDrop')
                }}
            />
            <Route
                path="drawer"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesDrawer.react'))
                    }, 'ModulesDrawer')
                }}
            />
            <Route
                path="dropdown"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesDropdown.react'))
                    }, 'ModulesDropdown')
                }}
            />
            <Route
                path="duration-picker"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesDurationPicker.react'))
                    }, 'ModulesDurationPicker')
                }}
            />
            <Route
                path="modal"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesModal.react'))
                    }, 'ModulesModal')
                }}
            />
            <Route
                path="phone-input"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesPhoneInput.react'))
                    }, 'ModulesPhoneInput')
                }}
            />
            <Route
                path="prompt"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesPrompt.react'))
                    }, 'ModulesPrompt')
                }}
            />
            <Route
                path="segmented-controls"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesSegmentedControls.react'))
                    }, 'ModulesSegmentedControls')
                }}
            />
            <Route
                path="time-picker"
                getComponent={(location, callback) => {
                    require.ensure([], require => {
                        callback(null, require('components/ModulesTimePicker.react'))
                    }, 'ModulesTimePicker')
                }}
            />
        </Route>
    </Route>
);

ReactDOM.render(
    <Router history={browserHistory} onUpdate={onUpdate} routes={routes} />,
    document.getElementById('coreApp')
);
