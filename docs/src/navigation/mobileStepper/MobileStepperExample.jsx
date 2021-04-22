import { MobileStepper } from 'react-cm-ui';
import React from 'react';

const MobileStepperExample = () => {
    const renderButtons = {
        buttons: {
            back: {
                label: 'Back',
                onClick: console.log('Go back 1 step!'),
            },
            last: {
                label: 'Got it!',
                onClick: console.log('This was the last step!'),
            },
            next: {
                label: 'Next',
                onClick: console.log('Move to the next step!'),
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
