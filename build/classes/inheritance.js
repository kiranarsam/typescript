"use strict";
/**
 * A class can reuse the properties and methods of another class.
 *
 * The class which inherits properties and methods is called the child class
 * The class whose properties and methods are inherited is known as the parent class
 */
const typescriptInheritance = () => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        describe() {
            return `This is ${this.firstName} ${this.lastName}`;
        }
    }
    class Employee extends Person {
        constructor(firstName, lastName, jobTitle) {
            super(firstName, lastName);
            this.jobTitle = jobTitle;
        }
        // Method overriding
        describe() {
            return super.describe() + `I'm a ${this.jobTitle}`;
        }
    }
    let employee = new Employee('John', 'Doe', 'Front-end Developer');
    console.log(employee.getFullName());
    console.log(employee.describe());
};
typescriptInheritance();
/**
 * Summary
 * Use the extends keyword to allow a class to inherit from another class.
 * Use super() in the constructor of the child class to call the constructor of
 *  the parent class. Also, use the super.methodInParentClass() syntax to
 *  invoke the methodInParentClass() in the method of the child class.
 */ 
