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

Once a parameter is optional, all parameters after it must also be optional.
