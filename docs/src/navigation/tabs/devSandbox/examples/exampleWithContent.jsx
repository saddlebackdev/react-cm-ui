import { Tabs } from 'react-cm-ui';
import React from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        padding: spacing(1),
    },
}));

function ExampleWithContent() {
    const classes = useStyles();

    const items = [1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => ({
        getContent: () => `Example Tab ${tabNumber} content`,
        key: `exampleTab${tabNumber}`,
        onClick: (clickedTab) => {
            // eslint-disable-next-line no-console
            console.log(`Example Tab ${tabNumber} clicked`, clickedTab);
        },
        title: `Example Tab ${tabNumber}`,
    }));

    return (
        <div
            className={classes.root}
        >
            <Tabs
                items={items}
                selectedTabKey={items[0].key}
                withContent
            />
        </div>
    );
}

export default ExampleWithContent;
