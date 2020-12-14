const COLUMNS = 12;
const COLUMN_WIDTH_PERCENTAGE = (1 / COLUMNS) * 100;

export default (theme) => {
    const {
        typography: {
            pxToRem,
        },
    } = theme;

    return {
        table: {
            backgroundColor: theme.palette.background.primary,
            border: `1px solid ${theme.palette.border.primary}`,
            borderCollapse: 'separate',
            borderRadius: 3,
            borderSpacing: 0,
            color: theme.palette.text.primary,
            margin: 'calc(2rem - .14285em) 0 1rem',
            textAlign: 'left',
            width: '100%',
            '&:first-child': { marginTop: 0 },
            '&:last-child': { marginBottom: 0 },
            '&.table-basic': {
                border: 0,
                '& .table-header-cell, .table-cell': {
                    backgroundColor: `${theme.palette.background.primary} !important`,
                },
                '& .table-cell': {
                    height: 44,
                    padding: pxToRem(11),
                    '&:first-child': { paddingLeft: 0 },
                    '&:last-child': { paddingRight: 0 },
                },
                '& .table-row:last-child .table-cell': {
                    borderBottom: `1px solid ${theme.palette.border.secondary}`,
                },
            },
            '&.table-collapsing': { width: 'auto' },
            '&.table-color-': {
                '&grey-xxlight': { backgroundColor: theme.palette.background.secondary },
            },
            '&.table-fixed': { tableLayout: 'fixed' },
            '&.table-single-line': { whiteSpace: 'nowrap' },
            '&.table-basic .table-header-cell': {
                color: theme.palette.text.secondary,
                padding: `0 ${theme.typography.pxToRem(11)} ${theme.typography.pxToRem(11)}`,
                '&:first-child': { paddingLeft: 0 },
                '&:last-child': { paddingRight: 0 },
            },
            '&.table-celled': {
                '& .table-header-cell': {
                    borderLeft: `1px solid ${theme.palette.border.primary}`,
                    '&:first-child': { borderLeft: 0 },
                },
            },
            '&.table-definition:not(.table-full-width) .table-header-cell': {
                '&:first-child': {
                    backgroundColor: 'inherit',
                    boxShadow: `-1px -1px 0 1px ${theme.palette.background.primary}`,
                },
                '&:nth-child(2)': { borderLeft: `1px solid ${theme.palette.border.primary}` },
            },
            '&.table-font-size-': {
                '&large .table-header-cell': { fontSize: pxToRem(20) },
                '&medium .table-header-cell': { fontSize: pxToRem(18) },
                '&small .table-header-cell': { fontSize: pxToRem(16) },
                '&xsmall .table-header-cell': { fontSize: pxToRem(14) },
                '&large .table-cell': { fontSize: pxToRem(20) },
                '&medium .table-cell': { fontSize: pxToRem(18) },
                '&small .table-cell': { fontSize: pxToRem(16) },
                '&xsmall .table-cell': { fontSize: pxToRem(14) },
            },
            '&.table-stretch': {
                '& .table-header-cell': {
                    '&:first-child': { paddingLeft: pxToRem(11) },
                    '&:last-child': { paddingRight: pxToRem(11) },
                },
                '&-very .table-header-cell': {
                    padding: `0 ${pxToRem(11)} ${pxToRem(11)}`,
                    '&:first-child': { paddingLeft: pxToRem(22) },
                    '&:last-child': { paddingRight: pxToRem(22) },
                },
                '& .table-cell': {
                    padding: pxToRem(11),
                    '&:first-child': { paddingLeft: pxToRem(11) },
                    '&:last-child': { paddingRight: pxToRem(11) },
                },
                '&-very .table-cell': {
                    padding: pxToRem(11),
                    '&:first-child': { paddingLeft: pxToRem(22) },
                    '&:last-child': { paddingRight: `${pxToRem(22)} !important` },
                },
            },
            '& .table-row-font-size-': {
                '&large .table-header-cell': { fontSize: pxToRem(20) },
                '&medium .table-header-cell': { fontSize: pxToRem(18) },
                '&small .table-header-cell': { fontSize: pxToRem(16) },
                '&xsmall .table-header-cell': { fontSize: pxToRem(14) },
            },
            '&.table-celled .table-cell': {
                borderLeft: `1px solid ${theme.palette.border.secondary}`,
                '&:first-child': { borderLeft: 0 },
            },
            '&.table-definition': {
                '&:not(.table-basic) .table-cell:first-child': {
                    backgroundColor: theme.palette.background.secondary,
                    borderRight: `1px solid ${theme.palette.border.primary}`,
                    borderTop: `1px solid ${theme.palette.border.primary}`,
                },
                '&.table-basic .table-cell:nth-child(2)': { borderLeft: `1px solid ${theme.palette.border.primary}` },
                '& .table-cell:first-child': { fontWeight: theme.typography.fontWeightMedium},
                '& .table-row:first-child .table-cell': { borderTop: 0 },
                '&.table-basic .table-cell:first-child': { paddingLeft: pxToRem(11) },
            },
            '&.table-selectable .table-body .table-row:hover, &.table-selectable .table-body .table-row-selected': {
                '& .table-cell': {
                    backgroundColor: theme.palette.background.secondary,
                    borderTopColor: theme.palette.border.primary,
                    cursor: 'pointer',
                },
                '& + .table-row .table-cell': { borderTopColor: theme.palette.border.primary },
            },
            '&.table-single-line .table-cell': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            '&.table-size-': {
                '&small .table-cell': {
                    height: 44,
                },
                '&medium .table-cell': {
                    height: 70,
                },
            },
            '&.table-striped .table-row:nth-child(2n) .table-cell': {
                backgroundColor: theme.palette.background.light,
            },
            '& .table-body-celled .table-cell': { borderLeft: `1px solid ${theme.palette.border.secondary}` },
            '& .table-row-': {
                '&active .table-cell': { backgroundColor: theme.palette.background.secondary },
                '&disabled .table-cell': { color: theme.palette.text.secondary, pointerEvents: 'none' },
                '&font-size-large .table-cell': { fontSize: `${pxToRem(20)} !important` },
                '&font-size-medium .table-cell': { fontSize: `${pxToRem(18)} !important` },
                '&font-size-small .table-cell': { fontSize: `${pxToRem(16)} !important` },
                '&font-size-xsmall .table-cell': { fontSize: `${pxToRem(14)} !important` },
            },
        },
        tableStickyColumns: {
            '& .table-cell': {
                backgroundColor: 'red !important',
            },
            '& .table--scroll_container': {
                position: 'relative',
                overflow: 'auto',
                height: 'auto',
            },
            '& .sticky-cell': {
                position: 'sticky',
                left: 0,
                zIndex: 1,
            },
            '& .table-header > tr': {
                backgroundColor: ({ basic }) => !basic && theme.palette.background.secondary,
            },
            '& td.sticky-cell-resizable': {
                borderRight: `1px solid ${theme.palette.border.primary}`,
            },
        },
        tableSticky: {
            marginBottom: '10px !important',
        },
        tableRow: {
            '&.table-row-text-align-': {
                '&center': { textAlign: 'center' },
                '&left': { textAlign: 'left' },
                '&right': { textAlign: 'right' },
            },
            '&.table-row-vertical-align-': {
                '&bottom': { verticalAlign: 'bottom' },
                '&middle': { verticalAlign: 'middle' },
                '&top': { verticalAlign: 'top' },
            },
            '&:first-child .table-cell': { borderTop: 0 },
        },
        tableHeader: {
            '&.table-header-': {
                '&hide': {
                    display: 'none',
                },
                '&show': {
                    display: 'table-header-group',
                },
            },
        },
        tableHeaderCell: {
            backgroundColor: theme.palette.background.secondary,
            borderBottom: `1px solid ${theme.palette.border.primary}`,
            borderLeft: 0,
            color: theme.palette.text.primary,
            fontStyle: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            padding: theme.typography.pxToRem(11),
            textAlign: 'inherit',
            textTransform: 'none',
            verticalAlign: 'inherit',
            '&.table-header-cell-clickable span': { cursor: 'pointer' },
            '&.table-header-cell-collapsing': { whiteSpace: 'nowrap', width: 1 },
            '&.table-header-cell-text-align-left': { textAlign: 'left' },
            '&.table-header-cell-text-align-center': { textAlign: 'center' },
            '&.table-header-cell-text-align-right': { textAlign: 'right' },
            '&.table-header-cell-': {
                '&one': { display: 'table-cell', width: `${1 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&two': { display: 'table-cell', width: `${2 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&three': { display: 'table-cell', width: `${3 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&four': { display: 'table-cell', width: `${4 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&five': { display: 'table-cell', width: `${5 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&six': { display: 'table-cell', width: `${6 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&seven': { display: 'table-cell', width: `${7 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&eight': { display: 'table-cell', width: `${8 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&nine': { display: 'table-cell', width: `${9 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&ten': { display: 'table-cell', width: `${10 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&eleven': { display: 'table-cell', width: `${11 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&twelve': { display: 'table-cell', width: `${12 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&hide': { display: 'none' },
                '&show': { display: 'table-cell' },
            },
        },
        tableCell: {
            borderTop: `1px solid ${theme.palette.border.secondary}`,
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            padding: pxToRem(11),
            textAlign: 'inherit',
            transition: 'background-color 150ms linear, border-top-color 150ms linear',
            '&.table-cell-active': { backgroundColor: theme.palette.background.secondary },
            '&.table-cell-collapsing': {
                whiteSpace: 'nowrap',
                width: 1,
            },
            '&.table-cell-disabled': {
                color: theme.palette.text.secondary,
                pointerEvents: 'none',
            },
            '&.table-cell-font-size-large': { fontSize: `${pxToRem(20)} !important` },
            '&.table-cell-font-size-medium': { fontSize: `${pxToRem(18)} !important` },
            '&.table-cell-font-size-small': { fontSize: `${pxToRem(16)} !important` },
            '&.table-cell-font-size-xsmall': { fontSize: `${pxToRem(14)} !important` },
            '&.table-cell-selectable:hover': { backgroundColor: theme.palette.background.secondary },
            '&.table-cell-single-line': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            '&.table-cell-text-align-left': { textAlign: 'left' },
            '&.table-cell-text-align-center': { textAlign: 'center' },
            '&.table-cell-text-align-right': { textAlign: 'right' },
            '&.table-cell-vertical-align-bottom': { verticalAlign: 'bottom' },
            '&.table-cell-vertical-align-middle': { verticalAlign: 'middle' },
            '&.table-cell-vertical-align-top': { verticalAlign: 'top' },
            '&.table-cell-': {
                '&one': { display: 'table-cell', width: `${1 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&two': { display: 'table-cell', width: `${2 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&three': { display: 'table-cell', width: `${3 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&four': { display: 'table-cell', width: `${4 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&five': { display: 'table-cell', width: `${5 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&six': { display: 'table-cell', width: `${6 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&seven': { display: 'table-cell', width: `${7 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&eight': { display: 'table-cell', width: `${8 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&nine': { display: 'table-cell', width: `${9 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&ten': { display: 'table-cell', width: `${10 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&eleven': { display: 'table-cell', width: `${11 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&twelve': { display: 'table-cell', width: `${12 * COLUMN_WIDTH_PERCENTAGE}%` },
                '&hide': { display: 'none' },
                '&show': { display: 'table-cell' },
            },
        },
    };
};
