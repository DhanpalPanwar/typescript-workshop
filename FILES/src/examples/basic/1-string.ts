/**
 * string
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * @description Represents textual data, such as words and characters
 */

// Declare a variable as type string
const myString1: string = '2'; // No errors

// Try to assign any other type and you'll get an error
const myString2: string = 2; // Errors

// Declare a parameter as type string, and a function return type as string
function myStringFunction(myParam: string): string {
    return `${myParam} world!`;
}

// Declare a type alias that has a property of type string
type StringType = {
    myString: string;
};

// Declare an interface that has a property of type string
interface StringInterface {
    myString: string;
}

/* ---------------- Examples ---------------- */

function concat(string1: string, string2: string): string {
    return `${string1} ${string2}`;
}
