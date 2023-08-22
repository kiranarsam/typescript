
/**
 * The "void" type denotes the absence of having any type at all.
 * It is a little like the opposite of the "any" type.
 */

const voidType = () => {

    // function that do not return any value
    function log(message): void {
        console.log(message);
    }

    let useless: void = undefined;

    // useless = 1; // error

};

/**
 * Summary
 * Use the void type as the return type of functions that do not return any value.
 */