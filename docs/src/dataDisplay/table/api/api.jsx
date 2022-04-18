import {
    camelCase,
} from 'lodash';
import React from 'react';
import ComponentApi from '../../../global/componentApi';
import Main from '../../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/table';
import { default as tableBodyDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/tableBody';
import { default as tableCellDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/tableCell';
import { default as tableHeaderDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/tableHeader';
import { default as tableRowDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/tableRow';
/* eslint-enable import/no-named-default, import/extensions */

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
                        tableBodyDoc,
                        tableCellDoc,
                        tableHeaderDoc,
                        tableRowDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsApi;
