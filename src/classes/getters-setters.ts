/**
 * Using checks all over the places is redundant and tedious.
 * So, you can use setters and getters, & you control the access to the properties of a class.
 *
 * For each property:
 * 1. A getter method returns the value of the property’s value. A getter is also called an accessor.
 * 2. A setter method updates the property’s value. A setter is also known as a mutator.
 */

const settersGetters = () => {

    class Person {
        private _age: number;
        private _firstName: string;
        private _lastName: string;

        constructor(age: number, firstName: string, lastName: string) {
            this._age = age;
            this._firstName = firstName;
            this._lastName = lastName;
        }

        public get age() {
            return this._age;
        }

        public set age(theAge: number) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }

            this._age = theAge;
        }

        public get firstName() {
            return this._firstName;
        }

        public set firstName(name: string) {
            if (!name) {
                throw new Error("Invalid first name");
            }

            this._firstName = name;
        }

        public get lastName() {
            return this._lastName;
        }

        public set lastName(name: string) {
            if (!name) {
                throw new Error("Invalid last name");
            }

            this._lastName = name;
        }

        public getFullName(): string {
            return `${this._firstName} ${this._lastName}`;
        }

        public get fullname() {
            return `${this._firstName} ${this._lastName}`;
        }

        public set fullname(name: string) {
            if (!name) {
                throw new Error("Invalid full name");
            }
            let parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error('Invalid name format: first last');
            }

            this._firstName = parts[0];
            this._lastName = parts[1];
        }
    }

    let person = new Person(30, 'Hello', 'World');
    console.log(person.fullname);
    person.fullname = 'John Doe';

    console.log(person.fullname);
};

settersGetters();

/**
 * Summary
 * Use TypeScript getters/setters to control the access properties of a class.
 * The getter/setters are also known as accessors/mutators.
 */