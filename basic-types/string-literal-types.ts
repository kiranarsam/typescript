
const stringLiteralTypes = () => {

    let click: 'click';
    click = 'click'; // valid

    // click = 'dbclick'; // error, it should only assign 'click'


    let mouseEvent: 'click' | 'dbclick' | 'mouseup' | 'mousedown';

    mouseEvent = 'click'; // valid
    mouseEvent = 'dbclick'; // valid
    mouseEvent = 'mouseup'; // valid
    mouseEvent = 'mousedown'; // valid
    // mouseEvent = 'mouseover'; // comiler error

    // to avoid this us can use like this
    type MouseEvents = 'click' | 'dbclick' | 'mouseup' | 'mousedown';
    let events: MouseEvents;
    events = 'click'; // Valid
    events = 'dbclick'; // Valid
    events = 'mouseup'; // Valid
    events = 'mousedown'; // Valid
    // events = 'mouseover'; // Invalid ( Not defined in MouseEvents), Gives error

    let anotherEvent: MouseEvents;
};

/**
 * Summary
 * A TypeScript string literal type defines a type
 *  that accepts specified string literal.
 * Use the string literal types with union types and type aliases to define types
 *  that accept a finite set of string literals.
 */