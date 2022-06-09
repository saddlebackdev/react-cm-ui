module.exports = {
    moduleNameMapper: {
        '../styles/colorExports': '<rootDir>/__mocks__/styleMock.js',
        '\\.(css|scss|svg)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
