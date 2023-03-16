/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../../../inputs/button/index';

export default {
    title: 'Inputs/Button/Text Button',
    component: Button,
    argTypes: {
        children: { control: 'null' },
        designVersion: { control: 'null' },
        color: { control: 'null' },
        variant: { control: 'null' },
    },
};

const Template = () => (
    <div>
        <Button
            designVersion={2}
            variant="text"
            disabled
        >
            Disable
        </Button>
        <Button
            designVersion={2}
            variant="text"
            color="error"
        >
            Error
        </Button>
        <Button
            designVersion={2}
            variant="text"
            color="link"
        >
            Link
        </Button>
        <Button
            designVersion={2}
            variant="text"
            color="success"
        >
            Success
        </Button>
        <Button
            designVersion={2}
            variant="text"
            color="warning"
        >
            Warning
        </Button>
    </div>
);

export const TextButton = Template.bind({});
TextButton.args = {
    children: 'Disable',
    disabled: true,
    designVersion: 2,
    variant: 'text',
};
