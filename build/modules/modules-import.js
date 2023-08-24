"use strict";
/** Importing a new module
 * To consume a module, you use the import statement.
 * The following creates a new module EmailValidator.ts that uses the Validator.ts module:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStringValidator = exports.OrganisationEmailValidator = void 0;
class OrganisationEmailValidator {
    isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
exports.OrganisationEmailValidator = OrganisationEmailValidator;
class TextStringValidator {
    isValid(str) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(str);
    }
}
exports.TextStringValidator = TextStringValidator;
