---
title: create Object va assgin Object su khac nhau
date: "2019-08-07T19:40:32.169Z"
categories: ["Javascript"]
tags: ["Javascript"]
---
Các thuộc tính trên chuỗi nguyên mẫu và các 
thuộc tính không có khả năng đếm được thì không thể sao chép. 
```javascript
var obj = Object.create({ foo: 1 }, { // foo ở trên mắt xích prototype của obj.
  bar: {
    value: 2  // bar chứa thuộc tính không liệt kê được. 
  },
  baz: {
    value: 3,
    enumerable: true  // baz chứa thuộc tính liệt kê được.
  }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```
Các giá trị nguyên thủy sẽ được gói thành các đối tượng.
```javascript
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Sự nguyên bản sẽ bị gói lại, null và undefined sẽ bị bỏ qua.
// Ghi chú,chỉ có string wrapper mới có thuộc tính liệt kê được. 
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
Các ngoại lệ sẽ làm gián đoạn quá trình sao chép.
```javascript
var target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: false
}); // target.foo chỉ read-only

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" là read-only
// Trường hợp ngoại lệ được tạo ra khi gán target.foo

console.log(target.bar);  // 2, nguồn thứ nhất được sao chép thành công
console.log(target.foo2); // 3, đặc tính thứ nhất của nguồn thứ 2 được chép thành công.
console.log(target.foo);  // 1, ngoại lệ được ném ra
console.log(target.foo3); // undefined, phương thức gán đã hoàn tất, foo3 sẽ không bị sao chép
console.log(target.baz);  // undefined, nguồn thứ ba cũng không bị sao chép
```

kết luận: việc mà sử dụng create Object thì nó sẽ có prototype, còn việc sử dụng assgin thì nó chỉ sao chép value của object đó thôi chứ không
có sao chép luôn prototype.
