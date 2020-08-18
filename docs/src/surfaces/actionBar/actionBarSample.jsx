import { ActionBar } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        position: 'static',
    },
}));

function ActionBarSample() {
    const classes = useStyles();

    return (
        <ActionBar
            classes={{
                root: classes.root,
            }}
            justifyContent="flex-end"
            columns={[
                {
                    button: {
                        color: 'alternate',
                        iconType: 'envelope',
                        title: 'SMS',
                    },
                    sm: 'auto',
                    style: {
                        textAlign: 'right',
                    },
                },
                {
                    button: {
                        color: 'alternate',
                        iconType: 'comment-lines',
                        title: 'SMS',
                    },
                    sm: 'auto',
                    style: {
                        textAlign: 'right',
                    },
                },
                {
                    dropdownButton: {
                        color: 'alternate',
                        label: 'Actions',
                        options: [
                            {
                                label: 'Option 01',
                            }, {
                                label: 'Option 02',
                            }, {
                                label: 'Option 03',
                            },
                        ],
                        title: 'Actions',
                    },
                    sm: 'auto',
                    style: {
                        textAlign: 'right',
                    },
                },
                {
                    button: {
                        color: 'success',
                        iconType: 'plus',
                        label: 'Label',
                        title: 'Label',
                    },
                    sm: 'auto',
                    style: {
                        textAlign: 'right',
                    },
                },
            ]}
        />
    );
}

export default ActionBarSample;
