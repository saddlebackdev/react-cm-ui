import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import useStyles from './tableStyles';
import { withStyles } from '../../styles';

const propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.shape({
        tableHeader: PropTypes.string,
    }),
    className: PropTypes.string,
    desktop: PropTypes.bool,
    desktopLarge: PropTypes.bool,
    id: PropTypes.string,
    laptop: PropTypes.bool,
    mobile: PropTypes.bool,
    mobileLarge: PropTypes.bool,
    mobileMedium: PropTypes.bool,
    style: PropTypes.shape({}),
    tablet: PropTypes.bool,
    width: PropTypes.bool,
};

const defaultProps = {
    classes: {},
    className: null,
    desktop: undefined,
    desktopLarge: undefined,
    id: null,
    laptop: undefined,
    mobile: undefined,
    mobileLarge: undefined,
    mobileMedium: undefined,
    style: {},
    tablet: undefined,
    width: undefined,
};

function TableHeader(props) {
    const {
        children,
        classes,
        className,
        desktop,
        desktopLarge,
        id,
        laptop,
        mobile,
        mobileLarge,
        mobileMedium,
        style,
        tablet,
        width,
    } = props;
    const cellPrefix = 'table-header';
    const containerClasses = ClassNames(
        'table-header',
        classes.tableHeader,
        width === true ?
            `${cellPrefix}-show` :
            width === false ?
                `${cellPrefix}-hide` :
                null,
        mobile === true ?
            `${cellPrefix}-mobile-show` :
            mobile === false ?
                `${cellPrefix}-mobile-hide` :
                null,
        mobileMedium === true ?
            `${cellPrefix}-mobile-medium-show` :
            mobileMedium === false ?
                `${cellPrefix}-mobile-medium-hide` :
                null,
        mobileLarge === true ?
            `${cellPrefix}-mobile-large-show` :
            mobileLarge === false ?
                `${cellPrefix}-mobile-large-hide` :
                null,
        tablet === true ?
            `${cellPrefix}-tablet-show` :
            tablet === false ?
                `${cellPrefix}-tablet-hide` :
                null,
        laptop === true ?
            `${cellPrefix}-laptop-show` :
            laptop === false ?
                `${cellPrefix}-laptop-hide` :
                null,
        desktop === true ?
            `${cellPrefix}-desktop-show` :
            desktop === false ?
                `${cellPrefix}-desktop-hide` :
                null,
        desktopLarge === true ?
            `${cellPrefix}-desktop-show` :
            desktopLarge === false ?
                `${cellPrefix}-desktop-hide` :
                null,
        className,
    );

    return (
        <thead
            className={containerClasses}
            id={id}
            style={style}
        >
            {children}
        </thead>
    );
}

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default withStyles(useStyles, { withTheme: true })(TableHeader);
