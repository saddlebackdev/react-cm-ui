import ClassNames from 'classnames';
import MUIMobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_MOBILE_STEPPER,
    UI_CLASS_NAME,
} from '../../global/constants';
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
     * See [CSS API](https://material-ui.com/api/mobile-stepper/#css) for more details.
     */
    classes: PropTypes.shape({}),
    /**
     * Assign additional class names to Mobile Stepper.
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

const useStyles = makeStyles(({
    palette,
}) => ({
    dot: {
        margin: [[0, 2.5]],
    },
    dotActive: {
        backgroundColor: palette.active.primary,
    },
    root: {},
}));

/**
 * A Mobile Stepper informs the user about progress through numbered steps.
 */
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

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_MOBILE_STEPPER,
        className,
    );

    return (
        <MUIMobileStepper
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            activeStep={activeStep}
            backButton={backButton}
            classes={classes}
            className={rootClasses}
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
