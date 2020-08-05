import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: null,
    className: null,
    id: null,
    style: null,
};

const useStyles = makeStyles((theme) => {
    const {
        breakpoints,
    } = theme;

    return {
        root: {
            marginTop: 50,
            [breakpoints.down('md')]: {
                transition: 'margin-top 333ms ease-in-out',
                '&.page--container-has_action_bar_mobile_search_visible': {
                    marginTop: 105,
                },
            },
            [breakpoints.up('md')]: {
                marginTop: 70,
            },
        },
    };
});

function PageContainer(props) {
    const {
        children,
        className,
        id,
        style,
    } = props;

    const classes = useStyles(props);
    const rootClasses = ClassNames(
        'ui',
        classes.root,
        'page--container',
        className,
    );

    return (
        <div
            className={rootClasses}
            id={id}
            style={style}
        >
            {children}
        </div>
    );
}

PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;

export default PageContainer;
