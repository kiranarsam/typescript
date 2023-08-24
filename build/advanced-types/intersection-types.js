"use strict";
/**
 * Intersection types: to create a new type by combining multiple existing types.
 *
 * The new type has all the features of the existing types.
 * Syntax:
 *      type typeAB = typeA & typeB; // intersection type
 *
 *  typeAB will have all the properties from both typeA and typeB
 *
 *      let varName = typeA | typeB; // union type
 *  varName can hold either typeA or typeB
 */
const typescriptIntersectionTypes = () => {
    // Employee type contains all properties of the Identity and Contact type.
    // Customer type contains all properties of the BusinessPartner and Contact type.
    let emp = {
        id: 100,
        name: 'John',
        email: "a@a",
        phone: '585930843'
    };
    let cus = {
        name: 'ABC',
        credit: 100003,
        email: "ABC@abc.com",
        phone: "5847467087"
    };
    let empSales = {
        id: 100,
        name: 'John',
        email: "a@a",
        phone: '585930843',
        credit: 585854
    };
    /**
     * Type Order is doesn't matter.
     *
     *  type typeAB = typeA & typeB;
     *  type typeBA = typeB & typeA;
     *
     * typeAB and typeBA have the same properties.
     */
};
typescriptIntersectionTypes();
/**
 * Summary
 * An intersection type combines two or more types to create a new type that
 *  has all properties of the existing types.
 * The type order is not important when you combine types.
 */
