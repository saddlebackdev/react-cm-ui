/**
 To run this test from the root folder, execute the following command:
 * npx jest ./src/inputs/prompt/__test__/prompt.test.js
 */
import React from 'react';
import Prompt from '../prompt';
import Button from '../../button';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const componentProps = {
    id: 'prompt--block_id',
    inline: true,
    onClick: jest.fn(),
    onYesClick: jest.fn(),
    onNoClick: jest.fn(),
};

let wrapper;

describe('<Prompt />', () => {
    const additionalClassName = 'prompt-additional-classname';
    const customMessage = 'Cool Prompt ?';
    const text = 'Save';

    beforeEach(() => {
        wrapper = mountWithTheme(
            <Prompt
                {...componentProps}
            >
                <Button color="success">{text}</Button>
            </Prompt>,
        );
    });

    it('Should render without problems', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        const buttonWrapper = wrapper.find('Button');
        expect(buttonWrapper.exists()).toBe(true);
        expect(buttonWrapper.find('span').text()).toEqual(text);
    });

    it('Should render with aditional className', () => {
        const props = {
            ...componentProps,
            className: additionalClassName,
        };
        wrapper = mountWithTheme(
            <Prompt
                {...props}
            >
                <Button color="success">{text}</Button>
            </Prompt>,
        );
        expect(wrapper.find('Prompt').prop('className')).toBe(additionalClassName);
    });

    it('Should have expected \'id\' prop', () => {
        expect(wrapper.prop('id')).toEqual(componentProps.id);
    });

    it('Should render with prompt custom message', () => {
        const props = {
            ...componentProps,
            message: customMessage,
        };
        wrapper = mountWithTheme(
            <Prompt
                {...props}
            >
                <Button color="success">{text}</Button>
            </Prompt>,
        );
        expect(wrapper.find('.prompt-message').text()).toBe(customMessage);
    });
});
