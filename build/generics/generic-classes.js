"use strict";
/**
 * Generic Classes:
 * A generic class has a generic type parameter list in
 *  angle brackets <> that follows the name of the class
 *
 * Syntax:
 *  class className<T> {
 *      //...
 *  }
 *
 * TypeScript allows you to have multiple generic types in the type parameter list
 *  class className<U,V> {
 *      //...
 *  }
 *
 * The generic constraints are also applied to the generic types in the class
 *  class className<T extends TypeA> {
 *      //...
 *  }
 *
 * Placing the type parameter on the class allows you to develop methods
 *  and properties that work with the same type
 */
const genericClasses = () => {
    class Stack {
        constructor(size) {
            this.size = size;
            this.elements = [];
        }
        isEmpty() {
            return this.elements.length === 0;
        }
        isFull() {
            return this.size === this.elements.length;
        }
        push(element) {
            if (this.isFull()) {
                throw new Error('The stack is overflow!');
            }
            this.elements.push(element);
        }
        pop() {
            if (this.isEmpty()) {
                throw new Error('The stack is empty!');
            }
            return this.elements.pop();
        }
    }
    let numbers = new Stack(5);
    function randBetween(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
    while (!numbers.isFull()) {
        let n = randBetween(1, 10);
        console.log(`Push ${n} into the stack.`);
        numbers.push(n);
    }
    while (!numbers.isEmpty()) {
        let n = numbers.pop();
        console.log(`Pop ${n} from the stack.`);
    }
    // ll'y to stack of strings
    let words = "The quick brown frog jumps over the lazy dog".split(' ');
    let wordStack = new Stack(words.length);
    words.forEach(item => wordStack.push(item));
    while (!wordStack.isEmpty()) {
        console.log(wordStack.pop());
    }
};
genericClasses();
