import { isFunction } from 'lodash';
import ClassNames from 'classnames';
// eslint-disable-next-line import/extensions
import PropTypes from 'prop-types';
import React, {
    Children,
    useCallback,
    useState,
    useEffect,
} from 'react';
import { UI_CLASS_NAME } from '../../global/constants';
import { BEM_BLOCK_NAME } from './personPanelConstants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * The content of the PersonPanel
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to PersonPanel.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * Assign additional class names to PersonPanel.
     */
    className: PropTypes.string,
    /**
     * The `id` of the PersonPanel.
     */
    id: PropTypes.string,
    /**
     * If `true`, the PersonPanelSummary is shown active and PersonPanelDetails is expanded.
     */
    isExpanded: PropTypes.bool,
    /**
     * Event handler for consummer to control state outside of PersonPanel.
    */
    onChange: PropTypes.func,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    id: null,
    isExpanded: false,
    onChange: null,
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5px 0',
    },
});

/**
 * The PersonPanel displays a person's high level data in a grouped format.
 */
function PersonPanel(props) {
    const {
        children,
        className,
        id,
        isExpanded: isExpandedProp,
        onChange,
    } = props;

    const classes = useStyles(props);

    const [isExpanded, setIsExpandedState] = useState(isExpandedProp);

    useEffect(() => {
        setIsExpandedState(isExpandedProp);
    }, [isExpandedProp]);

    const onSummaryClick = useCallback((event) => {
        if (isFunction(onChange)) {
            onChange(event, !isExpanded);
        } else {
            setIsExpandedState(!isExpanded);
        }
    }, [
        isExpanded,
        onChange,
        setIsExpandedState,
    ]);

    const clonedChildren = Children.map(children, (child) => {
        const isChildFunction = React.isValidElement(child) && isFunction(child.type);
        const isDetails = isChildFunction && child.type.name === 'PersonPanelDetails';
        const isSummary = isChildFunction && child.type.name === 'PersonPanelSummary';

        if (isDetails) {
            return React.cloneElement(child, {
                ...child.props,
                isExpanded,
            });
        }

        if (isSummary) {
            return React.cloneElement(child, {
                ...child.props,
                isExpanded,
                onClick: onSummaryClick,
            });
        }

        return child;
    });

    const rootClasses = ClassNames(
        classes.root,
        UI_CLASS_NAME,
        BEM_BLOCK_NAME,
        className,
    );

    return (
        <div
            className={rootClasses}
            id={id}
        >
            {clonedChildren}
        </div>
    );
}

PersonPanel.propTypes = propTypes;
PersonPanel.defaultProps = defaultProps;

export default PersonPanel;
