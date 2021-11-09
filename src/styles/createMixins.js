export default function createMixins(breakpoints, spacing, mixins) {
    return {
        toolbar: {
            minHeight: 50,
            [breakpoints.up('md')]: {
                minHeight: 70,
            },
        },
        ...mixins,
    };
}
