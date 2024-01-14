module.exports = {
    env: {
        es2021: true,
        node: true,
        "googleappsscript/googleappsscript": true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "googleappsscript"],
    rules: {},
    extends: ["prettier"],
};
