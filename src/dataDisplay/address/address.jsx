import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    countryAlpha2: PropTypes.string,
    postalCode: PropTypes.string,
    region: PropTypes.string,
    regionCode: PropTypes.string,
};

const defaultProps = {
    address1: '',
    address2: '',
    city: '',
    country: '',
    countryAlpha2: '',
    postalCode: '',
    region: '',
    regionCode: '',
};

function Address(props) {
    const {
        address1,
        address2,
        city,
        country,
        countryAlpha2,
        postalCode,
        region,
        regionCode,
    } = props;

    return (
        <div>
            <span>{address1}</span>

            <br />

            {address2 && (
                <React.Fragment>
                    <span>{address2}</span>

                    <br />
                </React.Fragment>
            )}

            <span>
                {`${city}, ${countryAlpha2 === 'US' ? regionCode : region} ${postalCode || ''}`}
            </span>

            <br />

            <span>{country}</span>
        </div>
    );
}

Address.propTypes = propTypes;
Address.defaultProps = defaultProps;

export default Address;
