/**
 * Type annotation:
 * Synatx:
 *
 *          : type
 *
 *  Here, type can be any valid type.
 */

const typeAnnotation = () => {

    let counter: number; // Syntax: let variableName : type;
    counter = 2;

    // counter = "Hello"; // compile error

    // other sample annotations like
    let name: string = 'John';
    let age: number = 30;
    let active: boolean = true;

    let names: string[] = ['ab', 'bc']; // Syntax:   let arrayName : type[];

    let person: {
        name: string,
        age: number
    };
    person = {
        name: 'John',
        age: 25
    };

    // function annotation with parameter type annotation and return type annotation.
    let greeting: (name: string) => string;
    greeting = (name: string) => {
        return `Hi ${name}.`;
    };
    /**
     * greeting = function(name : string){
     *  return `Hi ${name}`;
     * };
     */

    /**
     * greeting = function () {
            console.log('Hello');
        };
     *
     *  Error:
     *    Type '() => void' is not assignable to type '(name: string) => string'.
     *    Type 'void' is not assignable to type 'string'.
     */
};

/** Summary
 *  Use type annotations with the syntax : [type] to explicitly specify a type for a variable,
 *  function, function return value, etc.
 */