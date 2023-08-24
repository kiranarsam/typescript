"use strict";
/**
 * Type -gaurd: to narrow down the type of a variable.
 *
 * Type Gaurds allow you to narrow down the type of a variable within a conditional block.
 * Using operators:
 *  typeof
 *  instanceof
 */
const typescriptTypeGaurd = () => {
    function add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }
        throw new Error('Invalid arguments. Both arguments must be either numbers or strings');
    }
    // Here, typescript knows the usage of the typeof operator in the conditional blocks.
    /**
     * Similar to typeof operator, the typescript is also aware of the usage of
     * the instanceof operator.
     */
    class Customer {
        isCreditAllowed() {
            return true;
        }
    }
    class Supplier {
        isInShortList() {
            return true;
        }
    }
    function signContract(partner) {
        let message = "";
        if (partner instanceof Customer) {
            message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' :
                'Credit issue';
        }
        if (partner instanceof Supplier) {
            message = partner.isInShortList() ? 'Sign a new contract the supplier' :
                'Need to evaluate further';
        }
        return message;
    }
    // 'in' operator
    /**
     * The 'in' operator carries a safe check for the existence of a property on an object.
     * You can also use it as a type guard.
     */
    function signDocument(partner) {
        let message = "";
        if ('isCreditAllowed' in partner) {
            message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' :
                'Credit issue';
        }
        else {
            // must be supplier
            message = partner.isInShortList() ? 'Sign a new contract the supplier' :
                'Need to evaluate further';
        }
        return message;
    }
    // User-defined type guards
    /**
     * User-defined type guards allow you to define a type guard or
     *  help TypeScript infer a type when you use a function.
     *
     * A user-defined type guard function is a function that simply returns "arg is aType".
     */
    function isCustomer(partner) {
        return partner instanceof Customer;
    }
    function signSecondDocument(partner) {
        let message = "";
        if (isCustomer(partner)) {
            message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' :
                'Credit issue';
        }
        else {
            // must be supplier
            message = partner.isInShortList() ? 'Sign a new contract the supplier' :
                'Need to evaluate further';
        }
        return message;
    }
};
typescriptTypeGaurd();
/**
 * Summary
 * Type guards narrow down the type of a variable within a conditional block.
 * Use the typeof and instanceof operators to implement type guards in the conditional blocks.
 */ 
