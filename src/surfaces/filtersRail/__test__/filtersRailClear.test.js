/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/filtersRail/__test__/filtersRailClear.test.js
 */

import React from 'react';
import mountWithTheme, { createMatchMedia } from '../../../testUtils/enzymeHelpers';
import FiltersRailClear from '../filtersRailClear';

describe('<FiltersRailClear />', () => {
    const bemName = 'some_block--some_element_name';
    const onClearMock = jest.fn();

    const props = {
        disable: false,
        id: bemName,
        onClear: onClearMock,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <FiltersRailClear
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <FiltersRailClear
                {...props}
            />,
        );

        const root = wrapper.find('A');

        expect(root.find('span').first().hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <FiltersRailClear
                {...props}
            />,
        );

        expect(wrapper.find('span').first().prop('id')).toEqual(`${props.id}--clear_button`);
    });

    it('Should not render if \'onClear\' event is not defined', () => {
        const wrapper = mountWithTheme(
            <FiltersRailClear
                {...props}
                onClear={null}
            />,
        );

        const root = wrapper.find('A');

        expect(root.find('span').first().exists()).toBe(false);
    });

    it('Should call \'onClear\' event onClick', () => {
        const wrapper = mountWithTheme(
            <FiltersRailClear
                {...props}
            />,
        );

        wrapper.find('A').first().prop('onClick')();

        expect(props.onClear).toHaveBeenCalledTimes(1);
    });
});
