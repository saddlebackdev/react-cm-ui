/**
 * To run this test:
 * npx jest ./src/dataDisplay/dataGroups/__test__/dataGroups.test.js
 */
import React from 'react';
import {
 render,
 screen,
} from '../../../testUtils';
import DataGroups from '../dataGroups';

const someDataObject = {
    foo: 'Foo Property Value',
    bar: 'Bar Property Value',
    baz: 'Baz Property Value',
    qux: 'Qux Property Value',
};

const columns = [
    {
        header: 'Column 1',
        rows: [
            {
                accessor: 'foo',
                fieldName: 'Foo Property Title',
            },
            {
                accessor: 'bar',
                fieldName: 'Bar Property Title',
            },
        ],
    },
    {
        header: 'Column 2',
        rows: [
            {
                accessor: 'baz',
                fieldName: 'Baz Property Title',
            },
            {
                accessor: 'qux',
                fieldName: 'Qux Property Title',
            },
        ]
    },
];

const className = 'some_block--data_groups';
const dataTestId = 'unit_test_data_groups_test_id';

const props = {
    className,
    columns,
    data: someDataObject,
    dataTestId,
    moduleType: 'page',
};

describe('<DataGroups />', () => {
    it('Renders correctly', () => {
        render(
            <DataGroups {...props} />,
        );

        const rootDataGroupsContainer = screen.queryByTestId(props.dataTestId);
        expect(rootDataGroupsContainer).toBeInTheDocument();
        expect(rootDataGroupsContainer).toHaveClass(className);
        expect(screen.queryByText('Column 1')).toBeInTheDocument();
        expect(screen.queryByText('Column 2')).toBeInTheDocument();
        expect(screen.queryByText('Foo Property Title')).toBeInTheDocument();
        expect(screen.queryByText('Foo Property Value')).toBeInTheDocument();
        expect(screen.queryByText('Bar Property Title')).toBeInTheDocument();
        expect(screen.queryByText('Bar Property Value')).toBeInTheDocument();
        expect(screen.queryByText('Baz Property Title')).toBeInTheDocument();
        expect(screen.queryByText('Baz Property Value')).toBeInTheDocument();
        expect(screen.queryByText('Qux Property Title')).toBeInTheDocument();
        expect(screen.queryByText('Qux Property Value')).toBeInTheDocument();
    });
});
