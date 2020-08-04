import {
    Grid,
    Icon,
    TimeFromNow,
    Typography,
} from 'react-cm-ui';
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
import makeStyles from '../../styles/makeStyles';
import useTheme from '../../styles/useTheme';
import useMediaQuery from '../../utils/useMediaQuery';
import dateUtils from '../../utils/dateUtils';

const propTypes = {
    className: PropTypes.string,
    congregationDate: PropTypes.oneOfType([
        MomentPropTypes.momentString,
        PropTypes.oneOf([null]),
    ]),
    firstContactDate: PropTypes.oneOfType([
        MomentPropTypes.momentString,
        PropTypes.oneOf([null]),
    ]),
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
    iconSize: PropTypes.number,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    isActiveInTrips: PropTypes.bool,
    isBaptised: PropTypes.bool,
    isInMinistry: PropTypes.bool,
    isInSmallGroup: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeAcceptedChristColumn: PropTypes.bool,
    removeBaptismColumn: PropTypes.bool,
    removeClassColumn: PropTypes.bool,
    removeCongregationDateColumn: PropTypes.bool,
    removeFirstContactDateColumn: PropTypes.bool,
    removeInMinistryColumn: PropTypes.bool,
    removeInTripsColumn: PropTypes.bool,
    removeSmallGroupColumn: PropTypes.bool,
};

const defaultProps = {
    className: undefined,
    congregationDate: null,
    firstContactDate: null,
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
    iconSize: 16,
    id: null,
    inverse: false,
    isActiveInTrips: false,
    isBaptised: false,
    isInMinistry: false,
    isInSmallGroup: false,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeAcceptedChristColumn: false,
    removeBaptismColumn: false,
    removeClassColumn: false,
    removeCongregationDateColumn: false,
    removeFirstContactDateColumn: false,
    removeInMinistryColumn: false,
    removeInTripsColumn: false,
    removeSmallGroupColumn: false,
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
     * This is the base icon size for the C.L.A.S.S. icon (which isn't an SVG), so that the
     * size can be scaled proportionally based on the given `size` from props.
     */
    const basesClassIconSize = 24;

    return {
        root: {
            backgroundColor: palette.background.primary,
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
        congregationDateHeading: {
            color: palette.text.secondary,
        },
        firstContactDateColumn: {
            flexGrow: 1,
            padding: `0 ${columnHorizontalPadding}px`,
            textAlign: 'right',
            width: 'auto !important',
        },
        firstContactDateHeading: {
            color: palette.text.secondary,
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
        hasTakenClass101: {},
        hasSignedMembershipAgreement: {},
        hasTakenClass201: {},
        hasSignedMaturityCovenant: {},
        hasTakenClass301: {},
        hasSignedMinistryCovenant: {},
        hasTakenClass401: {},
        hasSignedMissionCovenant: {},
        icon: {
            display: 'flex !important',
            '&.ui.icon .icon-use-path': {
                fill: palette.static.main,
            },
        },
        inverse: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
        iconBase: {
            backgroundColor: palette.static.main,
            height: '10.42px',
            position: 'absolute',
            width: '11.07px',
        },
        iconBaseClass101: {
            borderRadius: `0 ${borderRadius.main}px 0 0`,
            right: 0,
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
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`,
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
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`,
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
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`,
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
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`,
                },
            },
        },
        iconInTrips: {
            '&$isActiveInTrips': {
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
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}`,
                },
                '&$isStudent .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}`,
                },
            },
        },
        hasAcceptedChrist: {},
        isBaptised: {},
        isInSmallGroup: {},
        isInMinistry: {},
        isActiveInTrips: {},
    };
});

export function PersonCoreMilestones(props) {
    const {
        className,
        congregationDate: congregationDateProp,
        firstContactDate: firstContactDateProp,
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
        iconSize: iconSizeProp,
        id,
        isBaptised,
        isInMinistry,
        isInSmallGroup,
        isActiveInTrips,
        inverse,
        recordType,
        removeAcceptedChristColumn,
        removeBaptismColumn,
        removeClassColumn,
        removeCongregationDateColumn,
        removeFirstContactDateColumn,
        removeInMinistryColumn,
        removeInTripsColumn,
        removeSmallGroupColumn,
    } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('sm'));
    const classes = useStyles({ ...props, isMobile });
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

    if (hasTakenClass101) {
        class101Title = 'Taken CLASS 101';

        if (hasSignedMembershipAgreement) {
            class101Title += ' and Signed Membership Covenant';
        } else {
            class101Title += ' and has not Signed Membership Covenant';
        }
    } else {
        class101Title = 'Has not taken CLASS 101';

        if (hasSignedMembershipAgreement) {
            class101Title += ', but has signed Membership Covenant';
        }
    }

    if (hasTakenClass201) {
        class201Title = 'Taken CLASS 201';

        if (hasSignedMaturityCovenant) {
            class201Title += ' and Signed Maturity Covenant';
        } else {
            class201Title += ' and has not Signed Maturity Covenant';
        }
    } else {
        class201Title = 'Has not taken CLASS 201';

        if (hasSignedMaturityCovenant) {
            class201Title += ', but has signed Maturity Agreement';
        }
    }

    if (hasTakenClass301) {
        class301Title = 'Taken CLASS 301';

        if (hasSignedMinistryCovenant) {
            class301Title += ' and Signed Ministry Covenant';
        } else {
            class301Title += ' and has not Signed Ministry Covenant';
        }
    } else {
        class301Title = 'Has not taken CLASS 301';

        if (hasSignedMaturityCovenant) {
            class301Title += ', but has signed Ministry Covenant';
        }
    }

    if (hasTakenClass401) {
        class401Title = 'Taken CLASS 401';

        if (hasSignedMissionCovenant) {
            class401Title += ' and Signed Mission Covenant';
        } else {
            class401Title += ' and has not Signed Mission Covenant';
        }
    } else {
        class401Title = 'Has not taken CLASS 401';

        if (hasSignedMaturityCovenant) {
            class401Title += ', but has signed Mission Covenant';
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
                                title={hasAcceptedChrist ? 'Accepted Christ' : 'Has not accepted Christ'}
                                type="heart"
                            />
                        </Grid.Column>
                    )}

                    {!removeBaptismColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--baptism_column`,
                                classes.column,
                            )}
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
                                title={isBaptised ? 'Baptized' : 'Not Baptized'}
                                type="droplet"
                            />
                        </Grid.Column>
                    )}

                    {!removeClassColumn && isAdult && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--class_column`,
                                classes.column,
                            )}
                        >
                            <div
                                className={classes.iconClassContainer}
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
                        </Grid.Column>
                    )}

                    {!removeSmallGroupColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--small_group_column`,
                                classes.column,
                            )}
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
                                title={isInSmallGroup ? 'Active in Small Group' : 'Not active in Small Group'}
                                type="users"
                            />
                        </Grid.Column>
                    )}

                    {!removeInMinistryColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--in_ministry_column`,
                                classes.column,
                            )}
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
                                title={isInMinistry ? 'Active in Ministry' : 'Not active in Ministry'}
                                type="serving-opportunity"
                            />
                        </Grid.Column>
                    )}

                    {!removeInTripsColumn && (
                        <Grid.Column
                            className={ClassNames(
                                `${BEM_PERSON_CORE_MILESTONES}--in_trips_column`,
                                classes.column,
                            )}
                        >
                            <Icon
                                className={ClassNames(
                                    classes.iconInTrips,
                                    classes.icon,
                                    {
                                        [classes.genderFemale]: isFemale,
                                        [classes.genderMale]: isMale,
                                        [classes.genderUndefined]: !isFemale && !isMale,
                                        [classes.isActiveInTrips]: isActiveInTrips,
                                        [classes.isAdult]: recordType === 'adult',
                                        [classes.isChild]: recordType === 'child',
                                        [classes.isStudent]: recordType === 'student',
                                    },
                                )}
                                compact
                                inverse={inverse}
                                size={iconSize}
                                title={isActiveInTrips ? 'Active in Trips' : 'Not active in Trips'}
                                type="shoe-prints"
                            />
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
                                    className={classes.firstContactDateHeading}
                                    variant="h6"
                                >
                                    At Saddleback
                                </Typography>

                                <span
                                    className={`${BEM_PERSON_CORE_MILESTONES}--at_saddleback_date font-size-xsmall font-weight-bold`}
                                >
                                    <TimeFromNow
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
                                    className={classes.congregationDateHeading}
                                    variant="h6"
                                >
                                    Member For
                                </Typography>

                                <span
                                    className={`${BEM_PERSON_CORE_MILESTONES}--member_for_date font-size-xsmall font-weight-bold`}
                                >
                                    <TimeFromNow
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
