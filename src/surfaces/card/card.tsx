import MUICard from '@material-ui/core/Card';
import React from 'react';

type PropTypes = {
    raised?: boolean;
};

function Card(props: PropTypes) {
    const {
        raised = false,
        ...otherProps
    } = props;

    return (
        <MUICard
            elevation={raised && 22}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            raised={false}
        />
    );
}

export default Card;
