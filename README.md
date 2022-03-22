# calculator-top
# The Odin Project/Front End Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on The Odin Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator) pulling in resources from [Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

! [BD Calculator App](https://awesomescreenshot.s3.amazonaws.com/image/2827546/24417713-742c799f9b583703cc15d198b4bf4f0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220322%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220322T190721Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=918226764fecb9b54411445662cbb6db475b05458a1c72d57b19efbd4c85ad51)

### Links

- Solution URL: [Add solution URL here](https://github.com/braddefauw/calculator-top)
- Live Site URL: [Add live site URL here](https://braddefauw.github.io/calculator-top/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS
- Desktop-first workflow

### What I learned

This was a great project that made it easy to use agile development to build out an increasing complex app. In particular, I really enjoyed integrating the light/dark mode feature and looping through all of my buttons with my event listeners to consolidate code. Additionally, it was interesting to learn about how input tags could be used in place of buttons, which once again helped to make my code a bit more simple. Incorporating keyboard functionality was a stretch goal that I was happy to learn about and accomplish as well.

```html
<div class="calc-buttons">
  <input type="button" value="7" class="number">
  <input type="button" value="8" class="number">
  <input type="button" value="9" class="number">
  <input type="button" value="DEL" class="delete">
  <input type="button" value="4" class="number">
  <input type="button" value="5" class="number">
  <input type="button" value="6" class="number">
  <input type="button" value="+" class="operator">
  <input type="button" value="1" class="number">
  <input type="button" value="2" class="number">
  <input type="button" value="3" class="number">
  <input type="button" value="-" class="operator">
  <input type="button" value="." class="number">
  <input type="button" value="0" class="number">
  <input type="button" value="/" class="operator">
  <input type="button" value="*" class="operator">
  <input type="button" value="RESET" class="reset">
  <input type="button" value="=" class="equals">
</div>
```
```css
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 17px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(223, 31%, 20%);
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: hsl(6, 63%, 50%);
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider:before {
    -webkit-transform: translateX(42px);
    -ms-transform: translateX(42px);
    transform: translateX(42px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 16px;
}

.slider.round:before {
    border-radius: 50%;
}
```
```js
let calcContainer = document.querySelector(".calc-container");
document.addEventListener('keypress', function(e){
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9){
        displayValue.innerText += `${e.key}`;
    }else if(e.key === "."){
        displayValue.innerText += `${e.key}`;
        decimalCount++;
    }else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){
        if(valueOne !== "" && displayValue.innerText.indexOf(valueOne) !== -1){
            operate();
            displayValue.innerText += `${e.key}`; 
        }else{
            valueOne = parseFloat(displayValue.innerText);
            displayValue.innerText += `${e.key}`; 
        }
        decimalCount = 0;
    }else if(e.key === "Enter"){
        e.preventDefault();
        operate();
    }
    console.log(result, displayValue.innerText);
})
```

### Continued development

In the future, it would be great to allow users to pick between multiple themes instead of just light/dark, or even all them to select which mode they prefer when they first log in. I'm looking forward to learning more about CSS animations and developing my Javascript skills further.

### Useful resources

- [W3 Schools - How TO - Toggle Dark Mode](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp) - This is an amazing article which helped me finally understand toggling between light and dark mode. I'd recommend it to anyone still learning this concept.
- [Stack Overflow](https://stackoverflow.com/questions/8866053/stop-reloading-page-with-enter-key) - Most frustrating bug dealt with trying to figure out why pressing equals was working on click but not on keydown. This stack overflow article pointed me to e.preventDefault() and was incredibly helpful.

## Acknowledgments

Thank you to the wonderful communities at The Odin Project and Frontend Mentor for your insights and support as I developed this project. Additionally, I'd like to thank @dunnoconnor for his help in helping my navigate keydown bugs, in particular the "Enter" button.