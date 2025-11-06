---
title: 'Using this keyword in fat arrow functions'
description: 'The diffrence between using this keyword in javascript and typescript with fat arrow functions.'
published: true
date: 2021-06-25T12:18:00.000Z
author: amirdaraee
slug: 'typescript_fatarrow_and_this_keyword'
photo: assets/stock/this-typescript.png
imgCredit: valentinog.com
keywords:
    - typescript
language: en
output:
    html_document: {css: post-details.component.css}
slugs:
    - typescript_fatarrow_and_this_keyword
---

# Fat Arrow Functions and This Keyword

Normaly in javascript land, when we write a function it comes with it's own this. for instance:

```javascript
var store = {
    name: 'Walmart',
    address: '702 S.W. Eighth St., Bentonville, AR 72716',
    employees: ['Ben','Sarah','Amir'],
    listEmployees: function(){
        var storeThis = this;
        this.employees.forEach(function(e){
            //this.name would return an undefined here so we have to use storeThis.name here
            console.log(e + ' works at ' + storeThis.name);
        });
    }
}
```

However, in typescript when we write our functions fat arrow style we can use this keyword from the surrounding code because they share the this keyword, so we could write the above example like:

```javascript
var store = {
    name: 'Walmart',
    address: '702 S.W. Eighth St., Bentonville, AR 72716',
    employees: ['Ben','Sarah','Amir'],
    listEmployees: function(){
        this.employees.forEach( e => {
            console.log(e + ' works at ' + this.name);
        });
    }
}
```


