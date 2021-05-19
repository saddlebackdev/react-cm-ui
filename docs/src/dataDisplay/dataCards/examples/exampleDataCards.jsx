import {
    DataCards,
} from 'react-cm-ui';
import React from 'react';

const persons = [
    {
        name: 'John',
        age: 22,
        gender: 'male',
    },
    {
        name: 'John',
        age: 33,
        gender: 'male',
    },
    {
        name: 'John',
        age: 44,
        gender: 'male',
    },
];

function ExampleDataCards() {
    return (
        <DataCards
            cardProps={() => ({
                // eslint-disable-next-line no-console
                onClick: () => console.log('Click!'),
            })}
            columns={[
                {
                    accessor: (data) => {
                        return `Name: ${data.name} Age: ${data.age} Gender: ${data.gender}`;
                    },
                    fontSize: 'medium',
                    fontWeight: 'semiBold',
                    header: true,
                    width: '100%',
                },
            ]}
            data={persons}
            moduleType="page"
        />
    );
}

export default ExampleDataCards;
