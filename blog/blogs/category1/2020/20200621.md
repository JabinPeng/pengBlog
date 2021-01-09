---
title: Base64转blob对象
date: 2020-06-21
tags:
 - JS
categories: 
 - 前端小笔记
---

```js
// Base64转Blob
function base642Blob (code) {
  let parts = code.split(';base64,')
  let contentType = parts[0].split(':')[1]
  let raw = window.atob(parts[1])
  let rawLength = raw.length

  let uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; i++) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([uInt8Array], {
    type: contentType
  })
},
```
