import {
    Button,
    Grid,
} from 'react-cm-ui';
import ClassNames from 'classnames';
import Collapse from 'react-cm-ui/utils/collapse';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ExampleFrame from './exampleFrame';
import Highlighter from './highlighter';

const propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number,
    iframe: PropTypes.bool,
    inverse: PropTypes.bool,
    maxWidth: PropTypes.number,
    rawCode: PropTypes.string,
    title: PropTypes.string,
};

const defaultProps = {
    height: null,
    iframe: false,
    inverse: false,
    maxWidth: null,
    rawCode: null,
    title: null,
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape,
        typography,
    } = theme;

    return {
        codeContainerColumn: {
            padding: '11px 0',
            textAlign: 'right',
        },
        codeToggleIcon: {
            color: (props) => (
                props.isCodeExpanded ?
                    palette.text.active :
                    palette.text.secondary
            ),
            fontWeight: typography.fontWeightBold,
        },
        exampleColumn: {
            borderRadius: shape.borderRadius.main,
            boxShadow: `0 0 0 1px ${palette.border.secondary}`,
            padding: 22,
            '&$inverse': {
                backgroundColor: palette.background.contrastPrimary,
                color: palette.text.contrastText,
            },
        },
        highlighter: {
            marginTop: '11px !important',
        },
        inverse: {},
        root: {
            margin: '0',
            width: '100%',
            '& .highlighter.block': {
                marginBottom: '11px !important',
            },
        },
        sourceButton: {},
    };
});

function Example(props) {
    const {
        children,
        height,
        iframe,
        inverse,
        maxWidth,
        rawCode,
        title,
    } = props;

    const [isCodeExpanded, setIsCodeExpanded] = useState(false);

    const classes = useStyles({
        ...props,
        isCodeExpanded,
    });

    const onCodeToggle = () => {
        setIsCodeExpanded(!isCodeExpanded);
    };

    const codeButtonTitle = 'Show Source';

    return (
        <Grid
            className="example"
            classes={{
                root: classes.root,
            }}
            spacing={2}
        >
            <Grid.Column
                className={ClassNames({
                    [classes.inverse]: inverse,
                })}
                classes={{
                    root: classes.exampleColumn,
                }}
                sm={12}
            >
                {iframe ? (
                    <ExampleFrame
                        height={height}
                        maxWidth={maxWidth}
                        title={title}
                    >
                        {children}
                    </ExampleFrame>
                ) : children}
            </Grid.Column>

            <Grid.Column
                classes={{
                    root: classes.codeContainerColumn,
                }}
                sm={12}
            >
                <div>
                    <Button
                        className={classes.sourceButton}
                        icon
                        onClick={onCodeToggle}
                        title={codeButtonTitle}
                        transparent
                    >
                        <span
                            className={classes.codeToggleIcon}
                        >
                            {'</>'}
                        </span>
                    </Button>
                </div>

                {rawCode && (
                    <Collapse in={isCodeExpanded}>
                        <Highlighter
                            className={classes.highlighter}
                            customStyle={{
                                marginBottom: '44px',
                                marginTop: '0',
                            }}
                            language="jsx"
                        >
                            {rawCode}
                        </Highlighter>
                    </Collapse>
                )}
            </Grid.Column>
        </Grid>
    );
}

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
