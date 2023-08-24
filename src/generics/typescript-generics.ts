/**
 * TypeScript Generics:
 * TypeScript generics allow you to write reusable and generalized forms of functions,
 *  classes, and interfaces.
 *
 */

const typescriptGenerics = () => {
    function getRandomNumberElement(items: number[]): number {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

    let numbers = [1, 2, 3, 4, 5, 6];
    console.log(getRandomNumberElement(numbers));

    function getRandomStringElement(items: string[]): string {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

    let colors = ['red', 'green', 'blue'];
    console.log(getRandomStringElement(colors));

    // using any type
    function getRandomAnyElement(items: any[]): any {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

    console.log(getRandomAnyElement(numbers));
    console.log(getRandomAnyElement(colors));
    // This solution works fine. However, it has a drawback.
    // It doesn’t allow you to enforce the type of the returned element.
    // In other words, it isn’t type-safe.

    /**
     * TypeScript generics come to rescue
     * Introducing generic function
     */
    function getRandomElement<T>(items: T[]): T {
        let randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }
    /**
     * This function uses type variable T.
     * The T allows you to capture the type that is provided at the
     *  time of calling the function. Also, the function uses the T type variable as
     *  its return type.
     *
     * This getRandomElement() function is generic because it can work with
     *   any data type including string, number, objects,…
     */

    // Usage:
    console.log(getRandomElement<number>(numbers));
    console.log(getRandomElement(numbers));
    console.log(getRandomElement<string>(colors));
    //let the TypeScript compiler set the value of T automatically based on the
    //  type of argument that you pass into
    console.log(getRandomElement(colors));


    /** Generic functions with multiple types */
    function merge<U, V>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }
    /**
     * The merge() function merges two objects with the type U and V.
     * It combines the properties of the two objects into a single object.
     *
     * Type inference infers the returned value of the merge() function as
     *  an intersection type of U and V, which is U & V
     */

    let result = merge(
        {
            name: 'John'
        },
        {
            title: 'Good Morning!'
        });

    console.log(result);

};
typescriptGenerics();

/**
 * Benefits of TypeScript generics
 * The following are the benefits of TypeScript generics:
 *
 * Leverage type checks at the compile time.
 * Eliminate type castings.
 * Allow you to implement generic algorithms.
 *
 * Summary
 * Use TypeScript generics to develop reusable, generalized,
 *  and type-safe functions, interfaces, and classes.
 *
 */