import { Button, Icon } from 'react-cm-ui';
import React from 'react';

function ButtonOutlineExample() {
    return (
        <div>
            <Button color="alert" outlined>
                <Icon type="envelope" />
                <span>Alert</span>
            </Button>

            <Button color="alternate" outlined>
                <Icon type="envelope" />
                <span>Alternate</span>
            </Button>

            <Button color="disable" outlined>
                <Icon type="envelope" />
                <span>Disable</span>
            </Button>

            <Button color="light" outlined>
                <Icon type="envelope" />
                <span>Light</span>
            </Button>

            <Button color="outline" outlined>
                <Icon type="envelope" />
                <span>Outline</span>
            </Button>

            <Button color="primary" outlined>
                <Icon type="envelope" />
                <span>Primary</span>
            </Button>

            <Button color="secondary" outlined>
                <Icon type="envelope" />
                <span>Secondary</span>
            </Button>

            <Button color="success" outlined>
                <Icon type="envelope" />
                <span>Success</span>
            </Button>

            <Button color="warning" outlined>
                <Icon type="envelope" />
                <span>Warning</span>
            </Button>
        </div>
    );
}

export default ButtonOutlineExample;
