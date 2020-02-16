---
title: Immutable on javascript 
date: "2019-08-06T16:40:32.169Z"
categories: ["Immutable", "javascript"]
tags: ["Immutable"]
---
Immutable targer: để tối ưu performace trong source.
luu y cach su dung Object.assign.
```javascript
let A = [1, 2, 3];
let B = A;
// đây là lệnh thay đổi giá trị của array
A[0] = 5; // A = B = [5, 2, 3]
// nhưng đây là lệnh thay đổi giá trị của biến
A = []; // A = [], B = [5, 2, 3]
let str = 'Hello World';
// lệnh gán sau không làm thay đổi giá trị của str
str[1] = 'a'; // str = 'Hello World'
// tương tự vậy, kết quả không phải là 200 như mong đợi
let num = 100;
num[0] = 2; // num = 100
```
Khi làm việc với React, hẳn bạn đã nghe đến tính bất biến của dữ liệu (immutability). Đặc tính này, nói một cách đơn giản, là khả năng giá trị của dữ liệu không bị thay đổi sau khi đã được khai báo. Tính bất biến giúp cho chương trình trở nên dễ dự đoán, ít xảy ra lỗi và trong một số trường hợp còn tăng hiệu suất của ứng dụng. Do đó, React (và Redux) đều khuyến khích mọi người viết code để hướng đến đặc tính này.
Như vậy để thay đổi giá trị của object mà vẫn đảm bảo tính chất bất biến, chúng ta cần sử dụng Object.assign(target, ...sources). Hàm này có tác dụng sao chép thuộc tính của các đối tượng sources vào target. Ví dụ như:
```javascript
const a = { name: 'foo' }
const b = Object.assign({}, a, { name: 'bar', age: 1 }, { id: 9 })
console.log(b) // { name: 'bar', age: 1, id: 9 }
```
Cần lưu ý để đảm bảo tính bất biến thì tham số target nên luôn là {}, vì khi đó các giá trị của sources sẽ được sao chép vào đối tượng mới. Một cách dùng sai là:
```javascript
const a = { name: 'foo' }
const b = Object.assign(a, { name: 'bar', age: 1 }, { id: 9 })
console.log(b) // { name: 'bar', age: 1, id: 9 }
console.log(a) // Giá trị của a cũng bị thay đổi thành { name: 'bar', age: 1, id: 9 }
console.log(a === b) // true
```
Ngoài Object.assign(), bạn cũng có thể dùng cú pháp spread cho object. Ví dụ:

```javascript
const a = { name: 'foo' }
const b = { ...a, name: 'bar', age: 1, id: 9 }
console.log(b) // { name: 'bar', age: 1, id: 9 }
console.log(a === b) // false
```