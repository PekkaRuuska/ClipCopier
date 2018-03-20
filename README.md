# ClipCopier

Copy text from element to clipboard.

- Author: Pekka Ruuska
- License: MIT


### Features

 - No dependencies, only vanilla JS
 - Can copy text from multiple elements at a time
 - Custom separators in the final copied string


### Compatibility

- IE10 and up


### Getting started

```html
<script type="text/javascript" src="clipcopier.js"></script>
```


### Usage

```javascript
copyToClipboard(selectors, separator);
```

__selector__ - Selector for the element or elements from where you want to copy text.
__separator__ - String that separates the copied texts from each others.


### Example

```hmtl
<div id = "elementId" class="class-name">
    Lorem ipsum
</div>
<div id="anotherId" class="class-name">
    dolor sit amet
</div>
```

Copy from elements with certain id

```javascript
copyToClipboard('#elementId');  // COPY: Lorem ipsum
```


Copy from elements with certain class name

```javascript
copyToClipboard('.class-name', ' ');  // COPY: Lorem ipsum dolor sit amet
```


Copy text from all specified elements.

```javascript
copyToClipboard('#elementId, #anotherId', ' - '); // COPY: Lorem ipsum - dolor sit amet
```
