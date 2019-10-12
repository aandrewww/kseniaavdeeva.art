{
  "parser": "babel-eslint",
  "extends": [
    "airbnb"
  ],
  "rules": {
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": "block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "block-like" }
    ],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": 0,
    "lines-between-class-members": 0,
    "implicit-arrow-linebreak": 0,
    "jsx-a11y/label-has-for": 0,
    "no-debugger": 1,
    "comma-dangle": ["error", "always-multiline"],
    "max-len": [
      "error",
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-mixed-operators": 0,
    "no-confusing-arrow": 0,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "react/sort-comp": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-fragments": 0,
    "no-array-constructor": 0,
    "import/prefer-default-export": 0,
    "react/jsx-no-bind": [2, {
      "ignoreRefs": true
    }]
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
        "constants": "./src/constants",
        "containers": "./src/containers",
        "components": "./src/components",
        "pages": "./src/pages",
        "helpers": "./src/helpers",
        "store": "./src/store",
        "modules": "./node_modules"
      }
    }
  },
  "env": {
    "es6": true,
    "browser": true
  }
}
