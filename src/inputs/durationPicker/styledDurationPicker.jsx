import { withStyles } from '../../styles';
import DurationPicker from './durationPicker';

const useStyles = (theme) => ({
    root: {

    },
    grid: {
        '&.ui.grid': {
            margin: -5.5,
        },
    },
    dropdown: {
        '&.ui.dropdown.dropdown-selection': {
            minWidth: 'auto',
        },
    },
    dropdownColumn: {
        flexBasis: 106,
        flexGrow: 1,
        maxWidth: 106, // 95px content + 11px padding
        minWidth: 'auto',
        padding: 5.5,
    },
    error: {
        color: theme.palette.error.main,
        '& .ui.dropdown .Select-control': {
            borderColor: theme.palette.error.main,
        },
    },
    errorColumn: {
        padding: 5.5,
    },
    label: {
        color: theme.palette.text.secondary,
    },
    labelColumn: {
        padding: 5.5,
    },
    required: {
        color: theme.palette.error.main,
    },
});

export default withStyles(useStyles, { withTheme: true })(DurationPicker);
