import {
    Button,
    MobileStepper,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React, {
    useState,
} from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});

function Example() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={(
                <Button
                    onClick={handleNext}
                    disabled={activeStep === 5}
                >
                    Next
                </Button>
            )}
            backButton={(
                <Button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    Back
                </Button>
            )}
        />
    );
}

export default Example;
