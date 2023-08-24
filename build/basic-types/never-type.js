"use strict";
/**
 * The "never" type is a type that contains no values. Because of this,
 * you cannot assign any value to a variable with a "never" type.
 *
 * Typically, you use the "never" type to represent the return type of
 * a function that always throws an error.
 */
const neverType = () => {
    function raiseError(message) {
        throw new Error(message);
    }
    // Here, reject return type is also infered as "never" type
    function reject() {
        return raiseError("Rejected");
    }
    // the return type of the loop is infered as "never" type
    let loop = function forever() {
        while (true) {
            console.log('Hello');
        }
    };
    function func(a) {
        if (typeof a === "string") {
            return true;
        }
        else if (typeof a === "number") {
            return false;
        }
        // make the function valid
        return neverOccur();
    }
    const neverOccur = () => {
        throw new Error("Never !");
    };
};
/**
 * Summary
 * The "never" type contains no value.
 * The "never" type represents the return type of a function that
 *  always throws an error or a function that contains an indefinite loop.
 */ 
