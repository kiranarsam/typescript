"use strict";
/**
 *
 */
const functionDefaultParameters = () => {
    function applyDiscount(price, discount = 0.05) {
        return price * (1 - discount);
    }
    console.log(applyDiscount(200));
    // You cannot use default parameters in below case
    // You can only used with function or contructor
    //let promotion: (price: number, discount: number = 0.05) => number; // Gives Error
    /** Both default and optional parameters, share the same type
     * Example Syntax:
     *
     *  (price: number, discount?: number) => number
     */
    function getDay(year = new Date().getFullYear(), month) {
        let day = 0;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;
            case 2:
                // Leap year
                if (((year % 4 == 0) && !(year % 100 == 0)) || year % 400 == 0) {
                    day = 29;
                }
                else {
                    day = 28;
                }
                break;
            default:
                throw Error('Invalid month');
        }
        return day;
    }
    console.log(getDay(2019, 2));
    // to get default value, pass 'undefined' in the argument
    console.log(getDay(undefined, 2));
};
functionDefaultParameters();
/**
 * Summary
 * 1. Use default parameter syntax "parameter:=defaultValue" if you want
 *  to set the default initialized value for the parameter.
 * 2. Default parameters are optional.
 * 3. To use the default initialized value of a parameter, you omit the argument when
 *  calling the function or pass the "undefined" into the function.
 */ 
