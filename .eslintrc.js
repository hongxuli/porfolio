module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    // 'plugin:nuxt/recommended',
  ],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': 0,
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     htmlWhitespaceSensitivity: 'ignore',
    //     semi: false,
    //     singleQuote: true,
    //   },
    // ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
  },
}
