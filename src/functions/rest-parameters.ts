/**
 * A rest parameter allows you a function to accept zero or more arguments of
 *  the specified type. In TypeScript, rest parameters follow these rules:
 *
 * 1. A function has only one rest parameter.
 * 2. The rest parameter appears last in the parameter list.
 * 3. The type of the rest parameter is an "array type".
 *
 * Syntax:
 *    function fn(...rest: type[]) {
 *
 *    }
 */

const restParameters = () => {
    function getTotal(...numbers: number[]): number {
        let total = 0;
        numbers.forEach((item) => total += item);
        return total;
    }

    console.log(getTotal(1, 2, 3, 4, 5, 6));
    console.log(getTotal(1, 2, 3));
    console.log(getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
};

restParameters();
