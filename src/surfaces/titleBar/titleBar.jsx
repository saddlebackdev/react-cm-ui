import {
    isEmpty,
} from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../dataDisplay/typography';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    subTitle: PropTypes.string,
    title: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
    style: null,
    subTitle: null,
    title: null,
};

function TitleBar(props) {
    const {
        children,
        className,
        style,
        subTitle,
        title,
    } = props;

    const rootClasses = ClassNames(
        'ui',
        'title-bar',
        className,
    );

    return (
        <header className={rootClasses} style={style}>
            <MediaQuery maxWidth={767}>
                {(matches) => (
                    <React.Fragment>
                        <Typography
                            as={matches ? 'h4' : 'h2'}
                            sub={!isEmpty(subTitle)}
                        >
                            {title}
                        </Typography>

                        {!isEmpty(subTitle) && (
                            <Typography
                                color="textSecondary"
                                variant="h4"
                            >
                                {subTitle}
                            </Typography>
                        )}
                    </React.Fragment>
                )}
            </MediaQuery>

            {children && (
                <div className="title-bar-children">
                    {children}
                </div>
            )}
        </header>
    );
}

TitleBar.propTypes = propTypes;
TitleBar.defaultProps = defaultProps;

export default TitleBar;
