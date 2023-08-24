"use strict";
const stringLiteralTypes = () => {
    let click;
    click = 'click'; // valid
    // click = 'dbclick'; // error, it should only assign 'click'
    let mouseEvent;
    mouseEvent = 'click'; // valid
    mouseEvent = 'dbclick'; // valid
    mouseEvent = 'mouseup'; // valid
    mouseEvent = 'mousedown'; // valid
    let events;
    events = 'click'; // Valid
    events = 'dbclick'; // Valid
    events = 'mouseup'; // Valid
    events = 'mousedown'; // Valid
    // events = 'mouseover'; // Invalid ( Not defined in MouseEvents), Gives error
    let anotherEvent;
};
/**
 * Summary
 * A TypeScript string literal type defines a type
 *  that accepts specified string literal.
 * Use the string literal types with union types and type aliases to define types
 *  that accept a finite set of string literals.
 */ 
