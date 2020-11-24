import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentApi from '../../../global/componentApi';
import Main from '../../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/modal/modal';
import { default as modalActionsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/modal/modalActions';
import { default as modalContentDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/modal/modalContent';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsApi() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <ComponentApi
                    docs={[
                        rootDoc,
                        modalActionsDoc,
                        modalContentDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

DocsApi.propTypes = propTypes;

export default DocsApi;
