import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import MuiChip from '@material-ui/core/Chip';
import React from 'react';
import {
    BEM_CHIP,
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import Icon from '../icon';

const propTypes = {
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Override or extend the styles applied to Chip.
     */
    classes: PropTypes.shape({
        deleteIcon: PropTypes.string,
        disabled: PropTypes.string,
        label: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    /**
     * Override the default delete icon element. Shown only if `onDelete` is set.
     */
    deleteIcon: PropTypes.element,
    /**
     * If `true`, the chip should be displayed in a disabled state.
     */
    disabled: PropTypes.bool,
}

const defaultProps = {
    className: '',
    deleteIcon: undefined,
};

const useStyles = makeStyles(({
    palette,
    shape,
    typography,
}) => {
    const chipHeight = 30;

    return {
        colorCyan: {},
        colorGreen: {},
        colorOrange: {},
        colorPink: {},
        colorPurple: {},
        colorRed: {},
        colorRedOrange: {},
        colorSky: {},
        colorTeal: {},
        deleteIcon: {
            alignItems: 'center',
            borderRadius: [[0, shape.borderRadius.main, shape.borderRadius.main, 0]],
            display: 'flex',
            height: chipHeight,
            justifyContent: 'center',
            margin: 0,
            transition: 'background-color 150ms linear',
            width: 20,
        },
        disabled: {
            backgroundColor: palette.action.disabled,
        },
        label: {
            color: palette.text.contrastText,
            fontSize: typography.pxToRem(14),
            fontWeight: typography.fontWeightMedium,
        },
        root: {
            borderRadius: shape.borderRadius.main,
            height: chipHeight,
            '&$colorCyan': {
                backgroundColor: palette.cyan[500],
                '& $deleteIcon': {
                    backgroundColor: palette.cyan[500],
                    boxShadow: `inset 1px 0 0 ${palette.cyan[600]}`,
                    '&:hover': {
                        backgroundColor: palette.cyan[600],
                    },
                },
            },
            '&$colorGreen': {
                backgroundColor: palette.green[500],
                '& $deleteIcon': {
                    backgroundColor: palette.green[500],
                    boxShadow: `inset 1px 0 0 ${palette.green[600]}`,
                    '&:hover': {
                        backgroundColor: palette.green[600],
                    },
                },
            },
            '&$colorOrange': {
                backgroundColor: palette.orange[500],
                '& $deleteIcon': {
                    backgroundColor: palette.orange[500],
                    boxShadow: `inset 1px 0 0 ${palette.orange[600]}`,
                    '&:hover': {
                        backgroundColor: palette.orange[600],
                    },
                },
            },
            '&$colorPink': {
                backgroundColor: palette.pink[500],
                '& $deleteIcon': {
                    backgroundColor: palette.pink[500],
                    boxShadow: `inset 1px 0 0 ${palette.pink[600]}`,
                    '&:hover': {
                        backgroundColor: palette.pink[600],
                    },
                },
            },
            '&$colorPurple': {
                backgroundColor: palette.purple[500],
                '& $deleteIcon': {
                    backgroundColor: palette.purple[500],
                    boxShadow: `inset 1px 0 0 ${palette.purple[600]}`,
                    '&:hover': {
                        backgroundColor: palette.purple[600],
                    },
                },
            },
            '&$colorRed': {
                backgroundColor: palette.red[500],
                '& $deleteIcon': {
                    backgroundColor: palette.red[500],
                    boxShadow: `inset 1px 0 0 ${palette.red[600]}`,
                    '&:hover': {
                        backgroundColor: palette.red[600],
                    },
                },
            },
            '&$colorRedOrange': {
                backgroundColor: palette.redOrange[500],
                '& $deleteIcon': {
                    backgroundColor: palette.redOrange[500],
                    boxShadow: `inset 1px 0 0 ${palette.redOrange[600]}`,
                    '&:hover': {
                        backgroundColor: palette.redOrange[600],
                    },
                },
            },
            '&$colorSky': {
                backgroundColor: palette.sky[500],
                '& $deleteIcon': {
                    backgroundColor: palette.sky[500],
                    boxShadow: `inset 1px 0 0 ${palette.sky[600]}`,
                    '&:hover': {
                        backgroundColor: palette.sky[600],
                    },
                },
            },
            '&$colorTeal': {
                backgroundColor: palette.teal[500],
                '& $deleteIcon': {
                    backgroundColor: palette.teal[500],
                    boxShadow: `inset 1px 0 0 ${palette.teal[600]}`,
                    '&:hover': {
                        backgroundColor: palette.teal[600],
                    },
                },
            },
            '&$disabled': {
                opacity: 1,
                '& $deleteIcon': {
                    backgroundColor: palette.grey[300],
                    boxShadow: `inset 1px 0 0 ${palette.grey[400]}`,
                },
            }
        },
    };
});

/**
 * Chips are compact elements that represent an input, attribute, or action.
 */
function Chip(props) {
    const {
        className,
        color,
        deleteIcon,
        disabled,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_CHIP,
        className,
        {
            [classes.colorCyan]: !disabled && color === 'cyan',
            [classes.colorGreen]: !disabled && color === 'green',
            [classes.colorOrange]: !disabled && color === 'orange',
            [classes.colorPink]: !disabled && color === 'pink',
            [classes.colorPurple]: !disabled && color === 'purple',
            [classes.colorRed]: !disabled && color === 'red',
            [classes.colorRedOrange]: !disabled && color === 'redOrange',
            [classes.colorSky]: !disabled && color === 'sky',
            [classes.colorTeal]: !disabled && color === 'teal',
        }
    );

    return (
        <MuiChip
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            className={rootClasses}
            classes={{
                disabled: classes.disabled,
                label: classes.label,
                root: classes.root,
            }}
            deleteIcon={deleteIcon ?? (
                <div
                    className={classes.deleteIcon}
                >
                    <Icon
                        compact
                        inverse
                        size="xxsmall"
                        type="times"
                    />
                </div>
            )}
        />
    );
}

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;
