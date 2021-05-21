/**
 * To run this test:
 * npx jest ./src/surfaces/modal/__test__/modal.test.js
 */

/**
 * NOTE: This unit test is not done for the Modal, they were only introduced to test peices touched
 * from the gap (v1 - v2).
 */

import React from 'react';
import {
    BEM_NAME,
} from './constants';
import mountWithTheme, { createMatchMedia } from '../../../testUtils/enzymeHelpers';
import Modal from '../modal';

describe('<Modal />', () => {
    const props = {
        className: BEM_NAME,
        id: BEM_NAME,
        isOpen: true,
    };

    const text = 'hello world';

    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    it('Can render without problems', () => {
        window.matchMedia = createMatchMedia(window.innerWidth);

        wrapper = mountWithTheme(
            <Modal
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        wrapper = mountWithTheme(
            <Modal
                {...props}
            >
                <div className="foo">
                    {text}
                </div>
            </Modal>,
        );

        expect(wrapper.find('.foo').exists()).toEqual(true);
        expect(wrapper.find('.foo').text()).toEqual(text);
    });

    it('Should render with the root \'classes\' override', () => {
        const rootOverride = 'makeStyles-root-123';

        wrapper = mountWithTheme(
            <Modal
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        wrapper = mountWithTheme(
            <Modal
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('modal')).toEqual(true);
        expect(rootNode.hasClass(/(Modal)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        wrapper = mountWithTheme(
            <Modal
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should have expected \'autoHeight\' prop', () => {
        const autoHeight = false;

        wrapper = mountWithTheme(
            <Modal
                {...props}
                autoHeight={autoHeight}
            />,
        );

        expect(wrapper.prop('autoHeight')).toEqual(autoHeight);
        expect(wrapper.find('Scrollbars').prop('autoHeight')).toEqual(autoHeight);
    });

    it('Should have expected \'height\' prop', () => {
        const height = 300;

        wrapper = mountWithTheme(
            <Modal
                {...props}
                height={height}
            />,
        );

        expect(wrapper.prop('height')).toEqual(height);
    });

    it('Should render close button and call \'onClose\' event onClick', () => {
        const onCloseMock = jest.fn();

        wrapper = mountWithTheme(
            <Modal
                {...props}
                onClose={onCloseMock}
            />,
        );

        const closeButtonNode = wrapper.find('.modal--close_button').find('button').first();

        expect(closeButtonNode.exists()).toEqual(true);

        closeButtonNode.prop('onClick')();

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('Should not render Modal', () => {
        wrapper = mountWithTheme(
            <Modal
                {...props}
                isOpen={false}
            />,
        );

        expect(wrapper.prop('isOpen')).toEqual(false);
        expect(wrapper.find('Modal').find('.modal').exists()).toBe(false);
    });
});
