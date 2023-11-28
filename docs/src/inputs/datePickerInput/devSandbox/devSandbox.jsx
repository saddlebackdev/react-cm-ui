import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import { withRouter } from 'react-router';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import Example from '../../../global/example';
import ExampleDatePickerInputDisabled from '../examples/exampleDatePickerInputDisabled';
import ExampleDatePickerInputEvents from '../examples/exampleDatePickerInputEvents';
import ExampleDatePickerInputExcludeDates from '../examples/exampleDatePickerInputExcludeDates';
import ExampleDatePickerInputFilterDates from '../examples/exampleDatePickerInputFilterDates';
import ExampleDatePickerInputFluid from '../examples/exampleDatePickerInputFluid';
import ExampleDatePickerInputIncludeDates from '../examples/exampleDatePickerInputIncludeDates';
import ExampleDatePickerInputLabel from '../examples/exampleDatePickerInputLabel';
import ExampleDatePickerInputLocale from '../examples/exampleDatePickerInputLocale';
import ExampleDatePickerInputMaxDate from '../examples/exampleDatePickerInputMaxDate';
import ExampleDatePickerInputMinDate from '../examples/exampleDatePickerInputMinDate';
import ExampleDatePickerInputOnChange from '../examples/exampleDatePickerInputOnChange';
import ExampleDatePickerInputOnMonthChange from '../examples/exampleDatePickerInputOnMonthChange';
import ExampleDatePickerInputRange from '../examples/exampleDatePickerInputRange';
import ExampleDatePickerInputIsRedacted from '../examples/exampleDatePickerInputIsRedacted';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/inputs/datePickerInput/datePickerInput';
/* eslint-enable import/no-named-default, import/extensions */

function DatePickerInputDevSandbox() {
    const {
        description: componentDescription,
        displayName: componentName,
    } = componentDoc;

    return (
        <Main page={camelCase(componentName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {componentDescription}
                    </Typography>

                    <Heading
                        anchorLink="disabled"
                        variant="h2"
                    >
                        Disabled
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        <code>DatePickerInput</code>s can be disabled so that
                        they are non-interactive.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputDisabled').default}
                >
                    <ExampleDatePickerInputDisabled />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="events"
                        variant="h2"
                    >
                        Events
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can specify an array of Dates (Moment objects) that
                        should be highlighted on the
                        <code>DatePickerInput</code>&rsquo;s calendar control.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputEvents').default}
                >
                    <ExampleDatePickerInputEvents />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="exclude-dates"
                        variant="h2"
                    >
                        Exclude Dates
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can specify an array of Dates (Moment objects) that
                        should be excluded (unavailable for selection) on the
                        <code>DatePickerInput</code>&rsquo;s calendar control.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputExcludeDates').default}
                >
                    <ExampleDatePickerInputExcludeDates />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="filter-dates"
                        variant="h2"
                    >
                        Filter Dates
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can specify a predicate function to determine what
                        dates should be available for selection.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputFilterDates').default}
                >
                    <ExampleDatePickerInputFilterDates />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="fluid"
                        variant="h2"
                    >
                        Fluid
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The <code>DatePickerInput</code> supports the
                        <code>fluid</code> prop, like most input components.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputFluid').default}
                >
                    <ExampleDatePickerInputFluid />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="include-dates"
                        variant="h2"
                    >
                        Include Dates
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can specify an array of Dates (Moment objects) that
                        should are the <em>only</em> dates that are available
                        for selection on the <code>DatePickerInput</code>&rsquo;s
                        calendar control.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputIncludeDates').default}
                >
                    <ExampleDatePickerInputIncludeDates />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="label"
                        variant="h2"
                    >
                        Label
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can add a label to the <code>DatePickerInput</code>.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputLabel').default}
                >
                    <ExampleDatePickerInputLabel />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="locale"
                        variant="h2"
                    >
                        Locale
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can change the locale (e.g. <code>"en-US"</code> etc.)
                        of the <code>DatePickerInput</code> for
                        localization/internationalization purposes.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputLocale').default}
                >
                    <ExampleDatePickerInputLocale />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="max-date"
                        variant="h2"
                    >
                        Max Date
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can specify a maximum selectable date for the
                        <code>DatePickerInput</code>.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputMaxDate').default}
                >
                    <ExampleDatePickerInputMaxDate />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="min-date"
                        variant="h2"
                    >
                        Min Date
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can specify a minimum selectable date for the
                        <code>DatePickerInput</code>.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputMinDate').default}
                >
                    <ExampleDatePickerInputMinDate />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="on-change-event-handler"
                        variant="h2"
                    >
                        <code style={{ color: '#1c2530' }}>onChange</code> Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can use the <code>DatePickerInput</code> as a
                        controlled component by using the <code>date</code> prop
                        as the value and by handling the <code>onChange</code>
                        event.<br />
                        See also the <a href="#range">Range</a>&nbsp;section
                        below for handling <code>onChange</code> when using
                        <code>DatePickerInput</code>s to select a date range.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputOnChange').default}
                >
                    <ExampleDatePickerInputOnChange />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="on-month-change-event-handler"
                        variant="h2"
                    >
                        <code style={{ color: '#1c2530' }}>onMonthChange</code> Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A consuming component can handle the
                        <code>DatePickerInput</code>&rsquo;s
                        <code>onMonthChange</code> event.  This is useful for
                        scenarios such as needing to fetch new data for the
                        newly selected month.<br />
                        <br />
                        <strong>IMPORTANT NOTE:</strong> Months are numbered 0
                        through 11, (not 1 through 12), a Moment.Js convention,
                        but clearly unusual in common usage.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputOnMonthChange').default}
                >
                    <ExampleDatePickerInputOnMonthChange />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="range"
                        variant="h2"
                    >
                        Range
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can use two <code>DatePickerInput</code>s to allow
                        selection of a date range.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputRange').default}
                >
                    <ExampleDatePickerInputRange />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="isRedacted"
                        variant="h2"
                    >
                        isRedacted
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        To prevent sensitive data from being read, we need to be able to block the contents of the control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!../examples/exampleDatePickerInputIsRedacted').default}
                >
                    <ExampleDatePickerInputIsRedacted />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default DatePickerInputDevSandbox;
