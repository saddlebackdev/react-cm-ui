import { IndexRoute, Route } from 'react-router';
import React from 'react';
import CoreApp from './app';

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
                    import('./app/styleGuideColors.js')
                        .then((module) => callback(null, module.default));
                }}
                path="colors"
            />
        </Route>

        <Route path="/atoms">
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/activityIndicator')
                        .then((module) => callback(null, module.default));
                }}
                path="activity-indicator"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/button.js')
                        .then((module) => callback(null, module.default));
                }}
                path="button"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/checkbox.js')
                        .then((module) => callback(null, module.default));
                }}
                path="checkbox"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/divider.js')
                        .then((module) => callback(null, module.default));
                }}
                path="divider"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/dropdown.js')
                        .then((module) => callback(null, module.default));
                }}
                path="dropdown"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/header')
                        .then((module) => callback(null, module.default));
                }}
                path="header"
            />
            <Route path="icon">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./atoms/iconSet.js')
                            .then((module) => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./atoms/iconExamples.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="examples"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/image.js')
                        .then((module) => callback(null, module.default));
                }}
                path="image"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/input.js')
                        .then((module) => callback(null, module.default));
                }}
                path="input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/label.js')
                        .then((module) => callback(null, module.default));
                }}
                path="label"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/list.js')
                        .then((module) => callback(null, module.default));
                }}
                path="list"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/loader.js')
                        .then((module) => callback(null, module.default));
                }}
                path="loader"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/prompt.js')
                        .then((module) => callback(null, module.default));
                }}
                path="prompt"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/radio.js')
                        .then((module) => callback(null, module.default));
                }}
                path="radio"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/segmentedControls.js')
                        .then((module) => callback(null, module.default));
                }}
                path="segmented-controls"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./atoms/textArea.js')
                        .then((module) => callback(null, module.default));
                }}
                path="text-area"
            />
        </Route>

        <Route path="molecules">
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/banner.js')
                        .then((module) => callback(null, module.default));
                }}
                path="banner"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/comment.js')
                        .then((module) => callback(null, module.default));
                }}
                path="comment"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/datePicker.js')
                        .then((module) => callback(null, module.default));
                }}
                path="date-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/datePickerCalendar.js')
                        .then((module) => callback(null, module.default));
                }}
                path="date-picker-calendar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/datePickerInput.js')
                        .then((module) => callback(null, module.default));
                }}
                path="date-picker-input"
            />
             <Route
                getComponent={(location, callback) => {
                    import('./molecules/durationPicker.js')
                        .then((module) => callback(null, module.default));
                }}
                path="duration-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/phoneInput.js')
                        .then((module) => callback(null, module.default));
                }}
                path="phone-input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./molecules/timePicker.js')
                        .then((module) => callback(null, module.default));
                }}
                path="time-picker"
            />
        </Route>

        <Route path="organisms">
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/accordion.js')
                        .then((module) => callback(null, module.default));
                }}
                path="accordion"
            />
             <Route
                getComponent={(location, callback) => {
                    import('./organisms/card.js')
                        .then((module) => callback(null, module.default));
                }}
                path="card"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/grid.js')
                        .then((module) => callback(null, module.default));
                }}
                path="grid"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/infoBar.js')
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
                    import('./organisms/subNavigation.js')
                        .then((module) => callback(null, module.default));
                }}
                path="sub-navigation"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/table')
                        .then((module) => callback(null, module.default));
                }}
                path="table"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/tabs.js')
                        .then((module) => callback(null, module.default));
                }}
                path="tabs"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./organisms/titleBar.js')
                        .then((module) => callback(null, module.default));
                }}
                path="title-bar"
            />
        </Route>

        <Route path="templates">
            <Route
                getComponent={(location, callback) => {
                    import('./templates/drawerDeprecated.js')
                        .then((module) => callback(null, module.default));
                }}
                path="drawer-deprecated"
            />
            <Route path="drawer">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./templates/drawer.js')
                            .then((module) => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerActionBar.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="action-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerContent.js')
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
                        import('./templates/drawerDeprecatedFiltersDrawer.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="deprecated-filters-drawer"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDataCards.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-cards"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerNavigation.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="navigation"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDataGrid.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="data-grid"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerTitleBar.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="title-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerWing.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="wing"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDetailsWindow.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="details-window"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerSticky.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="sticky"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./templates/drawerDataGroups.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="data-groups"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./templates/modal.js')
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
                        import('./templates/pageDemo.js')
                            .then((module) => callback(null, module.default));
                    }}
                    path="demo"
                />
            </Route>
        </Route>
    </Route>
);

export default routes;
