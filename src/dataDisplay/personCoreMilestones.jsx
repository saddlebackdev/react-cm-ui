import {
    Grid,
    Header,
    Icon,
    TimeFromNow,
} from 'react-cm-ui';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../styles/makeStyles';
import useTheme from '../styles/useTheme';
import useMediaQuery from '../utils/useMediaQuery';
import dateUtils from '../utils/dateUtils';
import {
    GENDER_DEFAULT_TYPE,
    GENDER_PROP_TYPE,
    RECORD_TYPE_COLOR,
    RECORD_TYPE_DEFAULT_PROP,
    RECORD_TYPE_PROP_TYPE,
} from './personPanelConstants';

const propTypes = {
    className: PropTypes.string,
    congregationDate: PropTypes.oneOfType([
        MomentPropTypes.momentObj,
        MomentPropTypes.momentString,
        PropTypes.string]),
    firstContactDate: PropTypes.oneOfType([
        MomentPropTypes.momentObj,
        MomentPropTypes.momentString,
        PropTypes.string,
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
    congregationDate: '',
    firstContactDate: '',
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
    } = theme;
    const columnHorizontalPadding = 5.5;
    const hasAttendedStyles = {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px ${palette.border.contrastPrimary}`,
        opacity: 1,
    };
    const hasSignedStyles = {
        backgroundColor: palette.background.primary,
        boxShadow: 'none',
        opacity: 1,
    };
    const iconClassSize = 24;

    return {
        container: {
            backgroundColor: palette.background.primary,
            '&$isAdult': {
                '&$genderFemale .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ gender: 'female', recordType: 'adult', theme })} !important`,
                },
                '&$genderMale .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ gender: 'M', recordType: 'adult', theme })} !important`,
                },
                '&$genderUndefined .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })} !important`,
                },
            },
            '&$isChild': {
                '&$genderFemale .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
                },
            },
            '&$isStudent': {
                '&$genderFemale .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
                },
            },
        },
        column: {
            height: (props) => getIconSize({ isMobile: props.isMobile, iconSize: props.iconSize }),
            padding: `0 ${columnHorizontalPadding}px`,
            width: (props) => `${getIconSize({ isMobile: props.isMobile, iconSize: props.iconSize }) + (columnHorizontalPadding * 2)}px !important`,
        },
        congregationDateColummn: {
            paddingLeft: 5.5,
            width: 'auto',
        },
        firstContactDateColumn: {
            flexGrow: 1,
            paddingRight: 5.5,
            textAlign: 'left',
            width: 'auto',
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
        },
        inverse: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
        iconBase: {
            backgroundColor: palette.background.primary,
            height: '10.42px',
            opacity: 0.25,
            position: 'absolute',
            width: '11.07px',
            '&$isAdult': {
                '&$genderFemale': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ gender: 'female', recordType: 'adult', theme })} !important`,
                },
                '&$genderMale': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ gender: 'M', recordType: 'adult', theme })} !important`,
                },
                '&$genderUndefined': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })} !important`,
                },
            },
            '&$isChild': {
                '&$genderFemale': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
                },
            },
            '&$isStudent': {
                '&$genderFemale': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
                },
            },
            '&$hasSignedMembershipAgreement': {
                ...hasSignedStyles,
            },
            '&$hasTakenClass101': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMaturityCovenant': {
                ...hasSignedStyles,
            },
            '&$hasTakenClass201': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMinistryCovenant': {
                ...hasSignedStyles,
            },
            '&$hasTakenClass301': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMissionCovenant': {
                ...hasSignedStyles,
            },
            '&$hasTakenClass401': {
                ...hasAttendedStyles,
            },
        },
        iconBaseClass101: {
            borderRadius: '0 3px 0 0',
            right: 0,
            '&$hasTakenClass101': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMembershipAgreement': {
                ...hasSignedStyles,
            },
        },
        iconBaseClass201: {
            borderRadius: '3px 0 0',
            top: 0,
            '&$hasTakenClass201': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMaturityCovenant': {
                ...hasSignedStyles,
            },
        },
        iconBaseClass301: {
            borderRadius: '0 0 0 3px',
            bottom: 0,
            '&$hasTakenClass301': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMinistryCovenant': {
                ...hasSignedStyles,
            },
        },
        iconBaseClass401: {
            borderRadius: '0 0 3px',
            bottom: 0,
            right: 0,
            '&$hasTakenClass401': {
                ...hasAttendedStyles,
            },
            '&$hasSignedMissionCovenant': {
                ...hasSignedStyles,
            },
        },
        iconClassContainer: {
            height: iconClassSize,
            position: 'relative',
            transform: (props) => {
                const iconSize = getIconSize({
                    isMobile: props.isMobile,
                    iconSize: props.iconSize,
                });

                return `scale(${(props.isMobile || iconSize === 16) ? 16 / iconClassSize : 1})`;
            },
            transformOrigin: '0 3px',
            width: iconClassSize,
        },
        iconClassInnerContainer: {
            height: iconClassSize,
            transform: 'rotate(45deg) scale(0.707106)',
            width: iconClassSize,
        },
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
    const blockClassName = 'person_core_milestones';
    const containerClasses = ClassNames(
        classes.container,
        blockClassName,
        className,
        {
            [classes.genderFemale]: gender === 'F',
            [classes.genderMale]: gender === 'M',
            [classes.genderUndefined]: !gender,
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
            [classes.genderFemale]: gender === 'F',
            [classes.genderMale]: gender === 'M',
            [classes.genderUndefined]: !gender,
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
            [classes.genderFemale]: gender === 'F',
            [classes.genderMale]: gender === 'M',
            [classes.genderUndefined]: !gender,
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
            [classes.genderFemale]: gender === 'F',
            [classes.genderMale]: gender === 'M',
            [classes.genderUndefined]: !gender,
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
            [classes.genderFemale]: gender === 'F',
            [classes.genderMale]: gender === 'M',
            [classes.genderUndefined]: !gender,
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
            className={containerClasses}
        >
            <Grid
                className={classes.grid}
                verticalAlign="middle"
            >
                <Grid.Row>
                    {!removeAcceptedChristColumn && (
                        <Grid.Column
                            className={ClassNames(
                                classes.acceptedChristColumn,
                                classes.column,
                            )}
                        >
                            <Icon
                                className={classes.icon}
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
                                classes.baptisedColumn,
                                classes.column,
                            )}
                        >
                            <Icon
                                className={classes.icon}
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
                                classes.classColumn,
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
                                        className={iconBaseClass101Classes}
                                        title={class101Title}
                                    />

                                    <div
                                        className={iconBaseClass201Classes}
                                        title={class201Title}
                                    />

                                    <div
                                        className={iconBaseClass301Classes}
                                        title={class301Title}
                                    />

                                    <div
                                        className={iconBaseClass401Classes}
                                        title={class401Title}
                                    />

                                </div>
                            </div>
                        </Grid.Column>
                    )}

                    {!removeSmallGroupColumn && (
                        <Grid.Column
                            className={ClassNames(
                                classes.smallGroupColumn,
                                classes.column,
                            )}
                        >
                            <Icon
                                className={classes.icon}
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
                                classes.inMinistryColumn,
                                classes.column,
                            )}
                        >
                            <Icon
                                className={classes.icon}
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
                                classes.inTripsColumns,
                                classes.column,
                            )}
                        >
                            <Icon
                                className={classes.icon}
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
                                classes.firstContactDateColumn,
                                classes.column,
                            )}
                        >
                            <Header
                                className={`${blockClassName}--at_saddleback_header`}
                                size={!isMobile ? 'xxsmall' : 'xsmall'}
                                weight="normal"
                                style={{ margin: 0 }}
                            >
                                At Saddleback
                            </Header>

                            <span
                                className={`${blockClassName}--at_saddleback_date font-size-xsmall font-weight-bold`}
                            >
                                <TimeFromNow
                                    date={firstContactDate}
                                    relativeTime={relativeTime}
                                    relativeTimeThreshold={relativeTimeThreshold}
                                    relativeTimeRounding={relativeTimeRounding}
                                />
                            </span>
                        </Grid.Column>
                    )}

                    {congregationDate && !removeCongregationDateColumn && isAdult && (
                        <Grid.Column
                            className={ClassNames(
                                classes.congregationDateColummn,
                                classes.column,
                            )}
                        >
                            <Header
                                className={`${blockClassName}--member_for_header`}
                                size={!isMobile ? 'xxsmall' : 'xsmall'}
                                weight="normal"
                                style={{ margin: 0 }}
                            >
                                Member For
                            </Header>

                            <span
                                className={`${blockClassName}--member_for_date font-size-xsmall font-weight-bold`}
                            >
                                <TimeFromNow
                                    date={congregationDate}
                                    relativeTime={relativeTime}
                                    relativeTimeThreshold={relativeTimeThreshold}
                                    relativeTimeRounding={relativeTimeRounding}
                                />
                            </span>
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
