
/**
 * The TypeScript "object" type represents all values that are not in primitive types
 *
 * Primitive types: number, bigint, string, boolean, null, undefined, symbol
 */

const objectType = () => {

    let employee: object;

    employee = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };


    console.log(employee);

    // employee = "Jane"; // error TS2322
    // console.log(employee.hireDate); // error TS2339, attemting to ass hireDate, which is doesn exist



    // explicitly define employee object

    let employee2: {
        firstName: string,
        lastName: string,
        age: number,
        jobTitle: string
    };

    employee2 = {
        age: 25,
        firstName: 'John',
        lastName: "",
        jobTitle: 'Web developer'
    };

    /**
     let employee: {
            firstName: string;
            lastName: string;
            age: number;
            jobTitle: string;
        } = {
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            jobTitle: 'Web Developer'
        };
     */

    let employee3: {
        firstName: string;
        lastName: string;
        age: number;
        jobTitle: string;
    } = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        jobTitle: 'Web Developer'
    };


    /**
     * Empty type = {}
     *
     * The empty type {} describes an object that has no property on its own.
     */

    let vacant: {};
    // vacant.firstName = 'John'; // Error TS2339,

    let vacant2: {} = {};

    console.log(vacant2.toString()); // [object Object]
};

/**
 * Summary
 * The TypeScript object type represents any value that is not a primitive value.
 * The Object type, however, describes functionality that available on all objects.
 * The empty type {} refers to an object that has no property on its own.
 */
