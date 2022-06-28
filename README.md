# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Desktop design](./solutions/Desktop-rating-state.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<span data-id="1">1</span>
```

```js
const getAttribute = Array.prototype.forEach.call(spans, function (span) {
  span.addEventListener("click", (e) => {
    console.log(parseInt(span.getAttribute("data-id")));
    // or
    console.log(typeof parseInt(span.innerText) === "number"); // true
    // span.innerText === "string"
  });
});
```

Explanation:

- Loop over an object, spans, to get a rate 1 - 5.
- forEach which is a array method isn't applicable to the spans object
  because it's not an array object.
- use .call method to use a forEach method on another object, spans.

"The call() allows for a function/method belonging to one object to be assigned and called for a different object." (Referece: MDN web docs)

```js
span.classList.contains("selected");
```

Explanation:

- span object is a HTML tag
- contains("") checks if the target object has a given value
  - here contains checks if the span object has a "selected" class

```js
const form = document.getElementsByTagName("form")[0];
const formCollection = document.getElementsByTagName("form");
```

Explanation:

- The first line retrieves the first form object in the DOM
- The second line is to access HTMLCollection object
  - The second variable can't be used for the addEventListener method
  - because it points to a collection rather than a specific element??

### Continued development

I figured out the most part of the interactive functionality, but I feel the code can be cleaner. I'd love to continue exploring how to write clean and reusable code as well as to add more fun and practical functionality using JavaScript.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - used as a reference for styling and JavaScript functions and methods.
- [How to access the data-id attribute from JS](https://stackoverflow.com/questions/5309926/how-can-i-get-the-data-id-attribute) - I learned how to add a data-\* attribute to HTML tags and to access the data from JavaScript.
- [Converting a string to numnber](https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l) - This helped me understand how to convert a value to number in JavaScript.
