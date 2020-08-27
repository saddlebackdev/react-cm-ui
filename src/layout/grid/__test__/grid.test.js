/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/layout/grid/__test__/grid.test.js
 */

import { camelCase } from 'lodash';
import React from 'react';
import Grid from '../grid';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

describe('<Grid />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';
    const props = {
        className: bemName,
        id: bemName,
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(<Grid {...props} />);

        expect(wrapper).toBeDefined();
    });

    it.each([
        null,
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'stretch',
    ])('Should expect \'alignContent\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <Grid
                {...props}
                alignContent={v}
            />,
        );

        expect(wrapper.prop('alignContent')).toEqual(v);

        const makeStylesString = `makeStyles-alignContent-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridClassName = wrapper.find('.grid').prop('className');

        if (!v || v === 'stretch') {
            expect(makeStylesRegEx.test(gridClassName)).toBeFalsy();
        } else {
            expect(makeStylesRegEx.test(gridClassName)).toBeTruthy();
        }
    });

    it.each([
        null,
        'baseline',
        'center',
        'flex-end',
        'flex-start',
        'stretch',
    ])('Should expect \'alignItems\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <Grid
                {...props}
                alignItems={v}
            />,
        );

        expect(wrapper.prop('alignItems')).toEqual(v);

        const makeStylesString = `makeStyles-alignItems-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridClassName = wrapper.find('.grid').prop('className');

        if (!v || v === 'stretch') {
            expect(makeStylesRegEx.test(gridClassName)).toBeFalsy();
        } else {
            expect(makeStylesRegEx.test(gridClassName)).toBeTruthy();
        }
    });

    it('Should have expected \'children\'', () => {
        const wrapper = mountWithTheme(
            <Grid {...props}>
                <Grid.Column />
            </Grid>,
        );

        expect(wrapper.find('.grid--column').exists()).toEqual(true);
    });

    it('Should render with the root classes override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <Grid
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
            <Grid
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('grid')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(<Grid {...props} />);

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it.each([
        null,
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'space-evenly',
    ])('Should expect \'justifyContent\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <Grid
                {...props}
                justifyContent={v}
            />,
        );

        expect(wrapper.prop('justifyContent')).toEqual(v);

        const makeStylesString = `makeStyles-justifyContent-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridClassName = wrapper.find('.grid').prop('className');

        if (!v || v === 'flex-start') {
            expect(makeStylesRegEx.test(gridClassName)).toBeFalsy();
        } else {
            expect(makeStylesRegEx.test(gridClassName)).toBeTruthy();
        }
    });

    it.each([
        null,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ])('Should expect \'spacing\' prop to be \'%s\' and have the proper className', (v) => {
        const wrapper = mountWithTheme(
            <Grid
                {...props}
                spacing={v}
            />,
        );

        expect(wrapper.prop('spacing')).toEqual(v);

        const makeStylesString = `makeStyles-spacing-${v}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridClassName = wrapper.find('.grid').prop('className');

        if (!v || v === 0) {
            expect(makeStylesRegEx.test(gridClassName)).toBeFalsy();
        } else {
            expect(makeStylesRegEx.test(gridClassName)).toBeTruthy();
        }
    });

    it.each([
        null,
        'nowrap',
        'wrap-reverse',
        'wrap',
    ])('Should expect \'wrap\' prop to be \'%s\'', (v) => {
        const wrapper = mountWithTheme(
            <Grid
                {...props}
                wrap={v}
            />,
        );

        expect(wrapper.prop('wrap')).toEqual(v);

        const makeStylesString = `makeStyles-wrap-${camelCase(v)}-\\d+`;
        const makeStylesRegEx = new RegExp(makeStylesString);
        const gridClassName = wrapper.find('.grid').prop('className');

        if (!v || v === 'wrap') {
            expect(makeStylesRegEx.test(gridClassName)).toBeFalsy();
        } else {
            expect(makeStylesRegEx.test(gridClassName)).toBeTruthy();
        }
    });
});
