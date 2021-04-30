import {
    MobileStepper
} from 'react-cm-ui';
import React, { useState } from 'react';

function MobileStepperExample() {
    const [activeStep, setActiveStep] = useState(0);

    const totalSteps = 4;

    const callToAction = {
        text: 'Learn More',
        url: '#',
    };

    const onBack = () => setActiveStep(activeStep - 1);

    const onNext = () => setActiveStep(activeStep + 1);

    const onClose = () => console.log('Last Step');

    return (
        <MobileStepper
            activeStep={activeStep}
            backStepAction={onBack}
            backStepLabel="Back"
            callToAction={callToAction}
            lastStepAction={onClose}
            lastStepLabel="Got it!"
            nextStepAction={onNext}
            nextStepLabel="Next"
            steps={totalSteps}
        />
    );
};

export default MobileStepperExample;
