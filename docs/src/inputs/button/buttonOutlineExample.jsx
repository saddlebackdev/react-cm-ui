import { Button, Icon } from 'react-cm-ui';
import React from 'react';

function ButtonOutlineExample() {
    return (
        <div>
            <Button color="alert" outline>
                <Icon type="envelope" />
                <span>Alert</span>
            </Button>

            <Button color="alternate" outline>
                <Icon type="envelope" />
                <span>Alternate</span>
            </Button>

            <Button color="disable" outline>
                <Icon type="envelope" />
                <span>Disable</span>
            </Button>

            <Button color="light" outline>
                <Icon type="envelope" />
                <span>Light</span>
            </Button>

            <Button color="outline" outline>
                <Icon type="envelope" />
                <span>Outline</span>
            </Button>

            <Button color="primary" outline>
                <Icon type="envelope" />
                <span>Primary</span>
            </Button>

            <Button color="secondary" outline>
                <Icon type="envelope" />
                <span>Secondary</span>
            </Button>

            <Button color="success" outline>
                <Icon type="envelope" />
                <span>Success</span>
            </Button>

            <Button color="warning" outline>
                <Icon type="envelope" />
                <span>Warning</span>
            </Button>
        </div>
    );
}

export default ButtonOutlineExample;
