# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.14.3 - 02/04/2021

#### Bug
- [PR #272](https://github.com/saddlebackdev/react-cm-ui/pull/272) / Merge Commit 233d95e
  - Fixes `node-gyp` build issues.

## 0.14.2 - 01/28/2021
- [PR #267](https://github.com/saddlebackdev/react-cm-ui/pull/267) / Merge Commit 8b2b641e716d828b6b8bf04c3e709e187785df97
  - DataGrid documentation bug fix.

## 0.14.1 - 01/12/2021
- [PR #265](https://github.com/saddlebackdev/react-cm-ui/pull/265) / Merge Commit e6a07b579852588157949b947b6815d4bead6953
  - Update Demo Page to showcase some enhancements to the Filters Drawer Nested Toggles and Multi Select components.

## 0.14.0 - 12/18/2020
- [PR #262](https://github.com/saddlebackdev/react-cm-ui/pull/262) / Merge Commit 0706f42ca8a9d78715c62d938fc86e8ac6f50223
  - Update Demo Page to showcase some enhancements to the Filters Drawer Nested Toggles and Multi Select components.

## 0.13.0 - 12/16/2020

#### Feature
- [PR #259](https://github.com/saddlebackdev/react-cm-ui/pull/259) / Merge Commit 18da8f65b924c8f3aadcf60287f44d012c603f4a
  - Update Prompt example.
- [PR #260](https://github.com/saddlebackdev/react-cm-ui/pull/260) / Merge Commit fcbd3f118804305b4fc4ab5c3d07ca77e1d10980
  - Add "view" Icon type.

## 0.12.0 - 12/09/2020

#### Feature
- [PR #252](https://github.com/saddlebackdev/react-cm-ui/pull/252) / Merge Commit d835fe74d94a19f31d83fcf7cd99ba703b03151f
  - New Typography styles documentation.

## 0.11.0 - 10/01/2020

#### Feature
- [PR #228](https://github.com/saddlebackdev/react-cm-ui/pull/228) / Merge Commit 00b72e09f8c1835568b258c4aff4bfa320f71bec
  - Cleaned up Page components Demo a bit.
- [PR #230](https://github.com/saddlebackdev/react-cm-ui/pull/230) / Merge Commit e428f5acc483676faa2d8880d9747891b11f0342
  - Added a new fourth level navigation using our Sectional Tabs component in the root layout.

## 0.10.2 - 10/01/2020

#### Bug
- [PR #216](https://github.com/saddlebackdev/react-cm-ui/pull/216) / Merge Commit 3192b94644166ff9e0bf67f0d7f9fd843ecb3696
    - Add a new SubNavigation component to handle all fourth level items in the `./docs/src/app/navigationConstants.js` file.
    - Added all the necessary fourth level routes.
    - Added a new Webpack production script: `npm run start:prod` to help with production issues.
    - Added the Webpack Terser Plugin to overwrite Webpack's default minimization and disable mangling names.
      - Person Panel documentation works now!

## 0.9.1 - 10/01/2020

#### Feature
- [PR #214](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
    - Added Popover documentation.
    - Fixed PersonPanel documentation to reflect new PersonCoreMilestone changes.

## 0.10.1 - 09/28/2020

### Feature
- [PR #207](https://github.com/saddlebackdev/react-cm-ui/pull/207) / Merge Commit cb5233b6d19a73cd1892c172aaf6b375f2bc3014
  - Updated Radio documentation and fixed some ESLINT issues.
- [PR #209](https://github.com/saddlebackdev/react-cm-ui/pull/209) / Merge Commit 03dd9e479802c681d82dedd9962421b8eae759eb
  - Added `autoScrollSelection` props description.

## 0.10.0 - 09/16/2020

#### Feature
- [PR #192](https://github.com/saddlebackdev/react-cm-ui/pull/192) / Merge Commit 8544d9b3119124f346b10a0d122b34cfb388f484
    - DataGrid documentation
    - New ComponentVersionIdentifier
    - Updated Example Component
    - Fixed some ActionBar and Radio documentation issues.
- [PR #194](https://github.com/saddlebackdev/react-cm-ui/pull/194) / Merge Commit 538b8f2defdac395b734ef4934d88fbb31e4a330
  - Updated `moment-timezone`
  - Fixed ComponentVersionIdentifier component.
  - Updated DurationPicker documentation.
- [PR #195](https://github.com/saddlebackdev/react-cm-ui/pull/195) / Merge Commit 6a05e68ad5ba728e2746d82bb61d71fd3b54d2af
  - Added SectionalTabs and BreadCrumbs documentation.
  - Updated DropdownButton documentation.
  -

#### Bug Fix
- [PR #198](https://github.com/saddlebackdev/react-cm-ui/pull/198) / Merge Commit 959638982efafe31be9e7989b9211a0d966a1612
  - Fixed fourth level navigation.
- [PR #199](https://github.com/saddlebackdev/react-cm-ui/pull/199) / Merge Commit aa7225905a0bfc0003463fcd1bfd2faae99436d9
  - build(deps): bump bl from 4.0.2 to 4.0.3 in /docs
- [PR #200](https://github.com/saddlebackdev/react-cm-ui/pull/200) / Merge Commit 20544222667ff5624ed388fe6b9531ce60a0e84c
  - build(deps-dev): bump node-sass from 4.12.0 to 4.13.1 in /docs

## 0.9.0 - 08/21/2020

#### Feature
- [PR #187](https://github.com/saddlebackdev/react-cm-ui/pull/187) / Merge Commit 8f98e876211708240f3a246eb995f8656b193e03
    - Reorganized Components In `./docs`.

#### Bug Fix
- [PR #188](https://github.com/saddlebackdev/react-cm-ui/pull/188) / Merge Commit d76c61b7b3fd5aad03c82c3c670b187334e0c4da
    - Fixed a Eslint `react-dom` import error.

## 0.8.3 - 08/06/2020

#### Bug Fix
- [PR #183](https://github.com/saddlebackdev/react-cm-ui/pull/183) / Merge Commit 4c1ece3ec379cb95bc2564dffb5ba865854d1435
    - bump elliptic from 6.5.2 to 6.5.3 in /docs

## 0.8.2 - 07/31/2020

#### Feature
- [PR #181](https://github.com/saddlebackdev/react-cm-ui/pull/181) / Merge Commit 2621c598c6703dbe4fe2136fd9e644d20ef8b672
    - Updated **Modal** and **Prompt** props documentation.

## 0.8.1 - 07/16/2020

#### Feature
- [PR #178](https://github.com/saddlebackdev/react-cm-ui/pull/178) / Merge Commit a008bdf9155c071bf5bff7a8ba95d1c2c7c7382c
    - bump lodash from 4.17.15 to 4.17.19 in /docs

## 0.8.0 - 07/08/2020

#### Feature
- [PR #173](https://github.com/saddlebackdev/react-cm-ui/pull/173) / Merge Commit 66ff8c3adb9f6049e1286278c54737c07ea898c7
    - Moved `./src/global/images` to `./src/images`.
    - Added a favicon SVG.

#### Bug Fix
- [PR #173](https://github.com/saddlebackdev/react-cm-ui/pull/173) / Merge Commit 66ff8c3adb9f6049e1286278c54737c07ea898c7
    - Fixed **PersonPanel** component imports and updated its documentation.

## 0.7.0 - 06/26/2020

#### Feature
- [PR #147](https://github.com/saddlebackdev/react-cm-ui/pull/147) / Merge Commit 03ee127a7823367e0f7e26e652b941549a62d9fe
    - New **PersonPanel** documentation.
- [PR #159](https://github.com/saddlebackdev/react-cm-ui/pull/159) / Merge Commit 5d3de5da2e6fdcbfdf0e4a78e7136d6a236b4cb5
    - Refactored **Table** documentation using new documentation helper components.
- [PR #161](https://github.com/saddlebackdev/react-cm-ui/pull/161) / Merge Commit 983f432c5928667f6e1f9981ef6da58a13e3eb95
    - Added `theme` to the global `window` object.
- [PR #162](https://github.com/saddlebackdev/react-cm-ui/pull/162) / Merge Commit 209805981c80a4381d7f8bfc1879f50eec4ef92c
    - New example and api components to make our lives all a little more simple.
- [PR #163](https://github.com/saddlebackdev/react-cm-ui/pull/163) / Merge Commit a10ead45ace696c891d8d49ecd50d42c8cbef637
    - Changed lanuage and props from `disabled` to `disable`.

#### Bug Fix
- [PR #158](https://github.com/saddlebackdev/react-cm-ui/pull/158) / Merge Commit 8325c79b22c20dbe07583a666ca20ab4f857a304
    - Fixed navigation issue on **Page/Drawer**.
- [PR #161](https://github.com/saddlebackdev/react-cm-ui/pull/161) / Merge Commit 983f432c5928667f6e1f9981ef6da58a13e3eb95
    - Fixed **DropdownButton's** sub navigation routes.

## 0.6.1 - 06/09/2020

#### Feature
- [PR #153](https://github.com/saddlebackdev/react-cm-ui/pull/153) / Merge Commit 28eceeb606f2d47aa2aa8f6fe05a99ee4451b616
    - Fix image paths for deployed CM UI Docs website.

## 0.6.0 - 06/02/2020

#### Feature
- [PR #141](https://github.com/saddlebackdev/react-cm-ui/pull/141) / Merge Commit 9a9e63054f40df0db2b8461f2c270680b644215d
    - Documentation Navigation Updates
- [PR #150](https://github.com/saddlebackdev/react-cm-ui/pull/150) / Merge Commit 8bd599326be714d493bea953a0c6603732176a8d
    - Added and Fixed Data Type - Person Icons.

## 0.5.1 - 05/11/2020

#### Bug Fix
- [PR #138](https://github.com/saddlebackdev/react-cm-ui/pull/138) / Merge Commit 0d42cc33ef08afc1416336eff809017b019432b2
    - Fixed docs builds error.

## 0.5.0 - 04/28/2020

- Added new component category, Inputs.

## 0.4.0 - 04/14/2020

- Added new component category, Data Displays.

## 0.3.1 - 03/05/2020

- A gap between icon categories, Actions and Miscellaneous, are now closed.

## 0.3.0 - 02/18/2020

- Refactored navigation's items to the place components's documentation into an Atomic structure.
- Refactored home.

## 0.2.0 - 01/31/2020

- Started the **Page** sub component's documentation pages by displaying their respective props.
