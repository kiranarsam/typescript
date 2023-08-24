"use strict";
/**
 * Interfaces
 */
const typescriptInterfaces = () => {
    function getFullName(person) {
        return `${person.firstName} ${person.lastName}`;
    }
    let person = {
        firstName: 'John',
        lastName: 'Doe'
    };
    console.log(getFullName(person));
    function getDetailedInfo(person) {
        if (person.middleName) {
            return `${person.firstName} ${person.middleName} ${person.lastName} ==> => ${person.format(person.firstName, false)}`;
        }
        return `${person.firstName} ${person.lastName} => ${person.format(person.firstName, true)} `;
    }
    let upperFormat;
    upperFormat = (str, isUpper) => {
        return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    };
    let john = {
        lastName: 'John',
        firstName: 'Doe',
        format: upperFormat
    };
    console.log(getDetailedInfo(john));
    let jane = {
        firstName: 'Jane',
        lastName: 'Doe',
        middleName: 'M.',
        age: 22,
        // second argument is not, so ignored in the usage of this. need to some default value, but it ignores
        format: (str) => { return str.toLocaleLowerCase(); }
    };
    console.log(getDetailedInfo(jane));
    class Employee {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        displayJSON() {
            return JSON.stringify(this);
        }
    }
    let emp = new Employee('Little', 'World');
    console.log(emp.displayJSON());
};
typescriptInterfaces();
/**
 * Summary
 * TypeScript interfaces define contracts in your code and provide
 *       explicit names for type checking.
 * Interfaces may have optional properties or readonly properties.
 * Interfaces can be used as function types.
 * Interfaces are typically used as class types that make a contract
 *       between unrelated classes.
 *
 */ 
