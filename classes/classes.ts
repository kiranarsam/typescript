/**
 * Class:
 * In ES5, you can use a constructor function and prototype inheritance to create a "class".
 */

const typescriptClasses = () => {

    // constructor function
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // prototype method
    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

    // creating an Person Object
    let person = new Person('171-28-0926', 'John', 'Doe');
    console.log(person.getFullName());


    // ES6 => class is defined, with creating constructor function and prototypal inheritance
    class Employee {
        ssn;
        firstName;
        lastName;

        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    let emp = new Employee('171-28-0926', 'John', 'Doe');
    console.log(emp.getFullName());

    // Type script class adds type annotations to the properties and methods of the class
    class Employee1 {
        ssn: string;
        firstName: string;
        lastName: string;

        constructor(ssn: string, firstName: string, lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    let emp1 = new Employee1('171-28-0926', 'John', 'Doe');
    console.log(emp1.getFullName());
};

typescriptClasses();

/**
 * Summary
 * Use "class" keyword to define a class in TypeScript.
 * TypeScript leverages the ES6 class syntax and adds type annotations to make the class more robust.
 */