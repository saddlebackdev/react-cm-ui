/**
 * To run this test:
 * npx jest ./src/inputs/datePickerInput/__test__/datePickerInput.test.js
 */
import moment from 'moment-timezone';
import React from 'react';
import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '../../../testUtils';
import DatePickerInput from '../datePickerInput';

describe('<DatePickerInput />', () => {
    describe('render()', () => {
        it('OK (all default props)', () => {
            const props = {
                dataTestId: 'foo_block--bar_date_picker_input',
            };

            render(
                <DatePickerInput {...props} />,
            );

            expect(screen.queryByTestId(props.dataTestId)).toBeInTheDocument();
        });

        it('OK (has a date value)', () => {
            const props = {
                dataTestId: 'foo_block--bar_date_picker_input',
                date: moment.utc('2022-01-10T00:00:00'),
            };

            render(
                <DatePickerInput {...props} />,
            );

            expect(screen.queryByTestId(props.dataTestId)).toBeInTheDocument();
            expect(screen.queryByDisplayValue(props.date.format('MM/DD/YYYY'))).toBeInTheDocument();
        });
    });

    describe('Change event', () => {
        it('Works (single date value)', () => {
            const props = {
                dataTestId: 'foo_block--bar_date_picker_input',
                date: null,
                onChange: jest.fn(),
            };

            const { getByTestId } = render(
                <DatePickerInput {...props} />,
            );

            const datePickerInput = getByTestId(props.dataTestId);
            const newDateValue = '01/10/2022'; // MM/DD/YYYY

            fireEvent.change(
                datePickerInput,
                {
                    target: {
                        value: newDateValue,
                    },
                },
            );

            expect(screen.queryByDisplayValue(newDateValue)).toBeInTheDocument();

            expect(props.onChange).toHaveBeenCalledTimes(1);
            const onChangeArgObj = props.onChange.mock.calls[0][0];
            const onChangeSingleDateArg = onChangeArgObj.date;
            expect(moment.isMoment(onChangeSingleDateArg)).toBe(true);
            expect(onChangeSingleDateArg.format('MM/DD/YYYY')).toEqual(newDateValue);
        });

        it('Works (date range - from)', () => {
            const props = {
                dataTestId: 'foo_block--bar_date_picker_input',
                onChange: jest.fn(),
                rangeFrom: true,
            };

            const { getByTestId } = render(
                <DatePickerInput {...props} />,
            );

            const datePickerInput = getByTestId(props.dataTestId);
            const newDateValue = '01/01/2022'; // MM/DD/YYYY

            fireEvent.change(
                datePickerInput,
                {
                    target: {
                        value: newDateValue,
                    },
                },
            );

            expect(screen.queryByDisplayValue(newDateValue)).toBeInTheDocument();

            expect(props.onChange).toHaveBeenCalledTimes(1);
            const onChangeArgObj = props.onChange.mock.calls[0][0];
            const onChangeDateFromArg = onChangeArgObj.dateFrom;
            expect(moment.isMoment(onChangeDateFromArg)).toBe(true);
            expect(onChangeDateFromArg.format('MM/DD/YYYY')).toEqual(newDateValue);
        });

        it('Works (date range - to)', () => {
            const props = {
                dataTestId: 'foo_block--bar_date_picker_input',
                onChange: jest.fn(),
                dateFrom: moment.utc('2022-01-01T00:00:00'),
                rangeTo: true,
            };

            const { getByTestId } = render(
                <DatePickerInput {...props} />,
            );

            const datePickerInput = getByTestId(props.dataTestId);
            const newDateValue = '01/10/2022'; // MM/DD/YYYY

            fireEvent.change(
                datePickerInput,
                {
                    target: {
                        value: newDateValue,
                    },
                },
            );

            expect(screen.queryByDisplayValue(newDateValue)).toBeInTheDocument();

            expect(props.onChange).toHaveBeenCalledTimes(1);

            const onChangeArgObj = props.onChange.mock.calls[0][0];

            const onChangeDateFromArg = onChangeArgObj.dateFrom;
            expect(moment.isMoment(onChangeDateFromArg)).toBe(true);
            expect(onChangeDateFromArg.isSame(props.dateFrom)).toBe(true);

            const onChangeDateToArg = onChangeArgObj.dateTo;
            expect(moment.isMoment(onChangeDateToArg)).toBe(true);
            expect(onChangeDateToArg.format('MM/DD/YYYY')).toEqual(newDateValue);
        });
    });

    describe('Calendar Picker', () => {
        it('hides when manually entering a date', async () => {
            const {
                getByTestId,
                queryByTestId,
            } = render(
                <DatePickerInput dataTestId="date_picker_input" />,
            );

            expect(queryByTestId('date_picker_input--calendar_picker')).not.toBeInTheDocument();

            const icon = getByTestId('cmui-icon-calendar');

            fireEvent.click(icon);

            expect(queryByTestId('date_picker_input--calendar_picker')).toBeInTheDocument();

            await waitFor(() => {
                fireEvent.change(
                    queryByTestId('date_picker_input'),
                    {
                        target: {
                            value: '01/10/2022',
                        },
                    },
                );
            });

            expect(queryByTestId('date_picker_input--calendar_picker')).not.toBeInTheDocument();
        });
    });
});
