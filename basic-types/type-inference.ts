/**
 * Type inference describes where and how TypeScript infers types when you don't explicitly annotate them.
 */

const typeInference = () => {

    let counter = 0;
    /**
     * let counter : number = 0;
     */

    function setCounter(max = 100) {

    }
    /**
     * function setCounter(max : number = 100) {
     * }
     */

    function increment(counter: number) {
        return counter++;
    }
    /**
     * function increment(counter : number) : number {
     *  return counter++;
     * }
     */

    let items = [1, 2, 3, null];
    /**
     * Best suit:
     * let items : number[] = [1,2,3, null];
     */

    let items2 = [0, 1, null, 'Hi'];
    /**
     * Best annotation type is
     *
     * let items2 : (number | string)[] = [0, 1, null, 'Hi'];
     */

    let arr = [new Date(), new RegExp('\d+')];
    /**
     * Best annotation type:
     *
     * let arr : (Data | RegExp)[] = [new Date(), new RegExp('\d+')];
     */


};

/**
 *  Type inference	                            Type annotations
 *  ==============                              ========================
 *  TypeScript guesses the type	                You explicitly tell TypeScript the type
 */

/**
 * Summary
    1. Type inference occurs when you initialize variables, set parameter default values,
       and determine function return types.
    2. TypeScript uses the best common type algorithm to select the best candidate types that are
       compatible with all variables.
    3. TypeScript also uses contextual typing to infer types of variables based on the
       locations of the variables.
 */