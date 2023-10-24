/**
 * undefined
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types
 * @description Represents the absence of a value or uninitialised variables
 */

// Declare a variable as type undefined
let myUndefined1: undefined; // No errors

// Try to assign any other type and you'll get an error
let myUndefined2: undefined = 'false'; // Errors

// Declare a parameter as type undefined, and a function return type as undefined
// You'd probably never do this in real life!
function myUndefinedFunction(myParam: undefined): undefined {
    return myParam;
}

// Declare a type alias that has a property of type undefined
type UndefinedType = {
    myUndefined: undefined;
};

// Declare an interface that has a property of type undefined
interface UndefinedInterface {
    myUndefined: undefined;
}

// Above are synthetic examples, as you'd likely never declare types as only type
// undefined in real life. More likely, you'd want to define something as a type OR undefined
// to allow optional parameters.

// We can do this with the ? optional syntax
type UndefinedType2 = {
    myMaybeString?: string;
};

// We can also do this explicitly using a union type
type UndefinedType3 = {
    myMaybeString: string | undefined; // string OR undefined
};

/* ---------------- Examples ---------------- */

// Typically used when something can accept a value or nothing
// `null` might be preferred here, depending on context
function print(message?: string): void {
    if (message) {
        console.log(message);
    } else {
        console.log('Hello!');
    }
}
