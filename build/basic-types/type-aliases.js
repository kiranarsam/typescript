"use strict";
/**
 * Syntax:
 *   type alias = existingType;
 *
 *  example:
 *     type chars = string;
 *     let message: chars; // same as string type
 */
const typeAliases = () => {
    let message; // same as string type
    let input;
    input = 100; // valid
    input = 'Hi'; // valid
    // input = false; // Compiler error
};
/**
 * Summary
 * Use type aliases to define new names for existing types.
 */ 
