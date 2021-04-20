import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MobileStepper } from '@material-ui/core';

const propTypes = {
    id: PropTypes.string,
    steps: PropTypes.number.isRequired,
    style: PropTypes.shape({}),
    buttons: PropTypes.shape({
        back: PropTypes.shape({
            label: PropTypes.string,
        }),
        next: PropTypes.shape({
            label: PropTypes.string,
        }),
        last: PropTypes.shape({
            label: PropTypes.string,
            onFinish: PropTypes.func,
        }),
    }),
};

const defaultProps = {
    id: null,
    style: null,
    buttons: {
        next: {
            label: 'Next',
        },
        back: {
            label: 'Back',
        },
        last: {
            label: 'Got it!',
            onFinish: () => console.log('Got it!'),
        },
    },
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
    },
    mobileStepper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-between',
    },
});

const Stepper = (props) => {
    const {
        id, steps, style, buttons,
    } = props;

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const nextButton =
        activeStep < steps - 1 ? (
            <Button id={`${id}--button_next`} onClick={handleNext}>
                {buttons.next.label}
            </Button>
        ) : null;

    const backButton =
        activeStep > 0 ? (
            <Button id={`${id}--button_back`} onClick={handleBack}>
                {buttons.back.label}
            </Button>
        ) : null;

    const lastButton =
        activeStep === steps - 1 ? (
            <Button id={`${id}--button_last`} onClick={buttons.last.onFinish}>
                {buttons.last.label}
            </Button>
        ) : null;

    return (
        <div className={classes.root}>
            {activeStep}
            <div className={classes.mobileStepper}>
                {backButton}
                <MobileStepper
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
        </div>
    );
};

Stepper.propTypes = propTypes;
Stepper.defaultProps = defaultProps;

export default Stepper;
