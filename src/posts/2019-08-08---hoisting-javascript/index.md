---
title: hoisting javascript
date: "2019-08-08T20:40:32.169Z"
categories: ["javascript"]
tags: ["javascript"]
---
Hoisting là khái niệm chỉ việc mọi khai báo biến (với từ khóa var) sẽ được chuyển lên trên cùng của hàm. Để chứng minh chúng ta sẽ thực hiện những ví dụ dưới đây: Ta có 1 function như sau:
```javascript
(function(){
    console.log(x);
 })();
```
kết quả trả về là lỗi, điều này là đương nhiên vì function đâu hiểu x là gì, vậy thì viết như sau thì sao:
```javascript
(function(){
      console.log(x);
      var x = ''abc"
   })();
```
kết quả trả về là undifined. Tại sao lại là undifined mà không phải là lỗi như trên, theo như ta hiểu thông thường thì console cũng không thể hiểu đc x là gì.

Nhưng thực tế, đoạn code trên sẽ chuyển thành như sau:

```javascript
(function(){
    var x;
    console.log(x);
    x = "abc"; 
})();
```