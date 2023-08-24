"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Default import module */
const module_default_export_1 = __importDefault(require("./module-default-export"));
let validator = new module_default_export_1.default();
let result = validator.isValid('95134');
console.log(result);
/**
 * Summary
 * 1. TypeScript shares the same module concept with the ES6 module.
 *  A module can contain both declarations and code.
 * 2. In a module, variables, functions, classes, interfaces, etc.,
 *  execute on their own scope, not the global scope.
 * 3. Use 'export' statement to export variables, functions, classes, interfaces, types, etc.,
 *  from a module.
 * 4. Use 'import' statement to access exports from other modules.
 */ 
