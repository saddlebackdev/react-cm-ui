import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Container from '../container';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    id: null,
};

function PageContainer(props) {
    const {
        children,
        classes,
        className,
        id,
    } = props;

    const rootClasses = ClassNames(
        'ui',
        'page--container',
        classes.root,
        className,
    );

    return (
        <Container
            classes={classes}
            className={rootClasses}
            id={id}
            moduleType="page"
        >
            {children}
        </Container>
    );
}

PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;

export default PageContainer;
