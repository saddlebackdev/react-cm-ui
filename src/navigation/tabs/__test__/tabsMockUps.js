export const items = [1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => ({
    getContent: () => `Example Tab ${tabNumber} content`,
    key: `exampleTab${tabNumber}`,
    // eslint-disable-next-line no-console
    onClick: (clickedTab) => console.log(`Example Tab ${tabNumber} clicked`, clickedTab),
    title: `Example Tab ${tabNumber}`,
}));

export const tabWidth = 100;

const tabsDimensions = items.reduce((result, tab, index) => {
    // eslint-disable-next-line no-param-reassign
    result[tab.key] = {
        width: tabWidth,
        offset: tabWidth * index,
    };

    return result;
}, {});

export const tabsState = {
    blockWidth: 1000,
    tabDimensions: tabsDimensions,
    tabsTotalWidth: items.length * tabWidth,
};
