/**
 * NOTE: Greater than, lesser than symbols signifies a gap.
 * e.g. designItems[0].version: '2.0.0 >' and devVersion: '2.0.0 <'. signifies that the dev
 * component needs to be advanced to close the gap. Visa-versa would signify that design needs to
 * advanced their component.
 */

const versions = {
    'react-cm-ui': {
        package: '10.0.0',
        components: {
            inputs: {
                button: {
                    designArea: 'Buttons',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/kJJpag',
                            name: 'Standard Button Styles',
                            version: '2.0.0',
                        },
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/oGGwYY',
                            name: 'Touchscreen Button Styles',
                            version: '2.0.0',
                        },
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/R00L1y',
                            name: 'Button Types',
                            version: '2.0.1',
                        },
                    ],
                    devVersion: '2.0.0',
                },
                checkbox: {
                    designArea: 'Checkbox',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/YVVzGM',
                            name: 'Standard Checkbox',
                            version: '2.0.0',
                        },
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/Kee1vn',
                            name: 'Mini Checkbox',
                            version: '2.0.0',
                        },
                    ],
                    devVersion: '2.0.0',
                },
                durationPicker: { // TODO: Design needs to add documentation.
                    designArea: '',
                    designItems: [],
                    devVersion: '2.0.0',
                },
                input: {
                    designArea: 'Text Inputs',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/8KKjya',
                            name: 'Standard Single Line Input',
                            version: '2.0.0',
                        },
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/2ooq5J',
                            name: 'Button & Single Line Input',
                            version: '2.0.0',
                        },
                    ],
                    devVersion: '2.0.0',
                },
                prompt: {
                    designArea: 'Button Dropdowns',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/VRRPro',
                            name: 'Button with Prompt',
                            version: '2.0.0',
                        },
                    ],
                    devVersion: '2.0.0',
                },
                switch: {
                    designArea: 'Switch',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/gva8jM',
                            name: 'Standard Toggle',
                            version: '2.0.0',
                        },
                        {
                            doc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/83JE8x',
                            name: 'Mini Toggle',
                            version: '2.0.0',
                        },
                    ],
                    devVersion: '2.0.0',
                },
            },
            layout: {
                grid: {
                    designArea: 'Grid',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/vlljpd',
                            name: '1200 Desktop',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/4117M3',
                            name: '768 Desktop',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/e220Z0',
                            name: '767 Mobile',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/GZZlEL',
                            name: '729 Desktop',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/ODDKVw',
                            name: '728 Mobile',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/m44YD7',
                            name: '496 Mobile',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/Djjamj',
                            name: '495 Mobile',
                            version: 'N/A',
                        },
                        {
                            doc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/a/a99mrd',
                            name: '320 Mobile',
                            version: 'N/A',
                        },
                    ],
                    devVersion: '2.0.0',
                },
            },
            navigation: {
                breadcrumbs: { // TODO: Design needs to add documentation.
                    designArea: '',
                    designItems: [],
                    devVersion: '2.0.0',
                },
                sectionalTabs: {
                    designArea: 'Content Navigation',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/e0829215-763e-444a-926d-0ae1e9aec45a/a/9wwnA0',
                            name: 'Simple Tabs',
                            version: '2.0.0 >',
                        },
                    ],
                    devVersion: '2.0.0 <',
                },
            },
            surfaces: {
                actionBar: {
                    designArea: 'Actions Bar',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/0llKoO',
                            name: 'Actions Bar - Desktop',
                            version: '2.1.0 >',
                        },
                        {
                            doc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/lvvVP4',
                            name: 'Actions Bar - Mobile',
                            version: '2.0.0 >',
                        },
                    ],
                    devVersion: '2.0.0 <',
                },
                appBar: { // TODO: Design needs to add documentation.
                    designArea: '',
                    designItems: [],
                    devVersion: '2.0.0',
                },
                filtersDrawer: {
                    designArea: 'Filters Rail',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/R00Lqx',
                            name: 'Filters Rail - Mobile',
                            version: '2.0.1 >',
                        },
                    ],
                    devVersion: '2.0.0 <',
                },
                filtersRail: {
                    designArea: 'Filters Rail',
                    designItems: [
                        {
                            doc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/kJJpy9',
                            name: 'Filters Rail - Desktop',
                            version: '2.0.0',
                        },
                        {
                            doc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/oGGwxx',
                            name: 'Filters Rail - Desktop Drawer',
                            version: '2.0.0',
                        },
                    ],
                    devVersion: '2.0.0',
                },
                modal: { // TODO: Design needs to add documentation.
                    designArea: '',
                    designItems: [],
                    devVersion: '2.0.0',
                },
            },
        },
        theme: {
            breakpoints: '1.0.0',
            gutters: '1.0.0',
            height: '1.0.0',
            index: '1.0.0',
            palette: '1.0.0',
            shape: '1.0.0',
            spacing: '1.0.0',
            transitions: '1.0.0',
            typography: '1.0.0',
            width: '1.0.0',
            zIndex: '1.1.0',
        },
    },
};

export default versions;
