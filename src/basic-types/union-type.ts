
/**
 * Union type
 * : Syntax:     |
 *    let data: string | number; // data can be string or number, | is union
 */

const unionType = () => {
    function add(a: any, b: any) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }

        throw new Error("Parameters must be numbers or strings");
    }


    // Now we can call for any thing
    // add(true, false);

    let result: number | string;

    result = 10; // OK
    result = 'Hi'; // also OK
    // result = false; // not OK, it is boolean

    function addData(a: string | number, b: string | number) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }

        throw new Error("Parameters must be numbers or strings");
    }
};

/**
 * Summary
 * A TypeScript union type allows you to store a value of one or serveral types in a variable.
 */