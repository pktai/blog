---
title: ES6 feature
date: "2019-08-23T22:04:32.169Z"
categories: ["javasript"]
tags: ["javasript"]
---
###Expression Bodies
####ES6
```javascript
odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
```
####ES5
```javascript
odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });
```
###Rest Parameter
Aggregation of remaining arguments into single parameter of variadic functions.
####ES6
```javascript
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9
```
####ES5
```javascript
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) === 9;
```
###Spread Operator
Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.
####ES6
```javascript
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
```
####ES5
```javascript
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]

function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]
```
###String Interpolation
Intuitive expression interpolation for single-line and multi-line strings. (Notice: don't be confused, Template Literals were originally named "Template Strings" in the drafts of the ECMAScript 6 language specification)
####ES6
```javascript
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
```
####ES5
```javascript
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";
```
###Custom Interpolation
Flexible expression interpolation for arbitrary methods.
####ES6
```javascript
get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
```
####ES5
```javascript
get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);
```
###Binary & Octal Literal
Direct support for safe binary and octal literals.
####ES6
```javascript
0b111110111 === 503
0o767 === 503
```
####ES5
```javascript
parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
0767 === 503; // only in non-strict, backward compatibility mode
```
###Enhanced Object Properties
####Property Shorthand
Shorter syntax for common object property definition idiom.
####ES6
```javascript
var x = 0, y = 0
obj = { x, y }
```
####ES5
```javascript
var x = 0, y = 0;
obj = { x: x, y: y };
```
Support for computed names in object property definitions.
####ES6
```javascript
let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}
```
####ES5
```javascript
var obj = {
    foo: "bar"
};
obj[ "baz" + quux() ] = 42;
```
Support for method notation in object property definitions, for both regular functions and generator functions.

####ES6
```javascript
obj = {
    foo (a, b) {
        …
    },
    bar (x, y) {
        …
    },
    *quux (x, y) {
        …
    }
}
```
ES5
```javascript
obj = {
    foo: function (a, b) {
        …
    },
    bar: function (x, y) {
        …
    },
    //  quux: no equivalent in ES5
    …
};
```
####String Searching
New specific string functions to search for a sub-string.
####ES6
```javascript
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false
```
####ES5
```javascript
"hello".indexOf("ello") === 1;    // true
"hello".indexOf("hell") === (4 - "hell".length); // true
"hello".indexOf("ell") !== -1;    // true
"hello".indexOf("ell", 1) !== -1; // true
"hello".indexOf("ell", 2) !== -1; // false
```
####Number Type Checking
####ES6
```javascript
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true
```
####ES5
```javascript
var isNaN = function (n) {
    return n !== n;
};
var isFinite = function (v) {
    return (typeof v === "number" && !isNaN(v) && v !== Infinity && v !== -Infinity);
};
isNaN(42) === false;
isNaN(NaN) === true;

isFinite(Infinity) === false;
isFinite(-Infinity) === false;
isFinite(NaN) === false;
isFinite(123) === true;
```
####Array Matching
Intuitive and flexible destructuring of Arrays into individual variables during assignment.
####ES6
```javascript
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]
```
####ES5
```javascript
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;
```
####Object Matching, Shorthand Notation

Intuitive and flexible destructuring of Objects into individual variables during assignment.

####ES6
```javascript
var { op, lhs, rhs } = getASTNode()
```
####ES5
```javascript
var tmp = getASTNode();
var op  = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;
```
####Object Matching, Deep Matching
Intuitive and flexible destructuring of Objects into individual variables during assignment.
####ES6
```javascript
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
```
####ES5
```javascript
var tmp = getASTNode();
var a = tmp.op;
var b = tmp.lhs.op;
var c = tmp.rhs;
````