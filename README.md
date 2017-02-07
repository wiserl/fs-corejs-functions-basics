# Assignment - Define and use functions 

> Function expressions, declarations, and arguments

[![Build Status](https://travis-ci.org/helio-training/fs-corejs-functions-basics.svg?branch=solutions)](https://travis-ci.org/helio-training/fs-corejs-functions-basics)

## Introduction

Why are functions important in JavaScript?  They are a primitive data type.  This makes JavaScript a little bit unique from other programming languages.


### Declaring a function

Declaring a function in it's simplest form is done by using the function keyword.

```js
function doSomething() {
  // Does something amazing
}
```

Functions can also be declared on classes, and object literals. 

```js
// With an object literal
const person = { 
  greet() {
    return 'Hello';
  }
}

// With a class
class Person {
  greet() {
    return 'Hello';
  }
}
```

### Bye.. Bye.. `function` keyword deprecation

As of ES2015 the function keyword remains in the language, but most people are using short function syntax (above in the object literal or class) or the arrow function.

Arrow functions are named after their syntax that looks like an 'arrow'.  Converting between the syntax is an easy process.  Arrow functions exist as a function expression or an anonymous function.  

```js
// Old Syntax
function say() {
  // Stuff
}

// Converting to an arrow function

const say = () => {
  // Stuff
}
```

Arrow functions cn additionally tidy up the functions by removing the curly braces when the function is a simple one liner.  The code will return the expression after the arrow.

```js
const say = () => 'Hello';

// Is really
const say = () => { return 'Hello'; }
```

Additionally a single parameter (parameters discussed later) function can be formatted to remove the parenthesis.  These small terse functions ready super easy when using their anonymous form discussed below.  

```js
const say = message => message.toUpperCase();

// Is really
const say = (message) => { return message.toUpperCase(); }
```

From here on out, arrow functions will be used in place of normal functions. Additionaly, the short hand syntax will be the preferred way of defining and assigning functions.

### Named Function expressions

A function expression is a way to treat a function like a variable by using assignment.

```js
const greet = () => 'Hello';
```

### Calling Functions

Declaring a function, and assigning a function expression to a variable allows gives us the ability to call that function.  Calling a function is done by using the parenthesis.

```js
// Definition
function greet() {
  // something in here
}

// Calling the greet function
greet();
```

```js
// Assignment
const greet = () => {
  // Something in here
};

// Calling the greet function
greet();
```

```js
// Declaration
const person = {
  greet() {
    // Something in here
  }
}

// Calling the greet function on person
person.greet();
```

```js
// Declaration
class Person {
  greet() {
    // Do something
  }
}

const person = new Person();

// Calling the greet function on person
person.greet();
```

### Function Parameters / Arguments

Parameters are pieces of the function that are between the `()` in a function.  A function can have a variable amount of parameters.  The other oddity is the number of functional parameters doesn't dictate which function/methode is called (Java being an example which allows method overloading).  JS doesn't allow method overloading. Meaning, you can't define a function with more parameters below an already defined function.  This will result in the function being ovewritten with the function below.

When you call a function, the types passed into the function are called arguments. 

```js
const person = {
  greet() {
    
  },
  // This redefines the greet function with a named parameter 'message'
  greet(message) {
    
  }
};

person.greet(); // Will call the greet(message) function.  The greet(message) has overwritten the original greet function.  Beware.
```


### Anonymous Functions

The nature of functions in JavaScript makes them behave like a type more so than a traditional method definition in other languages.  


```js
import FS from 'fs';

FS.readFile('./somepath/some-file.txt', {}, (err, file) => {
  // This is an example of an anonymous function in the form of a callback (discussed later)
});

```


## Assignment

1. Create an object literal name johnnyFive and export it as `export const johnnyFive = {}`
    1. Create a greet function, make the function return `Johnny Five is Alive`
2. Create a shout function expression, and export it `const shout = ...`
    1. Using the arrow syntax, make the shout function take a message as a parameter (assuming it's a string) and make it all uppercase and append 3 !!!'s on the end of the message.
3. Modify the johnnyFive object to have a shout function
    1. Call the greet function inside of the new shout function
    2. Take the result from the greet function and use it as parameter inside of the greet function created in step 2.
    3. Return the result.  The output should be: `Johnny Five is Alive!!!`;
4. Modify johnnyFive's greet function to take a name.  `greet(name)`.  
    1. If the name is blank, return previous message `Johnny Five is Alive`
    2. If a name is provided, return a new message  `Hello, ${name}. I am Johnny 5.  I am alive!`
