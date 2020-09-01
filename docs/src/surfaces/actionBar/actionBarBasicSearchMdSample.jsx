import { ActionBar } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
    root: {
        position: 'static',
    },
}));

function ActionBarBasicSearchMdSample() {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <ActionBar
            classes={{
                root: classes.root,
            }}
            justifyContent="flex-end"
            columns={[
                {
                    list: [
                        {
                            iconSettings: {
                                id: 'bem_block--settings_button',
                            },
                        }, {
                            iconFilter: {
                                id: 'bem_block--filter_button',
                            },
                        },
                    ],
                    sm: 'auto',
                },
                {
                    search: {
                        id: 'bem_block--search_input',
                        onChange: onInputChange,
                        onClearClick: () => {},
                        onKeyDown: () => {},
                        value: inputValue,
                    },
                    sm: true,
                },
                {
                    button: {
                        color: 'alternate',
                        iconType: 'envelope',
                        id: 'bem_block--email_button',
                        title: 'Email',
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
                        id: 'bem_block--sms_button',
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
                        id: 'bem_block--actions_dropdown_button',
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
                        id: 'bem_block--label_button',
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

export default ActionBarBasicSearchMdSample;
