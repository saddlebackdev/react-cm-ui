/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/dataDisplay/table/__test__/tableRow.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import Table from '../table';

let wrapper;

describe('<TableRow />', () => {
    beforeEach(() => {
        wrapper = mountWithTheme(
            <Table.Row>
                <Table.Cell>cell 1</Table.Cell>
                <Table.Cell>cell 2</Table.Cell>
                <Table.Cell>cell 3</Table.Cell>
            </Table.Row>,
        );
    });

    it('renders without problems', () => {
        expect(wrapper.length).toBe(1);
    });

    it('renders children properly', () => {
        const cells = wrapper.find('td');
        expect(cells.length).toBe(3);
        expect(cells.at(0).prop('children')).toBe('cell 1');
        expect(cells.at(1).prop('children')).toBe('cell 2');
        expect(cells.at(2).prop('children')).toBe('cell 3');
    });

    it('applies \'table-row-active\' class when active prop is true', () => {
        expect(wrapper.find('tr').prop('className')).not.toMatch('table-row-active');

        wrapper.setProps({ active: true });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-active');
    });

    it('applies \'table-row-disabled\' class when disable/disabled prop is true', () => {
        expect(wrapper.find('tr').prop('className')).not.toMatch('table-row-disabled');

        wrapper.setProps({ disable: true });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-disabled');

        wrapper.setProps({
            disable: false,
            disabled: true,
        });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-disabled');
    });

    it('applies \'table-row-font-size\' class according to fontSize prop', () => {
        expect(wrapper.find('tr').prop('className')).not.toMatch('table-row-font-size');

        wrapper.setProps({ fontSize: 'large' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-font-size-large');

        wrapper.setProps({ fontSize: 'medium' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-font-size-medium');

        wrapper.setProps({ fontSize: 'small' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-font-size-small');

        wrapper.setProps({ fontSize: 'xlarge' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-font-size-xlarge');

        wrapper.setProps({ fontSize: 'xsmall' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-font-size-xsmall');

        wrapper.setProps({ fontSize: 'xxsmall' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-font-size-xxsmall');
    });

    it('applies \'table-row-selected\' class when selected prop is true', () => {
        wrapper = mountWithTheme(
            <Table.Row selected>
                <Table.Cell>cell 1</Table.Cell>
                <Table.Cell>cell 2</Table.Cell>
                <Table.Cell>cell 3</Table.Cell>
            </Table.Row>,
        );

        expect(wrapper.find('tr').prop('className')).toMatch('table-row-selected');
    });

    it('applies \'table-row-text-align\' class according to textAlign prop', () => {
        expect(wrapper.find('tr').prop('className')).not.toMatch('table-row-text-align');

        wrapper.setProps({ textAlign: 'center' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-text-align-center');

        wrapper.setProps({ textAlign: 'left' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-text-align-left');

        wrapper.setProps({ textAlign: 'right' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-text-align-right');
    });

    it('applies \'table-row-text-align\' class according to textAlign prop', () => {
        expect(wrapper.find('tr').prop('className')).not.toMatch('table-row-text-align');

        wrapper.setProps({ textAlign: 'center' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-text-align-center');

        wrapper.setProps({ textAlign: 'left' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-text-align-left');

        wrapper.setProps({ textAlign: 'right' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-text-align-right');
    });

    it('applies \'table-row-vertical-align\' class according to verticalAlign prop', () => {
        expect(wrapper.find('tr').prop('className')).not.toMatch('table-row-vertical-align');

        wrapper.setProps({ verticalAlign: 'bottom' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-vertical-align-bottom');

        wrapper.setProps({ verticalAlign: 'middle' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-vertical-align-middle');

        wrapper.setProps({ verticalAlign: 'top' });
        expect(wrapper.find('tr').prop('className')).toMatch('table-row-vertical-align-top');
    });
});
