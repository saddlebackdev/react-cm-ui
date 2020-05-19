module.exports = {
    moduleNameMapper: {
        '\\.(css|scss|svg)$': 'identity-obj-proxy',
        '../styles/colorExports': '<rootDir>/__mocks__/styleMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
