import React, {
    useState,
} from 'react';
import { Radio } from 'react-cm-ui';

function ExampleOnChange() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Radio
            checked={isChecked}
            label="On change question."
            onChange={() => setIsChecked((prevIsChecked) => !prevIsChecked)}
        />
    );
}

export default ExampleOnChange;
