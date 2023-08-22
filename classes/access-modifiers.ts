/** Access modifiers change the visibility of the properties and modifiers in TypeScript
 * private
 * protected
 * public        ==> by default "public" access modifier is used if any access modifier is omited
 */

const accessModifiers = () => {

    class Person {
        private ssn: string;
        protected firstName: string;
        public lastName: string;

        // ...
        constructor(ssn: string, firstName: string, lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public getFullName(): string {
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
        constructor(private ssn: string, protected firstName: string, public lastName: string) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public getFullName(): string {
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