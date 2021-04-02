import {
    Header,
    Highlighter,
    DropdownMenu,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as dropdownMenuDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/dropdownMenu/dropdownMenu';
/* eslint-enable import/no-named-default, import/extensions */

const children = [1, 2, 3, 4, 5, 6];
const isOpen = true;
const id = 'myId';
const theme = 'dark';

const dropDownMenuSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const children = [1, 2, 3, 4, 5, 6];
    const isOpen = true;
    const id = 'myId';
    const theme = 'dark';

    render() {
        return (
            <DropdownMenu
                id={id}
                isOpen={isOpen}
                children={children}
                onToggleOpen={() => console.log('Open!')}
                optionsTheme={theme}
            />
        );
    }
}`;

function DocsDropdownMenu() {
    const descriptionCopy = dropdownMenuDoc.description;

    return (
        <Main page="dropdown_menu">
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {descriptionCopy}
                    </Typography>
                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        dropdownMenuDoc,
                    ]}
                />

                {/* Data Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Drop Down Menu
                    <Header.Subheader>
                        Drop Down Menu component.
                    </Header.Subheader>
                </Header>

                {/* <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {dropDownMenuSample}
                </Highlighter> */}

                <DropdownMenu
                    id={id}
                    isOpen={isOpen}
                    children={children}
                    onToggleOpen={() => console.log('Open!')}
                    optionsTheme={theme}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsDropdownMenu;
