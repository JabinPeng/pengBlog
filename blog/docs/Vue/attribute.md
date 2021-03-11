---
title: attribute 强制行为
date: 2021-03-11
---

* 删除枚举 attribute 的内部概念，并将这些 attribute 视为普通的非布尔 attribute
* 重大改变：如果值为布尔值，则不再删除 attribute false。相反，它被设置为 attr=“false”。移除 attribute，使用 null 或者 undefined。

## 布尔属性
(这里解释一下：布尔属性类似为required, readonly, disabled，checked)

在于是否声明该属性，声明为true 未声明为false

举个例子：

```html
 <!-- 布尔类型 true -->
<input type="text" required>
<input type="text" required=false>
<input type="text" required='false'>
<input type="text" required=true>
<input type="text" required='true'>
<input type="text" required=required>
<input type="text" required='zzzzz'>
<!-- 布尔类型false -->
<input type="text">
```
绑定表达式	| foo 正常 |	draggable 枚举
-------- | ----- | -----
:attr="null" |	/	| draggable="false"
:attr="undefined" |	/ |	/
:attr="true" |	foo="true" |	draggable="true"
:attr="false" |	/	| draggable="false"
:attr="0" |	foo="0" |	draggable="true"
attr=""	| foo=""	| draggable="true"
attr="foo" |	foo="foo" |	draggable="true"
attr |	foo=""	 | draggable="true"


## 枚举属性
1. 可以理解成匹配的元素是是一个系列的例如'autocomplete' 它可以对应的值' username、email、country、tel、url '
容易和枚举搞混的'contenteditable ' 他的枚举可以true 或者 false
2. 下面代码以'contenteditable ' 为例当空字符串也代表 'true'，而不分配值时，也与空字符串等价都是他枚举
提供的true等同，但是当声明的枚举例如下面'abcdefg' 不存在或者该属性没定义都等同枚举提供的false属性效果
```html
<!-- 枚举 -->
<!-- 枚举生效 -->
<div contenteditable>An editable item</div>
<div contenteditable="">An editable item</div>
<div contenteditable="true">An editable item</div>
<div contenteditable=true>An editable item</div>
<!-- 枚举不生效 -->
<div contenteditable="false">An editable item</div>
<div contenteditable="abcdefg">An editable item</div>
<div>An editable item</div>
```

绑定表达式	| foo 正常 |	draggable 枚举
-------- | ----- | -----
:attr="null"	| /	| / †
:attr="undefined"	| /	| /
:attr="true"	| foo="true" | 	draggable="true"
:attr="false" |	foo="false" † |	draggable="false"
:attr="0" |	foo="0" |	draggable="0" †
attr="" |	foo=""	| draggable="" †
attr="foo" |	foo="foo" |	draggable="foo" †
attr	| foo="" |	draggable="" †
