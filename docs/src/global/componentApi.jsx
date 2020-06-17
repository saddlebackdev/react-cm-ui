import {
    camelCase,
    isEmpty,
    isNil,
    map,
    upperFirst,
} from 'lodash';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import Heading from './heading';
import MarkdownContainer from './markdownContainer';
import ComponentApiTable from './componentApiTable';

const propTypes = {
    docs: PropTypes.arrayOf(
        PropTypes.shape({
            displayName: PropTypes.string,
            props: PropTypes.arrayOf(
                PropTypes.shape({
                    defaultValue: PropTypes.shape({
                        computed: PropTypes.bool,
                        value: PropTypes.string,
                    }),
                    description: PropTypes.string,
                    required: PropTypes.bool,
                    type: PropTypes.shape({
                        name: PropTypes.string,
                        value: PropTypes.arrayOf(PropTypes.shape({
                            computed: PropTypes.bool,
                            value: PropTypes.string,
                        })),
                    }),
                }),
            ),
        }),
    ),
};

const defaultProps = {
    docs: [],
};

const useStyles = makeStyles({
    root: {},
    tableContainer: {
        padding: '0 22px',
    },
});

function ComponentApi(props) {
    const {
        docs,
    } = props;
    const classes = useStyles();
    const isDocsNotDefined = isNil(docs) || isEmpty(docs);

    if (isDocsNotDefined) {
        return null;
    }

    let docKeyNum = 1;

    return (
        <div
            className={classes.root}
        >
            <MarkdownContainer>
                <Heading
                    anchorLink="api"
                    variant="h2"
                >
                    API
                </Heading>
            </MarkdownContainer>

            {map(docs, (doc) => {
                docKeyNum += 1;

                const {
                    displayName,
                    props: componentProps,
                } = doc;

                return (
                    <React.Fragment key={`doc_props-${docKeyNum}`}>
                        <MarkdownContainer>
                            <Heading
                                anchorLink={`api${upperFirst(camelCase(displayName))}`}
                                variant="h3"
                            >
                                {`${displayName} Props`}
                            </Heading>
                        </MarkdownContainer>

                        <div
                            className={classes.tableContainer}
                        >
                            <ComponentApiTable
                                componentProps={componentProps}
                            />
                        </div>
                    </React.Fragment>
                );
            })}

        </div>
    );
}

ComponentApi.propTypes = propTypes;
ComponentApi.defaultProps = defaultProps;

export default ComponentApi;
