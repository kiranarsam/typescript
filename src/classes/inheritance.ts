/**
 * A class can reuse the properties and methods of another class.
 *
 * The class which inherits properties and methods is called the child class
 * The class whose properties and methods are inherited is known as the parent class
 */

const typescriptInheritance = () => {

    class Person {
        private firstName: string;
        private lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        describe(): string {
            return `This is ${this.firstName} ${this.lastName}`;
        }
    }

    class Employee extends Person {
        private jobTitle: string;
        constructor(firstName: string, lastName: string, jobTitle: string) {
            super(firstName, lastName);
            this.jobTitle = jobTitle;
        }

        // Method overriding
        describe(): string {
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