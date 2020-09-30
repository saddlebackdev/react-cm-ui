// eslint-disable-next-line import/prefer-default-export
export const navigationItems = [
    {
        directory: 'gettingStarted',
        items: [
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
        label: 'Getting Started',
        path: 'getting-started',
        subSections: [],
    },
    {
        directory: 'styleGuide',
        items: [
            {
                component: 'colors',
                label: 'Colors',
                path: 'colors',
            },
        ],
        label: 'Style Guide',
        path: 'style-guide',
        subSections: [],
    },
    {
        directory: 'components',
        items: [],
        label: 'Components',
        path: 'components',
        subSections: [
            {
                directory: 'dataDisplay',
                items: [
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
                        component: 'popover',
                        label: 'Popover',
                        path: 'popover',
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
                label: 'Data Display',
                path: 'data-display',
            },
            {
                directory: 'feedback',
                items: [
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
                label: 'Feedback',
                path: 'feedback',
            },
            {
                directory: 'inputs',
                items: [
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
                label: 'Inputs',
                path: 'inputs',
            },
            {
                directory: 'layout',
                items: [
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
                label: 'Layout',
                path: 'layout',
            },
            {
                directory: 'navigation',
                items: [
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
                ],
                label: 'Navigation',
                path: 'navigation',
            },
            {
                directory: 'surfaces',
                items: [
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
                label: 'Surfaces',
                path: 'surfaces',
            },
            {
                directory: 'utils',
                items: [
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
                label: 'Utils',
                path: 'utils',
            },
        ],
    },
];
