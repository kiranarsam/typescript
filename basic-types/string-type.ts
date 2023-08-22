
const stringType = () => {

    let firstName: string = "John";
    let title: string = "Web Developer";

    let description: string = `
        This Typescript string can span
        multiple lines
        .
    `;

    let greeting = "Hello";

    let profile: string = `I'm ${firstName}. I'm a ${title}`;
    console.log(profile);
};

/**
 * In TypeScript, all strings get the string type.
 *   Like JavaScript, TypeScript uses double quotes ("),
 *   single quotes ('), and backtick (`) to surround string literals.
 */