import { Button, Icon } from 'react-cm-ui';
import React from 'react';

function ButtonIconExample() {
    return (
        <div>
            <Button icon>
                <Icon color="inverse" type="plus" />
            </Button>

            <Button icon>
                <Icon color="inverse" size="medium" type="times" />
            </Button>

            <Button>
                <Icon color="inverse" type="cards" />
                <span>Icon On The Left</span>
            </Button>
        </div>
    );
}

export default ButtonIconExample;
