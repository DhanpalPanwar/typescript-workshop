/**
 * never
 * @see https://www.typescriptlang.org/docs/handbook/basic-types.html#never
 * @description Represents a type for values that never occur
 */

// Declare a variable as type never
let myNever1: never; // No errors

// Try to assign any other type or value and you'll get an error
myNever1 = 123; // Error
let myNever2: never = 'false'; // Error

// Declare a parameter as type never, and a function return type as unknown
function myNeverFunction(myParam: never): never {
    return myParam;
}

// Declare a type alias that has a property of type never
type NeverType = {
    myNever: never;
};

// Declare an interface that has a property of type never
interface NeverInterface {
    myNever: never;
}

/* ---------------- Examples ---------------- */

// Used to represent values that should never occur,
// or handle scenarios where a function should never return (e.g. always throws)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // ... do stuff forever
    }
}

// If you intend for the function to terminate, but not return,
// use the void type instead
function processStatus(status: string): void {
    if (status === 'success') {
        console.log('Success');
    } else {
        throwError('Failed');
    }
}
