/**
 * Type Assertions:
 * Type assertions instruct the TypeScript compiler to treat a value as a specified type.
 * It uses the 'as' keyword operator to do
 * Syntax:
 *  experssion as targetValue
 *
 * Type Assertion is also known as Type Narrowing. It allows you to narrow a type from
 *  a union type.
 */

const typescriptTypeAssertions = () => {

    function getNetPrice(price: number, discount: number, format: boolean): string | number {
        let netPrice = price * (1 - discount);
        return format ? `$${netPrice}` : netPrice;
    }

    // The following uses the 'as' keyword to instruct the compiler that the value assigned to the netPrice is a string
    let netPriceTextFormat = getNetPrice(100, 0.5, true) as string;

    let netPriceNumberFormat = getNetPrice(100, 0.5, false) as number;


    // Use can also use angle bracket <>
    // Syntax: '<targetType>value'

    let netPriceAngleBracketUsageNumber = <number>getNetPrice(100, 0.5, false);

};

typescriptTypeAssertions();

/**
 * Summary
 * Type assertions instruct the compiler to treat a value as a specified type.
 * Type assertions do not carry any type conversion.
 * Type assertions use the 'as' keyword or an angle bracket '<>' syntax.
 */