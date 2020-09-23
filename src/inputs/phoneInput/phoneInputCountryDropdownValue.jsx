import ClassNames from 'classnames';
import React from 'react';

function PhoneInputCountryDropdownValue(selectedOption) {
    if (!selectedOption) {
        return null;
    }

    const containerClasses = ClassNames('Select-value');
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
