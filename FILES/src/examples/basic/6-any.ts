/**
 * any
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
 * @description Represents a type that can be any type, effectively bypassing
 * typechecking
 */

// Declare a variable as type any
let myAny1: any; // No errors

// Try to assign any other type and you won't get an error
let myAny2: any = 'false'; // No errors
let myAny3: any = 12345;
let myAny4: any = { sausages: 3 };

// Declare a parameter as type any, and a function return type as any
function myAnyFunction(myParam: any): any {
    return myParam + 123;
}

// Declare a type alias that has a property of type any
type AnyType = {
    myAny: any;
};

// Declare an interface that has a property of type any
interface AnyInterface {
    myAny: any;
}

/* ---------------- Examples ---------------- */

// We want to avoid ever using any, but it can be useful when doing partial
// migration from JavaScript. If you're using any, you're not using TypeScript.
function log(input: any): void {
    console.log(input);
}

log(123);
log('Hello');
log(log);
