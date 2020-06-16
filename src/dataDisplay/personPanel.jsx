import { isFunction } from 'lodash';
import ClassNames from 'classnames';
// eslint-disable-next-line import/extensions
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React, {
    Children,
    useCallback,
    useState,
    useEffect,
} from 'react';
import { UI_CLASS_NAME } from '../global/constants';
import { BEM_BLOCK_NAME } from './personPanelConstants';
import PersonPanelDetails from './personPanelDetails';
import PersonPanelSummary from './personPanelSummary';

const propTypes = {
    children: PropTypes.node,
    isCompact: PropTypes.bool,
    isExpanded: PropTypes.bool,
    onChange: PropTypes.func,
};

const defaultProps = {
    children: undefined,
    isCompact: false,
    isExpanded: false,
    onChange: undefined,
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5px 0',
    },
});

function PersonPanel(props) {
    const {
        children,
        isCompact,
        isExpanded: isExpandedProp,
        onChange,
    } = props;

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
                isCompact,
                isExpanded,
                onClick: onSummaryClick,
            });
        }

        return child;
    });

    const classes = useStyles();
    const rootClasses = ClassNames(
        classes.root,
        UI_CLASS_NAME,
        BEM_BLOCK_NAME,
    );

    return (
        <div
            className={rootClasses}
        >
            {clonedChildren}
        </div>
    );
}

PersonPanel.propTypes = propTypes;
PersonPanel.defaultProps = defaultProps;

PersonPanel.Details = PersonPanelDetails;
PersonPanel.LeftContainer = PersonPanelLeftContainer;
PersonPanel.RightContainer = PersonPanelRightContainer;
PersonPanel.Summary = PersonPanelSummary;

export default PersonPanel;
