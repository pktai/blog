---
title: Passing Functions to Components
date: "2019-08-25T21:44:32.169Z"
categories: ["ReactJS"]
tags: ["ReactJS"]
---
###Example:

```javascript
import React from "react";
import { Input } from "antd";
import "./App.css";

class App extends React.Component {
  handleChange = (tags, think) => event => {
    console.log(tags); //"tag"
    console.log(think); //"think"
    console.log(event.target.value); //value
  };
  render() {
    return (
      <div className="App">
        <div style={{ width: 500 }}>
          <Input onChange={this.handleChange("tags", "think")}></Input>
        </div>
      </div>
    );
  }
}
export default App;
```