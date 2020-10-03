import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import ReactDOM from 'react-dom';
import ExampleFramed from './exampleFramed';

const propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired,
};

const defaultProps = {
    children: null,
    maxWidth: null,
};

const useStyles = makeStyles(() => ({
    frame: {
        height: 400,
        border: 'none',
        maxWidth: (props) => props.maxWidth,
        width: '100%',
    },
}));

function ExampleFrame(props) {
    const {
        children,
        title,
    } = props;

    const classes = useStyles(props);

    const frameRef = useRef(null);

    const [frameLoaded, setFrameLoaded] = useState(false);

    useEffect(() => {
        const frameDocument = frameRef.current.contentDocument;

        if (frameDocument && frameDocument.readyState === 'complete' && !frameLoaded) {
            setFrameLoaded(true);
        }
    }, [frameLoaded]);

    const frameDocument = frameRef.current?.contentDocument;

    return (
        <React.Fragment>
            <iframe
                className={classes.frame}
                onLoad={setFrameLoaded}
                ref={frameRef}
                title={title}
            />

            {frameLoaded !== false && ReactDOM.createPortal(
                <ExampleFramed
                    frameDocument={frameDocument}
                >
                    {children}
                </ExampleFramed>,
                frameDocument.body,
            )}
        </React.Fragment>
    );
}

ExampleFrame.propTypes = propTypes;
ExampleFrame.defaultProps = defaultProps;

export default ExampleFrame;
