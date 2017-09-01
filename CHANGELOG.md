# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 1.4.0 - 2017-08-30
### Added
- **Accordion** can be inclusive by passing `false` using the new props, `exclusive`.
- **Accordion's** can now be nested in **Accordion's**.

## Changed
- A `basic` **Accordion** that uses Summary and Content containers is now styled.

## 1.3.3 - 2017-08-30
### Changed
- Changed the **Divider's** primary color and removed `color="light"`.

## 1.3.2 - 2017-08-30
### Added
- New `labelStyle` prop added to **Input**, **Dropdown**, and **TextArea**.

### Changed
- Removed a **Loader** warning in Chrome.
- **Drawer** dimmer saturation experiment.

## 1.3.1 - 2017-08-25
### Changed
- Fixed the way **Input** number controls were adding and subtracting. Whoops. :)

## 1.3.0 - 2017-08-25
### Added
- New number **Input**.

## 1.2.1 - 2017-08-24
### Changed
- **Button**'s vertical alignment when having an icon is now aligned.
- **Drawer.Header** is aligned to mockups more appropriately.
- **Radio** has a `margin-right: 22px` now instead of `margin-right: 11px`.
- Moved **Dropdown**'s required indicator to the right of the label and actually styled the asterisk.
- Elements adjacent to **Dropdown**, **Input**, and **Textarea** now has a `margin-top: em(26);`.
- Elements adjacent to **Dropdown** now has a `margin-top: em(26);`.

## 1.2.0 - 2017-08-24
### Added
- New **Radio** pill grouping.

### Changed
- Removed **Drawer**'s close button container height.
- Moved **TextArea**'s required indicator to the right of the label.
- Changed **Input** and **TextArea**'s required indicator negative space.

## 1.1.8 - 2017-08-19
### Added
- New **Header** prop, `weight`. enums: `bold`, `normal`, and `semibold`.

### Changed
- Moved **Input**'s required indicator to the right of the label.
- Changed **Drawer**'s inner container to have a bottom padding.
- Changed icon font name.
- **Icon** type `times` is now bigger.

## 1.1.7 - 2017-08-19
### Added
- New **Button** prop, `relax`.
- New **Divider** color, `light`.
- New global text color, `color-success`

## 1.1.6 - 2017-08-19
### Added
- **Dropdown** (not selections) menu's now detect if they are in the viewport.
- Added a `browserDetect` function.

### Changed
- Removed the filter blur for when a **Drawer** is open.    

## 1.1.5 - 2017-08-11
### Removed
- **TreeMenu** removed.

## 1.1.4 - 2017-08-04
### Added
- Added a `filter` icon.

### Changed
- **Divider**: `relaxed` prop now accepts the string `very` to add even more negative space.
- **Icon**: fixed the color `warning`.
- **Icon**: removed temporary spinner icons and just left the one that looks the best.

## 1.1.3 - 2017-08-04
### Changed
- **Drawer**: Removed `setState` and replaced with `style.paddingTop` in the `_onUpdate` function.

## 1.1.2 - 2017-08-03
### Changed
- Added a `warning` (orange) color to **Button**.
- Added `onUpdate` to **Drawer**.
- Removed `ignorePadding` from **Drawer**.

## 1.1.1 - 2017-08-03
### Changed
- Upgraded extract-text-webpack-plugin.

## 1.1.0 - 2017-08-01
### Changed
- Ability to add **Drawer.Header** to a component child. The ability to pass props: `onClose`, `title` and etc from **Drawer.Header** is now obsolete. Props must be passed from the parent **Drawer** instead.
- Added the ability to have an **Icon** along with a placeholder in the **Dropdown** component.
- Fixed **Dropdown**'s disable background color.
- Importing **BannerItem** in **Banner** now.

## 1.0.2 - 2017-06-29
### Changed
- A fix for the UI docs website.

## 1.0.1 - 2017-06-28
### Changed
- Fixed Doc's **Grid.Column**

## 1.0.0 - 2017-06-21
### Added
- Official first release of the React Church Management UI Library.

## 0.14.0 - 2017-06-12
### Added
- New **Banner** view component.

### Changed
- Moved **SegmentedControls** to Modules.
- Moved **Accordion** to Modules.
- Moved **SubNavigation** to Modules.
- Docs' code has been split and chunked. I've been looking into speeding up the end-user's user experience when first loading the app.

## 0.13.1 - 2017-06-01
### Changed
- Layered **Drawer** shadows have been fixed.

## 0.13.0 - 2017-05-31
### Added
- Added **Label** documentation.

### Changed
- Moved **Accordion** to Collections.
- Fixed the **Accordion** Item to have a `5px` top margin.
- Refactored the **Label** component.
- **Checkbox** check is now `10px`.
- Fixed the **TextArea** `autoHeight` on render.

## 0.12.10 - 2017-05-26
### Changed
- **Dropdown** `value` prop update: now accepts propTypes `number` and `string`.

## 0.12.10 - 2017-05-20
### Changed
- Added `onMonthChange` prop to **DatePicker**.

## 0.12.9 - 2017-05-19
### Changed
- The inner wrap for a **Button** now is a `flex` box type. This will fix the alignment issues when some buttons have icons and other do not.
- **Checkbox** new prop: `inverse`.

## 0.12.8 - 2017-05-17
### Changed
- Removed **Container** `actionBar` prop and create a new sub component **Container.Actionbar**
- Style refinements to **Drawer.Header**

## 0.12.7 - 2017-05-17
### Changed
- **Button** color prop update: `transparent`.
- **Container** color prop update: `transparent`.
- **Label** style refinements and code cleanup.
- **Drawer.Header** new prop: `inverse`.

## 0.12.6 - 2017-05-15
### Changed
- **Radio**'s have a right margin now.
- New **Drawer.Header** prop: `titleTruncate`.
- New **Header** prop: `title`.

## 0.12.6 - 2017-05-12
### Changed
- `<SegmentedControls.Item>` is now a capability with the **SegmentedControls** component.
- Fixed **Drawer** close button right margin.
- Changed `height` to `min-height` in the **Container's** style.

## 0.12.5 - 2017-05-09
### Changed
- New **Drawer** `path` prop to handle route path changes.

## 0.12.4 - 2017-05-09
### Changed
- Updated **Drawer** & **Input** documentation to have anchor tags.

## 0.12.3 - 2017-05-05
### Added
- new **Dropdown** props: `fluid` and `label`.
- new **Container** prop: 'actionBar'

### Changed
- Changed the **Drawer** top padding.
- Added a `Variable.scss` config file. Right now the only variable in there is CM's `$nav-width`.
- Fixed padding for **SubNavigation** when in a drawer and in a mobile view.

## 0.12.2 - 2017-05-04
### Added
- A new **List** common component. There isn’t documentation for this yet.
- A new **Container** common component. There isn’t documentation for this yet.
- **Input** and **TextArea** adjacent selector has been changed to a wildcard.

### Changed
- Added a `buttonColor` prop to **Dropdown**.
- Two new icons: `cog` and `comment-sms`
- **Icon** now has a `disable` prop.
- Added a `labelStyle` **Checkbox** to style a Checkbox’s label content.
- **Tabs.Item** style prop has been fixed. It previously wanted a string. Wrong! Now is an object.
- **TableRow** has a new `selected` prop. Yay!
- **TableHeaderCell** now wants to know if the responsive width might either be `true` or `auto`. Also added the `collapsing` prop this component.
- **TableCell** now wants to know if the responsive width might either be `true` or `auto`.
- Added some more logic to **GridColumn** responsive props. Now accounts for if the responsive width is a `bool` or `auto`.
- **Drawer** header and yPos scrollbar now have a 'z-index' to help with layering.

## 0.12.1 - 2017-05-01
### Added
- Container component. (No documentation for this component yet.)

### Changed
- `<Tabs.Item>` is now a capability with the Tabs component.
- Fixed Tabs component not indicating that there are more then three or more tabs.
- SubNavigation Items do not wrap and can now be scrolled.
- Added `z-index` of 1 to TitleBar.

## 0.12.0 - 2017-04-26
### Added
- Time Picker component and documentation

### Changed

## 0.11.1 - 2017-04-13
### Added

### Changed
- Fixed Drawer's `inverse` prop and added an example.

## 0.11.0 - 2017-04-13
### Added

### Changed
- You can now use `<Grid.Column>` or `<Grid.Row>` in order to not import the subcomponents in the parent.
- `<Grid.Column>` has a new way of specifying how wide a given column should be. Before: `width={2}` (2 / 12). Now: `width={3}` will be 3 columns wide.

## 0.10.0 - 2017-04-12
### Added
- Updated icon `chevron-...` type name to `chevron-wh-...` and added another lighter chevron to the mix.
- Added colors to Button.
- A beautiful Dropdown component.

### Changed
- Refactored Drawer's header. Now accepts header children.
- Removed Drawer's dimmer saturation and expanded the blur from 1px to 5px.
- Refactored Drawer's onClickOutside logic.
- SubNavigation component now has subcomponent capability. e.g. `<SubNavigation.Item />`.
- Moved `import 'TypographyDeprecation';` into `./src/scss/components/App/CoreApp.scss` in order to have Docs and CM use the same `Typography.scss` file. What this change does: brings the new text rules into CM so we can utilize the new font rules that is taking place of what has been deprecated.

## 0.9.0 - 2017-04-05
### Added
- CoreAppNavigation items now close when the menu is in mobile view.
- Added `react-select` to navigation's Packages section.

### Changed
- Upgraded `react-responsive` from 1.2.6 to 1.2.7 to remove an unmet peer dependency error in console.
- Upgraded `react-select` from 0.9.1 to 1.0.0-rc.3.
- Removed prop `square` and reclaimed prop `icon` for Button.
- Refactored Drawer's header. Now accepts header children.
- Removed Drawer's dimmer saturation and expanded the blur from 1px to 5px.

## 0.8.0 - 2017-03-24
### Added
- Added Accordion component and documentation.
- Added Loader component and documentation.
- Added Drawer component and documentation.
- Added Divider component and documentation.
- Added ability to give a Header component an anchor.
- Added ability to rotate an Icon.
- Added ability for a Button to be square to be used with an Icon.
- Added Modal component and documentation.
- Button example page now has a disabled sample. Sorry folks.
- Added react-portal to the navigation

### Changed
- Removed `$border-grey-NUMBER` variables.
- Fixed padding on buttons in Sub Navigation component.

## 0.7.1 - 2017-03-08
### Added
- Added icon set to Icon page.
- Updated style guide files to v.1.6.2.

### Changed
- SubNavigationItem's now have an onClick prop.

## 0.7.0 - 2017-03-07
### Added
- Added Segmented Controls component and documentation.

### Changed
- Removed the docs `<PanelHeader />` component.
- Removed `$bkgd-` color variable names. (`$border-` color variable names, you're coming next. Yeah, it's a threat.)
- Fixed the height of single line inputs, which caused a chain effect needing the text area to also be updated.
- Renamed `Tab.react` to `TabsItem.react`.

## 0.6.0 - 2017-03-03
### Added
- TextArea component and documentation.
- Checkbox Input component and documentation.
- Radio Input component and documentation.
- Navigation now has a `is-active` class on items.

### Changed
- Moved Tabs to Collections. (don't know how I missed that I put the component in the wrong category.)
- Fixed the Props table to a little more mobile friendly.
- Fixed bottom padding in navigation.
- Removed wrong Grid props and supplied the appropriate props for `<Grid />`

## 0.5.0 - 2017-03-02
### Added
- Sub Navigation component and documentation
- Added `react-select` to the navigation's list of UI packages that we use.

## 0.4.0 - 2017-03-01
### Added
- Added a `Views` section.
- Added a `Tabs` documentation to Views.

### Changed
- Moved `Cards` and `TitleBar` to `Views` section.
- Fixed Button documentation Icons samples.

## 0.3.0 - 2017-02-17
### Added
- Start and End Service period text to help enduser on what to do.
- Added labels to from and to date range inputs
- You can now provide an array of events to Date Picker for the day to be marked that there are events.
- Button now has a width attribute to make a button a fixed width.
- Buttons grow larger in height when viewport less than 768.
- Input component and documentation is now complete.
- New Icon font files and styles.
- Icon documentation.
- Date Picker documentation.

### Changed
- Uncommented Date Picker link in the navigation.
- Date Picker's are set to a fixed width now.
- Date Picker apply is static/disabled until dates have been selected.
- Fixed Card component onClick event causing error.
- Date Picker day hover background color.
- Version number updated to 0.0.5 in the Navigation
- Fixed onKeyDown problems existing when tabbed or returned
- Fixed Date Picker input date not passing value.
- Removed button sizes.
- Updated style guide files.

## 0.2.0 - 2017-02-16
### Added
- Added a build-docs script to `package.json`.
- Mobile first style logic with new mobile header.
- Card component and documentation.
- Title Bar component and documentation.
- Table responsive width example.
- Code css rule to highlight code on the frontend better.

### Changed
- Changelog list of changes and adds since 2017-02-01.
- Commented out Date Picker in the navigation.
- Changed docs build directory to `./docs/build`.
- Date Picker component misc. updates and fixes. (still a work in progress)
- Grid Text Align Sample fix.
- ColorNew config file variable updates. (still a work in progress)
- Updated color documentation.
- TypographyNew base file font color selectors.
- Updated structure of docs app. (title bar, props in card, etc)
- Button documentation fixes.

## 0.1.0 - 2017-02-08
### Added
- New Webpack config file for docs and client.
- Date picker files. (still a work in progress)

### Changed
- Moved docs directory into `./client/`
- Moved JS UI components into `./client/js/components/UI`
- Moved SCSS UI components into `./client/scss/components/UI`
- Updated ColorsNew config file (still a work in progress)
- Changed colorEnums 'secondary' to 'alternate'

## 0.0.2 - 2017-02-01
### Added
- Table Component responsiveness

## 0.0.1 - 2017-02-01
### Changed
- Migrated docs to the CM Repo
