/**
 * number
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * @description Represents numeric data, including integers and floating point numbers
 */

// Declare a variable as type number
const myNumber1: number = 2.5; // No errors

// Try to assign any other type and you'll get an error
const myNumber2: number = '2'; // Errors

// The bigint type can be used for very large values that can't fit inside number
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
const myNumber3: bigint = BigInt(9007199254740991);

// Declare a parameter as type number, and a function return type as number
function myNumberFunction(myParam: number): number {
    return myParam * 2;
}

// Declare a type alias that has a property of type number
type NumberType = {
    myNumber: number;
};

// Declare an interface that has a property of type number
interface NumberInterface {
    myNumber: number;
}

/* ---------------- Examples ---------------- */

function multiply(a: number, b: number): number {
    return a * b;
}

