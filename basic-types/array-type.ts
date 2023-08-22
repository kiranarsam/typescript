/**
 * A TypeScript array is ordered list of data.
 */

const arrayType = () => {

    // Syntax:
    // let arrayName : type[];

    let skills: string[]; // this declaration
    skills = []; // this is define

    skills[0] = "Problem Solving"; // adding elements
    skills[1] = "Programming";
    skills.push("Sw");

    console.log(skills);

    let scores: (number | string)[];
    scores = ['PS', 'SW', 'P', 100]; // this is important
    console.log(scores);

    let score = scores[0];
    console.log(typeof (score));

    let series = [1, 2, 3];
    console.log(series.length);

    let doubleIt = series.map(e => e * 2);
    console.log(doubleIt);


};

arrayType();

/**
 * Summary
 * In TypeScript, an array is an ordered list of values. An array can store a mixed type of values.
 * To declare an array of a specific type, you use the let arr: type[] syntax.
 */