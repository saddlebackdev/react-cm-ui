import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    RECORD_TYPE_COLOR,
    RECORD_TYPE_DEFAULT_PROP,
    RECORD_TYPE_PROP_TYPE,
} from '../personPanel/personPanelConstants';
import {
    BEM_PERSON_CORE_MILESTONES,
} from '../../global/constants';
import {
    ATTENDED_CLASS101_DATE_PROP_TYPE,
    ATTENDED_CLASS201_DATE_PROP_TYPE,
    ATTENDED_CLASS301_DATE_PROP_TYPE,
    ATTENDED_CLASS401_DATE_PROP_TYPE,
    DISABLE_POPOVER_DEFAULT_PROP,
    DISABLE_POPOVER_PROP_TYPE,
    HAS_SIGNED_MATURITY_COVENANT_PROP_TYPE,
    HAS_SIGNED_MEMBERSHIP_AGREEMENT_PROP_TYPE,
    HAS_SIGNED_MINISTRY_COVENANT_PROP_TYPE,
    HAS_SIGNED_MISSION_COVENANT_PROP_TYPE,
    HAS_TAKEN_CLASS101_PROP_TYPE,
    HAS_TAKEN_CLASS201_PROP_TYPE,
    HAS_TAKEN_CLASS301_PROP_TYPE,
    HAS_TAKEN_CLASS401_PROP_TYPE,
    ICON_COLOR_DEFAULT_PROP,
    ICON_COLOR_PROP_TYPE,
    ICON_SIZE_DEFAULT_PROP,
    ICON_SIZE_PROP_TYPE,
    INVERSE_DEFAULT_PROP,
    INVERSE_PROP_TYPE,
    REMOVE_CLASS_COLUMN_DEFAULT_PROP,
    REMOVE_CLASS_COLUMN_PROP_TYPE,
    SIGNED_MATURITY_COVENANT_DATE_PROP_TYPE,
    SIGNED_MEMBERSHIP_AGREEMENT_DATE_PROP_TYPE,
    SIGNED_MINISTRY_COVENANT_DATE_PROP_TYPE,
    SIGNED_MISSION_COVENANT_DATE_PROP_TYPE,
} from './constants';
import { getIconSize } from './utils';
import Grid from '../../layout/grid';
import makeStyles from '../../styles/makeStyles';
import MilestonePopoverContent from './milestonePopoverContent';
import Popover from '../popover';

const propTypes = {
    attendedClass101Date: ATTENDED_CLASS101_DATE_PROP_TYPE,
    attendedClass201Date: ATTENDED_CLASS201_DATE_PROP_TYPE,
    attendedClass301Date: ATTENDED_CLASS301_DATE_PROP_TYPE,
    attendedClass401Date: ATTENDED_CLASS401_DATE_PROP_TYPE,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    hasSignedMaturityCovenant: HAS_SIGNED_MATURITY_COVENANT_PROP_TYPE,
    hasSignedMembershipAgreement: HAS_SIGNED_MEMBERSHIP_AGREEMENT_PROP_TYPE,
    hasSignedMinistryCovenant: HAS_SIGNED_MINISTRY_COVENANT_PROP_TYPE,
    hasSignedMissionCovenant: HAS_SIGNED_MISSION_COVENANT_PROP_TYPE,
    hasTakenClass101: HAS_TAKEN_CLASS101_PROP_TYPE,
    hasTakenClass201: HAS_TAKEN_CLASS201_PROP_TYPE,
    hasTakenClass301: HAS_TAKEN_CLASS301_PROP_TYPE,
    hasTakenClass401: HAS_TAKEN_CLASS401_PROP_TYPE,
    iconColor: ICON_COLOR_PROP_TYPE,
    /* eslint-disable react/no-unused-prop-types */
    iconSize: ICON_SIZE_PROP_TYPE,
    inverse: INVERSE_PROP_TYPE,
    /* eslint-enable react/no-unused-prop-types */
    isAdult: PropTypes.bool.isRequired,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeClassColumn: REMOVE_CLASS_COLUMN_PROP_TYPE,
    signedMaturityCovenantDate: SIGNED_MATURITY_COVENANT_DATE_PROP_TYPE,
    signedMinistryCovenantDate: SIGNED_MINISTRY_COVENANT_DATE_PROP_TYPE,
    signedMissionCovenantDate: SIGNED_MISSION_COVENANT_DATE_PROP_TYPE,
};

const defaultProps = {
    attendedClass101Date: null,
    attendedClass201Date: null,
    attendedClass301Date: null,
    attendedClass401Date: null,
    classes: null,
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    hasSignedMaturityCovenant: null,
    hasSignedMembershipAgreement: null,
    hasSignedMinistryCovenant: null,
    hasSignedMissionCovenant: null,
    hasTakenClass101: null,
    hasTakenClass201: null,
    hasTakenClass301: null,
    hasTakenClass401: null,
    iconColor: ICON_COLOR_DEFAULT_PROP,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    inverse: INVERSE_DEFAULT_PROP,
    isFemale: null,
    isMale: null,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeClassColumn: REMOVE_CLASS_COLUMN_DEFAULT_PROP,
    signedMaturityCovenantDate: null,
    signedMinistryCovenantDate: null,
    signedMissionCovenantDate: null,
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape: {
            borderRadius,
        },
    } = theme;

    const hasTakenStyles = (boxShadowColor) => ({
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px ${boxShadowColor}`,
    });

    const hasSignedStyles = (backgroundColor) => ({
        backgroundColor,
        boxShadow: 'none',
    });

    /**
     * This is the base icon size for the
     * C.L.A.S.S. icon (which isn't an SVG), so that the
     * size can be scaled proportionally based on the given `size` from props.
     */
    const basesClassIconSize = 24;

    return {
        root: {},
        iconBase: {
            height: '10.42px',
            position: 'absolute',
            width: '11.07px',
            backgroundColor: ({ iconColor }) => `${iconColor || palette.static.main}`,
            opacity: ({ iconColor }) => iconColor && 0.25,
        },
        iconBaseClass101: {
            borderRadius: `0 ${borderRadius.main}px 0 0`,
            right: 0,
        },
        iconBaseColorClass101: {
            '&$hasSignedMembershipAgreement': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
            '&$hasTakenClass101': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
        },
        iconBaseClass201: {
            borderRadius: `${borderRadius.main}px 0 0`,
            top: 0,
        },
        iconBaseColorClass201: {
            '&$hasSignedMaturityCovenant': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
            '&$hasTakenClass201': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
        },
        iconBaseClass301: {
            borderRadius: `0 0 0 ${borderRadius.main}px`,
            bottom: 0,
        },
        iconBaseColorClass301: {
            '&$hasSignedMinistryCovenant': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
            '&$hasTakenClass301': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
        },
        iconBaseClass401: {
            borderRadius: `0 0 ${borderRadius.main}px`,
            bottom: 0,
            right: 0,
        },
        iconBaseColorClass401: {
            '&$hasSignedMissionCovenant': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasSignedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
            '&$hasTakenClass401': {
                '&$isAdult': {
                    '&$genderFemale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasTakenStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
                },
            },
        },
        iconClassContainer: {
            height: basesClassIconSize,
            position: 'relative',
            transform: (props) => {
                const iconSize = getIconSize({
                    isMobile: props.isMobile,
                    iconSize: props.iconSize,
                });

                return `scale(${(props.isMobile || iconSize === 16) ? 16 / basesClassIconSize : 1})`;
            },
            transformOrigin: `0 ${borderRadius.main}px`,
            width: basesClassIconSize,
        },
        iconClassInnerContainer: {
            height: basesClassIconSize,
            transform: 'rotate(45deg) scale(0.707106)',
            width: basesClassIconSize,
        },
        hasTakenClass101: ({ iconColor }) => ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMembershipAgreement: {
            opacity: '1 !important',
        },
        hasTakenClass201: ({ iconColor }) => ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMaturityCovenant: {
            opacity: '1 !important',
        },
        hasTakenClass301: ({ iconColor }) => ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMinistryCovenant: {
            opacity: '1 !important',
        },
        hasTakenClass401: ({ iconColor }) => ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMissionCovenant: {
            opacity: '1 !important',
        },
        genderFemale: {},
        genderMale: {},
        genderUndefined: {},
        isBaptised: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
    };
});

function GridColumnClassBaseballDiamond(props) {
    const {
        attendedClass101Date,
        attendedClass201Date,
        attendedClass301Date,
        attendedClass401Date,
        congregationDate,
        disablePopover,
        hasSignedMaturityCovenant,
        hasSignedMembershipAgreement,
        hasSignedMinistryCovenant,
        hasSignedMissionCovenant,
        hasTakenClass101,
        hasTakenClass201,
        hasTakenClass301,
        hasTakenClass401,
        iconColor,
        isAdult,
        isFemale,
        isMale,
        recordType,
        removeClassColumn,
        signedMaturityCovenantDate,
        signedMinistryCovenantDate,
        signedMissionCovenantDate,
    } = props;

    const classes = useStyles(props);

    if (removeClassColumn) {
        return null;
    }

    const iconBaseClass101Classes = ClassNames(
        classes.iconBaseClass101,
        classes.iconBase,
        {
            [classes.iconBaseColorClass101]: !iconColor,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMembershipAgreement]: hasSignedMembershipAgreement,
            [classes.hasTakenClass101]: hasTakenClass101 && !hasSignedMembershipAgreement,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass201Classes = ClassNames(
        classes.iconBaseClass201,
        classes.iconBase,
        {
            [classes.iconBaseColorClass201]: !iconColor,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMaturityCovenant]: hasSignedMaturityCovenant,
            [classes.hasTakenClass201]: hasTakenClass201 && !hasSignedMaturityCovenant,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass301Classes = ClassNames(
        classes.iconBaseClass301,
        classes.iconBase,
        {
            [classes.iconBaseColorClass301]: !iconColor,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMinistryCovenant]: hasSignedMinistryCovenant,
            [classes.hasTakenClass301]: hasTakenClass301 && !hasSignedMinistryCovenant,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass401Classes = ClassNames(
        classes.iconBaseClass401,
        classes.iconBase,
        {
            [classes.iconBaseColorClass401]: !iconColor,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMissionCovenant]: hasSignedMissionCovenant,
            [classes.hasTakenClass401]: hasTakenClass401 && !hasSignedMissionCovenant,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const milestonesClassesDates = [
        ...(attendedClass101Date ? [{ label: '101', date: attendedClass101Date }] : []),
        ...(congregationDate ? [{ label: 'Became Member', date: congregationDate }] : []),
        ...(attendedClass201Date ? [{ label: '201', date: attendedClass201Date }] : []),
        ...(signedMaturityCovenantDate ? [{ label: 'Maturity Covenant Card', date: signedMaturityCovenantDate }] : []),
        ...(attendedClass301Date ? [{ label: '301', date: attendedClass301Date }] : []),
        ...(signedMinistryCovenantDate ? [{ label: 'Ministry Covenant', date: signedMinistryCovenantDate }] : []),
        ...(attendedClass401Date ? [{ label: '401', date: attendedClass401Date }] : []),
        ...(signedMissionCovenantDate ? [{ label: 'Mission Commitment', date: signedMissionCovenantDate }] : []),
    ];

    let class101Title;
    let class201Title;
    let class301Title;
    let class401Title;

    if (!hasTakenClass101) {
        class101Title = 'Has not taken CLASS 101';
    }

    if (!hasSignedMembershipAgreement) {
        if (class101Title) {
            class101Title += ' and has not Signed Membership Covenant';
        } else {
            class101Title = 'Has not Signed Membership Covenant';
        }
    }

    if (!hasTakenClass201) {
        class201Title = 'Has not taken CLASS 201';
    }

    if (!hasSignedMaturityCovenant) {
        if (class201Title) {
            class201Title += ' and has not Signed Maturity Covenant';
        } else {
            class201Title = 'Has not Signed Maturity Covenant';
        }
    }

    if (!hasTakenClass301) {
        class301Title = 'Has not taken CLASS 301';
    }

    if (!hasSignedMinistryCovenant) {
        if (class301Title) {
            class301Title += ' and has not Signed Ministry Covenant';
        } else {
            class301Title = 'Has not Signed Ministry Covenant';
        }
    }

    if (!hasTakenClass401) {
        class401Title = 'Has not taken CLASS 401';
    }

    if (!hasSignedMissionCovenant) {
        if (class401Title) {
            class401Title += ' and has not Signed Mission Covenant';
        } else {
            class401Title = 'Has not Signed Mission Covenant';
        }
    }

    const baseClassIcon = (
        <div
            className={classes.iconClassContainer}
            role="presentation"
            style={{
                outline: 'none',
                cursor: 'pointer',
            }}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
        >
            <div
                className={classes.iconClassInnerContainer}
            >
                <div
                    className={ClassNames(
                        `${BEM_PERSON_CORE_MILESTONES}--icon_base_class_101`,
                        iconBaseClass101Classes,
                    )}
                    title={class101Title}
                />
                <div
                    className={ClassNames(
                        `${BEM_PERSON_CORE_MILESTONES}--icon_base_class_201`,
                        iconBaseClass201Classes,
                    )}
                    title={class201Title}
                />
                <div
                    className={ClassNames(
                        `${BEM_PERSON_CORE_MILESTONES}--icon_base_class_301`,
                        iconBaseClass301Classes,
                    )}
                    title={class301Title}
                />
                <div
                    className={ClassNames(
                        `${BEM_PERSON_CORE_MILESTONES}--icon_base_class_401`,
                        iconBaseClass401Classes,
                    )}
                    title={class401Title}
                />
            </div>
        </div>
    );

    const popoverNode = !disablePopover && isAdult && milestonesClassesDates.length > 0 ? (
        <Popover
            content={(
                <MilestonePopoverContent
                    title="C.L.A.S.S."
                    milestonesDates={milestonesClassesDates}
                />
            )}
            mouseEvent="onMouseEnter"
        >
            {baseClassIcon}
        </Popover>
    ) : null;

    return (
        <Grid.Column
            className={ClassNames(
                `${BEM_PERSON_CORE_MILESTONES}--class_column`,
                classes.root,
            )}
        >
            {popoverNode || baseClassIcon}
        </Grid.Column>
    );
}

GridColumnClassBaseballDiamond.propTypes = propTypes;
GridColumnClassBaseballDiamond.defaultProps = defaultProps;

export default GridColumnClassBaseballDiamond;
