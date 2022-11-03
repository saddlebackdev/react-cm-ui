import {
    Icon,
} from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleGradient() {
    return (
        <Icon
            color="customGradient"
            gradient={(
                <linearGradient
                    x1="72.6040927%"
                    y1="50%"
                    x2="0%"
                    y2="50%"
                    id="linearGradient-2"
                >
                    <stop stopColor="#E175AE" offset="0%" />
                    <stop stopColor="#FFC187" offset="100%" />
                </linearGradient>
            )}
            size={64}
            type="activity"
        />
    );
}

export default ExampleGradient;
