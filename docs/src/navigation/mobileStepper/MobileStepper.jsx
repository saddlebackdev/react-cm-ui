import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as mobileStepperDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/mobileStepper/mobileStepper';
import ComponentApi from '../../global/componentApi';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import Example from '../../global/example';
import MobileStepperExample from './MobileStepperExample';

function DocsMobileStepper() {
    const descriptionCopy = mobileStepperDoc.description;

    return (
        <Main page="mobileStepper">
            <Main.Content>
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
                        mobileStepperDoc,
                    ]}
                />
                <Typography
                    className="description"
                    variant="h2"
                >
                    MobileStepper use case example
                </Typography>
                <Example rawCode={require('!!raw-loader!./MobileStepperExample').default}>
                    <MobileStepperExample />
                </Example>

            </Main.Content>
        </Main>
    );
}

export default DocsMobileStepper;
