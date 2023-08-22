/**
 * Function overloading:
 *  It is relationship between parameter types and result types of a function.
 */
const functionOverloading = () => {

    // simple function
    function addNumbers(a: number, b: number): number {
        return a + b;
    }

    function addStrings(a: string, b: string): string {
        return a + b;
    }

    // using union type
    function add(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }

        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }

        return "";
    }


    // function overloading
    function sum(a: number, n: number): number;
    function sum(a: string, b: string): string;
    function sum(a: any, b: any): any {
        return a + b;
    }

    let result = sum(10, 20);
    console.log(result);

    // function overloading with optional parameters
    function multiply(a: number, b: number): number;
    function multiply(a: number, b: number, c: number): number;
    function multiply(a: number, b: number, c?: number): number {
        if (c) return a * b * c;
        return a * b;
    }


    // Method overloading
    class Counter {
        private current: number = 0;
        count(): number;
        count(target: number): number[];
        count(target?: number): number | number[] {
            if (target) {
                let values: number[] = [];
                for (let start = this.current; start <= target; start++) {
                    values.push(start);
                }
                this.current = target;
                return values;
            }

            return ++this.current;
        }
    };

    let counter = new Counter();

    console.log(counter.count()); // return a number
    console.log(counter.count(20));

};

functionOverloading();

/**
 * Summary
 * TypeScript function overloadings allow you to describe the relationship between parameter types and
 *  results of a function.
 */
