import {
    map,
    kebabCase,
} from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import {
    PROP_TYPES_ROW_COMPONENT,
} from './constants';
import {
    BEM_FILTERS_RAIL_ROW,
} from '../../global/constants';
import Checkbox from '../../inputs/checkbox';
import Grid from '../../layout/Grid';
import Radio from '../../inputs/radio';
import Select from '../../inputs/select';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    classes: PROP_TYPES_ROW_COMPONENT.classes,
    className: PROP_TYPES_ROW_COMPONENT.className,
    componentProps: PROP_TYPES_ROW_COMPONENT.componentProps,
    id: PROP_TYPES_ROW_COMPONENT.id,
    type: PROP_TYPES_ROW_COMPONENT.type.isRequired,
};

const defaultProps = {
    classes: null,
    className: null,
    componentProps: null,
    id: null,
};

const useStyles = makeStyles((theme) => ({
    countColumn: {
        color: theme.palette.text.secondary,
        marginRight: -theme.spacing(1),
    },
    root: {
        margin: [[theme.spacing(1), 0]],
    },
}));

function FiltersRailRowComponent(props) {
    const {
        componentProps,
        type,
    } = props;

    const classes = useStyles(props);

    const rootContainer = ClassNames(
        BEM_FILTERS_RAIL_ROW,
        classes.root,
    );

    return (
        <div
            className={rootContainer}
        >
            {type === 'checkbox' && (
                <Checkbox
                    checked={componentProps.checked}
                    classes={componentProps.classes}
                    className={componentProps.className}
                    fluid
                    id={componentProps.id}
                    label={(
                        <Grid>
                            <Grid.Column
                                sm
                            >
                                {componentProps.label}
                            </Grid.Column>

                            {componentProps.count && (
                                <Grid.Column
                                    classes={{
                                        root: classes.countColumn,
                                    }}
                                >
                                    10
                                </Grid.Column>
                            )}
                        </Grid>
                    )}
                    labelStyle={{
                        display: 'block',
                    }}
                    onChange={componentProps.onChange}
                    size="small"
                    tabIndex={componentProps.tabIndex}
                />
            )}

            {type === 'jsx'}

            {type === 'radio' && (
                <Radio
                    checked={componentProps.checked}
                    classes={componentProps.classes}
                    className={componentProps.className}
                    fluid
                    id={componentProps.id}
                    label={componentProps.label}
                    name={componentProps.name}
                    onChange={componentProps.onChange}
                    tabIndex={componentProps.tabIndex}
                />
            )}

            {type === 'radioPill' && (
                <Radio
                    fluid
                    pill
                >
                    {map(componentProps.options, (option, index) => (
                        <Radio.Item
                            checked={option.checked}
                            className={option.className}
                            classes={option.classes}
                            id={option.id}
                            key={`${kebabCase(option.label)}-${index}`}
                            label={option.label}
                            tabIndex={option.tabIndex}
                        />
                    ))}
                </Radio>
            )}

            {type === 'select' && (
                <Select
                    classes={componentProps.classes}
                    className={componentProps.className}
                    id={componentProps.id}
                    onChange={componentProps.onChange}
                    options={componentProps.options}
                    placeholder={componentProps.placeholder}
                    value={componentProps.value}
                    tabIndex={componentProps.tabIndex}
                    underline
                />
            )}
        </div>
    );
}

FiltersRailRowComponent.propTypes = propTypes;
FiltersRailRowComponent.defaultProps = defaultProps;

export default FiltersRailRowComponent;
