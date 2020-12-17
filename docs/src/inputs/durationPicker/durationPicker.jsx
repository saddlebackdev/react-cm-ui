import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleDurationPickerDaysHoursMinutesSeconds from './examples/exampleDurationPickerDaysHoursMinutesSeconds';
import ExampleDurationPickerDisabled from './examples/exampleDurationPickerDisabled';
import ExampleDurationPickerErrorHandling from './examples/exampleDurationPickerErrorHandling';
import ExampleDurationPickerLabel from './examples/exampleDurationPickerLabel';
import ExampleDurationPickerRequired from './examples/exampleDurationPickerRequired';
import ExampleDurationPickerSimple from './examples/exampleDurationPickerSimple';
import ExampleDurationPickerYearsMonthsDays from './examples/exampleDurationPickerYearsMonthsDays';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/durationPicker/durationPicker';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsDurationPicker(props) {
    const {
        location: {
            pathname,
        },
    } = props;

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
                        anchorLink="example"
                        variant="h2"
                    >
                        Simple Duration Picker
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        By default, the DurationPicker allows selection of
                        days and hours.  Hours allows values from 0 to 23 and
                        days allows values from 0 to 29 (30 days is one month).
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerSimple').default}
                >
                    <ExampleDurationPickerSimple />
                </Example>

                <MarkdownContainer>
                    <Typography
                        variant="body1"
                    >
                        You can use the
                        <code>showXXX</code>
                        props to include or exclude various units of time.
                        <br />
                        This one has days and hours (by default) and opts in to
                        include minutes and seconds as well.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerDaysHoursMinutesSeconds').default}
                >
                    <ExampleDurationPickerDaysHoursMinutesSeconds />
                </Example>

                <MarkdownContainer>
                    <Typography
                        variant="body1"
                    >
                        This one shows years, months and days, opting out of hours.
                        <br />
                        You can use the
                        <code>maxYears</code>
                        prop to override the maximum number of years allowed.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerYearsMonthsDays').default}
                >
                    <ExampleDurationPickerYearsMonthsDays />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Duration Picker with a Label
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can give the DurationPicker an input label using the
                        <code>label</code>
                        prop.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerLabel').default}
                >
                    <ExampleDurationPickerLabel />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Required Duration Picker
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can use the
                        <code>required</code>
                        prop to mark the DurationPicker as a required input.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerRequired').default}
                >
                    <ExampleDurationPickerRequired />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Required Duration Picker with Error Handling
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can use the
                        <code>error</code>
                        prop to pass an error message.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerErrorHandling').default}
                >
                    <ExampleDurationPickerErrorHandling />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Disabled Duration Picker
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        You can use the
                        <code>disable</code>
                        prop to disable the DurationPicker input control.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDurationPickerDisabled').default}
                >
                    <ExampleDurationPickerDisabled />
                </Example>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsDurationPicker.propTypes = propTypes;

export default withRouter(DocsDurationPicker);
