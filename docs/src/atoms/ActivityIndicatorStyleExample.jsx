import { ActivityIndicator } from 'react-cm-ui';
import { borderColor } from 'global/styles/colors.scss';
import React from 'react';

function ActivityIndicatorStyleExample() {
    return (
        <ActivityIndicator
            style={{
                boxShadow: `0 0 0 10px ${borderColor}`,
                margin: '22px',
            }}
        />
    );
}

export default ActivityIndicatorStyleExample;
