"use strict";
/**
 * The TypeScript "object" type represents all values that are not in primitive types
 *
 * Primitive types: number, bigint, string, boolean, null, undefined, symbol
 */
const objectType = () => {
    let employee;
    employee = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };
    console.log(employee);
    // employee = "Jane"; // error TS2322
    // console.log(employee.hireDate); // error TS2339, attemting to ass hireDate, which is doesn exist
    // explicitly define employee object
    let employee2;
    employee2 = {
        age: 25,
        firstName: 'John',
        lastName: "",
        jobTitle: 'Web developer'
    };
    /**
     let employee: {
            firstName: string;
            lastName: string;
            age: number;
            jobTitle: string;
        } = {
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            jobTitle: 'Web Developer'
        };
     */
    let employee3 = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };
    /**
     * object vs. Object
     * TypeScript has another type called 'Object' with the letter O in uppercase.
     *  It’s important to understand the differences between them.
     *
     * The 'object' type represents all non-primitive values while the 'Object' type describes
     *  the functionality of all objects.
     *
     * For example, the 'Object' type has the toString() and valueOf() methods that
     *  can be accessible by any 'object'.
     */
    /**
     * Empty type = {}
     *
     * TypeScript has another type called empty type denoted by {} ,
     *  which is quite similar to the object type.
     *
     * The empty type {} describes an object that has no property on its own.
     *
     * The empty type {} describes an object that has no property on its own.
     * If you try to access a property on such object, TypeScript will issue a compile-time error
     */
    let vacant;
    // vacant.firstName = 'John'; // Error TS2339,
    let vacant2 = {};
    /**
     * But you can access all properties and methods declared on the Object type,
     *  which is available on the object via prototype chain:
     */
    console.log(vacant2.toString()); // [object Object]
};
/**
 * Summary
 * The TypeScript object type represents any value that is not a primitive value.
 * The Object type, however, describes functionality that available on all objects.
 * The empty type {} refers to an object that has no property on its own.
 */
