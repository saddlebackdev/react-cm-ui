import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';

// PropTypes
export const ACCEPTED_CHRIST_DATE_PROP_TYPE = PropTypes.string;
export const ACTIVE_IN_MISSIONS_DATE_PROP_TYPE = PropTypes.string;
export const ATTENDED_CLASS101_DATE_PROP_TYPE = PropTypes.string;
export const ATTENDED_CLASS201_DATE_PROP_TYPE = PropTypes.string;
export const ATTENDED_CLASS301_DATE_PROP_TYPE = PropTypes.string;
export const ATTENDED_CLASS401_DATE_PROP_TYPE = PropTypes.string;
export const BAPTISM_DATE_PROP_TYPE = PropTypes.string;
export const DISABLE_POPOVER_PROP_TYPE = PropTypes.bool;
export const DISABLE_POPOVER_DEFAULT_PROP = false;
export const HAS_ACCEPTED_CHRIST_PROP_TYPE = PropTypes.bool;
export const CONGREGATION_DATE_PROP_TYPE = PropTypes.oneOfType([
    MomentPropTypes.momentString,
    PropTypes.oneOf([null]),
]);
export const FIRST_CONTACT_DATE_PROP_TYPE = PropTypes.oneOfType([
    MomentPropTypes.momentString,
    PropTypes.oneOf([null]),
]);
export const FIRST_MINISTRY_JOIN_DATE_PROP_TYPE = PropTypes.string;
export const FIRST_SMALL_GROUP_JOIN_DATE_PROP_TYPE = PropTypes.string;
export const HAS_SIGNED_MATURITY_COVENANT_PROP_TYPE = PropTypes.bool;
export const HAS_SIGNED_MEMBERSHIP_AGREEMENT_PROP_TYPE = PropTypes.bool;
export const HAS_SIGNED_MINISTRY_COVENANT_PROP_TYPE = PropTypes.bool;
export const HAS_SIGNED_MISSION_COVENANT_PROP_TYPE = PropTypes.bool;
export const HAS_TAKEN_CLASS101_PROP_TYPE = PropTypes.bool;
export const HAS_TAKEN_CLASS201_PROP_TYPE = PropTypes.bool;
export const HAS_TAKEN_CLASS301_PROP_TYPE = PropTypes.bool;
export const HAS_TAKEN_CLASS401_PROP_TYPE = PropTypes.bool;
export const ICON_COLOR_DEFAULT_PROP = null;
export const ICON_COLOR_PROP_TYPE = PropTypes.string;
export const ICON_SIZE_PROP_TYPE = PropTypes.number;
export const INVERSE_PROP_TYPE = PropTypes.bool;
export const IS_ACTIVE_IN_MISSIONS_PROP_TYPE = PropTypes.bool;
export const IS_BAPTISED_PROP_TYPE = PropTypes.bool;
export const IS_IN_MINISTRY_PROP_TYPE = PropTypes.bool;
export const IS_IN_SMALL_GROUP_PROP_TYPE = PropTypes.bool;
export const REMOVE_ACCEPTED_CHRIST_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_BAPTISM_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_CLASS_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_CONGREGATION_DATE_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_FIRST_CONTACT_DATE_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_IN_MINISTRY_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_IN_TRIPS_COLUMN_PROP_TYPE = PropTypes.bool;
export const REMOVE_SMALL_GROUP_COLUMN_PROP_TYPE = PropTypes.bool;
export const SIGNED_MATURITY_COVENANT_DATE_PROP_TYPE = PropTypes.string;
export const SIGNED_MEMBERSHIP_AGREEMENT_DATE_PROP_TYPE = PropTypes.string;
export const SIGNED_MINISTRY_COVENANT_DATE_PROP_TYPE = PropTypes.string;
export const SIGNED_MISSION_COVENANT_DATE_PROP_TYPE = PropTypes.string;

// Default Props
export const ICON_SIZE_DEFAULT_PROP = 16;
export const INVERSE_DEFAULT_PROP = false;
export const REMOVE_ACCEPTED_CHRIST_COLUMN_DEFAULT_PROP = false;
export const REMOVE_BAPTISM_COLUMN_DEFAULT_PROP = false;
export const REMOVE_CLASS_COLUMN_DEFAULT_PROP = false;
export const REMOVE_CONGREGATION_DATE_COLUMN_DEFAULT_PROP = false;
export const REMOVE_FIRST_CONTACT_DATE_COLUMN_DEFAULT_PROP = false;
export const REMOVE_IN_MINISTRY_COLUMN_DEFAULT_PROP = false;
export const REMOVE_IN_TRIPS_COLUMN_DEFAULT_PROP = false;
export const REMOVE_SMALL_GROUP_COLUMN_DEFAULT_PROP = false;
