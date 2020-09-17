// eslint-disable-next-line import/prefer-default-export
export const navigationItems = [
    {
        directory: 'gettingStarted',
        label: 'Getting Started',
        levelTwo: [
            {
                component: 'installation',
                label: 'Installation',
                path: 'installation',
            },
            {
                component: 'usage',
                label: 'Usage',
                path: 'usage',
            },
            {
                label: 'Changelog',
                href: 'https://github.com/saddlebackdev/react-cm-ui/blob/dev/CHANGELOG.md',
            },
        ],
        path: 'getting-started',
    },
    {
        directory: 'styleGuide',
        label: 'Style Guide',
        levelTwo: [
            {
                component: 'colors',
                label: 'Colors',
                path: 'colors',
            },
        ],
        path: 'style-guide',
    },
    {
        directory: 'components',
        label: 'Components',
        levelTwo: [
            {
                directory: 'dataDisplay',
                label: 'Data Display',
                levelThree: [
                    {
                        component: 'address',
                        label: 'Address',
                        path: 'address',
                    },
                    {
                        component: 'banner',
                        label: 'Banner',
                        path: 'banner',
                    },
                    {
                        component: 'comment',
                        label: 'Comment',
                        path: 'comment',
                    },
                    {
                        component: 'dataCards',
                        label: 'Data Cards',
                        path: 'data-cards',
                    },
                    {
                        component: 'dataGrid',
                        label: 'Data Grid',
                        path: 'data-grid',
                    },
                    {
                        component: 'dataGroups',
                        label: 'Data Groups',
                        path: 'data-groups',
                    },
                    {
                        component: 'divider',
                        label: 'Divider',
                        path: 'divider',
                    },
                    {
                        component: 'emailLink',
                        label: 'Email Link',
                        path: 'email-link',
                    },
                    {
                        component: 'headerDeprecated',
                        label: 'Header (Deprecated)',
                        path: 'header-deprecated',
                    },
                    {
                        component: 'icon',
                        label: 'Icon',
                        levelFour: [
                            {
                                component: 'iconExamples',
                                label: 'Examples',
                                path: 'examples',
                            },
                        ],
                        path: 'icon',
                    },
                    {
                        component: 'image',
                        label: 'Image',
                        path: 'image',
                    },
                    {
                        component: 'label',
                        label: 'Label',
                        path: 'label',
                    },
                    {
                        component: 'list',
                        label: 'List',
                        path: 'list',
                    },
                    {
                        component: 'personContactInfo',
                        label: 'Person Contact Info',
                        path: 'person-contact-info',
                    },
                    {
                        component: 'personCoreMilestones',
                        label: 'Person Core Milestones',
                        path: 'person-core-milestones',
                    },
                    {
                        component: 'personPanel',
                        label: 'Person Panel',
                        path: 'person-panel',
                    },
                    {
                        component: 'table',
                        label: 'Table',
                        path: 'table',
                    },
                    {
                        component: 'telephoneLink',
                        label: 'Telephone Link',
                        path: 'telephone-link',
                    },
                    {
                        component: 'timeFromNow',
                        label: 'Time From Now',
                        path: 'time-from-now',
                    },
                    {
                        component: 'tooltip',
                        label: 'Tooltip',
                        path: 'tooltip',
                    },
                    {
                        component: 'typography',
                        label: 'Typography',
                        path: 'typography',
                    },
                ],
                path: 'data-display',
            },
            {
                directory: 'feedback',
                label: 'Feedback',
                levelThree: [
                    {
                        component: 'activityIndicator',
                        label: 'Activity Indicator',
                        path: 'activity-indicator',
                    },
                    {
                        component: 'loader',
                        label: 'Loader',
                        path: 'loader',
                    },
                ],
                path: 'feedback',
            },
            {
                directory: 'inputs',
                label: 'Inputs',
                levelThree: [
                    {
                        component: 'button',
                        label: 'Button',
                        path: 'button',
                    },
                    {
                        component: 'checkbox',
                        label: 'Checkbox',
                        path: 'checkbox',
                    },
                    {
                        component: 'datePickerCalendar',
                        label: 'Date Picker Calendar',
                        path: 'date-picker-calendar',
                    },
                    {
                        component: 'datePickerDeprecated',
                        label: 'Date Picker (Deprecated)',
                        path: 'date-picker-deprecated',
                    },
                    {
                        component: 'datePickerInput',
                        label: 'Date Picker Input',
                        path: 'date-picker-input',
                    },
                    {
                        component: 'dropdownDeprecated',
                        label: 'Dropdown (Deprecated)',
                        path: 'dropdown-deprecated',
                    },
                    {
                        component: 'dropdownButton',
                        label: 'Dropdown Button',
                        path: 'dropdown-button',
                    },
                    {
                        component: 'dropdownMenu',
                        label: 'Dropdown Menu',
                        path: 'dropdown-menu',
                    },
                    {
                        component: 'durationPicker',
                        label: 'Duration Picker',
                        path: 'duration-picker',
                    },
                    {
                        component: 'input',
                        label: 'Input',
                        path: 'input',
                    },
                    {
                        component: 'phoneInput',
                        label: 'Phone Input',
                        path: 'phone-input',
                    },
                    {
                        component: 'prompt',
                        label: 'Prompt',
                        path: 'prompt',
                    },
                    {
                        component: 'radio',
                        label: 'Radio',
                        path: 'radio',
                    },
                    {
                        component: 'segmentedControls',
                        label: 'Segmented Controls',
                        path: 'segmented-controls',
                    },
                    {
                        component: 'textArea',
                        label: 'Text Area',
                        path: 'text-area',
                    },
                    {
                        component: 'timePicker',
                        label: 'Time Picker',
                        path: 'time-picker',
                    },
                ],
                path: 'inputs',
            },
            {
                directory: 'layout',
                label: 'Layout',
                levelThree: [
                    {
                        component: 'containerDeprecated',
                        label: 'Container (deprecated)',
                        path: 'container-deprecated',
                    },
                    {
                        component: 'grid',
                        label: 'Grid',
                        path: 'grid',
                    },
                    {
                        component: 'page',
                        label: 'Page',
                        path: 'page',
                    },
                ],
                path: 'layout',
            },
            {
                directory: 'navigation',
                label: 'Navigation',
                levelThree: [
                    {
                        component: 'a',
                        label: 'A',
                        path: 'a',
                    },
                    {
                        component: 'subNavigationDeprecated',
                        label: 'Sub Navigation (Deprecated)',
                        path: 'sub-navigation-deprecated',
                    },
                    {
                        component: 'tabs',
                        label: 'Tabs',
                        path: 'tabs',
                    },
                    {
                        component: 'sectionalTabs',
                        label: 'Sectional Tabs',
                        path: 'sectional-tabs',
                    },
                    {
                        component: 'breadcrumbs',
                        label: 'Breadcrumbs',
                        path: 'breadcrumbs',
                    },
                ],
                path: 'navigation',
            },
            {
                directory: 'surfaces',
                label: 'Surfaces',
                levelThree: [
                    {
                        component: 'accordionDeprecated',
                        label: 'Accordion (Deprecated)',
                        path: 'accordion-deprecated',
                    },
                    {
                        component: 'actionBar',
                        label: 'Action Bar',
                        path: 'action-bar',
                    },
                    {
                        component: 'card',
                        label: 'Card',
                        path: 'card',
                    },
                    {
                        component: 'detailsWindow',
                        label: 'Details Window',
                        path: 'details-window',
                    },
                    {
                        component: 'drawer',
                        label: 'Drawer',
                        path: 'drawer',
                    },
                    {
                        component: 'drawerDeprecated',
                        label: 'Drawer (Deprecated)',
                        path: 'drawer-deprecated',
                    },
                    {
                        component: 'filtersDrawer',
                        label: 'Filters Drawer',
                        path: 'filters-drawer',
                    },
                    {
                        component: 'filtersRail',
                        label: 'Filters Rail',
                        path: 'filters-rail',
                    },
                    {
                        component: 'infoBarDeprecated',
                        label: 'Info Bar (Deprecated)',
                        path: 'info-bar-deprecated',
                    },
                    {
                        component: 'modal',
                        label: 'Modal',
                        path: 'modal',
                    },
                    {
                        component: 'rail',
                        label: 'Rail',
                        path: 'rail',
                    },
                    {
                        component: 'titleBar',
                        label: 'Title Bar',
                        path: 'title-bar',
                    },
                ],
                path: 'surfaces',
            },
            {
                directory: 'utils',
                label: 'Utils',
                levelThree: [
                    {
                        component: 'collapse',
                        label: 'Collapse',
                        path: 'collapse',
                    },
                    {
                        component: 'useMediaQuery',
                        label: 'Use Media Query',
                        path: 'use-media-query',
                    },
                    {
                        component: 'withWidth',
                        label: 'With Width',
                        path: 'with-width',
                    },
                ],
                path: 'utils',
            },
        ],
        path: 'components',
    },
];
