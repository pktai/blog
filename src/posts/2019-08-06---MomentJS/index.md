---
title: use function clone() on MomentJs
date: "2019-08-06T15:40:32.169Z"
categories: ["MomentJs", "javascript"]
tags: ["MomentJs"]
---
```javascript
var a = moment([2012]);
var b = moment(a);
a.year(2000);
b.year(); // 2012
```
tương đương với

```javascript

var a = moment([2012]);
var b = a.clone();
a.year(2000);
b.year(); // 2012
```