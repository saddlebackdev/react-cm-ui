/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/filtersRail/__test__/filtersRailRowComponent.test.js
 */

import React from 'react';
import {
    BEM_NAME,
    ROW_COMPONENTS,
} from './constants';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import FiltersRailRowComponent from '../filtersRailRowComponent';

const SORT_BY_OPTIONS = [
    {
        label: 'Received (Newest > Oldest)',
        value: 1,
    },
    {
        label: 'Received (Oldest > Newest)',
        value: 2,
    },
];

describe('<FiltersRailRowComponent />', () => {
    const props = {
        className: BEM_NAME,
        componentProps: ROW_COMPONENTS[0].props,
        id: BEM_NAME,
        type: ROW_COMPONENTS[0].type,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with the root \'classes\' override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass(BEM_NAME)).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
            />,
        );

        expect(wrapper.find('div').first().prop('id')).toEqual(BEM_NAME);

        wrapper.setProps({ id: null });

        expect(wrapper.find('div').first().prop('id')).toEqual(null);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
            />,
        );

        expect(wrapper.find('div').first().prop('id')).toEqual(BEM_NAME);

        wrapper.setProps({ id: null });

        expect(wrapper.find('div').first().prop('id')).toEqual(null);
    });

    it('Should render Checkbox component', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
            />,
        );

        expect(wrapper.find('Checkbox').exists()).toBe(true);
    });

    it('Should render Radio component', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
                componentProps={{
                    checked: false,
                    label: 'Label 1',
                    name: 'typeRadio',
                    onChange: jest.fn(),
                }}
                type="radio"
            />,
        );

        expect(wrapper.find('Radio').exists()).toBe(true);
    });

    it('Should render Radio Pill component', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
                componentProps={{
                    checked: false,
                    onChange: jest.fn(),
                    options: [
                        {
                            id: 'filters_rail--radio_item_active',
                            label: 'Active',
                        }, {
                            id: 'filters_rail--radio_item_inactive',
                            label: 'Inactive',
                        },
                    ],
                }}
                type="radioPill"
            />,
        );

        expect(wrapper.find('Radio').exists()).toBe(true);
        expect(wrapper.find('Radio').prop('pill')).toBe(true);
    });

    it('Should render Select component', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRowComponent
                {...props}
                componentProps={{
                    onChange: jest.fn(),
                    options: SORT_BY_OPTIONS,
                    placeholder: 'test',
                    value: SORT_BY_OPTIONS[0],
                }}
                type="select"
            />,
        );

        expect(wrapper.find('Select').exists()).toBe(true);
    });
});
