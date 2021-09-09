/**
 * To run this test:
 * npx jest ./src/surfaces/modal/__test__/modalContent.test.js
 */

import React from 'react';
import {
    BEM_NAME,
} from './constants';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ModalContent from '../modalContent';
import Button from '../../../inputs/button';

describe('<ModalContent />', () => {
    const props = {
        className: BEM_NAME,
        id: BEM_NAME,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <ModalContent
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        const className = 'foo';
        const text = 'CTA';

        const wrapper = mountWithTheme(
            <ModalContent
                {...props}
            >
                <Button
                    className={className}
                    color="primary"
                    designVersion={2}
                >
                    {text}
                </Button>
            </ModalContent>,
        );

        expect(wrapper.find(`.${className}`).exists()).toEqual(true);
        expect(wrapper.find(`.${className}`).find('span').first().text()).toEqual(text);
    });

    it('Should render with the root and margin \'classes\' override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <ModalContent
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
            <ModalContent
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('modal--content')).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <ModalContent
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should have expected \'alignItems\' styling', () => {
        const wrapper = mountWithTheme(
            <ModalContent
                {...props}
            />,
        );

        const alignItemsBaselineClassName = /(makeStyles)-(alignItems)-(baseline)-(\d+)/;
        const alignItemsCenterClassName = /(makeStyles)-(alignItems)-(center)-(\d+)/;
        const alignItemsFlexEndClassName = /(makeStyles)-(alignItems)-(flexEnd)-(\d+)/;
        const alignItemsFlexStartClassName = /(makeStyles)-(alignItems)-(flexStart)-(\d+)/;
        const alignItemsStretchClassName = /(makeStyles)-(alignItems)-(stretch)-(\d+)/;

        expect(wrapper.find('div').first().hasClass(alignItemsStretchClassName)).toEqual(true);

        wrapper.setProps({
            alignItems: 'baseline',
        });

        expect(wrapper.find('div').first().hasClass(alignItemsBaselineClassName)).toEqual(true);

        wrapper.setProps({
            alignItems: 'center',
        });

        expect(wrapper.find('div').first().hasClass(alignItemsCenterClassName)).toEqual(true);

        wrapper.setProps({
            alignItems: 'flex-end',
        });

        expect(wrapper.find('div').first().hasClass(alignItemsFlexEndClassName)).toEqual(true);

        wrapper.setProps({
            alignItems: 'flex-start',
        });

        expect(wrapper.find('div').first().hasClass(alignItemsFlexStartClassName)).toEqual(true);
    });
});
