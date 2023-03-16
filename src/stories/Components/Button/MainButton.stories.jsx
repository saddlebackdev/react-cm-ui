/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';
import Icon from '../../../dataDisplay/icon/index';

export default {
    title: 'Inputs/Button/Main',
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
        pill: { control: 'boolean' },
        inverse: { control: 'boolean' },
        transparent: { control: 'boolean' },
        icon: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        compact: { control: 'boolean' },
        outline: { control: 'boolean' },
        relax: { control: 'boolean' },
    },
};

const Template = (args) => (
    <Button {...args} />
);

export const Main = Template.bind({});
Main.args = {
    children: (
        <React.Fragment>
            <Icon type="shape-heart" />
            <span>Primary</span>
        </React.Fragment>
    ),
    color: 'default',
    designVersion: 2,
    variant: 'contained',
    // Pill and href bug in the padding bottom
    href: 'https://www.youtube.com/',
    pill: '',
    inverse: '',
    transparent: '',
    icon: '',
    disabled: '',
    fullWidth: '',
    compact: '',
    outline: '',
    relax: '',
};
