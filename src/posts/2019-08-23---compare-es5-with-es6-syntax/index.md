---
title: ES6 feature
date: "2019-08-22T22:04:32.169Z"
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