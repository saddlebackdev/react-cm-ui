import PropTypes from 'prop-types';
import React from 'react';

const ACTIVITY_INDICATOR_DURATION = 200;

class DelayChildren extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isDataFetching: props.isDataFetching,
        };
    }

    componentDidUpdate(prevProps) {
        const { props: nextProps } = this;

        if (prevProps.isDataFetching && !nextProps.isDataFetching) {
            setTimeout(() => {
                this.setState((prevState) => ({
                    isDataFetching: !prevState.isDataFetching,
                }));
            }, ACTIVITY_INDICATOR_DURATION / 2);
        }
    }

    render() {
        const { children } = this.props;
        const { isDataFetching } = this.state;

        if (isDataFetching) {
            return (
                <div />
            );
        }

        return children;
    }
}

DelayChildren.propTypes = {
    children: PropTypes.node.isRequired,
    isDataFetching: PropTypes.bool,
};

DelayChildren.defaultProps = {
    isDataFetching: false,
};

export default DelayChildren;
