import {
    Tabs,
} from 'react-cm-ui';
import React from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        margin: 0,
    },
}));

function ExampleWithContentTabs() {
    const classes = useStyles();

    return (
        <Tabs
            classes={{
                root: classes.root,
            }}
            items={[
                {
                    getContent: () => 'Example Tab 1 content',
                    key: '0',
                    title: 'Label',
                },
                {
                    getContent: () => 'Example Tab 2 content',
                    key: '1',
                    title: 'Label',
                },
                {
                    getContent: () => 'Example Tab 3 content',
                    key: '2',
                    title: 'Label',
                },
            ]}
            withContent
        />
    );
}

export default ExampleWithContentTabs;
