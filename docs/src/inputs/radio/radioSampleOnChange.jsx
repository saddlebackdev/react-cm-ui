/* eslint-disable linebreak-style */
import React, {
    useState,
} from 'react';
import { Radio } from 'react-cm-ui';

function RadioSampleOnChange() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Radio
            checked={isChecked}
            label="On change question."
            onChange={() => setIsChecked((prevIsChecked) => !prevIsChecked)}
        />
    );
}

export default RadioSampleOnChange;
