import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const propTypes = {
    children: PropTypes.node.isRequired,
    isDataFetching: PropTypes.bool,
};

const defaultProps = {
    isDataFetching: false,
};

const ACTIVITY_INDICATOR_DURATION = 200;

function DelayChildren(props) {
    const { children, isDataFetching } = props;
    const [isFetching, setIsFetching] = useState(isDataFetching);

    useEffect(() => {
        let isFetchingTimeout;

        if (isFetching && !isDataFetching) {
            isFetchingTimeout = setTimeout(() => {
                setIsFetching((prev) => !prev.isFetching);
            }, ACTIVITY_INDICATOR_DURATION / 2);
        }

        return () => clearTimeout(isFetchingTimeout);
    }, [isDataFetching, isFetching]);

    if (isFetching) {
        return null;
    }

    return children;
}

DelayChildren.propTypes = propTypes;
DelayChildren.defaultProps = defaultProps;

export default DelayChildren;
