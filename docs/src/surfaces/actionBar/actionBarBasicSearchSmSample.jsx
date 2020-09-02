import {
    ActionBar,
    Container,
    Content,
    Page,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useTheme from 'react-cm-ui/styles/useTheme';

const propTypes = {
    window: PropTypes.shape({
        alert: PropTypes.func,
    }),
};

const defaultProps = {
    window: null,
};

const useStyles = makeStyles(() => ({
    root: {
        '&.action_bar': {
            left: 0,
            top: 0,
        },
    },
}));

function ActionBarSmSample(props) {
    const {
        window,
    } = props;

    const [inputValue, setInputValue] = useState('');

    const classes = useStyles();
    const theme = useTheme();

    const onInputChange = (value) => {
        setInputValue(value);
    };

    const onInputClearClick = () => {
        setInputValue('');
    };

    const onInputKeyDown = () => {
        // eslint-disable-next-line no-alert
        window.alert(`onInputKeyDown called with value: ${inputValue}`);
    };

    return (
        <Page>
            <ActionBar
                classes={{
                    root: classes.root,
                }}
                justifyContent="flex-end"
                columns={[
                    {
                        iconBack: {
                            id: 'bem_block--back_button',
                        },
                        sm: true,
                    },
                    {
                        divide: true,
                        iconSearch: {
                            id: 'bem_block--search_input',
                            onChange: onInputChange,
                            onClearClick: onInputClearClick,
                            onKeyDown: onInputKeyDown,
                            value: inputValue,
                        },
                    },
                    {
                        divide: true,
                        iconFilter: {
                            id: 'bem_block--filter_button',
                        },
                    },
                    {
                        actionsButton: {
                            drawerContainer: window,
                            header: 'Actions',
                            options: [
                                {
                                    iconType: 'envelope',
                                    label: 'Email',
                                    onClick: () => {},
                                }, {
                                    iconType: 'comment-lines',
                                    label: 'SMS',
                                    onClick: () => {},
                                }, {
                                    iconType: 'chevron-down',
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
                                }, {
                                    iconBackgroundColor: theme.palette.success.primary,
                                    iconType: 'times',
                                    label: 'Delete Stuff',
                                    onClick: () => {},
                                },
                            ],
                        },
                    },
                ]}
            />

            <Container>
                <Content>
                    Some content
                </Content>
            </Container>
        </Page>
    );
}

ActionBarSmSample.propTypes = propTypes;
ActionBarSmSample.defaultProps = defaultProps;

export default ActionBarSmSample;
