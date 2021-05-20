import {
    Address,
} from 'react-cm-ui';
import React from 'react';

function ExampleAddress() {
    return (
        <Address
            address1="My Address"
            address2="My Address 2"
            city="LA"
            region="Region"
            regionCode="Region Code"
            postalCode="12345"
            country="USA"
        />
    );
}

export default ExampleAddress;
