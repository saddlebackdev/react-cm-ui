/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';
import Icon from '../../../dataDisplay/icon/index';

export default {
    title: 'Inputs/Button/Button/Transparent Button',
    component: Button,
    parameters: {
        backgrounds: { default: 'dark' },
    },
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
        inverse: { control: 'boolean' },
        icon: { control: 'boolean' },
        transparent: { control: 'boolean' },
    },
};

const Template = (args) => (
    <div>
        <Button {...args} />
        <Button
            designVersion={2}
            transparent
            icon
        >
            <Icon
                type="shape-heart"
            />
        </Button>
        <Button
            designVersion={2}
            transparent
        >
            <Icon
                type="shape-heart"
            />
            <span>Label</span>
        </Button>
    </div>
);

export const TransparentButton = Template.bind({});
TransparentButton.args = {
    children: 'Label',
    designVersion: 2,
    transparent: 'true',
};
