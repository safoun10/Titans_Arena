/** @type {import('jest').Config} */
const config = {

    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = config;