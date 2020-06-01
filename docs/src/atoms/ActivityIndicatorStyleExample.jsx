import { ActivityIndicator } from 'react-cm-ui';
import { borderColor } from 'react-cm-ui/styles/colorExports';
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
