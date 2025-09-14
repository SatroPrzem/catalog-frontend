/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use', 'include', 'mixin'] }],
    'scss/operator-no-newline-after': null,
    'prettier/prettier': true,
    'no-descending-specificity': null,
  },
}
