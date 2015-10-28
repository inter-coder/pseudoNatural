# pseudoNatural
Set values to INPUTS types CHECKBOX and RADIO

This class allows the INPUT element types RADIO and CHECKBOX to behave more naturally as inputs with type text

## Dependence

- **none**
---

Install
--------

Download the package with JavaScript file manually:

```html
<script src="pseudoNatural.js"></script>
```

Examples
--------
**simple use**

```javascript
//declare the elements that you want to transform
var elements=document.getElementsByTagName("input");

//create object from class and forward elements
new pseudoNatural(elements);
```

**subsequent transformation of new elements**
```javascript
//declare the elements that you want to transform
var elements=document.getElementsByTagName("input");

//create object from class and forward elements
var pointer=new pseudoNatural(elements);

//add new element to class
var element=document.getElementById("someID")
pointer.addElement(element);
```