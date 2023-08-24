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

    /**
     * Generic interfaces that describe object properties
     */
    interface Pair<K, V> {
        key: K,
        value: V
    }

    let month: Pair<string, number> = {
        key: 'August',
        value: 8
    };
    console.log(month);

    /** Generic interface that describe methods */
    interface Collection<T> {
        add(o: T): void;
        remove(o: T): void;
    }

    class List<T> implements Collection<T> {
        private items: T[] = [];
        add(o: T): void {
            this.items.push(o);
        }

        remove(o: T): void {
            let index = this.items.indexOf(o);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        }
    }

    // Usage of generic interface and class
    let list = new List<number>();
    for (let i = 0; i < 10; i++) {
        list.add(i);
    }

    /**
     * Generic interfaces that describe index types
     */
    interface Options<T> {
        [name: string]: T
    }

    let inputOptions: Options<boolean> = {
        'disabled': false,
        'visible': true
    };
};

genericInterfaces();