"use strict";
/**
 * Extending interfaces: that allows you to copy the properties and methods of one interface to another.
 */
const extendingInterface = () => {
    // FutureMailable implementation
    class Mail {
        queue(email) {
            console.log("email is queued : " + email);
            return true;
        }
        send(email) {
            console.log("email sent : " + email);
            return true;
        }
        later(email, after) {
            console.log(`Sending email at ${after}:` + email);
        }
    }
    // new example
    class Control {
        constructor() {
            this.state = true;
        }
    }
    class Button extends Control {
        enable() {
            console.log("Button is enabled.");
        }
    }
    class TextBox extends Control {
        enable() {
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
