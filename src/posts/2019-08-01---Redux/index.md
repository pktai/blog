---
title: Lưu ý khi sử dụng Redux trong reactJS
date: "2019-08-02T21:40:32.169Z"
categories: ["reactjs", "redux"]
tags: ["redux"]
---
Vấn đề khi sử dụng redux là phải bạn biết mình cần phải sử dụng khi nào ? sử dụng ra sao để
tối ưu nhất. 
thứ nhất:
bạn cần phải biết được là bạn cần truyền State redux qua bao nhiêu component children 
trong component children. nghĩa là lồng trong lồng ít nhất từ 3 cấp.
thứ hai:
bạn phải biết được rằng khi sử dụng redux thì sẽ cho những ưu điểm gì và khuyết điểm gì???
nếu chỉ lồng 1 cấp thì mình nên khuyên bạn sử dụng props trong React để control vì 
nó không cần quá nhiều công đoạn để dispatch rồi lại đưa vào store....
quá nhiều công đoạn dẫn đến việc phức tạp hóa đoạn code của mình(không được clean code cho lắm!!)
thứ ba: 
sử dụng redux để hạn chế việc truyền quá nhiều props trong 1 component dẫn đến việc
khó manage component trong React( khó hiểu đối với những người làm sau)

==> tốt nhất chính chúng ta phải thống nhất những quy định chung khi làm việc với react
thì nó sẽ không bị rối code. dẫn đến việc người sau kế thừa nó sẽ tốt hơn.
cám ơn các bạn.
