# Introduction to jQuery <!-- omit in toc -->

[Link to video](https://channel9.msdn.com/Series/Introduction-to-jQuery)

- [Basics](#Basics)
  - [Getting started](#Getting-started)
  - [Document Ready](#Document-Ready)

## Basics

### Getting started

Import the jQuery library via CDN or script

### Document Ready

Using document ready means you don't have to worry that things have loaded or not - it will only happen when it's ready.  Also not worrying about browser differences.

Several ways of doing this

The shortest

```js
$(function(){
  // run this when ready
});
```

Another way

```js
$(document).ready(function(){
  // run this when ready
})
```

---
