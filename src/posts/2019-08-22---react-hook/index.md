---
title: React Hook
date: "2019-08-22T22:04:32.169Z"
categories: ["ReactJS"]
tags: ["ReactJS"]
---
###Using the State Hook
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
The introduction page used this example to get familiar with Hooks:
```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
We’ll start learning about Hooks by comparing this code to an equivalent class example.
###Equivalent Class Example
If you used classes in React before, this code should look familiar:
```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
###What’s a Hook?
Our new example starts by importing the useState Hook from React:
```javascript
import React, { useState } from 'react';

function Example() {
  // ...
}
```
What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!
be coutinue...