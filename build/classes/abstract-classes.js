"use strict";
/**
 * Abstract classes
 * abstract class cannot be instantiated directly. (defined known in derived class)
 */
const abstractClasses = () => {
    // abstract keyword is used before class keyword.
    // an abstract class contains one or more abstract methods.
    class Employee {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        compensationStatement() {
            return `${this.fullName} makes ${this.getSalary()} a month.`;
        }
    }
    class FullTimeEmployee extends Employee {
        constructor(firstName, lastName, salary) {
            super(firstName, lastName);
            this.salary = salary;
        }
        getSalary() {
            return this.salary;
        }
    }
    class ContractEmployee extends Employee {
        constructor(firstName, lastName, rate, hours) {
            super(firstName, lastName);
            this.rate = rate;
            this.hours = hours;
        }
        getSalary() {
            return this.rate * this.hours;
        }
    }
    let john = new FullTimeEmployee('John', 'Doe', 12000);
    let jane = new ContractEmployee('Jane', 'Doe', 100, 160);
    console.log(john.compensationStatement());
    console.log(jane.compensationStatement());
};
abstractClasses();
/**
 * Summary
 * Abstract classes cannot be instantiated.
 * An Abstract class has at least one abstract method.
 * To use an abstract class, you need to inherit it and provide the implementation
 *  for the abstract methods.
 */ 
