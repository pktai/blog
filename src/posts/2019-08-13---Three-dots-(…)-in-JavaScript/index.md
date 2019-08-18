---
title: Three dots ( … ) in JavaScript
date: "2019-08-13T21:40:32.169Z"
categories: ["javascript", "reactJs"]
tags: ["javascript"]
---
In this article, we are going to discuss a feature introduced in ES6 that is spread operator and rest operator. 🔥 🔥 🔥
I've become a big fan of the three dots that may change your style of solving the problem within JavaScript. We can use three dots … in two different ways as spread operator and rest operator.

## Rest Parameters 
```javascript
function myFunc(a, b, ...args) {
 console.log(a); // 22
 console.log(b); // 98
 console.log(args); // [43, 3, 26]
};
myFunc(22, 98, 43, 3, 26);
```
In myFunc's last parameter prefixed with … which will cause to all remaining arguments placed within the javascript array.

Rest parameters can be destructured (arrays only), that means that their data can be unpacked into distinct variables.

```javascript
function myFunc(...[x, y, z]) {
  return x * y* z;
}

myFunc(1)          // NaN
myFunc(1, 2, 3)    // 6
myFunc(1, 2, 3, 4) // 6 (fourth parameter is not destructured)
```
##Spread Operators ✨
```javascript
function myFunc(x, y, ...params) { // used rest operator here
  console.log(x);
  console.log(y);
  console.log(params);
}

var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc(...inputs); // used spread operator here
// "a"
// "b"
// ["c", "d", "e", "f"]
```
There have always been a variety of ways to combine arrays, but the spread operator gives use a new method for combining arrays:

```javascript
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];

console.log(pizzas); // 'Deep Dish', 'Pepperoni', 'Hawaiian', 'veg pizza', 'Meatzza', 'Spicy Mama', 'Margherita'
```

With spread operator, Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
```javascript
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```