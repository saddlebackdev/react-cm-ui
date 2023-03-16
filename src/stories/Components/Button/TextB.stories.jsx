/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';

export default {
    title: 'Inputs/Button/Button/Text Button',
    component: Button,
    argTypes: {
        children: { control: 'object' },
        designVersion: {
            options: [1, 2],
            control: {
                type: 'number', min: 1, max: 2, step: 1,
            },
        },
        color: {
            options: Object.values(ColorType),
            control: { type: 'select' },
        },
        variant: {
            options: Object.values(VariantType),
            control: { type: 'select' },
        },
    },
};

const Template = (args) => (
    <div>
        <Button {...args} />
        <Button
            color="link"
            variant="text"
            designVersion={2}
        >
            Link
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
