export const BEM_NAME = 'some_block--some_element_name';

export const ROW_COLLAPSE = false;
export const ROW_COLLAPSIBLE = false;
export const ROW_HEADING = 'Category';
export const ROW_COMPONENTS = [
    {
        props: {
            checked: false,
            count: 10,
            label: 'Label 1',
            onChange: jest.fn(),
        },
        type: 'checkbox',
    },
];
