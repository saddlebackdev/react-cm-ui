import {
    Header,
    TimeFromNow,
    Typography
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as DocsTimeFromNowDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/TimeFromNow/TimeFromNow';
import moment from 'moment';
/* eslint-enable import/no-named-default, import/extensions */

const classNameSample = 'myClass';
const dateSample = moment(new Date());
const idSample = 'myId';
const localeSample = 'en';
const styleSample = '';
const relativeTimeSample = '';
const relativeTimeRoundingSample = '';
const relativeTimeThresholdSample = '';

const timeFromNowSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const classNameSample = 'myClass';
    const dateSample = moment(new Date());
    const idSample = 'myId';
    const localeSample = 'en';
    const styleSample = '';
    const relativeTimeSample = '';
    const relativeTimeRoundingSample = '';
    const relativeTimeThresholdSample = '';

    render() {
        return (
            <div>
                <TimeFromNow
                    className={classNameSample}
                    date={dateSample}
                    id={idSample}
                    locale={localeSample}
                />
            </div>
        );
    }
}`;

function DocsTimeFromNow() {
    const descriptionCopy = DocsTimeFromNowDoc.description;

    return (
        <Main page="time_from_now">
            <Main.Content>
                <MarkdownContainer>
                    <MarkdownContainer>
                        <Typography
                            className="description"
                            variant="body1"
                        >
                            {descriptionCopy}
                        </Typography>
                    </MarkdownContainer>

                    <ComponentApi
                        docs={[
                            DocsTimeFromNowDoc,
                        ]}
                    />

                    {/* Data Card */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Time From Now
                        <Header.Subheader>
                            Time From Now component.
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {timeFromNowSample}
                    </Highlighter>

                    <TimeFromNow
                        className={classNameSample}
                        date={dateSample}
                        id={idSample}
                        locale={localeSample}
                    />
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsTimeFromNow;
