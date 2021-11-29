module.exports = (api) => {
    api.cache(true);

    const env = {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ],
        },
    };

    const presets = [
        '@babel/preset-react',
        '@babel/preset-env',
    ];

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
    ];

    return {
        env,
        presets,
        plugins,
    };
};
