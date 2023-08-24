"use strict";
/**
 * TypeScript number type and bigint type
 * All numbers in TypeScript are either floating-point values or big integers.
 *  The floating-point numbers have the type number while the big integers get the type bigint.
 */
const numberType = () => {
    let price;
    price = 99.5;
    let coutnter = 0;
    let x = 100, y = 200;
    // Binary
    let bin = 0b1010;
    let anotherBin = 0b1010; //  0 or 1  ==> 0b or 0B
    // Octal
    let octal = 0o10; // 0 to 7  ==> 0o
    // Hexa
    let hexa = 0x1A; // [0..9A..F]   ==> 0x or 0X
    // Big integers
    let big = 90017374746436n; // 'n' should be spceified. Max = pow(2, 53) - 1
};
/**
 *
 * Summary
 * All numbers in TypeScript are either floating-point values that get the
 *  'number' type or big integers that get the 'bigint' type.
 * Avoid using the 'Number' type as much as possible.
 */ 
