import ClassNames from 'classnames';
import React from 'react';

function PhoneInputCountryDropdownValue(selectedOption) {
    const containerClasses = ClassNames('Select-value');

    if (!selectedOption) {
        return null;
    }

    const countryCode = selectedOption.value;
    const FlagIcon = selectedOption.icon;

    return (
        <div
            className={containerClasses}
            title={selectedOption.label}
        >
            <FlagIcon value={countryCode} />
        </div>
    );
}

export default PhoneInputCountryDropdownValue;
