/**
 * To run this test:
 * npx jest ./src/surfaces/filtersRail/__test__/filtersRail.test.js
 */

import React from 'react';
import {
    BEM_NAME,
    ROW_COLLAPSIBLE,
    ROW_HEADING,
    ROW_COMPONENTS,
} from './constants';
import mountWithTheme, { createMatchMedia } from '../../../testUtils/enzymeHelpers';
import FiltersRail from '../filtersRail';

describe('<FiltersRail />', () => {
    const props = {
        className: BEM_NAME,
        id: BEM_NAME,
        rows: [
            {
                collapsible: ROW_COLLAPSIBLE,
                heading: ROW_HEADING,
                components: ROW_COMPONENTS,
            },
        ],
        isOpen: true,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <FiltersRail />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should not render if breakpoint is below md.', () => {
        window.matchMedia = createMatchMedia(375);

        let wrapper;

        wrapper = mountWithTheme(
            <FiltersRail />,
        );

        expect(wrapper.find('FiltersRail').find('div').first().exists()).toBe(false);

        window.matchMedia = createMatchMedia(window.innerWidth);

        wrapper = mountWithTheme(
            <FiltersRail />,
        );

        expect(wrapper.find('FiltersRail').find('div').first().exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        const text = 'hello world';

        const wrapper = mountWithTheme(
            <FiltersRail>
                <div className="foo">
                    {text}
                </div>
            </FiltersRail>,
        );

        const fooNode = wrapper.find('.foo');

        expect(fooNode.exists()).toEqual(true);
        expect(fooNode.text()).toEqual(text);
    });

    it('Should render with the root classes override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <FiltersRail
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
            <FiltersRail
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('filters_rail')).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <FiltersRail
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    test.todo('Add should set height of filters rail');
});
