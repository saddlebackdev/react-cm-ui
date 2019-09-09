# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 6.0.2

#### Bug Fix
- All **&lt;Drawer /&gt;** header and content sub components now are positioned correctly.

## 6.0.1

#### Bug Fix
- Removed the `.scss` extension on the color import in **&lt;Image /&gt;**.

## 6.0.0

#### Feature
- [PR #53](https://github.com/saddlebackdev/react-cm-ui/pull/53): Adds some new functionality to the **&lt;Image /&gt;**.
  - New Prop: `border`. This prop checks for one of the following types: `bool` or `number`.
  - New Prop: `borderInverse`. This prop checks for `bool`
  - New Prop: `type`. This prop checks for one of the following strings: `person` or `user`. Leaving this prop as `undefined` gives you the ability to use the component as a basic **&lt;img /&gt;**.

  ##### Breaking Change

    - Removed of **&lt;Image /&gt;**'s `avatar` prop to favor the new `type` prop.


- New color, `colorSubNav`, name added to our `color` function.

#### Bug Fix
- **&lt;Drawer.ActionBar /&gt;** got into a bad state with the last BEM name changes. All fixed.

## 5.2.0

- [#54](https://github.com/saddlebackdev/react-cm-ui/pull/54): Fixes ReactJS `componentWillReceiveProps` warnings about needing to switch to `componentDidUpdate`.
- Upgraded react-reponsive dependency to `7.0.0`.
- Breaking change: updated how we implement our colors in SCSS and JS.
  - You can no longer use `$bkgd` to achieve a hex value from `colors.scss`. Instead, import the same way, and use the function `color(backgroundColor)`.
  - In JS, you can now use our `colors.scss` variables by importing the desired color variable. e.g. `import { backgroundColor } from 'colors.scss'`.
- Breaking change: moved a handful components to the BEM naming convention.
  - **&lt;Drawer.ActionBar /&gt;**
  - **&lt;List /&gt;**
  - **&lt;Page.ActionBar /&gt;**
  - **&lt;Page.Container /&gt;**
  - **&lt;Page.Content /&gt;**
  - **&lt;Page.Details /&gt;**
  - **&lt;Page.FiltersDrawer /&gt;**
  - **&lt;Page.FiltersRail /&gt;**
  - **&lt;Page.Grid /&gt;**
  - **&lt;Page.Table /&gt;**
- **&lt;Page.ActionBar /&gt;** `columns` updates:
  - New `button` property
  - New `list` property
    - New `actionsButton` property
    - New `iconBack` property
    - New `iconFilter` property
    - New `iconGrid` property
    - New `iconSearch` property
    - New `iconTable` property
  - New `search` property

## 5.1.1

- Moved **&lt;Page /&gt;** component and its sub components to the `./src/modules` directory.
- Started a demo for how the **&lt;Page /&gt;** component and its sub components are to look like. It's a work in progress. Please give some grace.
- Changes to **&lt;Page.FiltersDrawer /&gt;**:
  - Fixed the header in this component which broke when we refactored the **&lt;Drawer /&gt;** component.
  - New `rows.items.dropdown` property!
  - New `rows.items.multiSelect` property!
  - New `rows.items.nestedToggles` property!
- New **&lt;Drawer.Details /&gt;** component!
- Exported our `./src/shared/styles/colors.scss` so that we can use the variables in JS. The plan is to remove the hyphenated case variables in this file soon. I decided to forgo for a while due to regressions it would cause.

## 5.1.0

- Applied the **&lt;PhoneInput /&gt;** from `v4.1.4-hotfix` to this release.

## 5.0.6

- Fixed a **&lt;Page.Details /&gt;** bug.

## 5.0.5

- Fixed a **&lt;Page.Details /&gt;** bug.

## 5.0.4

- Added some style capabilities to **&lt;Page.Details /&gt;** and fixed some as well.

## 5.0.3

- Fixed a bug in **&lt;Drawer /&gt;** & **&lt;DrawerDeprecated /&gt;** that caused body class names to be removed when still needed.
- Fixed mobile styling for **&lt;Drawer.Wing /&gt;**

## 5.0.2

- Fixed a bug in **&lt;Page.ActionBar /&gt;**.

## 5.0.1

- Fixed a bug in **&lt;DrawerDeprecated /&gt;**.
- Duplicated **&lt;Drawer.ActionBar /&gt;** in **&lt;Page.ActionBar /&gt;**.

## 5.0.0

- Breaking Change: A brand new **&lt;Drawer /&gt;** component with sub components! We'll be iterating on this and its sub components to help facilitate with building drawer templates. Old **&lt;Drawer /&gt;** component has been deprecated and renamed to **&lt;DrawerDeprecated /&gt;**. Please update your **&lt;Drawer /&gt;** components accordingly.
  - Sub Components:
    - **&lt;Drawer.ActionBar /&gt;**
    - **&lt;Drawer.Content /&gt;**
    - **&lt;Drawer.FiltersDrawer /&gt;**
    - **&lt;Drawer.Grid /&gt;**
    - **&lt;Drawer.Navigiation /&gt;**
    - **&lt;Drawer.Table /&gt;**
    - **&lt;Drawer.TitleBar /&gt;**

## 4.4.1

- Whoops, forgot the **&lt;Page.Details /&gt;** import.

## 4.4.0

- New **&lt;Page.Details /&gt;** sub component!

## 4.3.1

- Whoops, forgot the **&lt;Page.Grid /&gt;** import.

## 4.3.0

- New **&lt;Page.Grid /&gt;** sub component!

## 4.2.3

- Fixed **&lt;Page /&gt;** default background color. It should have always been a light grey.
- Stopped the **&lt;Page.Table /&gt;** row's onClick event handler when selecting text.

## 4.2.2

- Added **&lt;Page.Table /&gt;** sub component scss!

## 4.2.1

- Whoops, removed a `.scss` import from a `.js` file which was causing an error when installing.

## 4.2.0

- New **&lt;Page.Table /&gt;** sub component!

## 4.1.4-hotfix

- Added new **&lt;Phone.Input /&gt;** component.
- Applied the fix from the **&lt;DrawerDeprecated /&gt;** in `v5.0.3` to **&lt;Drawer /&gt;** to this release.

## 4.1.4

- Fixed some **&lt;Page /&gt;** sub component layer issues.

## 4.1.3

- Added some styling to **&lt;Page.Container /&gt;**. I guess, it now does something.
- Made the **&lt;Page.ActionBar /&gt;** sticky.

## 4.1.2

- Upgraded lodash from v.4.17.11 to v4.17.14 to remove a high risk vulnerability.

## 4.1.1

- Whoops, I failed with a SCSS import and couldn't publish. Apologies. The import path is fixed.

## 4.1.0

- A brand new **&lt;Page /&gt;** component with sub components! We'll be iterating on this and its sub components to help facilitate with building page templates.
  - Sub Components:
    - **&lt;Page.ActionBar /&gt;**
    - **&lt;Page.Container /&gt;**
      - doesn't really do much just yet, but will be reserved for constraining content.
    - **&lt;Page.Content /&gt;**
    - **&lt;Page.FiltersRail /&gt;**
    - **&lt;Page.FiltersDrawer /&gt;**

## 4.0.4

- Just one more **&lt;Modal /&gt;** style fixed.

## 4.0.3

- Some **&lt;Modal /&gt;** style fixes to match what's in the design toolkit.

## 4.0.2

- Fixed **&lt;Table /&gt;** `size` to have a min-height instead of using padding to cause that height.

## 4.0.1

- Fixed the compile script to grab images in the new directory.

## 4.0.0

- Changed file structure to use Feature First (Pods).
  - Breaking change if you are linking to `style.css` or the individual `.css` files

## 3.0.2 - 2019-06-20
### Added
- Added a `size` prop to **&lt;Table /&gt;**.

## 3.0.1 - 2019-06-13
### Changed
- Added `files` to package.json and remove .npmignore.js.

## 3.0.0 - 2019-06-12
### Changed
- Fixed security risks caused by dev dependencies.
- Upgraded Webpack from v3 to v4.
- Upgraded Gulp from v3 to v4.

## 2.0.23 - 2019-06-07
### Added
- Added `link-external` to the **&lt;Icon /&gt;** set.

## 2.0.22 - 2019-05-31
### Fixed
- [#49](https://github.com/saddlebackdev/react-cm-ui/pull/49): Fixes initialization of **&lt;Card /&gt;** View.
- Fixed **&lt;Icon /&gt;** svg style.

## 2.0.21 - 2019-05-28
### Added
- Added a left border to the **&lt;Drawer.Wing /&gt;**.

### Changed
- **&lt;Checkbox /&gt;** `label` can either be a string or object.
- An `id` is now applied to the **&lt;Checkbox /&gt;** container as well to its hidden input.

## 2.0.20 - 2019-05-20
### Added
- [#48](https://github.com/saddlebackdev/react-cm-ui/pull/48): **&lt;Button /&gt;** `outline` can have different colors now.

### Fixed
- [#45](https://github.com/saddlebackdev/react-cm-ui/pull/45): **&lt;Avatar /&gt;** (User Icon) Image Fixes/Enhancements
- [#46](https://github.com/saddlebackdev/react-cm-ui/pull/46): Fixes warnings on passing object as title for drawers.

## 2.0.19 - 2019-05-17
### Fixed
- Remove `isOpen` from the **&lt;Drawer /&gt;** & **&lt;Modal /&gt;** `componentWillUnmount`. Hoping this catches all
the different states the drawer can be in. One concern is it removing class names from body when another drawer is
to stay open. We'll need to watch for this problem in the future.

## 2.0.18 - 2019-05-16
### Fixed
- **&lt;Drawer /&gt;** & **&lt;Modal /&gt;** were not cleaning up after themselves when unmounting; they now do.

## 2.0.17 - 2019-05-14
### Fixed
- Whoops! Forgot to check my work and had the **&lt;Modal /&gt;** ZIndexes incorrect.

## 2.0.16 - 2019-05-14
### Fixed
- Fixed a **&lt;Modal /&gt;** bug.

## 2.0.15 - 2019-05-09
### Fixed
- Second attempt to fix the bug in **&lt;Drawer /&gt;** by ensuring the removal of the
`_onClickOutside` event listener.  Since the **&lt;Drawer /&gt;** is used with a
**&lt;Portal /&gt;**, it is not unmounted the way typical components in the regular DOM
tree are, so the prior attempt to remove the event listener on unmount (in
`2.0.14`) was unsuccessful.  Hopefully this version will fare better.

## 2.0.14 - 2019-05-08
### Fixed
- Fixed a bug in **&lt;Drawer /&gt;** by ensuring we remove `_onClickOutside` event
listener on unmount).

## 2.0.13 - 2019-05-07
### Fixed
- CSS for `disabled` **<Dropdown.Item />** when using "dark theme" for the menu.
This was still making the text of the item white, instead of the "static" color
as is proper for a disabled item.

## 2.0.12 - 2019-05-07
### Added
- Ability to mark a **<Dropdown.Item />** as `disabled`.

## 2.0.11 - 2019-05-01
### Fixed
- Removed console logs in **&lt;Drawer /&gt;**.

## 2.0.10 - 2019-05-01
### Fixed
- Fixed a **&lt;Drawer /&gt;** bug.

## 2.0.9 - 2019-04-30
### Fixed
- Fixes the issues when **&lt;Drawer /&gt;** child's `onClose` was overridden.

## 2.0.8 - 2019-04-28
### Added
- **&lt;SubNavigation /&gt;** and its child components accept IDs now.

## 2.0.7 - 2019-04-27
### Added
- **&lt;Tabs /&gt;** and its child components accept IDs now.

## 2.0.6 - 2019-04-27
### Added
- **&lt;Table /&gt;** and its child components accept IDs now.

## 2.0.5 - 2019-04-27
### Fixed
- Added another condition to look if **&lt;Drawer /&gt;** is open before trying to add a style.

## 2.0.4 - 2019-04-26
### Fixed
- Fixed a **<Drawer.Header />** bug.

## 2.0.3 - 2019-04-25
### Fixed
- Fixed **&lt;Banner /&gt;** bug after upgrading to React 16.8.6.

## 2.0.2 - 2019-04-25
### Fixed
- Fixed **&lt;DatePickerInput /&gt;** react-tether component.

## 2.0.1 - 2019-04-25
### Fixed
- Removed **&lt;MenuTree /&gt;**. It was unused and never an officially designed component.
- Upgraded react-tether.

## 2.0.0 - 2019-04-25
### Added
- Added a new **<Drawer.Wing />** color: `grey`.

### Changed
- Upgraded React from version 15.6.2 to 16.8.6.

## 1.20.1 - 2019-04-11
### Added
- **&lt;Card /&gt;** and **&lt;PhoneInput /&gt;** now accept IDs. This is the same change as `v1.19.6`.

## 1.20.0 - 2019-04-09
### Changed
- Upgraded react-dnd.
- Upgraded react-portal which caused some refactoring of our **&lt;Banner /&gt;**, **&lt;Drawer /&gt;**, and **&lt;Modal /&gt;** components.

## 1.19.6 - 2019-04-11
### Added
- **&lt;Card /&gt;** and **&lt;PhoneInput /&gt;** now accept IDs.

## 1.19.5 - 2019-04-09
### Added
- **&lt;Prompt /&gt;** now accepts an ID.

### Fixed
- **&lt;Radio /&gt;** does not allow a click to happen when disabled.

## 1.19.4 - 2019-04-04
### Added
- **&lt;DropdownItem /&gt;** and **&lt;Banner /&gt;** implements the `id` value passed to them now.

## 1.19.3 - 2019-04-04
### Fixed
- Fixed a bug when a selected **`<DatePickerInput />`** and  **`<DatePickerCalendar />`** day is on an day that has an event.

## 1.19.2 - 2019-04-01
### Fixed
- **`<DatePickerInput />`** and  **`<DatePickerCalendar />`** allow `null now`.
- The `onChange` event handler will not fire if **`<DatePickerInput />`** and  **`<DatePickerCalendar />`** is disabled.

## 1.19.1 - 2019-03-28
### Added
- `<DatePickerInput />` and `<DatePickerCalendar />` modules get a much needed - forgotten - `style` prop.

### Fixed
- Changed the `<Icon>` display property from `inline-block` to `inline-flex` to fix some alignment issues throughout HC.
- Removed the `<button>` wrapping caret icons in `<Input />`.

## 1.19.0 - 2019-03-28
### Deprecated
- `<DatePicker />` has been **deprecated**. Please use [DatePickerInput](http://cm-ui-docs.saddleback.com/modules/date-picker-input) or [DatePickerCalendar](http://cm-ui-docs.saddleback.com/modules/date-picker-input). `<DatePicker />` will be removed in the next major version of react-cm-ui.

### Added
- New `<DatePickerInput />` and `<DatePickerCalendar />` modules.

## 1.18.11 - 2019-03-20
### Fixed
- Rearranged the placement of where we render the **Dropdown** `id`.

### Added
- Added the prop `id` to **Accordion**.

## 1.18.10 - 2019-03-04
### Fixed
- Removed `componentDidUpdate` from **Input** to fix some state issues when using an `onChange` event handler. :)

## 1.18.9 - 2019-02-26
### Fixed
- Upgraded `lodash` dependency to fix a possible security vulnerability
identified by `npm audit`.

## 1.18.8 - 2019-02-26
### Fixed
- `1.18.6` inadvertently caused some browsers to show a gray background for the
**Input** type `number` spin box controls (up and down arrows), likely due to
user agent defaults for button elements.  This patch sets a transparent
background color for these.

## 1.18.7 - 2019-02-26
### Added
- Added `200` and `300` as font-weight options to the sans serif font.

## 1.18.6 - 2019-02-26
### Fixed
- Fixed **Input** type `number` controls. Changed icons to buttons to stop the
highlighting of elements around the **Input**. Also, when `min` and `max` are set
values are kept between the two when using the controls.

## 1.18.5 - 2019-02-22
### Fixed
- Fixed an issue with **DurationPicker** component; it was not initializing
its internal state properly when a `value` prop was specified, so it was not
showing the initial value until a re-render.

## 1.18.4 - 2019-02-20
### Fixed
- Fixed **DatePicker** value when the date value is cleared.

## 1.18.3 - 2019-02-11
### Added
- Added `phone-cell`, `phone-home`, and `phone-work` to the **Icon** set.

## 1.18.2 - 2019-02-01
### Added
- Added `bell-recurring` the **Icon** set.

## 1.18.1 - 2019-01-25
### Added
- Add `id` prop to **Button** and **Dropdown** components.

## 1.18.0 - 2019-01-23
### Added
- Added new **DurationPicker** component.
### Fixed
- Fixed some issues with **Input** with `disabled` prop set.  It was still
doing state changes and calling `onChange()` so it was not acting disabled, even
if it was visually styled to appear disabled.

## 1.17.9 - 2019-01-17
### Fixed
- Fixed a bug in the **Accordion** component.  When using it in exclusive mode,
you were unable to pass the value `0` to the `selected` prop to default select
the first item.  This was due to standard JavaScript truthy/falsy silliness;
`0` is falsy so a naive check for whether the prop was specified resulted in
falling back on `-1` (nothing selected) as a default when `0` was the specified
value.  Converted this to use Lodash's `_.isNil()` function for a more precise
check, and life is good!

## 1.17.8 - 2019-01-10
### Added
- Add `multi` property to **Radio** component.  This allows multiple selections
(which is useful in combination with `pill` for certain desired UI elements; see
#35)

## 1.17.7 - 2018-12-21
### Fixed
- As a further update to **1.17.6**, ensure that click event propagation is stopped
when a disabled **Checkbox** is clicked.

## 1.17.6 - 2018-12-21
### Fixed
- Fixed a bug in the **Checkbox** component.  It was calling `onChange` even when the
`disabled` prop was set to `true`.  The upshot of that is, when used as a controlled
component, disabled Checkboxes were not quite as disabled as we might have liked! =)

## 1.17.5 - 2018-12-14
### Changed
- Fixed time zone select placeholder text (and added ability to specify it via prop) in **TimePicker** component.

## 1.17.4 - 2018-11-29
### Changed
- Fixed `zoneMatchProp` prop in **TimePicker** component.

## 1.17.3 - 2018-11-28
### Added
- Added `selectionMatchProp` prop in **Dropdown** component.

## 1.17.2 - 2018-11-04
### Changed
- `Dropdown` `onClick()` that was added in `1.17.1` has been removed and replaced with `onOpen()` and `onClose()`.
- `Dropdown` documentation page samples with user avatar images refactored to use local image files as the sample avatar
service we were previously using does not support HTTPS.  This way we can avoid mixed content issue if the documentation
site is viewed over HTTPS.

## 1.17.1 - 2018-11-01
### Added
- Add `onClick()` event to `Dropdown`.  This will be called whenever menu is expanded/collapsed, passing a Boolean
argument to indicate whether the menu is open (true) or closed (false).

## 1.17.0 - 2018-10-31
### Added
- Ability to edit and delete comments via the **Comment** component.
- Ability to instruct **Dropdown** to collapse the menu on change imperatively using new `collapseMenuOnChange` Boolean
prop regardless of whether or not it's a controlled component and there is a `value` prop change.
- Ability to set the title/tooltip for the **Icon** embedded within the **Dropdown** (via new `iconTitle` prop).
- Ability to set **Dropdown** color to `transparent`.
### Changed
- Bug fix in logic within **Dropdown** to update selected value state and collapse the menu on prop change.  Also converted
this from legacy `componentWillReceiveProps()` to proper `componentDidUpdate()`.
- Set some reasonable default behavior around **Icon** tooltip within the **Dropdown** (utilizing `placeholder` and/or `text`)
props when new `iconTitle` prop is not specified.
- Numerous enhancements to the documentation pages for **Dropdown** and **Prompt** components, including an example of
how to wrap a **Dropdown** with a **Prompt** but only have some options trigger the prompt but not others.  Also corrected
some typos and such.

## 1.16.3 - 2018-10-24
### Changed
- Nothing new; same as described in  **1.16.2**.  Due to some git user errors made by Geoffrey, `1.16.2` didn't contain the changes it
was supposed to.  And `npm` does not allow re-publishing the same version (see [here](https://blog.npmjs.org/post/77758351673/no-more-npm-publish-f)).  So I'm going to publish the corrected package as
`1.16.3` and remove `1.16.2`.  Sorry about that.

## 1.16.2 - 2018-10-24
### Changed
- **Image** component was updated to improve behavior in `avatar` mode.  Previously, if a consumer specified both `name`
and `src` props, the component would happily render _both_ the image _and_ the initials.  :man_facepalming:  That meant
that it was up to consumers to conditionally pass a `name` prop or not.  Now, the component itself has been fixed to do
the right thing.
- Also, the documentation page for the **Image** component should now correctly render the sample image.

## 1.16.1 - 2018-10-10
### Changed
- **Drawer** dimmers bug fix.

## 1.16.0 - 2018-09-25
### Added
- Added `showSpinners` prop in **Input** component.  When the `type` is "number" this new prop dictates whether or not
to show the "spin box" up and down arrow controls.  The new prop, which is optional, defaults to `true` and the spin box
controls are shown.  Set it to `false` to suppress these if you want a numeric input without them.

## 1.15.0 - 2018-09-21
### Added
- Added a CSS rule `.color-highlight`.

## 1.14.0 - 2018-09-18
### Changed
- Fixed a bug in **Dropdown** when passing a null child.

## 1.13.24 - 2018-09-18
### Changed
- **PhoneInput** Fixed bug affecting U.S. phone numbers specified without leading `+1` and with area codes with `1` in
the middle, e.g. 213, 714, etc.  These phone numbers were being mishandled.

## 1.13.23 - 2018-09-18
### Added
- **InfoBar** `color` goes to 11.

### Changed
- Fixed **Drawer's** `maxWidth` problem when opening a drawer that is not by default 768px.
- Big Change. **Container.ActionBar** now has a minimum height of 70px and has been changed to flex to align its items.

## 1.13.22 - 2018-09-14
### Changed
- Removed the fill attribute from the `<use>` within our **Icon's** SVG markup.

## 1.13.21 - 2018-09-14
### Changed
- Fixed some styling in the **Comment** component.
- Fixed **Comment** time bug.

## 1.13.20 - 2018-09-12
### Added
- **Comment** component's CSS now handles line breaks.
- Added `onAutoHeightResized` prop to **TextArea**.

## 1.13.19 - 2018-09-11
### Changed
- Cleaned up the **Comment** code.

## 1.13.18 - 2018-09-11
### Added
- Added `detailsPosition` prop to **Comment**.

### Changed
- The **Comment** not need any details.

## 1.13.17 - 2018-09-09
### Changed
- Removed **Drawer** wing JSX when there's no wing to ever be rendered.

## 1.13.16 - 2018-09-07
### Added
- Added the ability to change the **Drawer's** `maxWidth` on the fly.

## 1.13.15 - 2018-09-07
### Changed
- Fixed **Drawer's** transitionend event.

## 1.13.13 - 2018-09-05
### Changed
- Resize Window event handler for **Dropdown** menu
- Improved estimation of direction to open **Dropdown** window

## 1.13.12 - 2018-08-24
### Changed
- Removed `value` from **TextArea's** state.

## 1.13.11 - 2018-08-24
### Changed
- Fixed **TextArea's** `autoHeight` when no `value` is controlling textarea.

## 1.13.10 - 2018-08-24
### Added
- **TextArea's** `onChange` handler is now passing `event`.

## 1.13.9 - 2018-08-24
### Added
- Ugh, forgot to save a fix to **TextArea** (`columns` to `cols`) before releasing the last version.

## 1.13.8 - 2018-08-24
### Added
- Added `columns` and `rows` props to **TextArea**.

## 1.13.7 - 2018-08-24
### Added
- Added `secondary` color name to the Utils.js color function.

### Changed
- Fixed a **List** bug.

## 1.13.6 - 2018-08-22
### Added
- Added a new **Button** prop, `iconPosition`.

### Changed
- Fixed **Dropdown** button icon size.

## 1.13.5 - 2018-08-22
### Added
- Added a new **Button** color, `secondary`.
- Added a new **Dropdown** `buttonColor`, `secondary`.
- Added `name` to **Image** in order to show initials.

### Changed
- Fixed **Dropdown** menu spacing.
- Updated **Dropdown** to use highlight background color when active.

## 1.13.4 - 2018-08-22
### Changed
- **Icon** now supports an optional `title` prop that can give it a tooltip.

## 1.13.3 - 2018-08-03
### Changed
- **List** is now checking if a child a null or undefined and if so will not return the "child."

## 1.13.2 - 2018-07-31
### Changed
- **PhoneInput** `isValueComplete` now checks to see if the value is not empty.

## 1.13.1 - 2018-07-31
### Changed
- Flipped **Card's** collapsable icon around.

## 1.13.0 - 2018-07-31
### Added
- Adds an option for a drawer to open from a left side (also support second wing and other drawer features). PR #26

## 1.12.5 - 2018-07-24
### Changed
- Fixed a **Drawer** bug not cleaning up drawer class names when being unmounted.

## 1.12.4 - 2018-07-23
### Changed
- Removed `header === true` from the **Drawer** children statement. It's checking only to see if the child is a function/component.

## 1.12.3 - 2018-07-23
### Added
- **Icon's** now have a smooth color transition.

### Changed
- **Button** has a new style property when `color="outline"` and `inverse` is passed.
- **InfoBar** renders children differently now.
- The **Drawer** component now clones custom close buttons and gives it a proper class name.

## 1.12.2 - 2018-07-18
### Added
- New **PhoneInput** `onCountryChange` function prop.

### Changed
- Enhanced the documentation/sample for **PhoneInput**'s `onChange` to show all the parameters it passes.

## 1.12.1 - 2018-07-17
### Changed
- Fixed **Button** padding when there's an **Icon**.

## 1.12.0 - 2018-07-16
### Added
- New **Comment** component.
- New **Dropdown** `selectionUnderline` prop and `buttonColor` color additions.
- New **Image** `size` prop.
- New **Drawer.Wing** subcomponent to **Drawer**.

### Changed
- Removed **InfoBar.Drawer** from **InfoBar**.

## 1.11.17 - 2018-07-20
### Added
- New **PhoneInput** `onCountryChange` function prop.
  - (This was originally included in the `1.12.2` release but we needed it in `1.11.x` so hence this "hotfix")

### Changed
- Enhanced the documentation/sample for **PhoneInput**'s `onChange` to show all the parameters it passes.

## 1.11.16 - 2018-07-16
### Changed
- **PhoneInput** passes a new `isValueComplete` parameter in place of `format`.

## 1.11.15 - 2018-07-10
### Changed
- Removed a warning that **Dropdown** was throwing.

### Added
- Added two new **PhoneInput** parameters `dialCode` and `format`.

## 1.11.14 - 2018-06-28
### Added
- Added two new **Drawer** props: `onCloseComplete` and `onOpenComplete`.

## 1.11.13 - 2018-06-28

## 1.11.12 - 2018-06-28
### Changed
- Fixed **TimePicker's** actionable **Icon** `type`.
- Upgraded `react-text-mask` to `v.5.4.1`. This version has been pinned as well, because of a bug in `v.5.4.2`.
- Fixed **Table.HeaderCell** basic clickable style.

## 1.11.11 - 2018-06-15
### Added
- New **Rail** component.
- New `labelClassName` and `labelWeight` for **Checkbox**.
- New **InfoBar** component.

## 1.11.10 - 2018-06-14
### Added
- New `size` prop for **Checkbox**. You can now have a default size (large) and a small checkbox.
- New `inverse` prop for **List**.
- New `autoFocus` prop for **Input** and **TextArea**.

### Changed
- Fixed Checkbox to be always be a controlled input in order to quiet down the console.
- New `transition` css property to animate the `background-color` and `border-top-color` on hovering over a **Table.Row**.
- Removed the **ListItem** file and and defined the correct **List.Item** component. This also removes the **List.Item** style type warning.

## 1.11.9 - 2018-06-11

## 1.11.8 - 2018-06-11
### Added
- Sort of have documentation for **List**. They are really just examples I tested with.
- Add a **Chart** module that uses `highcharts`.

## 1.11.7 - 2018-06-08
### Changed
- Changed **Card.Header** gradients.

## 1.11.6 - 2018-06-08
### Changed
- New font size and weight for **Table.Header's** **Table.Cell** when not clickable.

## 1.11.5 - 2018-06-06
### Changed
- Removed a `console.log` from **Card**.

## 1.11.4 - 2018-06-06
### Changed
- Fixed how **Card** renders its header.

## 1.11.3 - 2018-06-06
### Changed
- Fixed a missing `className` and `fill` from an SVG `<use>`.

## 1.11.2 - 2018-06-06
### Changed
- Fixed an issue with Firefox not displaying the new **Icons**.

## 1.11.1 - 2018-06-06
### Changed
- Fixed a bug when passing `null` as a child of **Card**.
- Fixed **Card.Header** gradient positions.

## 1.11.0 - 2018-06-06
### Added
- Added ability to have a custom header in a **Card**.

### Changed
- Removed icon font and replaced with SVG icons.

## 1.10.3 - 2018-05-18
### Changed
- **Input's** action icon container is now adjusted according to the top position of the input that's relative to the components wrapping container.

## 1.10.2 - 2018-05-18
### Changed
- Squashed a bug when a **Input** had actionable icons causing an enduser to be able to enter a value.
- Fixed Dropdown's select dropdown position styling.

## 1.10.1 - 2018-05-15
### Changed
- **DatePicker** patch.

## 1.10.0 - 2018-04-30
### Changed
- Moved **Input's** label adjacent to the input and added a new prop `labelPosition`.

## 1.9.2 - 2018-04-10
### Changed
- Added **Dropdown** `onChange` example.
- Added two new icons to **Icon**: `info` and `question-circle`

## 1.9.1 - 2018-03-28
### Changed
- Fixed a bug in `./src/scss/components/Views/TitleBar.scss` upon publishing the package.

## 1.9.0 - 2018-03-28
### Added
- New **Image** component. Only is for a basic avatar for now. Updates expanding the component will happen down the road.

### Changed
- **TitleBar** now supports `subTitle` and `children`.

## 1.8.27 - 2018-03-22
### Added
- New `circle-filled` icon type.

### Changed
- Fixed some styling in Firefox for **Tabs**.
- **TitleBar** now truncates long titles on smaller viewports.

## 1.8.26 - 2018-03-20
### Changed
- **Modals** and **Drawers** no longer remove the scrollbar causing side effects in the background.
- PR #21 fixed a **Input** bug having to do with the `onChange` event handler when the `type` was set to `number`. Thanks @gbulatov!

## 1.8.24 - 2018-03-05
### Changed
- Changed how `browserDetect()` detects the browser.

## 1.8.21 - 2018-03-01
### Added
- react-dnd is now a part of react-cm-ui.

## 1.8.19 - 2018-02-22
### Change
- Disables a collapsable **Card's** content height when already collapsed.

## 1.8.17 - 2018-02-21
### Change
- Fix for dynamically changing a collapsable **Card's** content height.

## 1.8.16 - 2018-02-13
### Added
- ISO2 and dial codes are now searchable in **InputPhone**.

## 1.8.15 - 2018-02-07
### Added
- Added ability to collapse a **Card**.

## 1.8.14 - 2018-02-02
### Added
- Added ability to give a **PhoneInput** flag dropdown a different arrow icon.
- Added ability to style a **PhoneInput** container.

## 1.8.13 - 2018-02-02
### Added
- Added ability to give a **Dropdown** select a different arrow icon.

## 1.8.12 - 2018-01-31
### Added
- Added ability to adjust a **Modal's** height according to its content.

## 1.8.11 - 2018-01-20
### Changed
- Fixes the onClick event and styling for a **Radio's** `pill` UI while being `disabled`.

## 1.8.10 - 2018-01-19
### Changed
- Added a bottom divider to a `basic` **Table's** last row.
- Removed `.ui` from a **Table's** children components.
- Fixed a **Header** error when having an icon and sub header.

## 1.8.9 - 2017-12-12
### Changed
- merged PR #18: DatePicker tweaks for using it in `dateRange` mode.

## 1.8.8 - 2017-12-02
### Changed
- Fixed `./lib/css/components` image url paths.

## 1.8.6 - 2017-12-02
### Added
- `./lib` now has all the individual `.css` files to import.

## 1.8.5 - 2017-12-02
### Changed
- Removed PropTypes warnings.

## 1.8.3 - 2017-11-15
### Changed
- Cleaned up conditions around `min` and `max` props for **Input**.

## 1.8.2 - 2017-11-08
### Changed
- Changed `scrollContainerClassName` to `scrollContainer` so we can also pass a node and not just a string.

## 1.8.1 - 2017-11-08
### Changed
- Fixes and code clean up to **Accordion**. Whoops.

## 1.8.0 - 2017-11-08
### Changed
- **Accordion** looks to see if an **Accordion.Item's** content is below the fold and if it is the end user's container/window will scroll up.
- **Dropdown** looks to see if the Select's dropdown is below the fold and if it is the dropdown will be render above.
- Fixes to **SubNavigation** when rendering only one tab.

## 1.7.11 - 2017-10-30
### Added
- **Banner** has a new prop, `topPosition`.

## 1.7.10 - 2017-10-30
### Changed
- `DOMUtils`' `browserDetect()` is case-sensitive and Firefox was all in lowercase. Fixed!

## 1.7.9 - 2017-10-30
### Added
- Added `level` colors to **Banner**. These two new colors, `purple` and `teal`, need to be defined some time by the design team and renamed by us in the future.

## 1.7.8 - 2017-10-27
### Changed
- Fixed the browser variable in `DOMUtils`.

## 1.7.7 - 2017-10-27
### Changed
- Added the new icons to docs.

## 1.7.6 - 2017-10-27
### Added
- Two new icons: "duplicate" and "users".

## 1.7.5 - 2017-10-24
### Changed
- Fixed the **Modal**'s `closeButton` boolean condition.

## 1.7.4 - 2017-10-23
### Changed
- Updated **Modal** to work a little more like the **Drawwer**.

## 1.7.3 - 2017-10-23
### Added
- `DOMUtils`'s `browserDetect()` now checks for Firefox too.

## 1.7.2 - 2017-10-21
### Added
- New icon "ban".

## 1.7.1 - 2017-10-10
### Changed
- The **Phone Input's** emojis were not working cross OS'. Switched to a flag CSS icons that will work for folks.

## 1.7.0 - 2017-10-09
### Added
- Brand spanking new **Phone Input**.
- New **Dropdown** `selectionValueComponent` & `searchable` prop.

### Changed
- **Input** now handles the `tel` type value correctly.

## 1.6.0 - 2017-10-03
### Changed
- Bumped React from version `0.14.8` to version `15.6.2`.

## 1.5.5 - 2017-09-28
### Added
- Fixes **Dropdown's** `inverse` & `selection` input value not appearing when searching.

## 1.5.4 - 2017-09-28
### Added
- Fixes **Dropdown's** `inverse` & `selection` value not appearing when input is focused.

## 1.5.3 - 2017-09-26
### Added
- New text color class name, `color-warning`.
- Added an `inverse` prop to **Dropdown**. Only works for selections for right now.

## 1.5.2 - 2017-09-22
### Changed
- **Input** value fix.

## 1.5.1 - 2017-09-22
### Added
- New **Input** props: `max` and `min`.

### Changed
- **Input's** value accepts numbers now.

## 1.5.0 - 2017-09-20
### Added
- New **Prompt** component. Only handles inline prompts for now.

### Changed
- Changed *Button's** onClick handler back to older es6 for now.

## 1.4.5 - 2017-09-18
### Changed
- Changed *Button's** onClick handler method.

## 1.4.4 - 2017-09-06
### Added
- Added `className` to **Accordion.Item**.

### Changed
- Fixed some **Accordion.Item** styling.

## 1.4.3 - 2017-09-06
### Changed
- **Accordion** now allows for custom content within **Accordion.Item** using the `summary` prop.

## 1.4.2 - 2017-09-05
### Changed
- **Checkbox** onClick is now passing the event the parent handler.

## 1.4.1 - 2017-09-01
### Changed
- Fixed a key warning that was being thrown by **Accordion**.

## 1.4.0 - 2017-09-01
### Added
- **Accordion** can be inclusive by passing `false` using the new props, `exclusive`.
- **Accordion's** can now be nested in **Accordion's**.

### Changed
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
