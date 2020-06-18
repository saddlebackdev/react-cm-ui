import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.string,
    // eslint-disable-next-line no-underscore-dangle
    date: MomentPropTypes.momentObj.withPredicate((momentObj) => momentObj._isUTC).isRequired,
    id: PropTypes.string,
    locale: PropTypes.string,
    style: PropTypes.shape({}),
    relativeTime: PropTypes.shape({
        s: PropTypes.string,
        ss: PropTypes.string,
        m: PropTypes.string,
        mm: PropTypes.string,
        h: PropTypes.string,
        hh: PropTypes.string,
        d: PropTypes.string,
        dd: PropTypes.string,
        M: PropTypes.string,
        MM: PropTypes.string,
        y: PropTypes.string,
        yy: PropTypes.string,
    }),
    relativeTimeRounding: PropTypes.oneOf([Math.round, Math.floor]),
    relativeTimeThreshold: PropTypes.shape({
        ss: PropTypes.number,
        s: PropTypes.number,
        m: PropTypes.number,
        h: PropTypes.number,
        d: PropTypes.number,
        M: PropTypes.number,
    }),
};

const defaultProps = {
    className: undefined,
    id: undefined,
    locale: 'en',
    style: {},
    relativeTime: {},
    relativeTimeRounding: undefined,
    relativeTimeThreshold: {},
};

function TimeFromNow(props) {
    const {
        className,
        date,
        id,
        locale,
        style,
        relativeTime,
        relativeTimeThreshold,
        relativeTimeRounding,
    } = props;
    const containerClasses = ClassNames('ui', 'time_from_now', className);
    const defaultRelativeTime = moment().locale(locale).localeData()._relativeTime; // eslint-disable-line no-underscore-dangle, max-len
    const defaultRounding = moment.relativeTimeRounding();
    /* eslint-disable camelcase */
    const defaultThreshold_ss = moment.relativeTimeThreshold('ss');
    const defaultThreshold_s = moment.relativeTimeThreshold('s');
    const defaultThreshold_m = moment.relativeTimeThreshold('m');
    const defaultThreshold_h = moment.relativeTimeThreshold('h');
    const defaultThreshold_d = moment.relativeTimeThreshold('d');
    const defaultThreshold_M = moment.relativeTimeThreshold('M');
    /* eslint-enable camelcase */

    // Customizing moment's relativeTime
    if (relativeTime) {
        moment.updateLocale(locale, { relativeTime });
    }

    // Customizing moment's relativeTimeRounding
    if (relativeTimeRounding) {
        moment.relativeTimeRounding(relativeTimeRounding);
    }

    // Customizing moment's relativeTimeThreshold
    if (relativeTimeThreshold) {
        /* eslint-disable camelcase */
        moment.relativeTimeThreshold('ss', relativeTimeThreshold.ss || defaultThreshold_ss);
        moment.relativeTimeThreshold('s', relativeTimeThreshold.s || defaultThreshold_s);
        moment.relativeTimeThreshold('m', relativeTimeThreshold.m || defaultThreshold_m);
        moment.relativeTimeThreshold('h', relativeTimeThreshold.h || defaultThreshold_h);
        moment.relativeTimeThreshold('d', relativeTimeThreshold.d || defaultThreshold_d);
        moment.relativeTimeThreshold('M', relativeTimeThreshold.M || defaultThreshold_M);
        /* eslint-enable camelcase */
    }

    // Setting fromNow string with customized relativeTime
    const fromNowTime = moment(date).fromNow(true);

    // Reverting moment's relativeTime.
    moment.updateLocale(locale, { relativeTime: defaultRelativeTime });

    // Reverting moment's relativeTimeRounding.
    moment.relativeTimeRounding(defaultRounding);

    // Reverting moment's relativeTimeThresholds.
    /* eslint-disable camelcase */
    moment.relativeTimeThreshold('ss', defaultThreshold_ss);
    moment.relativeTimeThreshold('s', defaultThreshold_s);
    moment.relativeTimeThreshold('m', defaultThreshold_m);
    moment.relativeTimeThreshold('h', defaultThreshold_h);
    moment.relativeTimeThreshold('d', defaultThreshold_d);
    moment.relativeTimeThreshold('m', defaultThreshold_M);
    /* eslint-enable camelcase */

    return (
        <span
            className={containerClasses}
            id={id}
            style={style}
        >
            {fromNowTime}
        </span>
    );
}

TimeFromNow.propTypes = propTypes;
TimeFromNow.defaultProps = defaultProps;

export default TimeFromNow;
