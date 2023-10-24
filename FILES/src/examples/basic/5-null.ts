/**
 * null
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types
 * @description Represents the intentional absence of a value
 */

// Declare a variable as type null
let myNull1: null; // No errors

// Try to assign any other type and you'll get an error
let myNull2: null = 'false'; // Errors

// Declare a parameter as type null, and a function return type as null
// You'd probably never do this in real life!
function myNullFunction(myParam: null): null {
    return myParam;
}

// Declare a type alias that has a property of type null
type NullType = {
    myNull: null;
};

// Declare an interface that has a property of type null
interface NullInterface {
    myNull: null;
}

/* ---------------- Examples ---------------- */

// Typically used when something can accept a value or nothing
// `undefined` might be preferred here, depending on context
function greet(name: string | null): string {
    if (name) {
        return `Hello ${name}!`;
    } else {
        return 'Hello guest!';
    }
}
