import {
    Button,
    Input,
    Modal,
    Select,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    bodyCopy: {
        color: theme.palette.text.secondary,
    },
    cancelButton: {
        marginLeft: 'auto',
    },
}));

function ModalSample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const classes = useStyles();

    const onToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <Button
                onClick={onToggle}
            >
                Open Modal
            </Button>

            <Modal
                isOpen={isModalOpen}
                maxWidth={490}
            >
                <Modal.Content>
                    <Typography
                        variant="h2"
                    >
                        Section Heading
                    </Typography>

                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body1"
                    >
                        Section Body Copy - quis nulla commodo, aliquam lectus sed, blandit augue.
                        Cras ullamcorper bibendum bibendum.
                    </Typography>

                    <Input
                        fluid
                        label="Label"
                        placholder="Text"
                    />

                    <Input
                        fluid
                        label="Label"
                        placholder="Text"
                    />

                    <Select
                        label="Label"
                        fluid
                        options={[
                            {
                                label: 'Option 1',
                                value: 1,
                            },
                            {
                                label: 'Option 2',
                                value: 1,
                            },
                            {
                                label: 'Option 3',
                                value: 1,
                            },
                            {
                                label: 'Option 4',
                                value: 1,
                            },
                            {
                                label: 'Option 5',
                                value: 1,
                            },
                        ]}
                        value={{
                            label: 'Option 1',
                            value: 1,
                        }}
                    />

                    <Modal.Actions>
                        <Button
                            classes={{
                                root: classes.cancelButton,
                            }}
                            color="alternate"
                            onClick={onToggle}
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={onToggle}
                        >
                            CTA Label
                        </Button>
                    </Modal.Actions>
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default ModalSample;
