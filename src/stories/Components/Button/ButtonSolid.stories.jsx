/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';

export default {
    title: 'Inputs/Button/Solid Button Colors',
    component: Button,
    argTypes: {
        children: { control: 'null' },
        designVersion: { control: 'null' },
        color: { control: 'null' },
        variant: { control: 'null' },
        pill: { control: 'null' },
        inverse: { control: 'null' },
    },
};

const Template = () => (
    <div>
        <Button>
            Primary
        </Button>
        <Button
            designVersion={2}
        >
            Secondary
        </Button>
        <Button
            designVersion={2}
            color="active"
        >
            Active
        </Button>
        <Button
            designVersion={2}
            disabled
        >
            Disable
        </Button>
        <Button
            designVersion={2}
            color="success"
        >
            Success
        </Button>
        <Button
            designVersion={2}
            color="warning"
        >
            Warning
        </Button>
    </div>
);

export const SolidButtonColors = Template.bind({});
SolidButtonColors.args = {
    children: 'Primary',
    color: 'primary',
    designVersion: 2,
    variant: 'contained',
};
