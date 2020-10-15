import {
    TitleBar,
} from 'react-cm-ui';
import {
    camelCase,
    startCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import InputSubNavigation from '../inputSubNavigation';
import ComponentApi from '../../../global/componentApi';
import Main from '../../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/input/input';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function Api() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <TitleBar title={startCase(displayName)} />

            <InputSubNavigation />

            <Main.Content>
                <ComponentApi
                    docs={[
                        rootDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

Api.propTypes = propTypes;

export default Api;
