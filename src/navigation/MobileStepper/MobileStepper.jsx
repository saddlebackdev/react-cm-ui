import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-cm-ui';
import { MobileStepper as Stepper } from '@material-ui/core';

const propTypes = {
    id: PropTypes.string,
    steps: PropTypes.number.isRequired,
    style: PropTypes.shape({}),
    buttons: PropTypes.shape({
        back: PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
        next: PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
        last: PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
        }),
    }),
};

const defaultProps = {
    id: 'navigation_mobile_stepper',
    style: null,
    buttons: {
        next: {
            label: 'Next',
            onClick: null,
        },
        back: {
            label: 'Back',
            onClick: null,
        },
        last: {
            label: 'Got it!',
            onClick: null,
        },
    },
};

const MobileStepper = ({
    buttons,
    id,
    steps,
    style,
}) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        if (buttons.back.onClick) {
            buttons.back.onClick();
        }
        setActiveStep(activeStep - 1);
    };

    const handleNext = () => {
        if (buttons.next.onClick) {
            buttons.next.onClick();
        }
        setActiveStep(activeStep + 1);
    };

    const handleLast = () => {
        if (buttons.last.onClick) {
            buttons.last.onClick();
        }
    };

    const backButton =
        activeStep > 0 ? (
            <Button
                color="light"
                id={`${id}--button_back`}
                onClick={handleBack}
            >
                {buttons.back.label}
            </Button>
        ) : null;

    const lastButton =
        activeStep === steps - 1 ? (
            <Button
                color="success"
                id={`${id}--button_last`}
                onClick={handleLast}
            >
                {buttons.last.label}
            </Button>
        ) : null;

    const nextButton =
        activeStep < steps - 1 ? (
            <Button
                color="primary"
                id={`${id}--button_next`}
                onClick={handleNext}
            >
                {buttons.next.label}
            </Button>
        ) : null;

    return (
        <div>
            {backButton}
            <Stepper
                activeStep={activeStep}
                id={id}
                steps={steps}
                style={style}
                variant="dots"
                position="static"
            />
            {nextButton}
            {lastButton}
        </div>
    );
};

MobileStepper.propTypes = propTypes;
MobileStepper.defaultProps = defaultProps;

export default MobileStepper;
