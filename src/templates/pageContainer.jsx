import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    style: {},
};

function PageContainer(props) {
    const { children, className, style } = props;
    const containerClasses = ClassNames('ui', 'page--container', className);

    return (
        <div className={containerClasses} style={style}>
            {children}
        </div>
    );
}

PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;

export default PageContainer;
