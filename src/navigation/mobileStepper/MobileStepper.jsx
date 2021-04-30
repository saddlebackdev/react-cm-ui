import { BEM_NAVIGATION_MOBILE_STEPPER } from '../../global/constants';
import { Button } from 'react-cm-ui';
import { isEmpty } from 'lodash';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    activeStep: PropTypes.number.isRequired,
    backStepAction: PropTypes.func.isRequired,
    backStepLabel: PropTypes.string.isRequired,
    callToAction: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
    }),
    id: PropTypes.string,
    lastStepAction: PropTypes.func.isRequired,
    lastStepLabel: PropTypes.string.isRequired,
    nextStepAction: PropTypes.func.isRequired,
    nextStepLabel: PropTypes.string.isRequired,
    steps: PropTypes.number.isRequired,
};

const defaultProps = {
    callToAction: null,
    id: 'navigation_mobile_stepper',
};

const mobileStepper = ({
    activeStep,
    backStepAction,
    backStepLabel,
    callToAction,
    id,
    lastStepAction,
    lastStepLabel,
    nextStepAction,
    nextStepLabel,
    steps,
}) => {
    const useStyles = makeStyles(({
        palette,
    }) => ({
        mobileStepper: {
            display: 'grid',
            gap: 15,
            gridTemplateColumns: activeStep === 0 ? 'auto' : 'repeat(3, auto)',
            gridTemplateRows: 'repeat(2, 1fr)',
            alignItems: 'center',
            justifyContent: activeStep === 0 ? 'center' : 'space-between',
            gridTemplateAreas:
                activeStep === 0 ? `
                    "nextButton"
                    "stepperIndicator"
            ` :
                    `
                "backButton callToAction nextButton"
                "stepperIndicator stepperIndicator stepperIndicator"
            `,
        },
        stepperIndicator: {
            alignItems: 'center',
            display: 'flex',
            gridArea: 'stepperIndicator',
            justifyContent: 'center',
        },
        step: {
            background: palette.grey[300],
            borderRadius: 99,
            display: 'inline-block',
            height: 8,
            marginRight: 5,
            width: 8,
        },
        stepActive: {
            animation: '$fadeIn 250ms ease-in-out',
            background: palette.active.primary,
        },
        backButton: {
            background: palette.grey[400],
        },
        nextButton: {
            gridArea: 'nextButton',
        },
        '@keyframes fadeIn': {
            '0%': {
                opacity: 0,
                transform: 'scale(0)',
            },
            '50%': {
                opacity: 1,
                transform: 'scale(1.4)',
            },
            '100%': {
                opacity: 1,
                transform: 'scale(1)',
            },
        },
    }));

    const classes = useStyles();

    const backButton =
        activeStep > 0 && steps - 1 ? (
            <Button
                className={classes.backButton}
                id={`${BEM_NAVIGATION_MOBILE_STEPPER}--button_back-${id}`}
                onClick={backStepAction}
                width={90}
            >
                {backStepLabel}
            </Button>
        ) : null;

    const lastButton =
        activeStep === steps - 1 ? (
            <Button
                className={classes.nextButton}
                color="success"
                id={`${BEM_NAVIGATION_MOBILE_STEPPER}--button_last-${id}`}
                onClick={lastStepAction}
                width={90}
            >
                {lastStepLabel}
            </Button>
        ) : null;

    const nextButton =
        activeStep < steps - 1 ? (
            <Button
                className={classes.nextButton}
                color="primary"
                id={`${BEM_NAVIGATION_MOBILE_STEPPER}--button_next-${id}`}
                onClick={nextStepAction}
                width={activeStep === 0 ? 200 : 90}
            >
                {nextStepLabel}
            </Button>
        ) : null;

    const callToActionButton =
        !isEmpty(callToAction) && activeStep > 0 ? (
            <Button
                className={classes.callToAction}
                color="outline"
                id={`${id}--button_call_to_action`}
                onClick={() => window.open(callToAction.url)}
            >
                {callToAction.text}
            </Button>
        ) : null;

    const stepperIndicator = () => {
        const stepper = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < steps; i++) {
            stepper.push(
                <span
                    className={`${classes.step} ${activeStep === i && classes.stepActive}`}
                    key={`step${i}`}
                />,
            );
        }
        return stepper;
    };

    return (
        steps > 0 ? (
            <div
                className={classes.mobileStepper}
                id={BEM_NAVIGATION_MOBILE_STEPPER}
            >
                {backButton}
                {callToActionButton}
                {nextButton}
                {lastButton}
                <div className={classes.stepperIndicator}>
                    {stepperIndicator()}
                </div>
            </div>
        ) : null
    );
};

mobileStepper.propTypes = propTypes;
mobileStepper.defaultProps = defaultProps;

export default mobileStepper;
