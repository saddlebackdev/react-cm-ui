import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import { default as mobileStepperDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/mobileStepper/mobileStepper';
import ComponentApi from '../../global/componentApi';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import Example from '../../global/example';
import MobileStepperExample from './MobileStepperExample';

const mobileStepperSample = `
    import { MobileStepper } from 'react-cm-ui';
    import React from 'react';

    const MobileStepperExample = () => {
        const renderButtons = {
            buttons: {
                back: {
                    label: 'Back',
                    onClick: console.log('Go Back 1 step!'),
                },
                last: {
                    label: 'Got it!',
                    onClick: console.log('This was the last step!'),
                },
                next: {
                    label: 'Next',
                    onClick: console.log('Move to next step!'),
                },
            },
            steps: 6,
            style: {},
        };

        return (
            <MobileStepper
                buttons={renderButtons}
                id="navigation_mobile_stepper--some_element_name-some_modifier"
                steps={4}
            />
        );
    };

    export default MobileStepperExample;
}`;

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

                <Example rawCode={require('!!raw-loader!./MobileStepperExample').default}>
                    <MobileStepperExample />
                </Example>

                <Highlighter customStyle={
                        {
                            marginBottom: '44px',
                            marginTop: '44px',
                        }
                    }
                >
                    {mobileStepperSample}
                </Highlighter>

            </Main.Content>
        </Main>
    );
}

export default DocsMobileStepper;
