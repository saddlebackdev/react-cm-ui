/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/popover/__test__/popover.test.js
 */
import React from 'react';
import mountWithTheme, {
    waitForComponentToPaint,
} from '../../../testUtils/enzymeHelpers';
import Popover from '../popover';
import Button from '../../../inputs/button';

describe('<PersonPanel />', () => {
    const bemBlockName = 'popover';
    const bemPopperName = `${bemBlockName}--popper`;
    const buttonClassName = 'snl--the_bears';
    const buttonOnClickMock = jest.fn();
    const buttonOnMouseEnter = jest.fn();
    const buttonOnMouseLeave = jest.fn();

    const buttonChild = (
        <Button
            className={buttonClassName}
        >
            Click Me!
        </Button>
    );

    const bemName = `${bemBlockName}--element_name-modifier`;

    const props = {
        className: bemName,
        content: 'Testing Content.',
        id: bemName,
        onClickAway: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <Popover
                {...props}
            >
                {buttonChild}
            </Popover>,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with class overrides', () => {
        const classes = {
            arrowOverride: 'makeStyles-arrow-123',
            contentOverride: 'makeStyles-content-123',
            popoverRootOverride: 'makeStyles-popoverRoot-123',
            popperOverride: 'makeStyles-popper-123',
        };

        const wrapper = mountWithTheme(
            <Popover
                {...props}
                classes={{
                    arrow: classes.arrowOverride,
                    content: classes.contentOverride,
                    popoverRoot: classes.popoverRootOverride,
                    popper: classes.popperOverride,
                }}
                open
            >
                {buttonChild}
            </Popover>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('popover')).toEqual(true);

        const popper = root.find(`.${bemPopperName}`).first();

        expect(popper.hasClass(/(makeStyles)-(popper)-(\d+)/)).toEqual(true);
        expect(popper.hasClass(classes.popperOverride)).toEqual(true);

        const popoverRoot = root.find('ClickAwayListener').find('div').first();

        expect(popoverRoot.hasClass(/(makeStyles)-(popoverRoot)-(\d+)/)).toEqual(true);
        expect(popoverRoot.hasClass(classes.popoverRootOverride)).toEqual(true);

        const arrow = popoverRoot.find('span').first();

        expect(arrow.hasClass(/(makeStyles)-(arrow)-(\d+)/)).toEqual(true);
        expect(arrow.hasClass(classes.arrowOverride)).toEqual(true);

        const content = popoverRoot.find('.popover--content');

        expect(content.hasClass(/(makeStyles)-(content)-(\d+)/)).toEqual(true);
        expect(content.hasClass(classes.contentOverride)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mountWithTheme(
            <Popover
                {...props}
            >
                {buttonChild}
            </Popover>,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should toggle Popover open and close onClick.', () => {
        const wrapper = mountWithTheme(
            <Popover
                {...props}
            >
                <Button
                    className={buttonClassName}
                    onClick={buttonOnClickMock}
                >
                    Click Me!
                </Button>
            </Popover>,
        );

        waitForComponentToPaint(wrapper);

        const button = wrapper.find(`.${buttonClassName}`).find('button').first();

        button.prop('onClick')({
            currentTarget: button.getDOMNode(),
        });

        wrapper.setProps({});

        expect(buttonOnClickMock).toHaveBeenCalledTimes(1);
        expect(wrapper.find(`.${bemPopperName}`).first().prop('open')).toBe(true);
        expect(wrapper.find(`div.${bemPopperName}`).first().exists()).toBe(true);

        wrapper.find('ClickAwayListener').prop('onClickAway')();
        wrapper.setProps({});

        expect(props.onClickAway).toHaveBeenCalledTimes(1);
        expect(wrapper.find(`.${bemPopperName}`).first().prop('open')).toBe(false);
    });

    it('Should not open Popover onClick of Button', () => {
        const wrapper = mountWithTheme(
            <Popover
                {...props}
            >
                <Button
                    className={buttonClassName}
                >
                    Click Me!
                </Button>
            </Popover>,
        );

        waitForComponentToPaint(wrapper);

        const button = wrapper.find(`.${buttonClassName}`).find('Button').first();

        button.prop('onClick')();

        wrapper.setProps({});

        expect(buttonOnClickMock).toHaveBeenCalledTimes(0);

        const popper = wrapper.find(`.${bemPopperName}`).first();

        expect(popper.prop('open')).toBe(false);
    });

    it('Should toggle Popper open and close onMouseEnter', () => {
        const wrapper = mountWithTheme(
            <Popover
                {...props}
                mouseEvent="onMouseEnter"
            >
                <Button
                    className={buttonClassName}
                    onMouseEnter={buttonOnMouseEnter}
                    onMouseLeave={buttonOnMouseLeave}
                >
                    Click Me!
                </Button>
            </Popover>,
        );

        waitForComponentToPaint(wrapper);

        let button

        button = wrapper.find(`.${buttonClassName}`).find('button').first();

        button.prop('onMouseEnter')({
            currentTarget: button.getDOMNode(),
        });

        wrapper.setProps({});

        let popper;

        popper = wrapper.find(`.${bemPopperName}`).first();

        expect(buttonOnMouseEnter).toHaveBeenCalledTimes(1);
        expect(popper.prop('open')).toBe(true);

        button = wrapper.find(`.${buttonClassName}`).find('button').first();

        button.prop('onMouseLeave')({});

        wrapper.setProps({});

        popper = wrapper.find(`.${bemPopperName}`).first();

        expect(buttonOnMouseLeave).toHaveBeenCalledTimes(1);
        expect(popper.prop('open')).toBe(false);
    });
});
