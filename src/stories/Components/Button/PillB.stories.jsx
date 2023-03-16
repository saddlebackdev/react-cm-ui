/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';
import Icon from '../../../dataDisplay/icon/index';

export default {
    title: 'Inputs/Button/Button/Pill Button',
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
        inverse: { control: 'boolean' },
        icon: { control: 'boolean' },
        pill: { control: 'boolean' },
    },
};

const Template = (args) => (
    <div>
        <Button {...args} />
        <Button
            designVersion={2}
            pill
        >
            <Icon
                type="shape-heart"
            />
            <span>Label</span>
        </Button>
    </div>
);

export const PillButton = Template.bind({});
PillButton.args = {
    children: 'Label',
    designVersion: 2,
    pill: 'true',
};

// export const LabelIcon = Template.bind({});
// LabelIcon.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />
//             <span>Label</span>
//         </React.Fragment>
//     ),
//     designVersion: 2,
//     pill: 'true',
// };
