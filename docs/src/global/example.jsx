import {
    Button,
    Grid,
    Icon,
} from 'react-cm-ui';
/* eslint-disable import/extensions */
import Collapse from 'react-cm-ui/utils/collapse';
import makeStyles from 'react-cm-ui/styles/makeStyles';
/* eslint-enable import/extensions */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Highlighter from './highlighter';

const propTypes = {
    children: PropTypes.node.isRequired,
    rawCode: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape,
        typography,
    } = theme;

    return {
        codeContainerColumn: {
            paddingTop: 0,
        },
        codeToggleIcon: {
            color: (props) => (
                props.isCodeExpanded ?
                    palette.text.active :
                    palette.text.secondary
            ),
            fontWeight: typography.fontWeightBold,
        },
        highlighter: {
            marginTop: '11px !important',
        },
    };
});

function Example(props) {
    const {
        children,
        rawCode,
    } = props;
    const [isCodeExpanded, setIsCodeExpanded] = useState(false);

    const onCodeToggle = () => {
        setIsCodeExpanded(!isCodeExpanded);
    };

    const classes = useStyles({
        ...props,
        isCodeExpanded,
    });
    const codeButtonTitle = 'Show Source';

    return (
        <Grid
            className="example"
            columns={1}
        >
            <Grid.Row>
                <Grid.Column>
                    {children}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column
                    className={classes.codeContainerColumn}
                    textAlign="right"
                >
                    <div>
                        <Button
                            color="transparent"
                            icon
                            onClick={onCodeToggle}
                            title={codeButtonTitle}
                        >
                            <span
                                className={classes.codeToggleIcon}
                            >
                                {'</>'}
                            </span>
                        </Button>
                    </div>

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
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

Example.propTypes = propTypes;

export default Example;
