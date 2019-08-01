---
title: van de ở setInterval và clearInterval
date: "2019-08-01T07:40:32.169Z"
categories: ["javascript"]
tags: ["javascript"]
---
khi sử dụng 1 function setInterval để xử lí một action ví dụ như: countDown 1 button 
thì vấn đề khi mình sử dụng mà trong lúc chưa clearInterval thì sẽ xảy ra bug Warning
vì `Quá trình unmounting của component xảy ra khi component bị removed từ một DOM. Việc này có thể xảy ra khi một DOM được render mà không có component hoặc nếu user chuyển hướng đến một trang web khác hoặc khi trình duyệt được đóng. Chỉ có duy nhất một method trong quá trình này là: componentWillUnmount, componentWillUnmount sẽ được gọi trước khi một component bị remove khỏi một DOM. Nếu một component khởi tạo bất kì một method nào mà method đó yêu cầu phải clean up thì componentWillUnmount sẽ là nơi bạn nên đặt clean up.`

Example: 
```javascript
 disableButton = () => {
  this.interval = setInterval(
    () => this.setState({
      timeToGo: this.state.timeToGo - 1
    }),
    1000
  )
 };
componentWillUnmount() {
  clearInterval(this.interval);
};