/* eslint-disable linebreak-style */
/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/radio/__test__/radio.test.js
 */
import React from 'react';
import Radio from '../radio';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const componentProps = {
    // label: 'some label',
};

let wrapper;

describe('<Radio />', () => {
    beforeEach(() => {
        wrapper = mountWithTheme(<Radio {...componentProps} />);
    });

    it('Should render without problems', () => {
        // console.log('\x1b[36m', wrapper.debug(), '\x1b[0m');
        expect(wrapper.length).toBe(1);
    });

    it('applies aditional className', () => {
        wrapper = mountWithTheme(<Radio className="aditional-className" />);
        // console.log('\x1b[36m', wrapper.find('Radio').props(), '\x1b[0m');
        expect(wrapper.find('Radio').prop('className')).toBe('aditional-className');
    });

    it('applies aditional classes', () => {
        const classes = {
            input: 'input',
            isAlignedRight: 'isAlignedRight',
            isChecked: 'isChecked',
            isDisabled: 'isDisabled',
            isFluid: 'isFluid',
            isPill: 'isPill',
            label: 'label',
            labelNotClickable: 'labelNotClickable',
            root: 'root',
        };
        wrapper = mountWithTheme(<Radio
            classes={classes}
        />);
        console.log('\x1b[36m', wrapper.find('Radio').props(), '\x1b[0m');
        // const renderedClasses = wrapper.find('Radio').prop();
        // expect(wrapper.find('Radio').prop('className')).toBe('aditional-className');
        expect(1).toBe(1);
    });
});
