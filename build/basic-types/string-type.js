"use strict";
/**
 * TypeScript string type
 */
const stringType = () => {
    let firstName = "John";
    let title = "Web Developer";
    let description = `
        This Typescript string can span
        multiple lines
        .
    `;
    let greeting = "Hello";
    let profile = `I'm ${firstName}. I'm a ${title}`;
    console.log(profile);
};
/** Summary
 * In TypeScript, all strings get the 'string' type.
 *   Like JavaScript, TypeScript uses double quotes ("),
 *   single quotes ('), and backtick (`) to surround string literals.
 */ 
