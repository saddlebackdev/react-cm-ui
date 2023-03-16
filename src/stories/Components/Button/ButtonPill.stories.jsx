/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';

export default {
    title: 'Inputs/Button/Pill Button Colors',
    component: Button,
    argTypes: {
        children: { control: 'null' },
        designVersion: { control: 'null' },
        color: { control: 'null' },
        variant: { control: 'null' },
        pill: { control: 'null' },
    },
};

const Template = () => (
    <div>
        <Button
            color="primary"
            designVersion={2}
            variant="contained"
            pill
        >
            Primary
        </Button>
        <Button
            color="secondary"
            designVersion={2}
            variant="contained"
            pill
        >
            Secondary
        </Button>
        <Button
            color="active"
            designVersion={2}
            variant="contained"
            pill
        >
            Active
        </Button>
        <Button
            designVersion={2}
            variant="contained"
            pill
            disabled
        >
            Disable
        </Button>
        <Button
            color="success"
            designVersion={2}
            variant="contained"
            pill
        >
            Success
        </Button>
        <Button
            color="error"
            designVersion={2}
            variant="contained"
            pill
        >
            Error
        </Button>
        <Button
            color="warning"
            designVersion={2}
            variant="contained"
            pill
        >
            Warning
        </Button>
    </div>
);

export const PillButtonColors = Template.bind({});
PillButtonColors.args = {
    children: 'Primary',
    color: 'primary',
    designVersion: 2,
    variant: 'contained',
    pill: 'true',
};
