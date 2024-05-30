/**
 * @fileoverview Example ESLint config file that uses the custom rule from this tutorial.
 * @author Ben Perlmutter
 */
"use strict";

// Import the ESLint plugin
const plugin = require("./plugin");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { enpitsu: plugin },
    rules: {
      "enpitsu/no-false-initial-state": "error",
    },
  },
];
