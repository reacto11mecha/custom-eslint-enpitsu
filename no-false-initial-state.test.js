/**
 * @fileoverview Tests for enforce-foo-bar.js rule.
 * @author Ben Perlmutter
 */
"use strict";

const { RuleTester } = require("eslint");
const noFalseInitialState = require("./no-false-initial-state");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variable were introduced.
  languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "no-false-initial-state", // rule name
  noFalseInitialState, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "const [canUpdateDishonesty, setCanUpdateDishonesty] = useState(true);",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const [canUpdateDishonesty, setCanUpdateDishonesty] = useState(false);",
        output:
          "const [canUpdateDishonesty, setCanUpdateDishonesty] = useState(true);",
        errors: 1,
      },
    ],
  },
);

console.log("All tests passed!");
