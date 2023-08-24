/**
 * Interfaces
 */

const typescriptInterfaces = () => {

    function getFullName(person: {
        firstName: string,
        lastName: string
    }): string {
        return `${person.firstName} ${person.lastName}`;
    }

    let person = {
        firstName: 'John',
        lastName: 'Doe'
    };

    console.log(getFullName(person));

    // function interface
    interface StringFormat {
        (str: string, isUpper: boolean): string
    }

    // using interface for above scenario
    interface Person {
        readonly ssn?: string, // once assigned, cannot be changed
        firstName: string,
        lastName: string,
        middleName?: string,     // Ex: optional parameters
        format: StringFormat,   // function types and return types
        print?: (str: string) => void
    }

    function getDetailedInfo(person: Person): string {
        if (person.middleName) {
            return `${person.firstName} ${person.middleName} ${person.lastName} ==> => ${person.format(person.firstName, false)}`;
        }
        return `${person.firstName} ${person.lastName} => ${person.format(person.firstName, true)} `;
    }

    let upperFormat: StringFormat;
    upperFormat = (str: string, isUpper: boolean): string => {
        return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
    };

    let john: Person = {
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
        format: (str: string): string => { return str.toLocaleLowerCase(); }
    };

    console.log(getDetailedInfo(jane));


    // class types
    interface Json {
        displayJSON(): string
    }

    class Employee implements Json {
        constructor(private firstName: string, private lastName: string) {

        }

        displayJSON(): string {
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