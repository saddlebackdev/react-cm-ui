import {
    Grid,
    Image,
    Typography,
} from 'react-cm-ui';
import {
    find,
    isEmpty,
    isNil,
    trimStart,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import {
    BEM_BLOCK_NAME,
    GENDER_PROP_TYPE,
    RECORD_TYPE_COLOR,
    RECORD_TYPE_PROP_TYPE,
} from './personPanelConstants';
import { ENTER_KEY_CODE, UI_CLASS_NAME } from '../global/constants';
import PersonPanelSummaryContactText from './personPanelSummaryContactText';

const propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        avatar: PropTypes.string,
        avatarColumn: PropTypes.string,
        compact: PropTypes.string,
        contactInfoColumn: PropTypes.string,
        expanded: PropTypes.string,
        grid: PropTypes.string,
        gridRow: PropTypes.string,
        metaInfo: PropTypes.string,
        nameColumn: PropTypes.string,
        personIdColumn: PropTypes.string,
        personId: PropTypes.string,
    }),
    data: PropTypes.shape({
        avatar: PropTypes.string,
        birthdate: PropTypes.number,
        campus: PropTypes.string,
        emails: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                isPrimary: PropTypes.bool,
            }),
        ),
        firstName: PropTypes.string,
        gender: GENDER_PROP_TYPE,
        gradeLevel: PropTypes.oneOf([
            'none',
            'preK',
            'kindergarten',
            'first',
            'second',
            'third',
            'fourth',
            'fifth',
            'sixth',
            'seventh',
            'eighth',
            'ninth',
            'tenth',
            'eleventh',
            'twelfth',
            null,
        ]),
        isDoNotContact: PropTypes.bool,
        isDoNotEmail: PropTypes.bool,
        isDoNotMail: PropTypes.bool,
        isDoNotPhone: PropTypes.bool,
        isDoNotText: PropTypes.bool,
        lastName: PropTypes.string,
        maritalStatus: PropTypes.string,
        nickName: PropTypes.string,
        personId: PropTypes.number,
        phones: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                isPrimary: PropTypes.bool,
            }),
        ),
        preferredMethod: PropTypes.string,
        prefix: PropTypes.string,
        recordType: RECORD_TYPE_PROP_TYPE,
        suffix: PropTypes.string,
    }),
    isCompact: PropTypes.bool,
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    classes: null,
    data: {},
    isCompact: false,
    isExpanded: false,
    onClick: null,
    tabIndex: -1,
};

const bemClass = `${BEM_BLOCK_NAME}--summary`;

function ageText({ birthdate }) {
    if (!isEmpty(birthdate)) {
        return '';
    }

    return `${moment().diff(birthdate, 'years')}yr`;
}

function birthdateText({ birthdate }) {
    if (!isEmpty(birthdate)) {
        return '';
    }

    return moment.unix(birthdate).utc().format('MM/DD/YY');
}

function genderText({ gender }) {
    switch (gender) {
        case 'f':
            return 'Female';
        case 'm':
            return 'Male';
        default:
            return '';
    }
}

function gradeLevelText({ gradeLevel }) {
    switch (gradeLevel) {
        case 'PreK':
            return 'PK';
        case 'Kindergarten':
            return 'K';
        case 'First':
            return '1';
        case 'Second':
            return '2';
        case 'Third':
            return '3';
        case 'Fourth':
            return '4';
        case 'Fifth':
            return '5';
        case 'Sixth':
            return '6';
        case 'Seventh':
            return '7';
        case 'Eighth':
            return '8';
        case 'Ninth':
            return '9';
        case 'Tenth':
            return '10';
        case 'Eleventh':
            return '11';
        case 'Twelfth':
            return '12';
        default:
            return gradeLevel;
    }
}

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape: {
            borderRadius,
        },
    } = theme;
    const transitionDuration = '200ms';
    const colorTransition = `color ${transitionDuration} ease-out`;

    return {
        root: {
            backgroundColor: palette.background.light,
            borderRadius,
            color: palette.text.primary,
            cursor: 'pointer',
            flexGrow: 1,
            outline: 'none',
            padding: '13px 11px',
            position: 'relative',
            transition: colorTransition,
            userSelect: 'none',
            width: '100%',
            '&::before, &::after': {
                bottom: 0,
                content: '""',
                left: 0,
                position: 'absolute',
                top: 0,
                transition: `opacity ${transitionDuration} ease-in-out`,
                zIndex: 1,
            },
            '&::before': {
                borderRadius: `${borderRadius}px 0 0 ${borderRadius}px`,
                opacity: 1,
                width: '5px',
                transition: `width ${transitionDuration} ease-in-out`,
            },
            '&$isAdult': {
                '&$genderFemale::before': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })} !important`,
                },
                '&$genderMale::before': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })} !important`,
                },
                '&$genderUndefined::before': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })} !important`,
                },
            },
            '&$isChild::before': {
                backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
            },
            '&$isStudent::before': {
                backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
            },
            '&$expanded': {
                color: palette.text.contrastText,
                borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
                '&::before': {
                    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
                    width: '100%',
                },
                '&$isAdult': {
                    '&$genderFemale::before': {
                        backgroundImage: `${RECORD_TYPE_COLOR({
                            gender: 'f',
                            isGradient: true,
                            recordType: 'adult',
                            theme,
                        })} !important`,
                    },
                    '&$genderMale::before': {
                        backgroundImage: `${RECORD_TYPE_COLOR({
                            gender: 'm',
                            isGradient: true,
                            recordType: 'adult',
                            theme,
                        })} !important`,
                    },
                    '&$genderUndefined::before': {
                        backgroundImage: `${RECORD_TYPE_COLOR({ isGradient: true, recordType: 'adult', theme })} !important`,
                    },
                },
                '&$isChild::before': {
                    backgroundImage: `${RECORD_TYPE_COLOR({ isGradient: true, recordType: 'child', theme })} !important`,
                },
                '&$isStudent::before': {
                    backgroundImage: `${RECORD_TYPE_COLOR({ isGradient: true, recordType: 'student', theme })} !important`,
                },
            },
            '&$compact': {
                padding: '5.5px 11px',
            },
        },
        avatar: {
            boxShadow: `inset 0 0 0 1px ${palette.border.primary} !important`,
        },
        avatarColumn: {
            maxWidth: (props) => (props.isCompact ? 44 : 55),
            minWidth: (props) => (props.isCompact ? 44 : 55),
            paddingRight: 0,
            width: 'auto !important',
        },
        compact: {},
        contactInfoColumn: {
            display: 'none',
            width: 'auto !important',
            '&$hasContactInfo': {
                marginLeft: 'auto',
            },
            [theme.breakpoints.up(900)]: {
                display: 'block',
            },
        },
        expanded: {},
        hasContactInfo: {},
        grid: {
            position: 'relative',
            zIndex: 2,
        },
        gridRow: {
            alignItems: 'center !important',
            flexWrap: 'nowrap !important',
        },
        metaInfo: {
            '&$compact': {
                display: 'none',
            },
        },
        nameColumn: {
            marginRight: 'auto',
            width: 'auto !important',
        },
        noContactInfo: {},
        personIdColumn: {
            width: 'auto !important',
            wordWrap: 'nowrap',
            '&$noContactInfo': {
                marginLeft: 'auto',
            },
        },
        personId: {
            color: (props) => (
                props.isExpanded ?
                    palette.text.contrastText :
                    palette.text.secondary
            ),
            transitionDelay: (props) => (
                props.isExpanded ?
                    '100ms' :
                    null
            ),
        },
        genderFemale: {},
        genderMale: {},
        genderUndefined: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
    };
});

function PersonPanelSummary(props) {
    const [metaInfoText, setMetaInfoText] = useState('');
    const [renderContactInfo, setRenderContactInfo] = useState(null);
    const classes = useStyles(props);
    const {
        data,
        isCompact,
        isExpanded,
        onClick: onClickProp,
        tabIndex,
    } = props;
    const {
        avatar,
        birthdate,
        campus,
        emails,
        firstName,
        gender,
        gradeLevel,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        lastName,
        maritalStatus,
        nickName,
        personId,
        phones,
        prefix,
        preferredMethod,
        recordType,
        suffix,
    } = data;
    const primaryPhone = find(phones, 'isPrimary');
    const primaryEmail = find(emails, 'isPrimary');
    const phone = (primaryPhone && primaryPhone.value) || 'N/A';
    const email = (primaryEmail && primaryEmail.value) || 'N/A';
    const isAdult = isNil(recordType) || recordType === 'adult';
    const isChild = recordType === 'child';
    const isStudent = recordType === 'student';

    useEffect(() => {
        let text = '';

        if (gender) {
            text += genderText({ gender });
        }

        if (isAdult && maritalStatus) {
            text += ` | ${maritalStatus}`;
        }

        if ((isChild || isStudent) && birthdate) {
            text += ` | ${ageText({ birthdate })} ${birthdateText({ birthdate })}`;
        }

        if ((isChild || isStudent) && gradeLevel) {
            text += ` | gr ${gradeLevelText({ gradeLevel })}`;
        }

        if (campus) {
            text += ` | ${campus}`;
        }

        text = trimStart(text, '| ');

        setMetaInfoText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        birthdate,
        campus,
        gender,
        gradeLevel,
        maritalStatus,
        recordType,
    ]);

    useEffect(() => {
        setRenderContactInfo(
            <PersonPanelSummaryContactText
                isCompact={isCompact}
                isDoNotContact={isDoNotContact}
                isDoNotEmail={isDoNotEmail}
                isDoNotMail={isDoNotMail}
                isDoNotPhone={isDoNotPhone}
                isDoNotText={isDoNotText}
                isExpanded={isExpanded}
                preferredMethod={preferredMethod}
                email={email}
                phone={phone}
                recordType={recordType}
            />,
        );
    }, [
        isCompact,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        isExpanded,
        preferredMethod,
        email,
        phone,
        recordType,
    ]);

    const onClick = (event) => {
        onClickProp(event);
    };

    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            onClickProp(event);
        }
    };

    const rootClasses = ClassNames(
        classes.root,
        UI_CLASS_NAME,
        [`${bemClass}`],
        {
            [classes.compact]: isCompact,
            [classes.expanded]: isExpanded,
            [classes.genderFemale]: gender === 'f',
            [classes.genderMale]: gender === 'm',
            [classes.genderUndefined]: !gender,
            [classes.isAdult]: isAdult,
            [classes.isChild]: isChild,
            [classes.isStudent]: isStudent,
        },
    );
    const metaInfoClasses = ClassNames(classes.metaInfo, {
        [classes.compact]: isCompact,
    });
    const contactInfoColumnClasses = ClassNames(
        classes.contactInfoColumn,
        {
            [classes.hasContactInfo]: !!renderContactInfo,
        },
    );
    const personIdColumnClasses = ClassNames(
        classes.personIdColumn,
        {
            [classes.noContactInfo]: !renderContactInfo,
        },
    );

    return (
        <div
            className={rootClasses}
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            role="button"
        >
            <Grid className={classes.grid}>
                <Grid.Row
                    className={classes.gridRow}
                >
                    <Grid.Column
                        className={classes.avatarColumn}
                    >
                        <Image
                            className={classes.avatar}
                            name={firstName && lastName ? `${firstName} ${lastName}` : null}
                            size={isCompact ? 33 : 44}
                            src={avatar}
                            type="person"
                        />
                    </Grid.Column>

                    <Grid.Column
                        className={classes.nameColumn}
                    >
                        <Typography
                            component="h4"
                            variant="h4"
                        >
                            {`${prefix || ''} ${firstName} ${(nickName && `(${nickName})`) || ''} ${lastName} ${suffix || ''}`}
                        </Typography>

                        <Typography
                            className={metaInfoClasses}
                            color={isExpanded ? 'inherit' : 'textSecondary'}
                            variant="caption"
                        >
                            {metaInfoText}
                        </Typography>
                    </Grid.Column>

                    {renderContactInfo && (
                        <Grid.Column
                            className={contactInfoColumnClasses}
                            textAlign="right"
                        >
                            {renderContactInfo}
                        </Grid.Column>
                    )}

                    <Grid.Column
                        className={personIdColumnClasses}
                        textAlign="right"
                    >
                        <Typography
                            className={classes.personId}
                            variant="caption"
                        >
                            {`Id: ${personId}`}
                        </Typography>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

PersonPanelSummary.propTypes = propTypes;
PersonPanelSummary.defaultProps = defaultProps;

export default PersonPanelSummary;
