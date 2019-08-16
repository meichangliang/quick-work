module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
  },
  rules: {
    //主要指导：
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": "error",
    "prefer-const": "error",
    "object-shorthand": ["error", "consistent-as-needed"],
    "no-useless-computed-key": "error",
    "no-duplicate-imports": "error",
    "no-confusing-arrow": "error",
    "arrow-spacing": "error",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "always"],
    //风格指导
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", { multiline: true, minItems: 3 }],
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "_this"],
    "eol-last": "error",
    "func-call-spacing": ["error", "never"],
  },
};

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

// https://cn.eslint.org/docs/rules/
