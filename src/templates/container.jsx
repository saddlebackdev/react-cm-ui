import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    style: {},
};

function PageContainer(props) {
    const {
        children,
        className,
        id,
        moduleType,
        style,
    } = props;
    const bemName = `${moduleType}--content`;
    const containerClasses = ClassNames('ui', bemName, className);

    return (
        <div className={containerClasses} id={id} style={style}>
            {children}
        </div>
    );
}

PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;

export default PageContainer;
