import { IndexRoute, Route } from 'react-router';
import App from './app/app.js';
import React from 'react';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute
            getComponent={(location, callback) => {
                import('./app/gettingStartedIntroduction.js')
                    .then(module => callback(null, module.default));
            }}
        />
        <Route
            getComponent={(location, callback) => {
                import('./app/gettingStartedIntroduction.js')
                    .then(module => callback(null, module.default));
            }}
            path="/introduction"
        />
        <Route path="/style-guide">
            <Route
                getComponent={(location, callback) => {
                    import('./app/styleGuideColors.js')
                        .then(module => callback(null, module.default));
                }}
                path="colors"
            />
        </Route>

        <Route path="/elements">
            <Route
                getComponent={(location, callback) => {
                    import('./elements/button.js')
                        .then(module => callback(null, module.default));
                }}
                path="button"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/checkbox.js')
                        .then(module => callback(null, module.default));
                }}
                path="checkbox"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/comment.js')
                        .then(module => callback(null, module.default));
                }}
                path="comment"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/divider.js')
                        .then(module => callback(null, module.default));
                }}
                path="divider"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/header.js')
                        .then(module => callback(null, module.default));
                }}
                path="header"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/icon.js')
                        .then(module => callback(null, module.default));
                }}
                path="icon"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/image.js')
                        .then(module => callback(null, module.default));
                }}
                path="image"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/input.js')
                        .then(module => callback(null, module.default));
                }}
                path="input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/label.js')
                        .then(module => callback(null, module.default));
                }}
                path="label"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/list.js')
                        .then(module => callback(null, module.default));
                }}
                path="list"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/loader.js')
                        .then(module => callback(null, module.default));
                }}
                path="loader"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/radio.js')
                        .then(module => callback(null, module.default));
                }}
                path="radio"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/rail.js')
                        .then(module => callback(null, module.default));
                }}
                path="rail"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./elements/textArea.js')
                        .then(module => callback(null, module.default));
                }}
                path="text-area"
            />
        </Route>

        <Route path="collections">
            <Route
                getComponent={(location, callback) => {
                    import('./collections/grid.js')
                        .then(module => callback(null, module.default));
                }}
                path="grid"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./collections/table.js')
                        .then(module => callback(null, module.default));
                }}
                path="table"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./collections/tabs.js')
                        .then(module => callback(null, module.default));
                }}
                path="tabs"
            />
        </Route>

        <Route path="views">
            <Route
                getComponent={(location, callback) => {
                    import('./views/banner.js')
                        .then(module => callback(null, module.default));
                }}
                path="banner"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./views/infoBar.js')
                        .then(module => callback(null, module.default));
                }}
                path="info-bar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./views/card.js')
                        .then(module => callback(null, module.default));
                }}
                path="card"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./views/subNavigation.js')
                        .then(module => callback(null, module.default));
                }}
                path="sub-navigation"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./views/titleBar.js')
                        .then(module => callback(null, module.default));
                }}
                path="title-bar"
            />
        </Route>

        <Route path="modules">
            <Route
                getComponent={(location, callback) => {
                    import('./modules/accordion.js')
                        .then(module => callback(null, module.default));
                }}
                path="accordion"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/datePicker.js')
                        .then(module => callback(null, module.default));
                }}
                path="date-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/datePickerCalendar.js')
                        .then(module => callback(null, module.default));
                }}
                path="date-picker-calendar"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/datePickerInput.js')
                        .then(module => callback(null, module.default));
                }}
                path="date-picker-input"
            />
            <Route path="drawer">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./modules/drawer.js')
                            .then(module => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerActionBar.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="action-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerContent.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="content"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerFiltersDrawer.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="filters-drawer"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerGrid.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="grid"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerNavigation.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="navigation"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerTable.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="table"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerTitleBar.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="title-bar"
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/drawerWing.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="wing"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./modules/drawerDeprecated.js')
                        .then(module => callback(null, module.default));
                }}
                path="drawer-deprecated"
            />
            <Route path="page">
                <IndexRoute
                    getComponent={(location, callback) => {
                        import('./modules/page.js')
                            .then(module => callback(null, module.default));
                    }}
                />
                <Route
                    getComponent={(location, callback) => {
                        import('./modules/pageDemo.js')
                            .then(module => callback(null, module.default));
                    }}
                    path="demo"
                />
            </Route>
            <Route
                getComponent={(location, callback) => {
                    import('./modules/dropdown.js')
                        .then(module => callback(null, module.default));
                }}
                path="dropdown"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/durationPicker.js')
                        .then(module => callback(null, module.default));
                }}
                path="duration-picker"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/modal.js')
                        .then(module => callback(null, module.default));
                }}
                path="modal"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/phoneInput.js')
                        .then(module => callback(null, module.default));
                }}
                path="phone-input"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/prompt.js')
                        .then(module => callback(null, module.default));
                }}
                path="prompt"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/segmentedControls.js')
                        .then(module => callback(null, module.default));
                }}
                path="segmented-controls"
            />
            <Route
                getComponent={(location, callback) => {
                    import('./modules/timePicker.js')
                        .then(module => callback(null, module.default));
                }}
                path="time-picker"
            />
        </Route>
    </Route>
);

export default routes;
