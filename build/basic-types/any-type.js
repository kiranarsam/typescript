"use strict";
/**
 * unknown value may come from a third party API or user input.
 */
const anyType = () => {
    // json may come from a thirs-party API
    const json = `{"latitude" : 10.11, "longitude" : 12.12}`;
    // parse JSON to find Location
    const currentLocation = JSON.parse(json);
    console.log(currentLocation);
    console.log(currentLocation.x);
    /**
     * TypeScript any: implicit typing
     *  If you declare a variable without specifying a type, TypeScript assumes that you use the any type.
     *   This feature is called "type inference". Basically, TypeScript guesses the type of the variable.
     */
    let result; // type is "any"
    let areaResult;
    areaResult = 10.123;
    console.log(areaResult.toFixed());
    // areaResult.willExist();
};
anyType();
/**
 * Summary
 *  The TypeScript "any" type allows you to store a value of any type.
 *      It instructs the compiler to skip type checking.
 *
 *  Use the "any" type to store a value that you don’t actually know its type at the compile-time or
 *      when you migrate a JavaScript project over to a TypeScript project.
 */ 
