"use strict";
/** Access modifiers change the visibility of the properties and modifiers in TypeScript
 * private
 * protected
 * public        ==> by default "public" access modifier is used if any access modifier is omited
 */
const accessModifiers = () => {
    class Person {
        // ...
        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    let person = new Person('153-09-3453', 'John', 'Doe');
    console.log(person.getFullName());
    console.log(person.lastName);
    // console.log(person.firstName); // can't use firtName is protected
    // console.log(person.ssn); // can't use, ssn is private
    // to make code shorter, we can use lik this
    class Person1 {
        // ...
        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
};
accessModifiers();
/**
 * Summary
 * TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
 * The private modifier allows access within the same class.
 * The protected modifier allows access within the same class and subclasses.
 * The public modifier allows access from any location.
 */ 
