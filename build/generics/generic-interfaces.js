"use strict";
/**
 * A generic interface allows you to create an interface that can work with different types
 * while maintaining type safety.
 *
 * A generic interface has a generic type parameter list in angle brackets <> following
 *  the name of the interface
 * Syntax:
 *  interface interfaceName<T> {
 *  }
 *
 *  This makes the type parameter T visible to all members of the interface.
 *
 *  interface interfaceName<U, V> {
 *      // ...
 *  }
 *
 */
const genericInterfaces = () => {
    let month = {
        key: 'August',
        value: 8
    };
    console.log(month);
    class List {
        constructor() {
            this.items = [];
        }
        add(o) {
            this.items.push(o);
        }
        remove(o) {
            let index = this.items.indexOf(o);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        }
    }
    // Usage of generic interface and class
    let list = new List();
    for (let i = 0; i < 10; i++) {
        list.add(i);
    }
    let inputOptions = {
        'disabled': false,
        'visible': true
    };
};
genericInterfaces();
