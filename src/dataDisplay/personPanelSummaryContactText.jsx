import {
    Typography,
} from 'react-cm-ui';
import {
    isEmpty,
    trimEnd,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import TelephoneLink from '../utils/telephoneLink';
import EmailLink from '../utils/emailLink';

const propTypes = {
    isCompact: PropTypes.bool,
    isDoNotContact: PropTypes.bool,
    isDoNotEmail: PropTypes.bool,
    isDoNotMail: PropTypes.bool,
    isDoNotPhone: PropTypes.bool,
    isDoNotText: PropTypes.bool,
    isExpanded: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    preferredMethod: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    recordType: PropTypes.oneOf([
        'adult',
        'child',
        'student',
    ]),
};

const defaultProps = {
    isCompact: false,
    isDoNotContact: false,
    isDoNotEmail: false,
    isDoNotMail: false,
    isDoNotPhone: false,
    isDoNotText: false,
    isExpanded: false,
    preferredMethod: undefined,
    email: undefined,
    phone: undefined,
    recordType: 'adult',
};

// eslint-disable-next-line react/prop-types
function renderEmail({ email }) {
    if (isEmpty(email)) {
        return null;
    }

    if (email === 'N/A') {
        return email;
    }

    return (
        <EmailLink
            email={email}
        />
    );
}


// eslint-disable-next-line react/prop-types
function renderPhone({ phone }) {
    if (isEmpty(phone)) {
        return null;
    }

    if (phone === 'N/A') {
        return phone;
    }

    return (
        <TelephoneLink
            number={phone}
        />
    );
}

const useStyles = makeStyles((theme) => {
    const {
        palette,
    } = theme;
    const transitionDuration = '200ms';
    const colorTransition = `color ${transitionDuration} ease-out`;

    return {
        contactText: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '250px !important',
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
            '&$compact': {
                display: 'none',
            },
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
        compact: {},
    };
});

function PersonPanelSummaryContactText(props) {
    const {
        isCompact,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        preferredMethod,
        email,
        phone,
        recordType,
    } = props;
    const classes = useStyles(props);
    let contactMethodText = '';
    let preferredContactInfoText = '';

    if (isDoNotContact) {
        contactMethodText = 'Do Not Contact This Individual';
    } else {
        switch (preferredMethod) {
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
            case 'mail':
            case 'none':
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

    if (recordType !== 'child' && (contactMethodText || preferredMethod !== 'none')) {
        const preferredContactMethodClasses = ClassNames(classes.preferredContactMethod, {
            [classes.compact]: isCompact,
        });

        return (
            <div
                // eslint-disable-next-line react/prop-types
                className={classes.contactText}
            >
                {contactMethodText && (
                    <Typography
                        // eslint-disable-next-line react/prop-types
                        className={preferredContactMethodClasses}
                        component="h5"
                        variant="h5"
                    >
                        {`(${contactMethodText})`}
                    </Typography>
                )}

                {preferredMethod !== 'none' && preferredContactInfoText && (
                    <Typography
                        // eslint-disable-next-line react/prop-types
                        className={classes.preferredContactInfo}
                        variant="body2"
                    >
                        {preferredContactInfoText}
                    </Typography>
                )}
            </div>
        );
    }

    return null;
}

PersonPanelSummaryContactText.propTypes = propTypes;
PersonPanelSummaryContactText.defaultProps = defaultProps;

export default PersonPanelSummaryContactText;
