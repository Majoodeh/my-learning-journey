# TYPESCRIPT

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
It is a `superset` of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional `static` typing, classes, and interfaces to JavaScript, enabling developers to catch errors early during development and improve code maintainability.
`superset`: it has all the features of JavaScript plus additional features.
`static typing`: types are checked at compile time rather than at runtime.

In TypeScript, the file `tsconfig.json` is used to configure the TypeScript compiler options, such as the target JavaScript version, module system, and other settings.

`JavaScript` checks the types of variables at `runtime`.
`TypeScript` checks the types of variables at `compile time`.

## Setup commands:

1. `tsc --init`: to create a tsconfig.json file in your project. without this file, tsc will use default settings.
2. `tsc -w ` or `tsc --watch`: to run the TypeScript compiler in watch mode, which automatically recompiles your TypeScript files whenever you make changes to them.

### Project Structure (rootDir & outDir):

- `rootDir`: Where the TypeScript(.ts) source files are located. usually a folder named `src`.
- `outDir`: Where the compiled or generated JavaScript(.js) files will be saved. usually a folder named `dist` or `build`.

### The Clean-up & debug commands:

`removeComments`: to remove all comments from the generated JavaScript files. if set to true, the compiler will delete all comments from the output files.
`sourceMap`: to generate source map files that map the compiled JavaScript code back to the original TypeScript code. This is useful for debugging, as it allows developers to see the original TypeScript code while debugging in the browser or other tools.

### Example tsconfig.json file

```json
{
  "compilerOptions": {
    /* Basic Settings */
    "target": "ES6", // The version of JavaScript to produce
    "module": "commonjs", // How files talk to each other

    /* Folders */
    "rootDir": "./src", // Look for TS files here
    "outDir": "./dist", // Put JS files here

    /* Features */
    "removeComments": true, // Don't put my notes in the final JS
    "sourceMap": true // Help me find errors in my TS code
  }
}
```

## Type annotations in TypeScript

What are type annotations?
It is a colon `:` followed by a type name that you add to a variable `let capital : string = "Amsterdam" ` , function parameter `function add (a:number,b:number):number{...}`, or function return value to specify the type of data it can hold.

What would happen if we dont use type annotations?
TypeScript is smart and it will infer (guess) the type based on the value assigned to the variable. The only risk is if you don't assign a value or an annotation, because then TypeScript will be confused and will assign the type `any` to the variable, which means it can hold any type of value, effectively opting out of type checking.

`any`: in case you don't know the type of the variable or if it can hold multiple types of values. But that's means that you can treat a number as a string or vice versa, which can lead to runtime errors.

## What are the basic types in TypeScript?

1. `number`: for numeric values, both integers and floating-point numbers.
2. `string`: for textual data, enclosed in single or double quotes.
3. `boolean`: for true/false values.
4. `array`: for collections of values, defined using square brackets or the Array<T> generic type.
5. `tuple`: for fixed-size collections of values of different types.
6. `enum`: for defining a set of named constants.
7. `any`: for variables that can hold values of any type, effectively opting out of type checking.
8. `void`: for functions that do not return a value.

### Different types in declaring variables:

` let all : string | number | boolean = "Majd"`
The variable `all` can hold either a string or a number. and we can assign a initial value of either type.

`let myContacts = [" Majd", "Ahmad", "Salam"];`
The variable `myContacts` is type `string[]`, an array of strings.

`let myContacts = [" Majd", "Ahmad", "Salam", 10];`
The variable `myContacts` is type `(string | number)[]`, an array that can hold both strings and numbers.

Declaring Basic Array:
You do that by stating the type of the items followed by square brackets `[]`.
Pattern : `let arrayName: type[] = [value1, value2, ...];`
Example: `let myNumbers: number[] = [1, 2, 3, 4, 5];`

Union Arrays:
Pattern : `let arrayName: (type1 | type2)[] = [value1, value2, ...];` always use parentheses to group the types together.

Strict List (Tuple):
Pattern : `let tupleName: [type1, type2, ...] = [value1, value2, ...];`
Example: `let user: [string, number] = ["Majd", 30];
This declares a tuple named `user` that holds a string and a number in that order. so in this array, you know exactly the nmber of values and their types.

Complex Type Annotations:

- example on how to declare types for arrays that can hold multiple types of values, including nested arrays.
  `let arrayOne :(string| number | boolean |string[])[] = [1, "a", true, ["x", "y", "z"]];`
  the variable `arrayOne` is an array that can hold strings, numbers, booleans, and arrays of strings. this array can contain any combination of these types, even nested arrays of strings.
- Type Aliases:
  When annotations get complex, to give a specific type a nam and then we can use that name instead of repeating the full type annotation every time.

```Typescript
//Define the Rule once"
type MyCustomData = string|number |boolean | string[] | (string|number)[];

//Use the Rule multiple times
let arrayOne: MyCustomData[] = [1, "a", true, ["x", "y", "z"]];
let arrayTwo: MyCustomData[] = ["b", 2, false, [3, 4, 5]];
```

## Strictness Flags: (only in functions?)

In tsconfig.json,there are several strictness flags that can be enabled to enforce stricter type checking and improve code quality. Some of the most commonly used strictness flags include:

1. `noImplicitAny`:

- when you declare a variable without specifying its type, usually TypeScript infers the type as `any`.
- Enabling this flag will raise an error if TypeScript cannot infer a more specific type.

2. `noImplicitReturns`:

- In JavaScript, if a function does not explicitly return a value, it implicitly returns `undefined`.
- Enabling this flag will raise an error if a function has code paths that do not explicitly return a value.

3. `noUnusedLocals`:

- This flag raises an error if there are local variables that are declared but not used anywhere in the code.

- It is applied to local variables, functions, and imports.

- you can bypass by prefixing the variable name with an underscore `_`.

`function log(_message: string) { ...}`

4. `noUnusedParameters`:

- This flag raises an error if there are function parameters that are declared but not used within the function body.

## Function Optional and Default Parameters

In TypeScript, parameters (inputs) are **required** by default. If a function asks for two things, you must give it two things, otherwise, the "blueprint" is broken.

To make a parameter optional, you can add a question mark `?` after the parameter name in the function declaration.

`function showData(user: string, age: number, country?: string) {... }`

- Once a parameter is optional, all parameters after it must also be optional.

## Function Rest Parameters

Rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful when you don't know in advance how many arguments will be passed to the function.
`function sumAll(...numbers: number[]): number { ... }`

## Syntax in Anonymous and Arrow Functions

```// Anonymous Function
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
```

```// Arrow Function
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};
```

## Data Types - Type Alias

Why to use Type Alias?
Type aliases allow you to create a new name for a type.

It allows defining types with a custom name, and this type can then be used by different variables, function parameters, or return types.

```typescript
type Car = {
  year: number;
  type: string;
  model: string;
};
let car1: Car = { year: 2020, type: "Sedan", model: "Toyota" };
let car2: Car = { year: 2018, type: "SUV", model: "Honda" };
```

### How to defdine an alias?

using the word `type` followed by the name of the alias and the type it represents.

`type AliasName = existingType;`

### Advanced use, Object Aliases

The power of aliases comes when we define complex object, like making a blueprint for an object structure.

```typescript
type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
};
let employee: Person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};
let student: Person = {
  name: "Bob",
  age: 20,
  isEmployed: false,
};
```

We can also extend an alias using intersection types `&`.

`Extending` means creating a new type that includes all properties of the original type plus additional properties.

```typescript
type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
};

type Employee = Person & {
  employeedId: number;
  department: string;
};
```

### Literal Types:

Literal types allow you to specify exact values a variable can hold, rather than just a general type.

```typescript
type Direction = "North" | "South" | "East" | "West";
let move: Direction;
move = "North"; // Valid
move = "Up"; // Error: Type '"Up"' is not assignable to type 'Direction'.
```

## Tuples

It is a typed array with a fixed number of elements where each element can have a different type.

so ecah element has a specific type and position in the array. if string is first, number is second, boolean is third, etc. you can not change the order or the type of each element.
so `["Hello", 42, true]` is valid for `[string, number, boolean]`, but `[42, "Hello", true]` is not.

how to declare a tuple:
`let tupleName: [type1, type2, ...] = [value1, value2, ...];`
Example:

```typescript
type user = [string, number, boolean];
student: user = ["Majd", 25, true];
// or
let student: [string, number, boolean] = ["Majd", 30, true];
```

`student` is an array so we can use array methods on it.
To make it read-only, we can use the `readonly` modifier.

```typescript
type user = readonly [string, number, boolean];
let student: user = ["Ali", 25, true];
```

Note:
There are differnt ways to define tuples in TypeScript.

```typescript
let myTuple: [string, number]; // myTuple is a variable of type tuple with a string and a number
// you cant do this:
user: myTuple = ["Majd", 30]; //! Error: 'user' is not defined

type MyTupleType = [string, number]; // this defines a type alias 'MyTupleType' for a tuple with a string and a number

// you can do this:
let user: MyTupleType = ["Majd", 30]; // user is a variable of type MyTupleType
```

Destructuring Tuples:

```typescript
type User = [string, number, boolean];
let user: User = ["Alice", 30, true];
let [name, age, isEmployed] = user;
console.log(name); // "Alice"
```

## Void & Never Types

`Void Type`:
It is used to indicate that a funvtion does not turn a value.
It is a standard way to tell that a function is intended to perform an action without producing a result.
actions( logging to a console or saving to database or modifying a global variable).

Usually if a function does not return anything, javaScript and TypeScript implicitly return `undefined`.

```typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement here
}

const result = logMessage("Hello!");
// 'result' is typed as void; you can't do anything with it.
```

- What cases `void` is useful?
  - - Event Handlers: functions that respond to user actions, like button clicks.
  - Logging Functions: functions that log information to the console or a file.
  - Functions with side effects: functions that modify global state or perform actions without returning a value.

`Never Type`:
It is a type for values that should never exist.

when does `Nothing` happen in code?

1. Funvtion that never finishes (crashes or infinite loop).
2. Function that always throws an error.
3. Impossible type scenarios (like a variable that can never have a valid value). (when a function handeled every possible case and there is litirally nothing left)

```typescript

```
