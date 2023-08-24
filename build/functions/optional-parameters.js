"use strict";
const functionalOptionalParameters = () => {
    function multiply(a, b, c) {
        // c is optional parameter, before using it need to check and then apply
        if (typeof c !== 'undefined') {
            return a * b * c;
        }
        return a * b;
    }
};
/**
 * Summary
 * Use the "parameter?: type" syntax to make a parameter optional.
 * Use the expression "typeof(parameter) !== 'undefined'" to check if
 *  the parameter has been initialized.
 */
