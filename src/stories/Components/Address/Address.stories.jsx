/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Address from '../../../dataDisplay/address/index';

export default {
    title: 'Data Display/Address',
    component: Address,
    args: {
        address1: 'Villa Hermosa',
        address2: 'Villa Hermosa',
        city: 'Queretaro',
        country: 'Mexico',
        countryAlpha2: 'asd',
        postalCode: '76670',
        region: 'Villa Progreso',
        regionCode: '76670',
    },
};

const Template = (args) => (
    <Address {...args} />
);

export const Primary = Template.bind({});
