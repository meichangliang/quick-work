module.exports = {
  parser: "@typescript-eslint/eslint-plugin",
  plugins: ["typescript"],
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  // extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-console": [
      "warn",
      {
        allow: [
          "warn",
          "error",
          "info",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table"
        ]
      }
    ]
    // "no-prototype-builtins": "off",
    // "no-template-curly-in-string": "error"
    // setWithoutGet: true,
    // getWithoutSet: true
    // complexity: ["error", 3],
    // "consistent-return": ["error", { treatUndefinedAsUnspecified: false }]
  }
};
