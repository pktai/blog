---
title: use webpack with reactJs
date: "2019-08-05T17:40:32.169Z"
categories: ["reactjs", "webpack"]
tags: ["webpack"]
---
đọc document trên trang https://webpack.js.org/


In this article, we are going to learn what is the difference between the Javascript REST and Spread. ES6 introduced the three dots(…) syntax in the Javascript and can be used depending upon the context, as a REST or Spread operator.

In short, REST collects all the remaining elements into an array while Spread operator allows arrays/objects/strings to be expanded into single arguments/elements.

Now let’s understand deeply how this works and how they make your coding life simple.

Javascript REST Parameter

Javascript Rest Parameter is a collection of all the remaining elements into an array.

It allows us to represent an indefinite number of arguments passed to a function as an array. It keeps the function definitions neet and clears.

Rest Parameter Example

```
function testRest(x,y,...z){
    console.log(x);  // a
    console.log(y);  // b
    console.log(z);  // [c,d,e]
}

testRest(a,b,c,d,e);
```
We can separately define the arguments in the function and remaining elements in the function call will be collected into an array by the javascript rest parameter.

Before the ES6 Rest parameter, there is an arguments keyword which people are using to get all the arguments in the function.

```
function testArgumentsKeyword(){ 
    console.log(arguments.length); // 2
    console.log(arguments[0]);     // arg1
    console.log(arguments[1]);     // arg2
} 

testArgumentsKeyword("arg1","arg2");
```

But there is a downside of the arguments keywords in the javascript. It returns an array-like object this means you can not perform any array methods like array.filter or array .map. Another pitfall is that you can not use it inside the javascript array function.


Javascript Spread Operator


The Javascript spread operator is just the opposite of the rest parameter. It expands expand the strings or array literals or object literals.

Let’s understand the Javascript spread operator with some examples.

adding new elements to an existing array
```
const arr = ['ele1','ele2', 'ele3'];

const newArr = [...arr, ele4];

console.log(newArr);  // 'ele1','ele2', 'ele3', 'ele4'
```
In the above code, you can see you can add an element to the array using the spread operator.

Here, we add the element at the last index but you can also add this into the starting of the array.

Combing two or more array in Javascript

By using the spread operator, you can easily combine the two or more array into a single array.

```
const arr1 = [a,b,c,d];
const arr2 = [e,f,g,h];

const combinedArr = [...arr1, ...arr2];

console.log(combinedArr);  // a,b,c,d,e,f,g,h
```


Deep Copying an Array

You can easily use deep copying of an array using the spread operator.

```
const arr = [a,b,c,d];

const deepCopyArr = [...arr];
```

deepCopyArr is the deep copy of the array arr that means you can change the deepCopyArr without affecting the arr.

Conclusion

At first, it is very difficult to understand the difference between the javascript rest and spread but once you understand this then it will make your coding life so simple.

Even sometimes, it is very difficult for experienced developers to understand the new javascript syntax.

Both Javascript rest and spread used the same three dots (…) syntax, as a recap, if you want to expand the elements of the iterable elements then use the Spread operator and if you want to collect the elements then you can use the REST parameter of the javascript.

I hope this article helps you to understand these two concepts of javascript. If you have any doubts and suggestion then comment in the comment box.
