import {
    Typography,
} from 'react-cm-ui';
import {
    isEmpty,
    map,
} from 'lodash';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import TableProps from './tableProps';

const propTypes = {
    api: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string,
            props: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    ),
};

const defaultProps = {
    api: [],
};

const useStyles = makeStyles({
    h2: {
        marginTop: '33px',
    },
    h3: {
        marginTop: '22px',
    },
    tableContainer: {
        padding: '0 22px',
    },
});

function ComponentApi(props) {
    const {
        api,
    } = props;
    const classes = useStyles();
    const isApiEmpty = isEmpty(api);

    if (isApiEmpty) {
        return null;
    }

    let itemNumKey = 0;

    return (
        <div
            className={classes.root}
        >
            <Typography
                // anchor="api"
                className={classes.h2}
                variant="h2"
            >
                API
            </Typography>

            {map(api, (item) => {
                const isItemPropsEmpty = isEmpty(item.props);

                if (isItemPropsEmpty) {
                    return null;
                }

                itemNumKey += 1;

                return (
                    <React.Fragment
                        key={`section-${itemNumKey}`}
                    >
                        <Typography
                            className={classes.h3}
                            variant="h3"
                        >
                            {item.heading}
                        </Typography>

                        <div
                            className={classes.tableContainer}
                        >
                            <TableProps props={item.props} />
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
