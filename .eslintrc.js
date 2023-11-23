module.exports = {
    root: true,
    extends: "@react-native-community",
    rules: {
        quotes: 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'after-used',
                ignoreRestSiblings: true,
            },
        ],
        'prettier/prettier': 'off',
        'react-native/no-inline-styles': 'off',
    },
};
