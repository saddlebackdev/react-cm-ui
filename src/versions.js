/**
 * NOTE: Greater than, lesser than symbols in `devLibraryVersion` key values signifies a gap.
 * e.g. devLibraryVersion: '< 2.0.0'. signifies that the dev component needs to be advanced to
 * close the gap.
 */

const versions = {
    'react-cm-ui': {
        package: '10.0.8',
        components: {
            dataDisplay: {
                dataCards: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                dataGrid: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/708f5e0d-872e-4522-adb8-f34ddaf82b48/p/7C27F9C5-9956-4AB1-9DA5-6B51DB4A67F2',
                },
                dataGroups: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/708f5e0d-872e-4522-adb8-f34ddaf82b48/p/7C27F9C5-9956-4AB1-9DA5-6B51DB4A67F2',
                },
            },
            layout: {
                grid: {
                    devLibraryVersion: '> 2.0.2',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/p/305D0BE8-1CD5-4796-A022-3E25B1E7BD35',
                },
                page: {
                    devLibraryVersion: '< 1.0.2',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/8016dbb8-1bb5-4fac-bea4-09f39aca414a/p/647AD2A6-E3E0-469A-BFD4-A7A8605EC833',
                },
            },
            navigation: {
                mobileStepper: {
                    devLibraryVersion: '> 2.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
            },
            surfaces: {
                appBar: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/e0829215-763e-444a-926d-0ae1e9aec45a/p/577E033D-4ACB-46BE-BC78-81042803D4AD',
                },
                actionBar: {
                    devLibraryVersion: '< 1.0.2',
                    designLibraryVersion: '2.1.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/0llKoO',
                },
                detailsWindow: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/p/35D0905B-98F5-42E8-B95A-CDBB28612450',
                },
                drawer: {
                    devLibraryVersion: '< 1.0.2',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/p/04BAC452-896D-4D93-8239-F70B41633674',
                },
                filtersDrawer: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.1',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/R00Lqx',
                },
                filtersRail: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/p/056E3E2A-F668-4346-9EDB-E9F4B7F2931C',
                },
                modalDeprecated: {
                    devLibraryVersion: '< 1.5.1',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                modal: {
                    devLibraryVersion: '2.0.1',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
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
