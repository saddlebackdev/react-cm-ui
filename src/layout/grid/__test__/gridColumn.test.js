/**
 * To run this test:
 * npx jest ./src/layout/grid/__test__/gridColumn.test.js
 */

import { camelCase } from 'lodash';
import React from 'react';
import GridColumn from '../gridColumn';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

describe('<GridColumn />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';
    const props = {
        className: bemName,
        id: bemName,
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(<GridColumn {...props} />);

        expect(wrapper).toBeDefined();
    });

    it('Should have expected \'children\'', () => {
        const string = 'hello world';
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
            >
                <div>{string}</div>
            </GridColumn>,
        );

        expect(wrapper.find('div').first().text()).toEqual(string);
    });

    it('Should render with the root classes override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('grid--column')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it.each(GRID_SIZES)('Should expect \'lg\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
                lg={v}
            />,
        );

        expect(wrapper.prop('lg')).toEqual(v);

        const makeStylesString = `makeStyles-grid--column-lg-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridColumnClassName = wrapper.find('.grid--column').prop('className');

        expect(makeStylesRegEx.test(gridColumnClassName)).toBeTruthy();
    });

    it.each(GRID_SIZES)('Should expect \'md\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
                md={v}
            />,
        );

        expect(wrapper.prop('md')).toEqual(v);

        const makeStylesString = `makeStyles-grid--column-md-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridColumnClassName = wrapper.find('.grid--column').prop('className');

        expect(makeStylesRegEx.test(gridColumnClassName)).toBeTruthy();
    });

    it.each(GRID_SIZES)('Should expect \'sm\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
                sm={v}
            />,
        );

        expect(wrapper.prop('sm')).toEqual(v);

        const makeStylesString = `makeStyles-grid--column-sm-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridColumnClassName = wrapper.find('.grid--column').prop('className');

        expect(makeStylesRegEx.test(gridColumnClassName)).toBeTruthy();
    });

    it.each(GRID_SIZES)('Should expect \'xl\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <GridColumn
                {...props}
                xl={v}
            />,
        );

        expect(wrapper.prop('xl')).toEqual(v);

        const makeStylesString = `makeStyles-grid--column-xl-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridColumnClassName = wrapper.find('.grid--column').prop('className');

        expect(makeStylesRegEx.test(gridColumnClassName)).toBeTruthy();
    });
});
