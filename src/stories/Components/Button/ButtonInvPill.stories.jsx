/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../../../inputs/button/index';
import Icon from '../../../dataDisplay/icon/index';

export default {
    title: 'Inputs/Button/Inverse Colors Pill',
    component: Button,
    parameters: {
        backgrounds: { default: 'dark' },
    },
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
        <Button
            color="primary"
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Primary</span>
        </Button>
        <Button
            color="secondary"
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Secundary</span>
        </Button>
        <Button
            color="active"
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Active</span>
        </Button>
        <Button
            disabled
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Disable</span>
        </Button>
        <Button
            color="error"
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Error</span>
        </Button>
        <Button
            color="success"
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Success</span>
        </Button>
        <Button
            color="warning"
            designVersion={2}
            variant="outlined"
            inverse
            pill
        >
            <Icon
                type="shape-heart"
            />

            <span>Warning</span>
        </Button>
    </div>
);

export const InverseColorsPill = Template.bind({});
InverseColorsPill.args = {
    children: (
        <div>
            <Icon type="shape-heart" />
            <span>Primary</span>
        </div>
    ),
    color: 'primary',
    designVersion: 2,
    variant: 'outlined',
    inverse: 'true',
    pill: 'true',
};
