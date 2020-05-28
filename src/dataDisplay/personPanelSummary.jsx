import {
    Grid,
    Icon,
    Image,
    Typography,
} from 'react-cm-ui';
import {
    find,
    isEmpty,
    isNil,
    trimEnd,
    trimStart,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import { BEM_BLOCK_NAME } from './personPanelConstants';
import { UI_CLASS_NAME } from '../global/constants';
import TelephoneLink from '../utils/telephoneLink';
import EmailLink from '../utils/emailLink';

const propTypes = {
    classes: PropTypes.shape({
        grid: PropTypes.string,
        root: PropTypes.string,
        preferredContactMethod: PropTypes.string,
        preferredContactInfo: PropTypes.string,
    }),
    data: PropTypes.shape({
        birthDate: PropTypes.number,
        churchEntityId: PropTypes.number,
        churchEntityName: PropTypes.string,
        contactPreferences: PropTypes.shape({}),
        emails: PropTypes.arrayOf(PropTypes.shape({})),
        firstName: PropTypes.string,
        gender: PropTypes.string,
        gradeLevel: PropTypes.string,
        id: PropTypes.number,
        isAdult: PropTypes.bool,
        isChild: PropTypes.bool,
        isChurchEntityKnown: PropTypes.bool,
        isDoNotContact: PropTypes.bool,
        isDoNotEmail: PropTypes.bool,
        isDoNotMail: PropTypes.bool,
        isDoNotPhone: PropTypes.bool,
        isDoNotText: PropTypes.bool,
        isStudent: PropTypes.bool,
        lastName: PropTypes.string,
        maritalStatus: PropTypes.string,
        nickName: PropTypes.string,
        noteCount: PropTypes.number,
        personId: PropTypes.number,
        phones: PropTypes.arrayOf(PropTypes.shape({})),
        prefix: PropTypes.string,
        profilePictureUrl: PropTypes.string,
        suffix: PropTypes.string,
    }),
    isCompact: PropTypes.bool,
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
    showAdditionalDetails: PropTypes.bool,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    classes: undefined,
    data: {
        birthDate: null,
        churchEntityId: null,
        churchEntityName: null,
        contactPreferences: null,
        emails: null,
        firstName: null,
        gender: null,
        gradeLevel: null,
        id: null,
        isAdult: null,
        isChild: null,
        isChurchEntityKnown: null,
        isDoNotContact: false,
        isDoNotEmail: false,
        isDoNotMail: false,
        isDoNotPhone: false,
        isDoNotText: false,
        isStudent: false,
        lastName: null,
        maritalStatus: null,
        nickName: null,
        noteCount: 0,
        personId: null,
        phones: null,
        prefix: null,
        profilePictureUrl: null,
        suffix: null,
    },
    isCompact: false,
    isExpanded: false,
    onClick: undefined,
    showAdditionalDetails: false,
    tabIndex: -1,
};

const bemClass = `${BEM_BLOCK_NAME}--summary`;

function ageText({ birthDate }) {
    if (!isEmpty(birthDate)) {
        return '';
    }

    return `${moment().diff(birthDate, 'years')}yr`;
}

function birthDateText({ birthDate }) {
    if (!isEmpty(birthDate)) {
        return '';
    }

    return moment.unix(birthDate).utc().format('MM/DD/YY');
}

function churchEntityNameText({
    churchEntityId,
    isChurchEntityKnown,
    churchEntityName,
}) {
    if (isNil(churchEntityId)) {
        return !isChurchEntityKnown ? 'Unkown' : 'Does Not Attend';
    }

    return churchEntityName;
}

// eslint-disable-next-line react/prop-types
function renderEmail({ email }) {
    if (!email) {
        return null;
    }

    return (
        <EmailLink
            email={email}
        />
    );
}


// eslint-disable-next-line react/prop-types
function renderPhone({ phone }) {
    if (phone) {
        return null;
    }

    return (
        <TelephoneLink
            number={phone}
        />
    );
}

function genderText({ gender }) {
    switch (gender) {
        case 'F':
            return 'Female';
        case 'M':
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

function renderContactText({
    /* eslint-disable react/prop-types */
    classes,
    isChild,
    isDoNotContact,
    isDoNotEmail,
    isDoNotMail,
    isDoNotPhone,
    isDoNotText,
    preferredContactMethod,
    email,
    phone,
    /* eslint-enable react/prop-types */
}) {
    let contactMethodText = '';
    let preferredContactInfoText = '';

    if (isDoNotContact) {
        contactMethodText = 'Do Not Contact This Individual';
    } else {
        switch (preferredContactMethod) {
            case 'email':
                contactMethodText = 'Prefers Email';

                if (renderEmail({ email })) {
                    preferredContactInfoText = renderEmail({ email });
                }

                break;
            case 'phone':
                contactMethodText = 'Prefers Phone';

                if (renderPhone({ phone })) {
                    preferredContactInfoText = renderPhone({
                        phone,
                    });
                }

                break;
            case 'text-message':
                contactMethodText = 'Prefers Text';

                if (phone) {
                    preferredContactInfoText = phone;
                }

                break;
            default:
                if (renderPhone({ phone })) {
                    preferredContactInfoText = renderPhone({ phone });
                } else if (renderEmail({ email })) {
                    preferredContactInfoText = renderEmail({ email });
                }
        }

        if (isDoNotEmail || isDoNotMail || isDoNotPhone || isDoNotText) {
            if (contactMethodText) {
                contactMethodText += ', DNC via';
            } else {
                contactMethodText = 'DNC via ';
            }

            if (isDoNotEmail) {
                contactMethodText += 'Email, ';
            }

            if (isDoNotMail) {
                contactMethodText += 'Mail, ';
            }

            if (isDoNotPhone) {
                contactMethodText += 'Phone, ';
            }

            if (isDoNotText) {
                contactMethodText += 'Text';
            }

            contactMethodText = trimEnd(contactMethodText, ', ');
        }
    }

    if (!isChild && (contactMethodText || preferredContactMethod !== 'none')) {
        return (
            <React.Fragment>
                {contactMethodText && (
                    <Typography
                        // eslint-disable-next-line react/prop-types
                        className={classes.preferredContactMethod}
                        component="h5"
                        variant="h5"
                    >
                        {`(${contactMethodText})`}
                    </Typography>
                )}

                {preferredContactMethod !== 'none' && preferredContactInfoText && (
                    <Typography
                        // eslint-disable-next-line react/prop-types
                        className={classes.preferredContactInfo}
                        variant="body2"
                    >
                        {preferredContactInfoText}
                    </Typography>
                )}
            </React.Fragment>
        );
    }

    return null;
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
            [`&.${bemClass}`]: {
                backgroundColor: palette.background.light,
                borderRadius,
                color: palette.text.primary,
                cursor: 'pointer',
                outline: 'none',
                padding: '13px 11px',
                position: 'relative',
                transition: colorTransition,
                userSelect: 'none',
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
                    backgroundColor: palette.teal[500],
                    borderRadius: `${borderRadius}px 0 0 ${borderRadius}px`,
                    opacity: 1,
                    width: '5px',
                    transition: `width ${transitionDuration} ease-in-out`,
                },
                '&-is_expanded': {
                    color: palette.text.contrastText,
                    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
                    '&::before': {
                        backgroundImage: palette.teal.G500,
                        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
                        width: '100%',
                    },
                },
                '&-is_compact': {
                    padding: '8px 11px',
                },
            },
        },
        additionalDetailsColumn: {
            width: 'auto !important',
            wordWrap: 'nowrap',
            '&-no_contact_info': {
                marginLeft: 'auto',
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
        contactInfoColumn: {
            width: 'auto !important',
            '&-has_contact_info': {
                marginLeft: 'auto',
            },
        },
        grid: {
            position: 'relative',
            zIndex: 2,
        },
        nameColumn: {
            marginRight: 'auto',
            width: 'auto !important',
        },
        noteCount: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
        },
        noteCountText: {
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
        noteIcon: {
            marginRight: '5px !important',
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
        preferredContactMethod: {
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
        preferredContactInfo: {
            fontWeight: theme.typography.fontWeightBold,
            '& .ui.a': {
                color: (props) => (
                    props.isExpanded ?
                        palette.text.contrastText :
                        palette.text.link
                ),
                transition: colorTransition,
                transitionDelay: (props) => (
                    props.isExpanded ?
                        '50ms' :
                        null
                ),
            },
        },
        row: {
            alignItems: 'center !important',
        },
    };
});

function PersonPanelSummary(props) {
    const [metaInfoText, setMetaInfoText] = useState('');
    const [renderContactInfo, setRenderContactInfo] = useState(null);
    const classes = useStyles(props);
    const {
        data: {
            birthDate,
            churchEntityId,
            churchEntityName,
            contactPreferences,
            emails,
            firstName,
            gender,
            gradeLevel,
            id: personId,
            isAdult,
            isChild,
            isChurchEntityKnown,
            isDoNotContact,
            isDoNotEmail,
            isDoNotMail,
            isDoNotPhone,
            isDoNotText,
            isStudent,
            lastName,
            maritalStatus,
            nickName,
            noteCount,
            phones,
            prefix,
            profilePictureUrl,
            suffix,
        },
        isCompact,
        isExpanded,
        onClick: onClickProp,
        showAdditionalDetails,
        tabIndex,
    } = props;
    const avatar = profilePictureUrl;
    const primaryPhone = find(phones, 'isPrimary');
    const primaryEmail = find(emails, 'isPrimary');
    const phone = primaryPhone && primaryPhone.displayPhoneNumber ? primaryPhone.displayPhoneNumber : 'N/A';
    const email = primaryEmail && primaryEmail.email ? primaryEmail.email : 'N/A';
    const preferredContactMethod = contactPreferences && contactPreferences.preferredMethod;

    useEffect(() => {
        let text = '';

        if (gender) {
            text += genderText({ gender });
        }

        if (isAdult && maritalStatus) {
            text += ` | ${maritalStatus}`;
        }

        if ((isChild || isStudent) && birthDate) {
            text += ` | ${ageText({ birthDate })} ${birthDateText({ birthDate })}`;
        }

        if ((isChild || isStudent) && gradeLevel) {
            text += ` | gr ${gradeLevelText({ gradeLevel })}`;
        }

        if (churchEntityName) {
            text += ` | ${churchEntityNameText({ isChurchEntityKnown, churchEntityId, churchEntityName })}`;
        }

        text = trimStart(text, '| ');

        setMetaInfoText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        gender,
        isAdult,
        maritalStatus,
        isChild,
        isStudent,
        birthDate,
        gradeLevel,
        churchEntityName,
    ]);

    useEffect(() => {
        setRenderContactInfo(
            renderContactText({
                classes,
                isChild,
                isDoNotContact,
                isDoNotEmail,
                isDoNotMail,
                isDoNotPhone,
                isDoNotText,
                preferredContactMethod,
                email,
                phone,
            }),
        );
    }, [
        classes,
        isChild,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        isExpanded,
        preferredContactMethod,
        email,
        phone,
    ]);

    const onClick = (event) => {
        onClickProp(event);
    };

    const onKeyDown = (event) => {
        onClickProp(event);
    };

    const rootClasses = ClassNames(
        classes.root,
        UI_CLASS_NAME,
        [`${bemClass}`],
        {
            [`${bemClass}-is_compact`]: isCompact,
            [`${bemClass}-is_expanded`]: isExpanded,
        },
    );
    const contactInfoColumnClasses = ClassNames(
        classes.contactInfoColumn,
        {
            [`${classes.contactInfoColumn}-has_contact_info`]: !!renderContactInfo,
        },
    );
    const additionalDetailsColumnClasses = ClassNames(
        classes.additionalDetailsColumn,
        {
            [`${classes.additionalDetailsColumn}-no_contact_info`]: !renderContactInfo,
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
                    className={classes.row}
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

                    {showAdditionalDetails && (personId || noteCount) && (
                        <Grid.Column
                            className={additionalDetailsColumnClasses}
                            textAlign="right"
                        >
                            {noteCount && (
                                <div
                                    className={classes.noteCount}
                                >
                                    <Icon
                                        className={classes.noteIcon}
                                        color={isExpanded ? 'primary' : 'warning'}
                                        inverse={isExpanded}
                                        type="file-alt"
                                    />

                                    <Typography
                                        className={classes.noteCountText}
                                        variant="caption"
                                    >
                                        {noteCount}
                                    </Typography>
                                </div>
                            )}

                            {personId && (
                                <Typography
                                    className={classes.personId}
                                    variant="caption"
                                >
                                    {`Id: ${personId}`}
                                </Typography>
                            )}
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        </div>
    );
}

PersonPanelSummary.propTypes = propTypes;
PersonPanelSummary.defaultProps = defaultProps;

export default PersonPanelSummary;
