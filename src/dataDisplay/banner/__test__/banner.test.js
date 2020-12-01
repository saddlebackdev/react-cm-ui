/**
 To run this test from the root folder, execute the following command:
 * npx jest ./src/dataDisplay/banner/__test__/banner.test.js
 */
import React from 'react';
import Banner from '../banner';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const componentProps = {
    id: 'banner--block_id',
    level: 'success',
    isOpen: true,
    message: 'A custom short message',
    onClose: jest.fn(),
    title: 'Banner 1',
    type: 'notification',
};

let wrapper;

describe('<Banner />', () => {
    const additionalClassName = 'banner--additional-classname';

    beforeEach(() => {
        wrapper = mountWithTheme(
            <Banner
                {...componentProps}
            />,
        );
    });

    it('Should render without problems', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with proper classNames', () => {
        const rootNode = wrapper.find('div').first();
        expect(rootNode.hasClass('ui')).toEqual(true);
        expect(rootNode.hasClass('banner')).toEqual(true);
        expect(rootNode.hasClass(/(Banner)-(root)-(\d+)/)).toEqual(true);
    });

    it('Should render with aditional className', () => {
        const props = {
            ...componentProps,
            className: additionalClassName,
        };
        wrapper = mountWithTheme(
            <Banner
                {...props}
            />,
        );
        expect(wrapper.find('Banner').prop('className')).toBe(additionalClassName);
    });

    it('Should have expected \'id\' prop', () => {
        expect(wrapper.prop('id')).toEqual(componentProps.id);
    });

    it('Should render with props title', () => {
        const bannerMessageContainer = wrapper.find('.banner-message-container');
        expect(bannerMessageContainer.find('.header').text()).toBe(componentProps.title);
    });

    it('Should render with props custom message', () => {
        const bannerMessageContainer = wrapper.find('.banner-message-container');
        expect(bannerMessageContainer.find('span').text()).toBe(componentProps.message);
    });
});
