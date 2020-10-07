/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/modal/__test__/modal.test.js
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

    beforeAll(() => {
        window.matchMedia = createMatchMedia(window.innerWidth);

        wrapper = mountWithTheme(
            <Modal
                {...props}
            >
                <div className="foo">
                    {text}
                </div>
            </Modal>,
        );
    });

    it('Can render without problems', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        expect(wrapper.find('.foo').exists()).toEqual(true);
        expect(wrapper.find('.foo').text()).toEqual(text);
    });

    it('Should render with the root \'classes\' override', () => {
        const rootOverride = 'makeStyles-root-123';

        wrapper.setProps({
            classes: {
                root: rootOverride,
            },
        });

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('modal')).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should have expected \'autoHeight\' prop', () => {
        const autoHeight = false;

        wrapper.setProps({
            autoHeight,
        });

        expect(wrapper.prop('autoHeight')).toEqual(autoHeight);
        expect(wrapper.find('Scrollbars').prop('autoHeight')).toEqual(autoHeight);
    });

    it('Should have expected \'autoHeight\' prop', () => {
        const height = 300;

        wrapper.setProps({
            height,
        });

        console.log(wrapper.debug());

        expect(wrapper.prop('height')).toEqual(height);
        // expect(wrapper.find('Scrollbars').prop('autoHeight')).toEqual(height);
    });
});
