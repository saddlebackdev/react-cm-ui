/**
 *
 * - `devLibraryVersion` houses dev's components version value. It can either be 1.x.x or 2.x.x.
 * 1.x.x indicates that design does not have mockups of this particular component in their library.
 *     - The greater than (>) and less than (<) symbols on the `devLibraryVersion` indicates whether
 *     there is a gap and where that gap is; dev or design. Greater than indicates the gap is on
 *     design. Less than indicates the gap is on us, the devs.
 *
 * - `designLibraryVersion` house design's component version value. Pretty simple, if the sketch
 * docs say 2.0.1 for the Input compnent, then we need to make sure our Input's
 * `designLibraryVersion` says 2.0.1.
 *
 * - `designLibraryDoc` houses the link to the component in the sketch library. If there is not one,
 * then we can just put "N/A." If there is a given link the UI will render a clickable link on
 * component's doc and the user can then click and go directly to that components design docs.
 *
 */

const versions = {
    'react-cm-ui': {
        package: '10.5.5',
        components: {
            dataDisplay: {
                chip: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/9wwdP0',
                },
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
                    devLibraryVersion: '2.0.1',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/708f5e0d-872e-4522-adb8-f34ddaf82b48/p/7C27F9C5-9956-4AB1-9DA5-6B51DB4A67F2',
                },
                icon: {
                    devLibraryVersion: '2.1.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'https://www.sketch.com/s/708f5e0d-872e-4522-adb8-f34ddaf82b48/p/E1DB6E1A-4679-47B6-AFBC-3A23CB13C6D1',
                },
                image: {
                    devLibraryVersion: '> 1.0.1',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                personPanel: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                table: {
                    devLibraryVersion: '< 1.0.3',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/708f5e0d-872e-4522-adb8-f34ddaf82b48/p/7C27F9C5-9956-4AB1-9DA5-6B51DB4A67F2',
                },
            },
            feedback: {
                snackbar: {
                    devLibraryVersion: '2.0.1',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/5747fcab-493c-4f90-bde8-c2096f2db6bf/a/rbM1GbA',
                },
            },
            inputs: {
                button: {
                    devLibraryVersion: '2.0.3',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/p/9578614A-F3CD-4BA2-940C-60367CCD887F',
                },
                buttonGroup: {
                    devLibraryVersion: '1.0.0',
                    designLibraryVersion: '1.0.0',
                    designLibraryDoc: '',
                },
                buttonDeprecated: {
                    devLibraryVersion: '1.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                checkbox: {
                    devLibraryVersion: '< 1.0.2',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/p/10182F0A-F2AC-4458-8ABF-C1422BD07B92',
                },
                datePickerCalendar: {
                    devLibraryVersion: '> 1.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                datePickerInput: {
                    devLibraryVersion: '> 1.0.2',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                dropdown: { // Deprecated
                    devLibraryVersion: '1.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                dropdownMenu: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'N/A',
                },
                dropdownButton: {
                    devLibraryVersion: '2.0.2',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/VRRPro',
                },
                durationPicker: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                input: {
                    devLibraryVersion: '< 1.0.2',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/8KKjya',
                },
                phoneInput: {
                    devLibraryVersion: '> 1.0.1',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                prompt: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/VRRPro',
                },
                radio: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                select: {
                    devLibraryVersion: '2.1.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/p/45DC2CF5-702E-4572-9EDF-D952D3A22727',
                },
                textArea: {
                    devLibraryVersion: '2.0.1',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/6c8808fa-bf58-42e5-a0be-7e9d5798fc5f/a/5EEy28',
                },
                timePicker: {
                    devLibraryVersion: '2.0.1',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
            },
            lab: {
                timeline: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
            },
            layout: {
                box: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
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
                sectionalTabs: {
                    devLibraryVersion: '2.1.0',
                    designLibraryVersion: '2.1.0',
                    designLibraryDoc: 'https://www.sketch.com/s/e0829215-763e-444a-926d-0ae1e9aec45a/a/aKaPjZ',
                },
            },
            surfaces: {
                appBar: {
                    devLibraryVersion: '2.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/e0829215-763e-444a-926d-0ae1e9aec45a/p/577E033D-4ACB-46BE-BC78-81042803D4AD',
                },
                actionBar: {
                    devLibraryVersion: '< 1.0.8',
                    designLibraryVersion: '2.1.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/0llKoO',
                },
                card: {
                    devLibraryVersion: '2.0.1',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b',
                },
                detailsWindow: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/p/35D0905B-98F5-42E8-B95A-CDBB28612450',
                },
                drawer: {
                    devLibraryVersion: '< 1.1.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/p/04BAC452-896D-4D93-8239-F70B41633674',
                },
                filtersDrawer: {
                    devLibraryVersion: '< 1.0.1',
                    designLibraryVersion: '2.0.1',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/a/R00Lqx',
                },
                filtersRail: {
                    devLibraryVersion: '< 1.0.0',
                    designLibraryVersion: '2.0.0',
                    designLibraryDoc: 'https://www.sketch.com/s/9e214a28-31c5-4353-a4a8-df8c3aa3604b/p/056E3E2A-F668-4346-9EDB-E9F4B7F2931C',
                },
                modalDeprecated: {
                    devLibraryVersion: '< 1.5.3',
                    designLibraryVersion: 'N/A',
                    designLibraryDoc: 'N/A',
                },
                modal: {
                    devLibraryVersion: '2.0.2',
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
            mixins: '1.0.0',
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
