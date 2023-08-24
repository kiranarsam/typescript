"use strict";
/**
 * Type-Casting: allow you to convert a variable from one type to another type.
 *
 * JavaScript doesn’t have a concept of typecasting because variables have dynamic types.
 *  However, every variable in TypeScript has a type.
 *  Type castings allow you to convert a variable from one type to another.
 *
 * In TypeScript:
 *  you can use the 'as' keyword or '<>' operator for type castings.
 */
// usage 'as' operator
const typescriptTypeCasting = () => {
    let input = document.querySelector('input[type="text"]'); // Here, return as 'Element' type.
    //console.log(input.value); // give error. because element doesn't have value property
    let textInput = document.querySelector('input[type="text"]');
    let enteredText = textInput.value; // No error
    enteredText = textInput.value;
    // Downcasting
    let el;
    el = new HTMLInputElement();
    // because the HTMLInputElement type is a subclass of the HTMLElement type.
    /**
     * let a : typeA;
     * let b = a as typeB;
     */
    /** type-casting using '<>' operator */
    let numberInput = document.querySelector('input[type="number"]');
    console.log(numberInput.value);
    /**
     * let a : typeA;
     * let b = <typeB>a;
     */
};
typescriptTypeCasting();
/**
 * Summary
 * Type casting allows you to convert a variable from one type to another.
 * Use the 'as' keyword or '<>' operator for type castings.
 */
