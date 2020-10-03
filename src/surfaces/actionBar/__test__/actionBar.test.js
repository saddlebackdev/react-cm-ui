/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/actionBar/__test__/actionBar.test.js
 */
import { camelCase } from 'lodash';
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ActionBar from '../actionBar';

describe('<ActionBar />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';
    const props = {
        className: bemName,
        id: bemName,
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <ActionBar />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should have expected \'children\'', () => {
        const text = 'hello world';

        const wrapper = mountWithTheme(
            <ActionBar>
                <div className="foo">
                    {text}
                </div>
            </ActionBar>,
        );

        expect(wrapper.find('.foo').exists()).toEqual(true);
        expect(wrapper.find('.foo').text()).toEqual(text);
    });

    it('Should render with the root classes override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <ActionBar
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const root = wrapper.find('header').first();

        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <ActionBar
                {...props}
            />,
        );

        const root = wrapper.find('header').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('action_bar')).toEqual(true);
        expect(root.hasClass(/(ActionBar)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <ActionBar
                {...props}
            />,
        );

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
            <ActionBar
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

    it('Should have expected \'moduleType\' class', () => {
        let root;

        const wrapper = mountWithTheme(
            <ActionBar
                {...props}
            />,
        );

        root = wrapper.find('header').first();

        expect(root.hasClass(/(ActionBar)-(page)-(\d+)/)).toEqual(true);

        wrapper.setProps({ moduleType: 'drawer' });

        root = wrapper.find('header').first();

        expect(root.hasClass(/(ActionBar)-(drawer)-(\d+)/)).toEqual(true);
    });

    it('Should call onMobileSearchIconToggle and toggle `sm` search input', () => {
        const wrapper = mountWithTheme(
            <ActionBar
                {...props}
                columns={[
                    {
                        divide: true,
                        iconSearch: {
                            id: 'bem_block--search_input',
                            onChange: jest.fn(),
                            onClearClick: jest.fn(),
                            onKeyDown: jest.fn(),
                            value: '',
                        },
                    },
                ]}
            />,
        );

        const actionBarNode = wrapper.find('ActionBar');
        const actionBarInputNode = actionBarNode.find('input').instance();

        const toggleContainerSearchVisibleClassMock = jest.spyOn(
            actionBarNode.instance(),
            'toggleContainerSearchVisibleClass',
        );

        const toggleSmSearchVisibleClassNameMock = jest.fn();

        jest.spyOn(actionBarInputNode, 'focus');

        actionBarNode.instance().onMobileSearchIconToggle();

        expect(actionBarNode.instance().state.isMobileSearchVisible).toEqual(true);
        expect(toggleContainerSearchVisibleClassMock).toHaveBeenCalledTimes(1);
        expect(actionBarInputNode.focus).toHaveBeenCalledTimes(1);
        expect(toggleSmSearchVisibleClassNameMock).toHaveBeenCalledTimes(0);

        wrapper.setProps({
            toggleSmSearchVisibleClassName: toggleSmSearchVisibleClassNameMock,
        });

        actionBarNode.instance().onMobileSearchIconToggle();

        expect(toggleSmSearchVisibleClassNameMock).toHaveBeenCalledTimes(1);
    });

    it('Should call toggleContainerSearchVisibleClass after componentWillUnmount is called', () => {
        const wrapper = mountWithTheme(
            <ActionBar
                {...props}
                columns={[
                    {
                        divide: true,
                        iconSearch: {
                            id: 'bem_block--search_input',
                            onChange: jest.fn(),
                            onClearClick: jest.fn(),
                            onKeyDown: jest.fn(),
                            value: '',
                        },
                    },
                ]}
            />,
        );

        const actionBarNode = wrapper.find('ActionBar');

        const toggleContainerSearchVisibleClassMock = jest.spyOn(
            actionBarNode.instance(),
            'toggleContainerSearchVisibleClass',
        );

        actionBarNode.instance().componentWillUnmount();

        expect(toggleContainerSearchVisibleClassMock).toHaveBeenCalledTimes(1);
    });
});
