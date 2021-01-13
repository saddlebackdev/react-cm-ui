import {
    includes,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import {
    GENDER_DEFAULT_TYPE,
    GENDER_PROP_TYPE,
    RECORD_TYPE_COLOR,
    RECORD_TYPE_DEFAULT_PROP,
    RECORD_TYPE_PROP_TYPE,
} from '../personPanel/personPanelConstants';
import {
    BEM_PERSON_CORE_MILESTONES,
    PERSON_CORE_MILESTONES_CLASSES,
} from '../../global/constants';
import dateUtils from '../../utils/dateUtils';
import Grid from '../../layout/grid';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';
import TimeFromNow from '../timeFromNow';
import Typography from '../typography';
import Popover from '../popover';
import MilestonePopoverContent from './milestonePopoverContent';

const propTypes = {
    acceptedChristDate: PropTypes.string,
    activeInMissionsDate: PropTypes.string,
    attendedClass101Date: PropTypes.string,
    attendedClass201Date: PropTypes.string,
    attendedClass301Date: PropTypes.string,
    attendedClass401Date: PropTypes.string,
    baptismDate: PropTypes.string,
    className: PropTypes.string,
    congregationDate: PropTypes.oneOfType([
        MomentPropTypes.momentString,
        PropTypes.oneOf([null]),
    ]),
    firstContactDate: PropTypes.oneOfType([
        MomentPropTypes.momentString,
        PropTypes.oneOf([null]),
    ]),
    firstMinistryJoinDate: PropTypes.string,
    firstSmallGroupJoinDate: PropTypes.string,
    gender: GENDER_PROP_TYPE,
    hasAcceptedChrist: PropTypes.bool,
    hasSignedMaturityCovenant: PropTypes.bool,
    hasSignedMembershipAgreement: PropTypes.bool,
    hasSignedMinistryCovenant: PropTypes.bool,
    hasSignedMissionCovenant: PropTypes.bool,
    hasTakenClass101: PropTypes.bool,
    hasTakenClass201: PropTypes.bool,
    hasTakenClass301: PropTypes.bool,
    hasTakenClass401: PropTypes.bool,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    isActiveInMissions: PropTypes.bool,
    isBaptised: PropTypes.bool,
    isInMinistry: PropTypes.bool,
    isInSmallGroup: PropTypes.bool,
    isMobile: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    parentConsumer: PropTypes.string,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeAcceptedChristColumn: PropTypes.bool,
    removeBaptismColumn: PropTypes.bool,
    removeClassColumn: PropTypes.bool,
    removeCongregationDateColumn: PropTypes.bool,
    removeFirstContactDateColumn: PropTypes.bool,
    removeInMinistryColumn: PropTypes.bool,
    removeInTripsColumn: PropTypes.bool,
    removeSmallGroupColumn: PropTypes.bool,
    signedMembershipAgreementDate: PropTypes.string,
    signedMaturityCovenantDate: PropTypes.string,
    signedMinistryCovenantDate: PropTypes.string,
    signedMissionCovenantDate: PropTypes.string,
};

const defaultProps = {
    acceptedChristDate: null,
    activeInMissionsDate: null,
    attendedClass101Date: null,
    attendedClass201Date: null,
    attendedClass301Date: null,
    attendedClass401Date: null,
    baptismDate: null,
    className: undefined,
    congregationDate: null,
    firstContactDate: null,
    firstMinistryJoinDate: null,
    firstSmallGroupJoinDate: null,
    gender: GENDER_DEFAULT_TYPE,
    hasAcceptedChrist: false,
    hasSignedMaturityCovenant: false,
    hasSignedMembershipAgreement: false,
    hasSignedMinistryCovenant: false,
    hasSignedMissionCovenant: false,
    hasTakenClass101: false,
    hasTakenClass201: false,
    hasTakenClass301: false,
    hasTakenClass401: false,
    iconColor: null,
    iconSize: 16,
    id: null,
    inverse: false,
    isActiveInMissions: false,
    isBaptised: false,
    isInMinistry: false,
    isInSmallGroup: false,
    isMobile: false,
    parentConsumer: undefined,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeAcceptedChristColumn: false,
    removeBaptismColumn: false,
    removeClassColumn: false,
    removeCongregationDateColumn: false,
    removeFirstContactDateColumn: false,
    removeInMinistryColumn: false,
    removeInTripsColumn: false,
    removeSmallGroupColumn: false,
    signedMembershipAgreementDate: null,
    signedMaturityCovenantDate: null,
    signedMinistryCovenantDate: null,
    signedMissionCovenantDate: null,
};

function getIconSize({ isMobile, iconSize }) {
    if (!isMobile) {
        return iconSize || 24;
    }

    return iconSize;
}

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape: {
            borderRadius,
        },
    } = theme;
    const columnHorizontalPadding = 5.5;
    const hasAttendedStyles = (boxShadowColor) => ({
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
        root: {
            backgroundColor: ({ backgroundTransparent, isMobile }) => {
                let backgroundColorValue;

                if (backgroundTransparent && !isMobile) {
                    backgroundColorValue = 'transparent';
                } else if (backgroundTransparent && isMobile) {
                    backgroundColorValue = 'rgb(255, 255, 255, 0.16)';
                } if (!backgroundTransparent) {
                    backgroundColorValue = palette.background.primary;
                }

                return backgroundColorValue;
            },
        },
        column: {
            height: (props) => getIconSize({ isMobile: props.isMobile, iconSize: props.iconSize }),
            padding: `0 ${columnHorizontalPadding}px`,
            width: (props) => `${getIconSize({ isMobile: props.isMobile, iconSize: props.iconSize }) + (columnHorizontalPadding * 2)}px !important`,
        },
        congregationDateColummn: {
            padding: `0 ${columnHorizontalPadding}px`,
            width: 'auto !important',
        },
        congregationDateLabelTypography: {
            color: ({ backgroundTransparent }) => (backgroundTransparent ?
                palette.text.contrastText :
                palette.text.secondary
            ),
        },
        congregationDateTypography: {
            color: ({ backgroundTransparent }) => backgroundTransparent &&
                palette.text.contrastText,
        },
        firstContactDateColumn: ({ parentConsumer, isMobile }) => {
            if (parentConsumer === 'personRecord') {
                return {
                    padding: isMobile ?
                        '0px 5px 0px 15px !important' :
                        '10px 15px 10px 5px !important',
                    width: 'auto !important',
                };
            }

            return {
                flexGrow: 1,
                padding: `0 ${columnHorizontalPadding}px`,
                textAlign: 'right',
                width: 'auto !important',
            };
        },
        firstContactDateLabelTypography: {
            color: ({ backgroundTransparent }) => (backgroundTransparent ?
                palette.text.contrastText :
                palette.text.secondary
            ),
        },
        firstContactDateTypography: {
            color: ({ backgroundTransparent }) => backgroundTransparent &&
                palette.text.contrastText,
        },
        dateContainers: {
            display: 'inline-block',
            textAlign: 'left',
        },
        genderFemale: {},
        genderMale: {},
        genderUndefined: {},
        grid: {
            margin: `0 -${columnHorizontalPadding}px !important`,
        },
        hasTakenClass101: ({ iconColor, hasSignedMembershipAgreement }) => (
            iconColor && !hasSignedMembershipAgreement
        ) && ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMembershipAgreement: {
            opacity: '1 !important',
        },
        hasTakenClass201: ({ iconColor, hasSignedMaturityCovenant }) => (
            iconColor && !hasSignedMaturityCovenant
        ) && ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMaturityCovenant: {
            opacity: '1 !important',
        },
        hasTakenClass301: ({ iconColor, hasSignedMinistryCovenant }) => (
            iconColor && !hasSignedMinistryCovenant
        ) && ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMinistryCovenant: {
            opacity: '1 !important',
        },
        hasTakenClass401: ({ iconColor, hasSignedMissionCovenant }) => (
            iconColor && !hasSignedMissionCovenant
        ) && ({
            backgroundColor: 'transparent !important',
            boxShadow: `inset 0 0 0 2px ${iconColor} !important`,
            opacity: '1 !important',
        }),
        hasSignedMissionCovenant: {
            opacity: '1 !important',
        },
        icon: ({ iconColor }) => ({
            opacity: iconColor ? 0.25 : 1,
            display: 'flex !important',
            '&.ui.icon .icon-use-path': {
                fill: iconColor ? `${iconColor} !important` : palette.static.main,
            },
        }),
        inverse: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
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
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
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
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
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
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
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
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`),
                    },
                    '&$genderMale': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`),
                    },
                    '&$genderUndefined': {
                        ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`),
                    },
                },
                '&$isChild': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`),
                },
                '&$isStudent': {
                    ...hasAttendedStyles(`${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`),
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
        iconAcceptedChrist: {
            '&$hasAcceptedChrist': {
                '&$isAdult': {
                    '&$genderFemale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`,
                    },
                    '&$genderMale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`,
                    },
                    '&$genderUndefined .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`,
                    },
                },
                '&$isChild .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
                },
            },
        },
        iconBaptised: {
            '&$isBaptised': {
                '&$isAdult': {
                    '&$genderFemale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`,
                    },
                    '&$genderMale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`,
                    },
                    '&$genderUndefined .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`,
                    },
                },
                '&$isChild .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}  !important`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}  !important`,
                },
            },
        },
        iconInMinistry: {
            '&$isInMinistry': {
                '&$isAdult': {
                    '&$genderFemale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`,
                    },
                    '&$genderMale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`,
                    },
                    '&$genderUndefined .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`,
                    },
                },
                '&$isChild .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}  !important`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}  !important`,
                },
            },
        },
        iconSmallGroup: {
            '&$isInSmallGroup': {
                '&$isAdult': {
                    '&$genderFemale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`,
                    },
                    '&$genderMale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`,
                    },
                    '&$genderUndefined .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`,
                    },
                },
                '&$isChild .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
                },
            },
        },
        iconInTrips: {
            '&$isActiveInMissions': {
                '&$isAdult': {
                    '&$genderFemale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`,
                    },
                    '&$genderMale .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`,
                    },
                    '&$genderUndefined .icon-use-path': {
                        fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`,
                    },
                },
                '&$isChild .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
                },
            },
        },
        hasAcceptedChrist: {
            '&.icon': {
                opacity: 1,
            },
        },
        isBaptised: {
            '&.icon': {
                opacity: 1,
            },
        },
        isInSmallGroup: {
            '&.icon': {
                opacity: 1,
            },
        },
        isInMinistry: {
            '&.icon': {
                opacity: 1,
            },
        },
        isActiveInMissions: {
            '&.icon': {
                opacity: 1,
            },
        },
    };
});

export function PersonCoreMilestones(props) {
    const {
        acceptedChristDate,
        activeInMissionsDate,
        attendedClass101Date,
        attendedClass201Date,
        attendedClass301Date,
        attendedClass401Date,
        baptismDate,
        className,
        congregationDate: congregationDateProp,
        firstContactDate: firstContactDateProp,
        firstMinistryJoinDate,
        firstSmallGroupJoinDate,
        gender,
        hasAcceptedChrist,
        hasTakenClass101,
        hasTakenClass201,
        hasTakenClass301,
        hasTakenClass401,
        hasSignedMembershipAgreement,
        hasSignedMaturityCovenant,
        hasSignedMinistryCovenant,
        hasSignedMissionCovenant,
        iconColor,
        iconSize: iconSizeProp,
        id,
        inverse,
        isActiveInMissions,
        isBaptised,
        isInMinistry,
        isInSmallGroup,
        isMobile,
        recordType,
        removeAcceptedChristColumn,
        removeBaptismColumn,
        removeClassColumn,
        removeCongregationDateColumn,
        removeFirstContactDateColumn,
        removeInMinistryColumn,
        removeInTripsColumn,
        removeSmallGroupColumn,
        signedMembershipAgreementDate,
        signedMaturityCovenantDate,
        signedMinistryCovenantDate,
        signedMissionCovenantDate,
    } = props;

    const classes = useStyles(props);
    const isAdult = recordType === 'adult';
    const isFemale = includes(['f', 'F'], gender);
    const isMale = includes(['m', 'M'], gender);

    const rootClasses = ClassNames(
        PERSON_CORE_MILESTONES_CLASSES,
        classes.root,
        className,
        {
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.inverse]: inverse,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass101Classes = ClassNames(
        classes.iconBaseClass101,
        classes.iconBase,
        {
            [classes.iconBaseColorClass101]: !iconColor && hasTakenClass101,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMembershipAgreement]: hasSignedMembershipAgreement,
            [classes.hasTakenClass101]: hasTakenClass101,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass201Classes = ClassNames(
        classes.iconBaseClass201,
        classes.iconBase,
        {
            [classes.iconBaseColorClass201]: !iconColor && hasTakenClass201,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMaturityCovenant]: hasSignedMaturityCovenant,
            [classes.hasTakenClass201]: hasTakenClass201,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass301Classes = ClassNames(
        classes.iconBaseClass301,
        classes.iconBase,
        {
            [classes.iconBaseColorClass301]: !iconColor && hasTakenClass301,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMinistryCovenant]: hasSignedMinistryCovenant,
            [classes.hasTakenClass301]: hasTakenClass301,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconBaseClass401Classes = ClassNames(
        classes.iconBaseClass401,
        classes.iconBase,
        {
            [classes.iconBaseColorClass401]: !iconColor && hasTakenClass401,
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.hasSignedMissionCovenant]: hasSignedMissionCovenant,
            [classes.hasTakenClass401]: hasTakenClass401,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconSize = getIconSize({ isMobile, iconSize: iconSizeProp });

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

    const relativeTime = {
        s: '1 day',
        ss: '1 day',
        m: '1 day',
        mm: '1 day',
        h: '1 day',
        hh: '1 day',
        d: '1 day',
        dd: '%d days',
        M: '1 month',
        MM: '%d months',
        y: '1 year',
        yy: '%d years',
    };

    const relativeTimeThreshold = {
        s: 60,
        m: 60,
        h: 24,
        d: 31,
        M: 12,
    };

    const relativeTimeRounding = Math.floor;
    const userTimeZone = dateUtils.getDetectedTimeZone();
    let firstContactDate;
    let congregationDate;

    if (firstContactDateProp) {
        firstContactDate = moment.utc(firstContactDateProp).tz(userTimeZone);
    }

    if (congregationDateProp) {
        congregationDate = moment.utc(congregationDateProp).tz(userTimeZone);
    }

    const popoverContentAcceptedChrist = (hasAcceptedChrist && acceptedChristDate) ? (
        <MilestonePopoverContent
            title="Accepted Christ"
            milestonesDates={[
                { label: 'On', date: moment(acceptedChristDate).format() },
            ]}
        />
    ) : '';

    const popoverContentBaptism = (isBaptised && baptismDate) ? (
        <MilestonePopoverContent
            title="Baptized"
            milestonesDates={[
                { label: 'On', date: baptismDate },
            ]}
        />
    ) : '';

    const popoverContentSmallGroup = (isInSmallGroup && firstSmallGroupJoinDate) ? (
        <MilestonePopoverContent
            title="Active in Small Groups"
            milestonesDates={[
                { label: 'Since', date: firstSmallGroupJoinDate },
            ]}
        />
    ) : '';

    const popoverContentInMinistry = (isInMinistry && firstMinistryJoinDate) ? (
        <MilestonePopoverContent
            title="Active in Ministry"
            milestonesDates={[
                { label: 'Since', date: firstMinistryJoinDate },
            ]}
        />
    ) : '';

    const popoverContentInMissions = (isActiveInMissions && activeInMissionsDate) ? (
        <MilestonePopoverContent
            title="Active in Missions"
            milestonesDates={[
                { label: 'Since', date: activeInMissionsDate },
            ]}
        />
    ) : '';

    const milestonesClassesDates = [
        ...(attendedClass101Date ? [{ label: '101', date: attendedClass101Date }] : []), // Fancy ES6 syntax to avoid multiple if statements
        ...(signedMembershipAgreementDate ? [{ label: 'Became Member', date: signedMembershipAgreementDate }] : []),
        ...(attendedClass201Date ? [{ label: '201', date: attendedClass201Date }] : []),
        ...(signedMaturityCovenantDate ? [{ label: 'Maturity Covenant Card', date: signedMaturityCovenantDate }] : []),
        ...(attendedClass301Date ? [{ label: '301', date: attendedClass301Date }] : []),
        ...(signedMinistryCovenantDate ? [{ label: 'Ministry Covenant', date: signedMinistryCovenantDate }] : []),
        ...(attendedClass401Date ? [{ label: '401', date: attendedClass401Date }] : []),
        ...(signedMissionCovenantDate ? [{ label: 'Mission Commitment', date: signedMissionCovenantDate }] : []),
    ];

    const popoverContentClasses = (isAdult && milestonesClassesDates.length > 0) ? (
        <MilestonePopoverContent
            title="C.L.A.S.S."
            milestonesDates={milestonesClassesDates}
        />
    ) : '';

    return (
        <div
            className={rootClasses}
            id={id}
        >
            <Grid
                className={classes.grid}
                verticalAlign="middle"
            >
                <Grid.Row>
                    {!removeAcceptedChristColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--accepted_christ_column`,
                                classes.column,
                            )}
                        >
                            <Popover
                                content={popoverContentAcceptedChrist}
                                disable={!popoverContentAcceptedChrist}
                                mouseEvent="onMouseEnter"
                            >
                                <Icon
                                    className={ClassNames(
                                        classes.iconAcceptedChrist,
                                        classes.icon,
                                        {
                                            [classes.genderFemale]: isFemale,
                                            [classes.genderMale]: isMale,
                                            [classes.genderUndefined]: !isFemale && !isMale,
                                            [classes.hasAcceptedChrist]: hasAcceptedChrist,
                                            [classes.isAdult]: recordType === 'adult',
                                            [classes.isChild]: recordType === 'child',
                                            [classes.isStudent]: recordType === 'student',
                                        },
                                    )}
                                    compact
                                    inverse={inverse}
                                    size={iconSize}
                                    title={hasAcceptedChrist ? false : 'Has not accepted Christ'}
                                    type="heart"
                                />
                            </Popover>
                        </Grid.Column>
                    )}

                    {!removeBaptismColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--baptism_column`,
                                classes.column,
                            )}
                        >
                            <Popover
                                content={popoverContentBaptism}
                                disable={!popoverContentBaptism}
                                mouseEvent="onMouseEnter"
                            >
                                <Icon
                                    className={ClassNames(
                                        classes.iconBaptised,
                                        classes.icon,
                                        {
                                            [classes.genderFemale]: isFemale,
                                            [classes.genderMale]: isMale,
                                            [classes.genderUndefined]: !isFemale && !isMale,
                                            [classes.isAdult]: recordType === 'adult',
                                            [classes.isBaptised]: isBaptised,
                                            [classes.isChild]: recordType === 'child',
                                            [classes.isStudent]: recordType === 'student',
                                        },
                                    )}
                                    compact
                                    inverse={inverse}
                                    size={iconSize}
                                    title={isBaptised ? false : 'Not Baptized'}
                                    type="droplet"
                                />
                            </Popover>
                        </Grid.Column>
                    )}

                    {!removeClassColumn && isAdult && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--class_column`,
                                classes.column,
                            )}
                        >
                            <Popover
                                content={popoverContentClasses}
                                disable={!popoverContentClasses}
                                mouseEvent="onMouseEnter"
                                width={300}
                            >
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
                            </Popover>
                        </Grid.Column>
                    )}

                    {!removeSmallGroupColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--small_group_column`,
                                classes.column,
                            )}
                        >
                            <Popover
                                content={popoverContentSmallGroup}
                                disable={!popoverContentSmallGroup}
                                mouseEvent="onMouseEnter"
                            >
                                <Icon
                                    className={ClassNames(
                                        classes.iconSmallGroup,
                                        classes.icon,
                                        {
                                            [classes.genderFemale]: isFemale,
                                            [classes.genderMale]: isMale,
                                            [classes.genderUndefined]: !isFemale && !isMale,
                                            [classes.isAdult]: recordType === 'adult',
                                            [classes.isChild]: recordType === 'child',
                                            [classes.isInSmallGroup]: isInSmallGroup,
                                            [classes.isStudent]: recordType === 'student',
                                        },
                                    )}
                                    compact
                                    inverse={inverse}
                                    size={iconSize}
                                    title={!isInSmallGroup && 'Not active in Small Group'}
                                    type="users"
                                />
                            </Popover>
                        </Grid.Column>
                    )}

                    {!removeInMinistryColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--in_ministry_column`,
                                classes.column,
                            )}
                        >
                            <Popover
                                content={popoverContentInMinistry}
                                disable={!popoverContentInMinistry}
                                mouseEvent="onMouseEnter"
                            >
                                <Icon
                                    className={ClassNames(
                                        classes.iconInMinistry,
                                        classes.icon,
                                        {
                                            [classes.genderFemale]: isFemale,
                                            [classes.genderMale]: isMale,
                                            [classes.genderUndefined]: !isFemale && !isMale,
                                            [classes.isAdult]: recordType === 'adult',
                                            [classes.isChild]: recordType === 'child',
                                            [classes.isInMinistry]: isInMinistry,
                                            [classes.isStudent]: recordType === 'student',
                                        },
                                    )}
                                    compact
                                    inverse={inverse}
                                    size={iconSize}
                                    title={!isInMinistry && 'Not active in Ministry'}
                                    type="serving-opportunity"
                                />
                            </Popover>
                        </Grid.Column>
                    )}

                    {!removeInTripsColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--in_missions_column`,
                                classes.column,
                            )}
                        >
                            <Popover
                                content={popoverContentInMissions}
                                disable={!popoverContentInMissions}
                                mouseEvent="onMouseEnter"
                            >
                                <Icon
                                    className={ClassNames(
                                        classes.iconInTrips,
                                        classes.icon,
                                        {
                                            [classes.genderFemale]: isFemale,
                                            [classes.genderMale]: isMale,
                                            [classes.genderUndefined]: !isFemale && !isMale,
                                            [classes.isActiveInMissions]: isActiveInMissions,
                                            [classes.isAdult]: recordType === 'adult',
                                            [classes.isChild]: recordType === 'child',
                                            [classes.isStudent]: recordType === 'student',
                                        },
                                    )}
                                    compact
                                    inverse={inverse}
                                    size={iconSize}
                                    title={!isActiveInMissions && 'Not active in Missions'}
                                    type="shoe-prints"
                                />
                            </Popover>
                        </Grid.Column>
                    )}

                    {firstContactDate && !removeFirstContactDateColumn && isAdult && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--first_contact_date_column`,
                                classes.firstContactDateColumn,
                            )}
                        >
                            <div
                                className={classes.dateContainers}
                            >
                                <Typography
                                    className={classes.firstContactDateLabelTypography}
                                    variant="h6"
                                >
                                    At Saddleback
                                </Typography>

                                <span
                                    className={`${BEM_PERSON_CORE_MILESTONES}--at_saddleback_date font-size-xsmall font-weight-bold`}
                                >
                                    <TimeFromNow
                                        className={classes.firstContactDateTypography}
                                        date={firstContactDate}
                                        relativeTime={relativeTime}
                                        relativeTimeThreshold={relativeTimeThreshold}
                                        relativeTimeRounding={relativeTimeRounding}
                                    />
                                </span>
                            </div>
                        </Grid.Column>
                    )}

                    {congregationDate && !removeCongregationDateColumn && isAdult && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--congregation_date_column`,
                                classes.congregationDateColummn,
                            )}
                        >
                            <div
                                className={classes.dateContainers}
                            >
                                <Typography
                                    className={classes.congregationDateLabelTypography}
                                    variant="h6"
                                >
                                    Member For
                                </Typography>

                                <span
                                    className={`${BEM_PERSON_CORE_MILESTONES}--member_for_date font-size-xsmall font-weight-bold`}
                                >
                                    <TimeFromNow
                                        className={classes.congregationDateTypography}
                                        date={congregationDate}
                                        relativeTime={relativeTime}
                                        relativeTimeThreshold={relativeTimeThreshold}
                                        relativeTimeRounding={relativeTimeRounding}
                                    />
                                </span>
                            </div>
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        </div>
    );
}

PersonCoreMilestones.propTypes = propTypes;
PersonCoreMilestones.defaultProps = defaultProps;

export default PersonCoreMilestones;
