/**
 *
 */

const typescriptGenericConstraints = () => {

    function merge<U, V>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }

    let result = merge(
        { name: 'John' },
        { age: 25 }
    );

    console.log(result);

    // The merge() function expects two objects.
    // However, it doesn’t prevent you from passing a non-object
    let person = merge(
        { name: 'John' },
        25
    );

    console.log(person);

    // TypeScript doesn’t issue any errors.
    /**
     * Instead of working with all types, you may want to add a constraint to
     *  the merge() function so that it works with objects only.
     */

    function mergeWithConstraint<U extends object, V extends object>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        };
    }
    // Because the mergeWithConstraint() function is now constrained,
    //  it will no longer work with all types. Instead, it works with the object type only.


    /**
     * Using type parameters in generic constraints
     *
     * TypeScript allows you to declare a type parameter constrained by another type parameter.
     */
    /* function prop<T, K>(obj: T, key: K) {
        return obj[key]; // Type 'K' cannot be used to index type 'T'.
    } */

    // To fix above error, you add a constraint to K to ensure that it is a key of T
    function propWithConstraint<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    // The above returned as
    function prop<T extends object, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    let str = prop({ name: "Hello" }, 'name');
    console.log(str);

    // Argument of type '"age"' is not assignable to parameter of type '"name"'
    //let age = prop({ name: "Hello" }, 'age');
};

typescriptGenericConstraints();

/**
 * Summary
 * Use 'extends' keyword to constraint the type parameter to a specific type.
 * Use 'extends keyof' to constraint a type that is the property of another object.
 */