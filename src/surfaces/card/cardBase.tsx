import Card from '@material-ui/core/Card';
import React from 'react';
import CardDeprecated from './cardDeprecated';

type PropTypes = {
    children: React.ReactNode;
    /**
     * Dependent on the designVersion number, the component can either use our old Card component
     * or the new Card component.
     */
    designVersion?: number;
};

// eslint-disable-next-line prefer-arrow-callback
const CardBase = React.forwardRef(function CardBase({
    children,
    designVersion = 1,
    ...otherProps
}: PropTypes, ref) {
    if (designVersion === 2) {
        return (
            <Card
                ref={ref}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {children}
            </Card>
        );
    }

    return (
        <CardDeprecated
            // @ts-ignore
            ref={ref}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </CardDeprecated>
    );
});

export default CardBase;
