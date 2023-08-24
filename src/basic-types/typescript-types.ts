/**
 * a "type" is a convenient way to refer to the different 'properties' and
 *  'functions' that a value has.
 *
 * A value is anything that you can assign to a variable e.g., a number, a string,
 *  an array, an object, and a function.
 *
 * In conclusion, in TypeScript:
 *
 * 1. a type is a label that describes the different properties and methods that a value has
 * 2. every value has a type.
 */

console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase());

// a type is a label that describes the different properties and method that a value has.
// every value has a type.

/**
 * Types in TypeScript
 * TypeScript inherits the built-in types from JavaScript.
 * TypeScript types are categorized into:
 *
 * 1. Primitive types
 * 2. Object types
 */

/** Primitive types */
/**
 * 1. string    =>  represents text data
 * 2. number    =>  represents numeric values
 * 3. boolean   =>  has true  and false values
 * 4. null      =>  has one value: null
 * 5. undefined =>  has one value: undefined   , It is a default value of an uninitialized variable
 * 6. symbol    =>  represents a unique constant value
 */

/** Object types */
/**
 * Object types are: functions, arrays, classes, etc.
 */

/** Purpose of types in TypeScript
 *
 * 1. First, types are used by the TypeScript compiler to analyse your code for errors
 * 2. Second, types allow you to understand what values are associated with variables.
 */

const sample1 = () => {
    // const heading = document.querySelector('h1');
    const heading: HTMLHeadingElement | null = document.querySelector('h1');

    // you can access properties and methods, because we know heading is HTMLHeadingElement
    heading?.addEventListener("click", () => {
        console.log("Hello");
    });
};

/**
 * Summary
 * Every value in TypeScript has a type.
 * A type is a label that describes the properties and methods that a value has.
 * TypeScript compiler uses types to analyze your code for hunting bugs and errors.
 */