"use strict";
/**
 * readonly property
 * To make class properties as immutable property. Can be used only in two places:
 * 1. In the property declaration.
 * 2. In the constructor of the same class.
 */
const readonlyProperty = () => {
    class Person {
        constructor(birthDate) {
            this.birthDate = birthDate;
        }
    }
    let person = new Person(new Date(1990, 12, 25));
    // You can't modify property having readonly access modifier
    // person.birthDate = new Date(1991, 12, 25); // Compile error
};
/**
 * Summary
 * Use the readonly access modifier to mark a class property as immutable.
 * A readonly property must be initialized as a part of the declaration or
 *  in the constructor of the same class.
 */ 
