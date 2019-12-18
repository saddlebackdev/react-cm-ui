module.exports = (api) => {
    api.cache(true);

    const presets = [
        '@babel/preset-env',
        '@babel/react',
    ];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
    ];

    return {
        presets,
        plugins,
    };
};
