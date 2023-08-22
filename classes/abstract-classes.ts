/**
 * Abstract classes
 * abstract class cannot be instantiated directly. (defined known in derived class)
 */

const abstractClasses = () => {


    // abstract keyword is used before class keyword.
    // an abstract class contains one or more abstract methods.
    abstract class Employee {

        constructor(private firstName: string, private lastName: string) {

        }

        abstract getSalary(): number;

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        compensationStatement(): string {
            return `${this.fullName} makes ${this.getSalary()} a month.`;
        }

    }

    class FullTimeEmployee extends Employee {
        constructor(firstName: string, lastName: string, private salary: number) {
            super(firstName, lastName);
        }

        getSalary(): number {
            return this.salary;
        }
    }

    class ContractEmployee extends Employee {
        constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
            super(firstName, lastName);
        }

        getSalary(): number {
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