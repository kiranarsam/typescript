/** Importing a new module
 * To consume a module, you use the import statement.
 * The following creates a new module EmailValidator.ts that uses the Validator.ts module:
 */

import { EmailStringValidator } from "./modules";
// renaming Validator to StringValidator
import { Validator as StringValidator } from "./modules";

class OrganisationEmailValidator implements EmailStringValidator {
    isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

/** This is re-export the module */
export { OrganisationEmailValidator };

class TextStringValidator implements StringValidator {
    isValid(str: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(str);
    }
}

export { TextStringValidator };
