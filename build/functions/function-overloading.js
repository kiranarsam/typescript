"use strict";
/**
 * Function overloading:
 *  It is relationship between parameter types and result types of a function.
 */
const functionOverloading = () => {
    // simple function
    function addNumbers(a, b) {
        return a + b;
    }
    function addStrings(a, b) {
        return a + b;
    }
    // using union type
    function add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        return "";
    }
    function sum(a, b) {
        return a + b;
    }
    let result = sum(10, 20);
    console.log(result);
    function multiply(a, b, c) {
        if (c)
            return a * b * c;
        return a * b;
    }
    // Method overloading
    class Counter {
        constructor() {
            this.current = 0;
        }
        count(target) {
            if (target) {
                let values = [];
                for (let start = this.current; start <= target; start++) {
                    values.push(start);
                }
                this.current = target;
                return values;
            }
            return ++this.current;
        }
    }
    ;
    let counter = new Counter();
    console.log(counter.count()); // return a number
    console.log(counter.count(20));
};
functionOverloading();
/**
 * Summary
 * TypeScript function overloadings allow you to describe the relationship between parameter types and
 *  results of a function.
 */
