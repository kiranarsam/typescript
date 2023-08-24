/**
 * Extending interfaces: that allows you to copy the properties and methods of one interface to another.
 */

const extendingInterface = () => {

    interface Mailable {
        send(email: string): boolean,
        queue(email: string): boolean
    }

    // Interface extending one interface to another.
    interface FutureMailable extends Mailable {
        later(email: string, after: number): any
    }

    // To extend an interface, you use the extends keyword with the following syntax
    interface A {
        a(): void
    }

    interface B extends A {
        b(): void
    }

    // FutureMailable implementation
    class Mail implements FutureMailable {
        queue(email: string): boolean {
            console.log("email is queued : " + email);
            return true;
        }

        send(email: string): boolean {
            console.log("email sent : " + email);
            return true;
        }

        later(email: string, after: number) {
            console.log(`Sending email at ${after}:` + email);
        }
    }

    // An interface can extend multiple interfaces, creating a combination of all the interfaces.

    interface C {
        c(): void
    }

    // extends with multiple interfaces
    interface D extends B, C {
        d(): void
    }


    // new example
    class Control {
        private state: boolean;
        constructor() {
            this.state = true;
        }
    }

    interface StatefulControl extends Control {
        enable(): void
    }

    class Button extends Control implements StatefulControl {
        enable(): void {
            console.log("Button is enabled.");
        }
    }

    class TextBox extends Control implements StatefulControl {
        enable(): void {
            console.log("TextBox is enabled.");
        }
    }

    class Label extends Control {

    }

    // error cannot implement
    /* class Chart implements StatefulControl {
        enable(): void {

        }
    } */

};

extendingInterface();

/**
 * Summary
 * An interface can extend one or multiple existing interfaces.
 * An interface also can extend a class. If the class contains private or protected members,
 *  the interface can only be implemented by the class or subclasses of that class.
 */