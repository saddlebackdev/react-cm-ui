import { ActionBar } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';
import useTheme from 'react-cm-ui/styles/useTheme';
import PropTypes from 'prop-types';

const propTypes = {
    window: PropTypes.shape({}),
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

    const classes = useStyles();
    const theme = useTheme();

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
                            iconBack: {
                                id: 'bem_block--back_button',
                            },
                            sm: true,
                        },
                        {
                            iconSearch: {
                                id: 'bem_block--search_input',
                                onChange: () => {},
                                onClearClick: () => {},
                                onKeyDown: () => {},
                            },
                            sm: true,
                        },
                        {
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
                    ],
                },
            ]}
        />
    );
}

ActionBarSmSample.propTypes = propTypes;
ActionBarSmSample.defaultProps = defaultProps;

export default ActionBarSmSample;
