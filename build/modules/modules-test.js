"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_import_1 = require("./modules-import");
let email = 'john@john.com';
let validator = new modules_import_1.OrganisationEmailValidator();
// test
let result = validator.isEmailValid(email);
console.log(result);
