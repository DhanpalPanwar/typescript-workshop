/**
 * arrays
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * @description Represents an array or list of items of a type
 */

// Declare a variable as type number[]
const myArray1: number[] = [1, 2]; // No errors
const myArray2: Array<number> = [1, 2];

const array1: Array<number | string> = [];
const array2: (number | string)[] = [];

// Try to assign any other type and you'll get an error
const myArray3: number[] = [1, '2']; // Errors
const myArray4: Array<number> = [1, '2'];

// Tuples can be declared using this syntax too
const myTuple1: [string, number, boolean] = ['hi', 123, false]; // No errors
const myTuple2: [string, number, boolean] = [123, 'hi', false]; // Errors

// Declare a parameter as type number[], and a function return type as number[]
function myArrayFunction(myParam: number[]): number[] {
    return myParam.map((item) => (item === 1 ? 1 : 2));
}

// Declare a type alias that has a property of type number[]
type NumberArrayType = {
    myArray: number[];
};

// Declare an interface that has a property of type number[]
interface NumberArrayInterface {
    myArray: number[];
}

// We can use any contructed types or interfaces as the array type
const myArray5: NumberArrayType[] = [
    { myArray: [1, 2, 3] },
    { myArray: [1, 2, 3] },
];

/* ---------------- Examples ---------------- */

// Arrays work basically the same as in JavaScript, except their contents are typed
function sum(numbers: number[]): number {
    let sum: number = 0;
    for (const num of numbers) {
        // num is of type 'number'
        sum += num;
    }
    return sum;
}
