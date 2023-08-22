/**
 * function has two parts: parameters and return type.
 * Syntax:
 *      // declaration
 *      (parameter : type, parameter: type, ...) => returnType
 *
 *      // assigning to variable or function definition
 *      (parameter: type, parameter: type, ...) : returnType => {
 *          // do something
 *          return returnType;
 *      }
 */

const functionTypes = () => {


    // function variable declaration
    let add: (x: number, y: number) => number;

    // assigning function to "add" variable
    add = (x: number, y: number): number => {
        return x + y;
    };

    // in one sentence: function variable declaration and assign function to the variable "sum"
    let sum: (a: number, b: number) => number = function (a: number, b: number): number {
        return a + b;
    };


};
