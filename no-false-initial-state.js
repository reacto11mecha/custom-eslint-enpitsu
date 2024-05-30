module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Paksa buat initial state canUpdateDishonesty jadi true",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      VariableDeclaration(node) {
        node.declarations.forEach((declaration) => {
          if (
            declaration.init &&
            declaration.init.type === "CallExpression" &&
            declaration.init.callee.name === "useState" &&
            declaration.init.arguments.length > 0 &&
            declaration.init.arguments[0].type === "Literal" &&
            declaration.init.arguments[0].value === false &&
            declaration.id.type === "ArrayPattern" &&
            declaration.id.elements.length === 2 &&
            declaration.id.elements[0].name === "canUpdateDishonesty" &&
            declaration.id.elements[1].name === "setCanUpdateDishonesty"
          ) {
            context.report({
              node: declaration.init.arguments[0],
              message:
                'State variable "canUpdateDishonesty" initial value must be true.',
              fix(fixer) {
                return fixer.replaceText(declaration.init.arguments[0], "true");
              },
            });
          }
        });
      },
    };
  },
};
