import MUIMobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Set the active step (zero based index).
     * Defines which dot is highlighted when the variant is 'dots'.
     */
    activeStep: PropTypes.number,
    /**
     * A back button element. For instance, it can be a `Button` or an `IconButton`.
     */
    backButton: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.shape({}),
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * Props applied to the `LinearProgress` element.
     */
    linearProgressProps: PropTypes.shape({}),
    /**
     * A next button element. For instance, it can be a `Button` or an `IconButton`.
     */
    nextButton: PropTypes.node,
    /**
     * Set the positioning type.
     */
    position: PropTypes.oneOf(['bottom', 'static', 'top']),
    /**
     * The total steps.
     */
    steps: PropTypes.number.isRequired,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['dots', 'progress', 'text']),
};

const defaultProps = {
    activeStep: 0,
    backButton: undefined,
    classes: undefined,
    className: undefined,
    linearProgressProps: undefined,
    nextButton: undefined,
    position: 'bottom',
    variant: 'dots',
};

const useStyles = makeStyles(() => ({
    root: {},
}));

function MobileStepper(props) {
    const {
        activeStep,
        backButton,
        className,
        linearProgressProps,
        nextButton,
        position,
        steps,
        variant,
        ...otherProps
    } = props;

    const classes = useStyles(props);

    return (
        <MUIMobileStepper
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            activeStep={activeStep}
            backButton={backButton}
            classes={classes}
            className={className}
            LinearProgressProps={linearProgressProps}
            nextButton={nextButton}
            position={position}
            steps={steps}
            variant={variant}
        />
    );
}

MobileStepper.propTypes = propTypes;
MobileStepper.defaultProps = defaultProps;

export default MobileStepper;
