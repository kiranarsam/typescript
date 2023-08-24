/**
 * Why TypeScript?
 * Why you should use TypeScript over JavaScript to avoid the problems created by the dynamic types.
 *
 * Why use TypeScript?
 * There are two main reasons to use TypeScript:
 * 1. TypeScript adds a type system to help you avoid many problems with dynamic types in JavaScript.
 * 2. TypeScript implements the future features of JavaScript a.k.a ES Next so that you can use them today.
 *
 * Understanding dynamic type in JavaScript:
 * JavaScript is dynamically typed. Unlike statically-typed languages such as Java or C#,
 *  values have types instead of variables.
 *
 *
 */

let box;
console.log(typeof (box)); // undefined

box = "Hello";
console.log(typeof (box)); // string

box = 100;
console.log(typeof (box)); // number

/**
 * As you can see, as soon as the value is assigned, the type of the variable changes.
 *
 * And you don’t need to explicitly tell JavaScript the type.
 * JavaScript will automatically infer the type from the value.
 *
 * Dynamic types offer flexibility. However, they also lead to problems.
 */

/**
 * Problems with dynamic types
 *
 * Referencing a property that doesn’t exist on the object is a common issue
 *  when working in JavaScript.
 *
 * This time we pass the arguments in wrong order to function.
 *  This is another common problem that you often have when working with JavaScript.
 *
 * This is why TypeScript comes into play.
 *
 *
 */

/**
 * How Typescript solves the problems of dynamic types
 *
 * First, define object using an 'interface'.
 * Second, explicitly use the type as the return type of the function.
 *
 * When you reference a property that doesn’t exist, the code editor will inform you immediately:
 *
 * To solve the problem of passing the arguments in the wrong order, you explicitly assign types to function parameters:
 */

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs ${price}$.`);
};


/**
 * Summary
 * JavaScript is dynamically typed. It offers flexibility but also creates many problems.
 * TypeScript adds an optional type system to JavaScript to solve these problems.
 */