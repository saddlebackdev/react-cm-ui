/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/filtersRail/__test__/filtersRailRow.test.js
 */

import React from 'react';
import {
    BEM_NAME,
    ROW_COLLAPSE,
    ROW_COLLAPSIBLE,
    ROW_HEADING,
    ROW_COMPONENTS,
} from './constants';
import mountWithTheme, { waitForComponentToPaint } from '../../../testUtils/enzymeHelpers';
import FiltersRailRow from '../filtersRailRow';

describe('<FiltersRailRow />', () => {
    const props = {
        className: BEM_NAME,
        collapse: ROW_COLLAPSE,
        collapsible: ROW_COLLAPSIBLE,
        components: ROW_COMPONENTS,
        heading: ROW_HEADING,
        id: BEM_NAME,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRow
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with the root \'classes\' override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <FiltersRailRow
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
            <FiltersRailRow
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass(BEM_NAME)).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRow
                {...props}
            />,
        );

        expect(wrapper.find('div').first().prop('id')).toEqual(BEM_NAME);

        wrapper.setProps({ id: null });

        expect(wrapper.find('div').first().prop('id')).toEqual(null);
    });

    it('Should default to row as collapsed', () => {
        const wrapper = mountWithTheme(
            <FiltersRailRow
                {...props}
                collapse
                collapsible
            />,
        );

        expect(wrapper.find('div').first().find('ForwardRef(Collapse)').exists()).toBe(true);
        expect(wrapper.find('div').first().find('ForwardRef(Collapse)').prop('in')).toBe(false);
    });

    it('Should be able to collapse and expand row.', async () => {
        const wrapper = mountWithTheme(
            <FiltersRailRow
                {...props}
                collapsible
            />,
        );

        waitForComponentToPaint(wrapper);

        expect(wrapper.find('div').first().find('ForwardRef(Collapse)').exists()).toBe(true);
        expect(wrapper.find('div').first().find('ForwardRef(Collapse)').prop('in')).toBe(true);

        wrapper.find('button.filters_rail--row_component_collapse_icon').prop('onClick')();

        wrapper.update();

        expect(wrapper.find('div').first().find('ForwardRef(Collapse)').exists()).toBe(true);
        expect(wrapper.find('div').first().find('ForwardRef(Collapse)').prop('in')).toBe(false);
    });
});
