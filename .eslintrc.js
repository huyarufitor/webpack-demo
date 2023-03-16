/*
 * @Author: nanMi
 * @Date: 2020-11-30 18:26:34
 * @LastEditors: nanMi
 * @LastEditTime: 2020-11-30 18:28:19
 * @Description: file content
 */
module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        parser: '@typescript-eslint/parser',
        allowImportExportEverywhere: true, //ignore eslint error: 'import' and 'export' may only appear at the top level
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['@typescript-eslint'], // 插件名称省略了eslint-plugin-，用来规范ts,html,vue的文件内容的

    extends: [
        'prettier',
        'plugin:vue/recommended', // This plugin allows us to check the <template> and <script> of .vue files with ESLint.
        'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/vue',
        // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    ],
    // 下面de规则应该应该删除知识，兼容旧项目而已
    rules: {
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'vue/no-v-html': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        'vue/attribute-hyphenation': 0,
        'vue/attributes-order': 0,
    },
};
