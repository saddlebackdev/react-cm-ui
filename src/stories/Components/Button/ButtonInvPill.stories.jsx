/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { jsxDecorator } from 'storybook-addon-jsx';
// import { ColorType, VariantType } from '../../../inputs/button/models';
import Button from '../../../inputs/button/index';
import Icon from '../../../dataDisplay/icon/index';
// import '../../../style.scss';

export default {
    title: 'Inputs/Button/Inverse Colors Pill',
    // decorators: [jsxDecorator],
    component: Button,
    parameters: {
        backgrounds: { default: 'dark' },
    },
    // docs: {
    //     source: { code: '<h1>Hello World</h1>' },
    // },
    argTypes: {
        children: { control: 'null' },
        designVersion: { control: 'null' },
        color: { control: 'null' },
        variant: { control: 'null' },
        pill: { control: 'null' },
        inverse: { control: 'null' },
    },
};

// const Children = () => (
//     <div>
//         <Icon
//             type="shape-heart"
//         />
//     </div>
// );

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

// export const Secundary = Template.bind({});
// Secundary.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />

//             <span>Secundary</span>
//         </React.Fragment>
//     ),
//     color: 'secondary',
//     designVersion: 2,
//     variant: 'outlined',
//     inverse: 'true',
//     pill: 'true',
// };

// export const Active = Template.bind({});
// Active.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />

//             <span>Active</span>
//         </React.Fragment>
//     ),
//     color: 'active',
//     designVersion: 2,
//     variant: 'outlined',
//     inverse: 'true',
//     pill: 'true',
// };

// export const Disable = Template.bind({});
// Disable.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />

//             <span>Disable</span>
//         </React.Fragment>
//     ),
//     disabled: true,
//     designVersion: 2,
//     variant: 'outlined',
//     inverse: 'true',
//     pill: 'true',
// };

// export const Error = Template.bind({});
// Error.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />

//             <span>Error</span>
//         </React.Fragment>
//     ),
//     color: 'error',
//     designVersion: 2,
//     variant: 'outlined',
//     inverse: 'true',
//     pill: 'true',
// };

// export const Success = Template.bind({});
// Success.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />

//             <span>Success</span>
//         </React.Fragment>
//     ),
//     color: 'success',
//     designVersion: 2,
//     variant: 'outlined',
//     inverse: 'true',
//     pill: 'true',
// };

// export const Warning = Template.bind({});
// Warning.args = {
//     children: (
//         <React.Fragment>
//             <Icon
//                 type="shape-heart"
//             />

//             <span>Warning</span>
//         </React.Fragment>
//     ),
//     color: 'warning',
//     designVersion: 2,
//     variant: 'outlined',
//     inverse: 'true',
//     pill: 'true',
// };
