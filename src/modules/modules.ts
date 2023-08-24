/**
 * Since ES6, JavaScript started supporting modules as the native part of the language.
 * TypeScript shares the same module concept as JavaScript.
 *
 * A TypeScript module can contain both declarations and code.
 * A module executes within its own scope, not in the global scope.
 * It means that when you declare variables, functions, classes, interfaces, etc.,
 *  in a module, they are not visible outside the module unless you
 *  explicitly export them using export statement.
 *
 * On the other hand, if you want to access variables, functions, classes, etc., from a
 *  module, you need to import them using the import statement.
 *
 * Like ES6, when a TypeScript file contains a top-level import or export,
 *  it is treated as a module.
 */

export interface Validator {
    isValid(str: string): boolean
}
/**In this module, we place the 'export' keyword before the 'interface' keyword to expose it to other modules. */
/** In other words, if you do not use the 'export' keyword, the Validator interface is private in
 * the Validator.ts module, therefore, it cannot be used by other modules.
 **/

/**
 * Export statements
 */

interface EmailValidator {
    isEmailValid(email: string): boolean
}
// we can do like this below statement
export { EmailValidator };

/** TypeScript also allows you to rename declarations for module consumers, like this */
export { EmailValidator as EmailStringValidator };
/** other modules will use the 'EmailValidator' interface as the 'EmailStringValidator' interface. */
