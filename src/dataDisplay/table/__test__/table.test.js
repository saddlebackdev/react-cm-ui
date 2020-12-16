/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/dataDisplay/table/__test__/table.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import Table from '../table';

let wrapper;

describe('<Table />', () => {
    beforeEach(() => {
        wrapper = mountWithTheme(<Table />);
    });

    it('Should render without problems', () => {
        expect(wrapper.length).toBe(1);
    });

    it('is basic by default', () => {
        expect(wrapper.find('table').prop('className').includes('table-basic')).toBe(true);
    });

    it('applies celled class when prop celled is true', () => {
        wrapper = mountWithTheme(<Table celled />);
        expect(wrapper.find('table').prop('className').includes('table-celled')).toBe(true);
    });

    it('renders children properly', () => {
        wrapper = mountWithTheme(
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>header cell content 1</Table.HeaderCell>
                        <Table.HeaderCell>header cell content 2</Table.HeaderCell>
                        <Table.HeaderCell>header cell content 3</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell content 1</Table.Cell>
                        <Table.Cell>cell content 2</Table.Cell>
                        <Table.Cell>cell content 3</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>,
        );

        expect(wrapper.find('thead').length).toBe(1);
        expect(wrapper.find('th').length).toBe(3);
        expect(wrapper.find('th').at(0).find('span').prop('children')).toBe('header cell content 1');
        expect(wrapper.find('tbody').length).toBe(1);
        expect(wrapper.find('tr').length).toBe(2); // one in header, one in body
        expect(wrapper.find('td').length).toBe(3);
        expect(wrapper.find('td').at(0).prop('children')).toBe('cell content 1');
    });

    it('applies collapsing class when collapsing prop is true', () => {
        wrapper = mountWithTheme(<Table collapsing />);
        wrapper.find('table').prop('className').includes('table-collapsing');
    });

    it('applies definition class when definition prop is true', () => {
        wrapper = mountWithTheme(<Table definition />);
        wrapper.find('table').prop('className').includes('table-definition');
    });

    it('applies fixed class when fixed prop is true', () => {
        wrapper = mountWithTheme(<Table fixed />);
        expect(wrapper.find('table').prop('className').includes('table-fixed')).toBe(true);
    });

    it('applies fontSize class when fontSize prop matches any of the valid enums (xxsmall, xsmall, small, medium, large, xlarge)', () => {
        wrapper = mountWithTheme(<Table fontSize="xxsmall" />);
        expect(wrapper.find('table').prop('className').includes('table-font-size-xxsmall')).toBe(true);

        wrapper.setProps({ fontSize: 'xsmall' });
        expect(wrapper.find('table').prop('className').includes('table-font-size-xsmall')).toBe(true);

        wrapper.setProps({ fontSize: 'small' });
        expect(wrapper.find('table').prop('className').includes('table-font-size-small')).toBe(true);

        wrapper.setProps({ fontSize: 'medium' });
        expect(wrapper.find('table').prop('className').includes('table-font-size-medium')).toBe(true);

        wrapper.setProps({ fontSize: 'large' });
        expect(wrapper.find('table').prop('className').includes('table-font-size-large')).toBe(true);

        wrapper.setProps({ fontSize: 'xlarge' });
        expect(wrapper.find('table').prop('className').includes('table-font-size-xlarge')).toBe(true);

        wrapper.setProps({ fontSize: 'xxlarge' });
        expect(wrapper.find('table').prop('className').includes('table-font-size-xxlarge')).toBe(false);
    });

    it('applies fullWidth class when fullWidth prop is true', () => {
        wrapper = mountWithTheme(<Table fullWidth />);
        expect(wrapper.find('table').prop('className').includes('table-full-width')).toBe(true);
    });

    it('applies selectable class when selectable prop is true', () => {
        wrapper = mountWithTheme(<Table selectable />);
        expect(wrapper.find('table').prop('className').includes('table-selectable')).toBe(true);
    });

    it('applies singleLine class when singleLine prop is true', () => {
        wrapper = mountWithTheme(<Table singleLine />);
        expect(wrapper.find('table').prop('className').includes('table-single-line')).toBe(true);
    });

    it('applies proper table-size class when size prop is medium/m or small/s', () => {
        wrapper = mountWithTheme(<Table size="medium" />);
        expect(wrapper.find('table').prop('className').includes('table-size-medium')).toBe(true);

        wrapper.setProps({ size: 'm' });
        expect(wrapper.find('table').prop('className').includes('table-size-medium')).toBe(true);

        wrapper.setProps({ size: 'small' });
        expect(wrapper.find('table').prop('className').includes('table-size-small')).toBe(true);

        wrapper.setProps({ size: 's' });
        expect(wrapper.find('table').prop('className').includes('table-size-small')).toBe(true);

        wrapper.setProps({ size: 'large' });
        expect(wrapper.find('table').prop('className').includes('large')).toBe(false);

        wrapper.setProps({ size: 'l' });
        expect(wrapper.find('table').prop('className').includes('large')).toBe(false);
    });

    it('sets a resizable column when \'stickyColumnCount\' prop is greater than zero', () => {
        wrapper = mountWithTheme(
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>header cell content 1 </Table.HeaderCell>
                        <Table.HeaderCell>header cell content 2 </Table.HeaderCell>
                        <Table.HeaderCell>header cell content 3 </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell content 1 </Table.Cell>
                        <Table.Cell>cell content 2 </Table.Cell>
                        <Table.Cell>cell content 3 </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>,
        );

        expect(wrapper.find('Scrollbars').length).toBe(0);
        expect(wrapper.find('Resizable').length).toBe(0);
        expect(wrapper.find('Resizable').find('Icon').length).toBe(0);

        wrapper.setProps({ stickyColumnCount: 1 });
        expect(wrapper.find('Resizable').length).toBe(1);
        expect(wrapper.find('Resizable').find('Icon').prop('type')).toBe('splitter');
        expect(wrapper.find('Scrollbars').length).toBe(1);
    });
});
