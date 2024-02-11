/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {
    coverageProvider: "v8",
    globals: {
        PropertiesService: {},
    },
    preset: "ts-jest",
    roots: ["<rootDir>/sources/tests"],
    testEnvironment: "node",
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
