import React, {
    useState,
} from 'react';
import { ButtonGroup } from '@saddlebackchurch/react-cm-ui';

function ButtonGroupSample() {
    const [value, setValue] = useState(1);

    return (
        <ButtonGroup
            buttons={[
                { value: 1, label: 'One' },
                { value: 2, label: 'Two' },
                { value: 3, label: 'Three' },
            ]}
            onChange={setValue}
            value={value}
        />
    );
}

export default ButtonGroupSample;
