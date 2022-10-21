import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';
import {
    ButtonGroup,
    Typography,
} from 'react-cm-ui';// eslint-disable-line import/no-unresolved
import {
    camelCase,
} from 'lodash';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';

const displayName = 'button group';

const description = 'The ButtonGroup component can be used to group related buttons.';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

export default function DocsButtonGroup(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const [value, setValue] = useState(1);

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading
                        anchorLink="basic-button-group"
                        variant="h2"
                    >
                        Basic button group
                    </Heading>

                    <Example>
                        <ButtonGroup
                            buttons={[
                                { value: 1, label: 'One' },
                                { value: 2, label: 'Two' },
                                { value: 3, label: 'Three' },
                            ]}
                            onChange={setValue}
                            value={value}
                        />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsButtonGroup.propTypes = propTypes;
