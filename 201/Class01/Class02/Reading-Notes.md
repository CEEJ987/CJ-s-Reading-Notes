# Reading-Notes Class 03

## Morre in HTML, CSS, and JavaScirpt

### Questions to answer about HTML

1. When should you use and unordered list?

- When you would like a bullet style list

2. How do you change the bullet style of unordered list items?

- ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}

3. When should you use and <ol> vs <ul> in your HTML document?

Use <ol> when you want to list in chronlogical steps. 
Use <ul> when you want a bullet marker style list.

4. Describe two ways you can change the numbers on the list items in an ordered list?

<ol start="3"> Means you are starting at line number 3. 
<ol type="i"> Means you've changed the marker from numbers to I's.

### Reference Links

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul

## CSS

### Questions to answer about CSS

1. Describe the CSS properties of <margin> & <padding> as characters in a story. What is there role in story titled: The Box Model.

They are like interior decorators the are customized to your liking. From positioning to cushioning.

2. List the four parts of an HTML elements as reffered to by the box model.

Content is the stuffing in the pillow
Bordering is the pillow casing and the fluffiness of it.
Padding is the spacing between each pillow
Margin is the cushioning from from it all.

### Reference Links

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

## JavaScript

1. What data types are can you store inside of an <arr> array?

<strings>, <numbers>, <objects>

2. Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?

Yes, can access it through brackets and supplying the item's index

3. List five shorthand operators for assignment in JavaScript and describe what they do?

- *= Multiplcation operator
- -= Subtraction operator
- /= Division operator
- += Addition operator
- %= Remainder operator

4. Read the code below and evaluate the last expression and explain what the result would be and why.

- it results 10dog because false isn't a value.

5. Describe a real world example of when a conditional statement should be used in a JavaScript program.

- if...else statments. These are used incase a question or form requirements are incorrect or aren't met.

6. Give an example of when a Loop is useful in JavaScript.

- When a feature on your site is needed to be repeated or taken multiple times.

### Reference Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_cod

