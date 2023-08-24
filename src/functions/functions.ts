/**
 * Functions are the building blocks of readable, maintainable, and reusable code
 * Syntax:
 *
 *      function name(parameter: type, parameter: type, ...) : returnType {
 *          // do something
 *      }
 */

const typeScriptFunctions = () => {

    function add(a: number, b: number): number {
        return a + b;
    }

    let sum = add(10, 30);

    // let sum = add('10', '20'); // Gives Error, Because we are passing strings

    function echo(message: string): void {
        console.log(message.toUpperCase());
    }
};

/**
 * Summary
 * Use type annotations for function parameters and return type to keep the
 *  calling code inline and ensure the type checking within the function body.
 */