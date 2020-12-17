import {
    Button,
    Drawer,
    Icon,
    Typography,
} from 'react-cm-ui';
import React, { useCallback, useState } from 'react';

const SORT_BY_OPTIONS = [
    {
        label: 'Received (Newest > Oldest)',
        value: 1,
    },
    {
        label: 'Received (Oldest > Newest)',
        value: 2,
    },
];

const TAB_KEYS = {
    1: 'label_1',
    2: 'label_2',
    3: 'label_3',
};

function ExampleDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isFiltersRailOpen, setIsFiltersRailOpen] = useState(false);
    const [sortByValue, setSortByValue] = useState(SORT_BY_OPTIONS[0]);
    const [selectedTab, setSelectedTab] = useState(TAB_KEYS[1]);

    const onDrawerToggle = useCallback(() => {
        setIsDrawerOpen(!isDrawerOpen);
    }, [isDrawerOpen]);

    const onFiltersRailToggle = useCallback(() => {
        setIsFiltersRailOpen(!isFiltersRailOpen);
    }, [isFiltersRailOpen]);

    const onSelectChange = useCallback((selectedOption) => {
        setSortByValue(selectedOption);
    }, []);

    const onTabClick = useCallback(({ originalKey }) => {
        console.log('originalKey', originalKey);
        setSelectedTab(originalKey);
    }, []);

    return (
        <div>
            <Button
                onClick={onDrawerToggle}
            >
                Open The Drawer
            </Button>

            <Drawer
                isOpen={isDrawerOpen}
            >
                <Drawer.TitleBar
                    closeButton={(
                        <Button
                            icon
                            onClick={onDrawerToggle}
                        >
                            <Icon
                                compact
                                type="close"
                            />
                        </Button>
                    )}
                    title="Heading Title"
                >
                    <Drawer.Tabs
                        items={[
                            {
                                key: TAB_KEYS[1],
                                onClick: (tabObject) => onTabClick(tabObject),
                                title: 'Label 1',
                            },
                            {
                                key: TAB_KEYS[2],
                                onClick: (tabObject) => onTabClick(tabObject),
                                title: 'Label 2',
                            },
                            {
                                key: TAB_KEYS[3],
                                onClick: (tabObject) => onTabClick(tabObject),
                                title: 'Label 3',
                            },
                        ]}
                        selectedTabKey={selectedTab}
                    />
                </Drawer.TitleBar>

                <Drawer.ActionBar
                    columns={[
                        {
                            iconFilter: {
                                id: 'bem_container_name--filter_button',
                                onClick: onFiltersRailToggle,
                                selected: isFiltersRailOpen,
                            },
                        },
                        {
                            search: {
                                onChange: () => {},
                                onClearClick: () => {},
                                onKeyDown: () => {},
                                onSearchClick: () => {},
                                onSearchKeyDown: () => {},
                            },
                            sm: true,
                        },
                        {
                            dropdownButton: {
                                id: 'bem_container_name--actions_dropdown_button',
                                label: 'Actions',
                            },
                            sm: 'auto',
                        },
                    ]}
                />

                <Drawer.Container>
                    <Drawer.FiltersRail
                        isOpen={isFiltersRailOpen}
                        rows={[
                            {
                                heading: 'Sort By',
                                components: [
                                    {
                                        props: {
                                            onChange: onSelectChange,
                                            options: SORT_BY_OPTIONS,
                                            placeholder: 'test',
                                            value: sortByValue,
                                        },
                                        type: 'select',
                                    },
                                ],
                            },
                        ]}
                    />

                    <Drawer.Content
                        isFiltersRailOpen={isFiltersRailOpen}
                    >
                        {selectedTab === TAB_KEYS[1] && (
                            <React.Fragment>
                                <Typography
                                    gutterBottom
                                    variant="body1"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus
                                    commodo mi, non ullamcorper lacus tincidunt vitae. Morbi vel diam a mauris
                                    interdum varius ac vitae elit. Nulla porta viverra nisi, sit amet gravida
                                    lorem eleifend tristique. Integer et dolor hendrerit lacus consectetur
                                    tempor. Ut non ipsum lectus. Vestibulum lacinia quam felis, in pulvinar
                                    tortor aliquam a. Pellentesque ac bibendum est, in consequat dolor. Sed
                                    tempus congue risus, at viverra massa lobortis ut. Sed pretium sem justo,
                                    egestas volutpat enim pretium eu. Donec ultrices tortor ut nunc viverra
                                    cursus. Fusce enim dui, euismod a elit non, vestibulum euismod nibh.
                                    Integer nec eros malesuada, tempor quam id, ultricies leo. Morbi sit amet
                                    condimentum sem. In molestie pretium mi quis scelerisque. Maecenas cursus
                                    eget ex nec tempor.
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body1"
                                >
                                    Etiam faucibus neque a varius ultrices. Sed scelerisque fermentum sapien,
                                    sit amet euismod urna eleifend sodales. Quisque fermentum velit lacus, quis
                                    euismod ex aliquet vel. Aenean consequat aliquam metus, vel cursus felis
                                    semper ut. Cras ultrices, ex quis fermentum laoreet, purus diam dignissim
                                    libero, at ullamcorper nunc enim non diam. Phasellus nec vestibulum velit.
                                    Nunc luctus, urna vitae molestie pulvinar, nulla mi imperdiet est, non
                                    rhoncus nisl risus quis libero. Quisque et leo eget magna tincidunt
                                    tincidunt. Aenean turpis leo, commodo vitae sem at, auctor convallis nibh.
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body1"
                                >
                                    Mauris maximus risus viverra, accumsan ligula at, bibendum dolor.
                                    Vestibulum in mollis purus. Phasellus dapibus facilisis massa, ut
                                    scelerisque justo commodo eu. Praesent et finibus ipsum. Etiam eleifend,
                                    leo non ultricies porttitor, est augue maximus sapien, vel placerat est
                                    felis vitae dui. Aenean erat mi, posuere venenatis metus non, dapibus
                                    luctus ipsum. Duis molestie in ligula sit amet faucibus. Aliquam feugiat
                                    cursus quam, ac finibus enim condimentum sit amet.
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body1"
                                >
                                    Integer nec nunc semper, volutpat odio a, laoreet lorem. Vestibulum sodales
                                    ante vel velit elementum pulvinar. Duis venenatis venenatis libero, sed
                                    tristique tellus pretium a. Donec at lacus nisl. Vivamus pharetra turpis
                                    eget augue suscipit, ac mattis risus viverra. Quisque egestas lectus metus,
                                    vel lacinia turpis pretium malesuada. Integer feugiat pulvinar lacus non
                                    finibus. Proin ut ipsum eu mi rhoncus aliquet quis sed leo. Proin ac
                                    laoreet augue, laoreet pulvinar dui. Donec vitae mi et mi maximus
                                    sollicitudin. Integer aliquam pellentesque est, ac venenatis dui sagittis
                                    in. Etiam risus eros, eleifend nec luctus sit amet, efficitur nec sapien.
                                    Suspendisse vitae augue eu erat rhoncus fringilla dapibus ut urna. Ut
                                    elementum accumsan neque, sed viverra ligula eleifend sed. Praesent vitae
                                    purus id dolor faucibus pulvinar. Vivamus lobortis diam sollicitudin,
                                    bibendum libero at, consectetur lacus.
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body1"
                                >
                                    Sed at neque massa. Nam sagittis, nisi a suscipit bibendum, urna turpis
                                    consequat enim, nec ultrices arcu velit a tellus. Nunc porta pulvinar erat
                                    et egestas. Proin mattis pulvinar urna vitae blandit. Duis eu vulputate
                                    lectus, nec pretium nisi. Fusce venenatis consectetur turpis, id pretium
                                    odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
                                    varius blandit risus, vel lacinia lorem condimentum vitae. Maecenas ac
                                    iaculis urna. Etiam rhoncus sagittis nulla, in elementum nibh blandit vel.
                                    Donec maximus lacinia enim a suscipit. In accumsan odio ut bibendum
                                    malesuada. Fusce consectetur urna et mauris venenatis hendrerit. Nunc at
                                    sem luctus, luctus urna sed, dictum nisi.
                                </Typography>
                            </React.Fragment>
                        )}

                        {selectedTab === TAB_KEYS[2] && (
                            <div>
                                Content for tab 2
                            </div>
                        )}

                        {selectedTab === TAB_KEYS[3] && (
                            <div>
                                Content for tab 3
                            </div>
                        )}
                    </Drawer.Content>
                </Drawer.Container>
            </Drawer>
        </div>
    );
}

export default ExampleDrawer;
