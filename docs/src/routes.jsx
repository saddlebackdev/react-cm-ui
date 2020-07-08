import { IndexRoute, Route } from 'react-router';
import React from 'react';
import CoreApp from './app/app';

const routes = (
    <Route path="/" component={CoreApp}>
        <IndexRoute
            getComponent={(location, callback) => {
                import('./app/home')
                    .then((module) => callback(null, module.default));
            }}
        />

        <Route path="/getting-started">
            <Route
                getComponent={(location, callback) => {
                    import('./gettingStarted/installation')
                        .then((module) => callback(null, module.default));
                }}
                path="installation"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./gettingStarted/usage')
                        .then((module) => callback(null, module.default));
                }}
                path="usage"
            />
        </Route>

        <Route path="/style-guide">
            <Route
                getComponent={(location, callback) => {
                    import('./app/styleGuideColors')
                        .then((module) => callback(null, module.default));
                }}
                path="colors"
            />
        </Route>

        <Route path="/components/data-display">
            <Route
                getComponent={(location, callback) => {
                    import('./dataDisplay/banner')
                        .then((module) => callback(null, module.default));
                }}
                path="banner"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./dataDisplay/divider')
                        .then((module) => callback(null, module.default));
                }}
                path="divider"
            />
            <Route path="icon">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./dataDisplay/iconSet')
                            .then((module) => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./dataDisplay/iconExamples')
                            .then((module) => callback(null, module.default));
                    }}
                    path="examples"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./dataDisplay/image')
                        .then((module) => callback(null, module.default));
                }}
                path="image"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./dataDisplay/list')
                        .then((module) => callback(null, module.default));
                }}
                path="list"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./dataDisplay/personPanel')
                        .then((module) => callback(null, module.default));
                }}
                path="person-panel"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./dataDisplay/table')
                        .then((module) => callback(null, module.default));
                }}
                path="table"
            />
        </Route>

        <Route path="/components/inputs">
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/button')
                        .then((module) => callback(null, module.default));
                }}
                path="button"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/checkbox')
                        .then((module) => callback(null, module.default));
                }}
                path="checkbox"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/datePicker')
                        .then((module) => callback(null, module.default));
                }}
                path="date-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/datePickerCalendar')
                        .then((module) => callback(null, module.default));
                }}
                path="date-picker-calendar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/datePickerInput')
                        .then((module) => callback(null, module.default));
                }}
                path="date-picker-input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/dropdown')
                        .then((module) => callback(null, module.default));
                }}
                path="dropdown"
            />
            <Route path="dropdown-button">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./inputs/dropdownButton')
                            .then((module) => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./inputs/dropdownButtonOption')
                            .then((module) => callback(null, module.default));
                    }}
                    path="option"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/durationPicker')
                        .then((module) => callback(null, module.default));
                }}
                path="duration-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/input')
                        .then((module) => callback(null, module.default));
                }}
                path="input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/phoneInput')
                        .then((module) => callback(null, module.default));
                }}
                path="phone-input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/prompt')
                        .then((module) => callback(null, module.default));
                }}
                path="prompt"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/radio')
                        .then((module) => callback(null, module.default));
                }}
                path="radio"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/segmentedControls')
                        .then((module) => callback(null, module.default));
                }}
                path="segmented-controls"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/textArea')
                        .then((module) => callback(null, module.default));
                }}
                path="text-area"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./inputs/timePicker')
                        .then((module) => callback(null, module.default));
                }}
                path="time-picker"
            />
        </Route>

        <Route path="/components/atoms">
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/activityIndicator')
                        .then((module) => callback(null, module.default));
                }}
                path="activity-indicator"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/header')
                        .then((module) => callback(null, module.default));
                }}
                path="header"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/label')
                        .then((module) => callback(null, module.default));
                }}
                path="label"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/loader')
                        .then((module) => callback(null, module.default));
                }}
                path="loader"
            />
        </Route>

        <Route path="/components/molecules">
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/comment')
                        .then((module) => callback(null, module.default));
                }}
                path="comment"
            />
        </Route>

        <Route path="/components/organisms">
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/accordion')
                        .then((module) => callback(null, module.default));
                }}
                path="accordion"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/card')
                        .then((module) => callback(null, module.default));
                }}
                path="card"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/grid')
                        .then((module) => callback(null, module.default));
                }}
                path="grid"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/infoBar')
                        .then((module) => callback(null, module.default));
                }}
                path="info-bar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/rail')
                        .then((module) => callback(null, module.default));
                }}
                path="rail"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/subNavigation')
                        .then((module) => callback(null, module.default));
                }}
                path="sub-navigation"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/tabs')
                        .then((module) => callback(null, module.default));
                }}
                path="tabs"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/titleBar')
                        .then((module) => callback(null, module.default));
                }}
                path="title-bar"
            />
        </Route>

        <Route path="/components/templates">
            <Route
                getComponent={(location, callback) => {
                    import('./templates/drawerDeprecated')
                        .then((module) => callback(null, module.default));
                }}
                path="drawer-deprecated"
            />
            <Route path="drawer">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./templates/drawer')
                            .then((module) => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerActionBar')
                            .then((module) => callback(null, module.default));
                    }}
                    path="action-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerContent')
                            .then((module) => callback(null, module.default));
                    }}
                    path="content"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerFiltersDrawer')
                            .then((module) => callback(null, module.default));
                    }}
                    path="filters-drawer"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDeprecatedFiltersDrawer')
                            .then((module) => callback(null, module.default));
                    }}
                    path="deprecated-filters-drawer"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDataCards')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-cards"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerNavigation')
                            .then((module) => callback(null, module.default));
                    }}
                    path="navigation"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDataGrid')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-grid"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerTitleBar')
                            .then((module) => callback(null, module.default));
                    }}
                    path="title-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerWing')
                            .then((module) => callback(null, module.default));
                    }}
                    path="wing"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDetailsWindow')
                            .then((module) => callback(null, module.default));
                    }}
                    path="details-window"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerSticky')
                            .then((module) => callback(null, module.default));
                    }}
                    path="sticky"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDataGroups')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-groups"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./templates/modal')
                        .then((module) => callback(null, module.default));
                }}
                path="modal"
            />
            <Route path="page">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./templates/page')
                            .then((module) => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageActionBar')
                            .then((module) => callback(null, module.default));
                    }}
                    path="action-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageContainer')
                            .then((module) => callback(null, module.default));
                    }}
                    path="container"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageContent')
                            .then((module) => callback(null, module.default));
                    }}
                    path="content"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageDataCards')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-cards"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageDataGrid')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-grid"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageDataGroups')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-groups"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageDetailsWindow')
                            .then((module) => callback(null, module.default));
                    }}
                    path="details-window"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageFiltersDrawer')
                            .then((module) => callback(null, module.default));
                    }}
                    path="filters-drawer"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageFiltersRail')
                            .then((module) => callback(null, module.default));
                    }}
                    path="filters-rail"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/pageDemo')
                            .then((module) => callback(null, module.default));
                    }}
                    path="demo"
                />
            </Route>
        </Route>
    </Route>
);

export default routes;
