/**
 * Static properties is shared among all instances of a class.
 */

const staticPropertiesMethods = () => {

    class Employee {
        static headcount: number = 0;
        private static bonus: number = 0;

        constructor(private firstName: string, private lastName: string, private jobTitle: string) {
            Employee.headcount++;
            Employee.bonus = 10;
        }

        public static getBonus(): number {
            return Employee.bonus;
        }
    }

    /**the headcount is a static property that initialized to zero.
     * Its value is increased by 1 whenever a new object is created.
     * */
    let john = new Employee('John', 'Doe', 'Developer');
    let jane = new Employee('Jane', 'Doe', 'Developer');

    console.log(Employee.headcount);

    // Static methods
    console.log(Employee.getBonus());
};

staticPropertiesMethods();

/**
 * Summary
 * Static properties and methods are shared by all instances of a class.
 * Use the "static" keyword before a property or a method to make it static.
 */