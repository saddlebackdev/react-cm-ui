import { create } from 'jss';
import jssPreset from 'react-cm-ui/styles/jssPreset';
import PropTypes from 'prop-types';
import React, {
    useCallback,
    useEffect,
    useMemo,
} from 'react';
import rtl from 'jss-rtl';
import StylesProvider from 'react-cm-ui/styles/stylesProvider';
import useTheme from 'react-cm-ui/styles/useTheme';

const propTypes = {
    children: PropTypes.node,
    frameDocument: PropTypes.shape({
        body: PropTypes.shape({
            dir: PropTypes.string,
        }),
        defaultView: PropTypes.shape({}),
        head: PropTypes.shape({}),
    }).isRequired,
};

const defaultProps = {
    children: null,
};

function ExampleFramed(props) {
    const { children, frameDocument } = props;

    const theme = useTheme();

    useEffect(() => {
        frameDocument.body.dir = theme.direction;

        const link = document.createElement('link');

        link.href = '/css/bundle.css';
        link.rel = 'stylesheet';

        // eslint-disable-next-line react/prop-types
        frameDocument.head.appendChild(link);
    }, [
        frameDocument,
        theme.direction,
    ]);

    const { jss, sheetsManager } = useMemo(() => ({
        jss: create({
            plugins: [
                ...jssPreset().plugins,
                rtl(),
            ],
            insertionPoint: frameDocument.head,
        }),
        sheetsManager: new Map(),
    }), [frameDocument]);

    const getWindow = useCallback(() => frameDocument.defaultView, [frameDocument]);

    return (
        <StylesProvider
            jss={jss}
            sheetsManager={sheetsManager}
        >
            {React.cloneElement(children, {
                window: getWindow().document.body,
            })}
        </StylesProvider>
    );
}

ExampleFramed.propTypes = propTypes;
ExampleFramed.defaultProps = defaultProps;

export default ExampleFramed;
