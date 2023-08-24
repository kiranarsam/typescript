"use strict";
/**
 * A tuple works like an array
 * 1. the no. of elements in the tuple is fixed.
 * 2. the types of elements are known, and need not be the same.
 */
const tupleTypes = () => {
    let skill;
    skill = ['Programming', 10]; // order is important
    let color = [255, 0, 0];
    console.log(color[0]);
    console.log(color[1]);
    console.log(color[2]);
    // Optional tuple elements
    let bgColor, headerColor; // ? at the end it is optional
    bgColor = [0, 255, 255, 255]; // this is normal array
    headerColor = [0, 255, 255]; // this is TypeScript array: [number, number, number, number?]
    console.log(typeof (bgColor), JSON.stringify(bgColor));
    console.log(typeof (headerColor), JSON.stringify(headerColor));
};
tupleTypes();
/**
 * Summary
 * A tupple is an array with a fixed number of elements whose types are known.
 */ 
