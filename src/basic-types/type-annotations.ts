/**
 * What is Type Annotation in TypeScript?
 * Type annotation: TypeScript uses type annotations to explicitly specify types for
 *  identifiers such as variables, functions, objects, etc.
 *
 * TypeScript uses the syntax ': type' after an identifier as the type annotation,
 *  which 'type' can be any valid type.
 *
 * Synatx:
 *
 *          : type
 *
 *  Here, 'type' can be any valid type.
 *
 * Once an identifier is annotated with a type, it can be used as that type only.
 *  If the identifier is used as a different type, the TypeScript compiler will issue an error.
 *
 * Syntax:
 *
 * let variableName: type;
 * let variableName: type = value;
 * const constantName: type = value;
 *
 * In this syntax, the type annotation comes after the variable or constant name and
 *  is preceded by a colon (:).
 */

const typeAnnotation = () => {

    let counter: number; // Syntax: let variableName : type;
    counter = 2;

    // counter = "Hello"; // compile error

    // other sample annotations like
    let name: string = 'John';
    let age: number = 30;
    let active: boolean = true;


    /**
     * Arrays
     *  To annotate an array type you use use a specific type followed by a square bracket ': type[]'
     * Syntax:
     * let arrayName: type[];
     */
    let names: string[] = ['ab', 'bc']; // Syntax:   let arrayName : type[];

    /**
     * Objects
     * To specify a type for an object, you use the object type annotation.
     */
    let person: {
        name: string,
        age: number
    };
    person = {
        name: 'John',
        age: 25
    };

    /**
     * Function arguments & return types
     * The following shows a function annotation with parameter type annotation and return type annotation
     * Syntax:
     * let functionVariableName : (paramName: type, ...) => type;
     */
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
 *  Use type annotations with the syntax ': [type]' to explicitly specify a type for a variable,
 *  function, function return value, etc.
 */