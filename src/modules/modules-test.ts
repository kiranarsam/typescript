import { OrganisationEmailValidator } from "./modules-import";

let email = 'john@john.com';
let validator = new OrganisationEmailValidator();

// test
let result = validator.isEmailValid(email);

console.log(result);
