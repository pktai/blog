---
title: String Function PostgreSql
date: "2019-08-19T21:14:32.169Z"
categories: ["PostgreSql"]
tags: ["PostgreSql"]
---
Today I read through the post 'String Function and Operator'.
After I read it for a while, I found a function that solved the problem I was looking for `split_part(string text, delimiter text, field int)`. But, there is a problem here: according to the document
`Split string on delimiter and return the given field (counting from one)`. ohh shit!!!
it cannot take the last character without knowing the length of the sequence.
And now I am also looking for that function without seeing :v FCK
function concat is merge multi properties select
