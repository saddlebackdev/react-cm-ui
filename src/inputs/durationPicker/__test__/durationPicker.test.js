/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/durationPicker/__test__/durationPicker.test.js
 */
import { mount, shallow } from 'enzyme';
import moment from 'moment-timezone';
import React from 'react';
import { BEM_BLOCK_NAME } from '../constants';
import DurationPicker from '../durationPicker';
import StyledDurationPicker from '../styledDurationPicker';
import MockedTheme from '../../../testUtils/mockedTheme';

describe('<DurationPicker />', () => {
    it('Can render without problems (all default props)', () => {
        const wrapper = mount(
            <MockedTheme>
                <StyledDurationPicker />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--days_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--hours_dropdown`).exists()).toBe(true);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--years_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--months_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--minutes_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--seconds_dropdown`).exists()).toBe(false);
    });

    it('Can render without problems (controlled component w/ initital value + id and label props)', () => {
        const rootElementId = 'some_block--duration_picker';

        const props = {
            id: rootElementId,
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: moment.duration({
                days: 4,
                hours: 3,
                minutes: 2,
                seconds: 1,
            }),
        };

        const wrapper = mount(
            <MockedTheme>
                <StyledDurationPicker {...props} />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        expect(wrapper.find(`#${rootElementId}--days_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${rootElementId}--hours_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${rootElementId}--minutes_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${rootElementId}--seconds_dropdown`).exists()).toBe(true);

        expect(wrapper.find(`#${rootElementId}--years_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${rootElementId}--months_dropdown`).exists()).toBe(false);
    });

    it('Can render without problems (years and months only)', () => {
        const props = {
            showDays: false,
            showHours: false,
            showMonths: true,
            showYears: true,
        };

        const wrapper = mount(
            <MockedTheme>
                <StyledDurationPicker {...props} />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--years_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--months_dropdown`).exists()).toBe(true);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--days_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--hours_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--minutes_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--seconds_dropdown`).exists()).toBe(false);
    });

    it('Can render with label, required flag and an error message', () => {
        const rootElementId = 'some_block--duration_picker';

        const props = {
            id: rootElementId,
            classes: {
                root: 'root_class',
                required: 'required_class',
                error: 'error_class',
                errorColumn: 'error_column_class',
            },
            error: 'Duration value is required!',
            label: 'Pick a duration!',
            onChange: jest.fn(),
            required: true,
            showMinutes: true,
            showSeconds: true,
            value: null,
        };

        const wrapper = mount(
            <MockedTheme>
                <StyledDurationPicker {...props} />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        const requiredMarker = wrapper.find(`.${props.classes.required}`);
        expect(requiredMarker.exists()).toBe(true);

        const errorColumn = wrapper.find(`.${props.classes.errorColumn}`);
        expect(errorColumn.exists()).toBe(true);
    });

    it('Renders error message when value is default (0 amount of time) duration', () => {
        const rootElementId = 'some_block--duration_picker';

        const props = {
            id: rootElementId,
            classes: {
                root: 'root_class',
                required: 'required_class',
                error: 'error_class',
                errorColumn: 'error_column_class',
            },
            error: 'Duration value is required!',
            label: 'Pick a duration!',
            onChange: jest.fn(),
            required: true,
            showMinutes: true,
            showSeconds: true,
            value: moment.duration(),
        };

        const wrapper = mount(
            <MockedTheme>
                <StyledDurationPicker {...props} />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        const requiredMarker = wrapper.find(`.${props.classes.required}`);
        expect(requiredMarker.exists()).toBe(true);

        const errorColumn = wrapper.find(`.${props.classes.errorColumn}`);
        expect(errorColumn.exists()).toBe(true);
    });

    it('Can handle value prop change in componentDidUpdate()', () => {
        const rootElementId = 'some_block--duration_picker';

        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const initialProps = {
            classes: {},
            id: rootElementId,
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...initialProps} />,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        const initialStateValue = wrapper.state('value');
        expect(moment.isDuration(initialStateValue)).toBe(true);
        expect(initialStateValue.valueOf()).toEqual(initialValue.valueOf());

        expect(wrapper.state('years')).toEqual(0);
        expect(wrapper.state('months')).toEqual(0);
        expect(wrapper.state('days')).toEqual(4);
        expect(wrapper.state('hours')).toEqual(3);
        expect(wrapper.state('minutes')).toEqual(2);
        expect(wrapper.state('seconds')).toEqual(1);

        const newValue = moment.duration({
            days: 8,
            hours: 6,
            minutes: 4,
            seconds: 2,
        });

        const newProps = {
            ...initialProps,
            value: newValue,
        };

        wrapper.setProps(newProps);

        const newStateValue = wrapper.state('value');
        expect(moment.isDuration(newStateValue)).toBe(true);
        expect(newStateValue.valueOf()).toEqual(newValue.valueOf());

        expect(wrapper.state('years')).toEqual(0);
        expect(wrapper.state('months')).toEqual(0);
        expect(wrapper.state('days')).toEqual(8);
        expect(wrapper.state('hours')).toEqual(6);
        expect(wrapper.state('minutes')).toEqual(4);
        expect(wrapper.state('seconds')).toEqual(2);
    });

    it('Can handle value prop being nulled out in componentDidUpdate()', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const initialProps = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...initialProps} />,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);

        const initialStateValue = wrapper.state('value');
        expect(moment.isDuration(initialStateValue)).toBe(true);
        expect(initialStateValue.valueOf()).toEqual(initialValue.valueOf());

        expect(wrapper.state('years')).toEqual(0);
        expect(wrapper.state('months')).toEqual(0);
        expect(wrapper.state('days')).toEqual(4);
        expect(wrapper.state('hours')).toEqual(3);
        expect(wrapper.state('minutes')).toEqual(2);
        expect(wrapper.state('seconds')).toEqual(1);

        const newProps = {
            ...initialProps,
            value: null,
        };

        wrapper.setProps(newProps);

        expect(wrapper.state('value')).toBeNull();
        expect(wrapper.state('years')).toEqual(0);
        expect(wrapper.state('months')).toEqual(0);
        expect(wrapper.state('days')).toEqual(0);
        expect(wrapper.state('hours')).toEqual(0);
        expect(wrapper.state('minutes')).toEqual(0);
        expect(wrapper.state('seconds')).toEqual(0);
    });

    it('Can handle showXXX props changing in componentDidUpdate()', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const initialProps = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...initialProps} />,
        );

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--days_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--hours_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--minutes_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--seconds_dropdown`).exists()).toBe(true);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--years_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--months_dropdown`).exists()).toBe(false);

        expect(wrapper.instance().daysOptions).toHaveLength(30);
        expect(wrapper.instance().hoursOptions).toHaveLength(24);
        expect(wrapper.instance().minutesOptions).toHaveLength(60);
        expect(wrapper.instance().secondsOptions).toHaveLength(60);
        expect(wrapper.instance().monthsOptions).toHaveLength(0);
        expect(wrapper.instance().yearsOptions).toHaveLength(0);

        const newProps = {
            ...initialProps,
            showMonths: true,
            showYears: true,
            showHours: false,
            showMinutes: false,
            showSeconds: false,
        };

        wrapper.setProps(newProps);

        // Expect that originally populated dropdown options are still populated
        expect(wrapper.instance().daysOptions).toHaveLength(30);
        expect(wrapper.instance().hoursOptions).toHaveLength(24);
        expect(wrapper.instance().minutesOptions).toHaveLength(60);
        expect(wrapper.instance().secondsOptions).toHaveLength(60);

        // Expect that now months and years options are populated
        expect(wrapper.instance().monthsOptions).toHaveLength(12);
        expect(wrapper.instance().yearsOptions).toHaveLength(100);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--days_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--months_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--years_dropdown`).exists()).toBe(true);

        expect(wrapper.find(`#${BEM_BLOCK_NAME}--hours_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--minutes_dropdown`).exists()).toBe(false);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--seconds_dropdown`).exists()).toBe(false);
    });

    it('Handles onDaysChange() (as controlled component)', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const props = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('days')).toEqual(4);

        const newDaysOption = { value: 2 };
        wrapper.instance().onDaysChange(newDaysOption);

        const expectedNewDuration = moment.duration({
            days: 2,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        // Expect `onChange()` has been called
        expect(props.onChange).toHaveBeenCalledTimes(1);
        const onChangeArg = props.onChange.mock.calls[0][0];
        expect(moment.isDuration(onChangeArg)).toBe(true);
        expect(onChangeArg.valueOf()).toEqual(expectedNewDuration.valueOf());

        // Expect that `days` state has been updated from 4 to 2
        expect(wrapper.state('days')).toEqual(2);
    });

    it('Handles onDaysChange() (as uncontrolled component)', () => {
        const props = {
            classes: {},
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('days')).toEqual(0);
        expect(wrapper.state('value')).toBeNull();

        const newDaysOption = { value: 2 };
        wrapper.instance().onDaysChange(newDaysOption);

        expect(wrapper.state('days')).toEqual(2);

        const expectedDurationValue = moment.duration({ days: 2 });
        const newStateValue = wrapper.state('value');
        expect(moment.isDuration(newStateValue)).toBe(true);
        expect(newStateValue.valueOf()).toEqual(expectedDurationValue.valueOf());
    });

    it('Handles onHoursChange()', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const props = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('hours')).toEqual(3);

        const newHoursOption = { value: 6 };
        wrapper.instance().onHoursChange(newHoursOption);

        const expectedNewDuration = moment.duration({
            days: 4,
            hours: 6,
            minutes: 2,
            seconds: 1,
        });

        // Expect `onChange()` has been called
        expect(props.onChange).toHaveBeenCalledTimes(1);
        const onChangeArg = props.onChange.mock.calls[0][0];
        expect(moment.isDuration(onChangeArg)).toBe(true);
        expect(onChangeArg.valueOf()).toEqual(expectedNewDuration.valueOf());

        // Expect that `hours` state has been updated from 3 to 6
        expect(wrapper.state('hours')).toEqual(6);
    });

    it('Handles onMinutesChange()', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const props = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('minutes')).toEqual(2);

        const newMinutesOption = { value: 42 };
        wrapper.instance().onMinutesChange(newMinutesOption);

        const expectedNewDuration = moment.duration({
            days: 4,
            hours: 3,
            minutes: 42,
            seconds: 1,
        });

        // Expect `onChange()` has been called
        expect(props.onChange).toHaveBeenCalledTimes(1);
        const onChangeArg = props.onChange.mock.calls[0][0];
        expect(moment.isDuration(onChangeArg)).toBe(true);
        expect(onChangeArg.valueOf()).toEqual(expectedNewDuration.valueOf());

        // Expect that `minutes` state has been updated from 2 to 42
        expect(wrapper.state('minutes')).toEqual(42);
    });

    it('Handles onMonthsChange()', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
        });

        const props = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMonths: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('months')).toEqual(0);

        const newMonthsOption = { value: 2 };
        wrapper.instance().onMonthsChange(newMonthsOption);

        const expectedNewDuration = moment.duration({
            months: 2,
            days: 4,
            hours: 3,
        });

        // Expect `onChange()` has been called
        expect(props.onChange).toHaveBeenCalledTimes(1);
        const onChangeArg = props.onChange.mock.calls[0][0];
        expect(moment.isDuration(onChangeArg)).toBe(true);
        expect(onChangeArg.valueOf()).toEqual(expectedNewDuration.valueOf());

        // Expect that `months` state has been updated from 0 to 2
        expect(wrapper.state('months')).toEqual(2);
    });

    it('Handles onSecondsChange()', () => {
        const initialValue = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 1,
        });

        const props = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showMinutes: true,
            showSeconds: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('seconds')).toEqual(1);

        const newSecondsOption = { value: 57 };
        wrapper.instance().onSecondsChange(newSecondsOption);

        const expectedNewDuration = moment.duration({
            days: 4,
            hours: 3,
            minutes: 2,
            seconds: 57,
        });

        // Expect `onChange()` has been called
        expect(props.onChange).toHaveBeenCalledTimes(1);
        const onChangeArg = props.onChange.mock.calls[0][0];
        expect(moment.isDuration(onChangeArg)).toBe(true);
        expect(onChangeArg.valueOf()).toEqual(expectedNewDuration.valueOf());

        // Expect that `minutes` state has been updated from 1 to 57
        expect(wrapper.state('seconds')).toEqual(57);
    });

    it('Handles onYearsChange()', () => {
        const initialValue = moment.duration({
            years: 3,
            months: 2,
            days: 1,
        });

        const props = {
            classes: {},
            label: 'Pick a duration!',
            onChange: jest.fn(),
            showHours: false,
            showMonths: true,
            showYears: true,
            value: initialValue,
        };

        const wrapper = shallow(
            <DurationPicker {...props} />,
        );

        expect(wrapper.state('years')).toEqual(3);

        const newYearsOption = { value: 1 };
        wrapper.instance().onYearsChange(newYearsOption);

        const expectedNewDuration = moment.duration({
            years: 1,
            months: 2,
            days: 1,
        });

        // Expect `onChange()` has been called
        expect(props.onChange).toHaveBeenCalledTimes(1);
        const onChangeArg = props.onChange.mock.calls[0][0];
        expect(moment.isDuration(onChangeArg)).toBe(true);
        expect(onChangeArg.valueOf()).toEqual(expectedNewDuration.valueOf());

        // Expect that `minutes` state has been updated from 3 to 1
        expect(wrapper.state('years')).toEqual(1);
    });
});
