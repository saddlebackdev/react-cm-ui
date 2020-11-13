/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/radio/__test__/radio.test.js
 */
import React from 'react';
import Radio from '../radio';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const componentProps = {
    id: 'some-radio-unique-id',
};

let wrapper;

describe('<Radio />', () => {
    beforeEach(() => {
        wrapper = mountWithTheme(<Radio {...componentProps} />);
    });

    it('Should render without problems', () => {
        expect(wrapper.length).toBe(1);
    });

    it('applies aditional className', () => {
        wrapper = mountWithTheme(<Radio className="aditional-className" />);
        expect(wrapper.find('Radio').prop('className')).toBe('aditional-className');
    });

    it('applies aditional classes', () => {
        const classes = {
            input: 'additional-input-class',
            isAlignedRight: 'additional-isAlignedRight-class',
            isChecked: 'additional-isChecked-class',
            isDisabled: 'additional-isDisabled-class',
            isFluid: 'additional-isFluid-class',
            isPill: 'additional-isPill-class',
            label: 'additional-label-class',
            labelNotClickable: 'additional-labelNotClickable-class',
            root: 'additional-root-class',
        };
        wrapper = mountWithTheme(<Radio classes={classes} />);

        const renderedClasses = wrapper.find('Radio').prop('classes');
        expect(renderedClasses.input.includes('additional-input-class')).toBe(true);
        expect(renderedClasses.isAlignedRight.includes('additional-isAlignedRight-class')).toBe(true);
        expect(renderedClasses.isChecked.includes('additional-isChecked-class')).toBe(true);
        expect(renderedClasses.isDisabled.includes('additional-isDisabled-class')).toBe(true);
        expect(renderedClasses.isFluid.includes('additional-isFluid-class')).toBe(true);
        expect(renderedClasses.label.includes('additional-label-class')).toBe(true);
        expect(renderedClasses.labelNotClickable.includes('additional-labelNotClickable-class')).toBe(true);
        expect(renderedClasses.root.includes('additional-root-class')).toBe(true);
    });

    it('renders the id into the radio', () => {
        expect(wrapper.find('Radio').prop('id')).toBe('some-radio-unique-id');
    });

    it('renders the label when defined', () => {
        wrapper = mountWithTheme(<Radio label="Some Radio Cool Label" />);
        expect(wrapper.find('label').find('span').prop('children')).toBe('Some Radio Cool Label');
    });
});
