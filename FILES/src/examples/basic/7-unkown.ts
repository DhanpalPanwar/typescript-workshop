/**
 * unknown
 * @see https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
 * @description Represents a type-safe alternative to any, indicates the type of the
 * value is explicitly unknown
 */

// Declare a variable as type unknown
let myUnknown1: unknown; // No errors

// Try to assign any other type and you won't get an error
let myUnknown3: unknown = 'false'; // No error

// Declare a parameter as type unknown, and a function return type as unknown
function myUnknownFunction(myParam: unknown): unknown {
    return myParam;
}

// Declare a type alias that has a property of type unknown
type UnknownType = {
    myUnknown: unknown;
};

// Declare an interface that has a property of type unknown
interface UnknownInterface {
    myUnknown: unknown;
}

/* ---------------- Examples ---------------- */

// If you're not sure what the type could be (e.g. it comes from a third party)
// we use the unknown type to explicitly indicate this. Typically you'd do
// some manual type checking of the unknown value.
function isString(value: unknown): boolean {
    return typeof value === 'string';
}

class User {
    firstName?: string;
    surname?: string;
}

function isUser(value: unknown): boolean {
    // Can only use instanceof on actual instances, not types
    // @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#instanceof-type-guards
    return value instanceof User;
}
