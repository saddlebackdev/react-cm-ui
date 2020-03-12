module.exports = (api) => {
    api.cache(true);

    const presets = [
        '@babel/preset-react',
        '@babel/preset-env',
    ];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
    ];

    return {
        presets,
        plugins,
    };
};
