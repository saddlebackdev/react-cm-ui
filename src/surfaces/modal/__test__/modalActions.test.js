/**
 * To run this test:
 * npx jest ./src/surfaces/modal/__test__/modalActions.test.js
 */

import React from 'react';
import {
    BEM_NAME,
} from './constants';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ModalActions from '../modalActions';
import Button from '../../../inputs/button';

describe('<ModalActions />', () => {
    const props = {
        className: BEM_NAME,
        id: BEM_NAME,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        const className = 'foo';
        const text = 'CTA';

        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
            >
                <Button
                    className={className}
                    color="primary"
                    designVersion={2}
                >
                    {text}
                </Button>
            </ModalActions>,
        );

        expect(wrapper.find(`.${className}`).exists()).toEqual(true);
        expect(wrapper.find(`.${className}`).find('span').first().text()).toEqual(text);
    });

    it('Should render with the root and margin \'classes\' override', () => {
        const marginOverride = 'makeStyles-margin-123';
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
                classes={{
                    margin: marginOverride,
                    root: rootOverride,
                }}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass(marginOverride)).toEqual(true);
        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('modal--actions')).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(/(makeStyles)-(margin)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should have expected \'alignItems\' styling', () => {
        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
            />,
        );

        const alignItemsBaselineClassName = /(makeStyles)-(alignItems)-(baseline)-(\d+)/;
        const alignItemsCenterClassName = /(makeStyles)-(alignItems)-(center)-(\d+)/;
        const alignItemsFlexEndClassName = /(makeStyles)-(alignItems)-(flexEnd)-(\d+)/;
        const alignItemsFlexStartClassName = /(makeStyles)-(alignItems)-(flexStart)-(\d+)/;

        expect(wrapper.find('div').first().hasClass(alignItemsFlexStartClassName)).toEqual(true);

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
    });

    it('Should have expected \'direction\' styling', () => {
        const wrapper = mountWithTheme(
            <ModalActions
                {...props}
            />,
        );

        const directionColumnReverseClassName = /(makeStyles)-(direction)-(columnReverse)-(\d+)/;
        const directionColumnClassName = /(makeStyles)-(direction)-(column)-(\d+)/;
        const directionRowReverseClassName = /(makeStyles)-(direction)-(rowReverse)-(\d+)/;
        const directionRowClassName = /(makeStyles)-(direction)-(row)-(\d+)/;

        expect(wrapper.find('div').first().hasClass(directionRowClassName)).toEqual(true);

        wrapper.setProps({
            direction: 'column-reverse',
        });

        expect(wrapper.find('div').first().hasClass(directionColumnReverseClassName)).toEqual(true);

        wrapper.setProps({
            direction: 'column',
        });

        expect(wrapper.find('div').first().hasClass(directionColumnClassName)).toEqual(true);

        wrapper.setProps({
            direction: 'row-reverse',
        });

        expect(wrapper.find('div').first().hasClass(directionRowReverseClassName)).toEqual(true);
    });
});
