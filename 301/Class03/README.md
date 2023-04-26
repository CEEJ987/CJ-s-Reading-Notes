# Reading Notes Class 02

## Questions

### React Docs - lists and keys

### The Spread Operator

1. What does .map() return?
.map return an array of objects

2. If I want to loop through an array and display each value in JSX, how do I do that in React?
The map() method takes a function that accepts each item in the array as an argument and returns a new value. 

3. Each list item needs a unique ____.
Key

4. What is the purpose of a key?
Keys differentiate whichever item React is controlling. It keeps track of the items.


### What is the spread operator?

1. List 4 things that the spread operator can do.
Pass in an array where you want all of the elements to be parameter. It basically "unarrays" an array

2. Give an example of using the spread operator to combine two arrays.
Copying an array, concatenating or combining arrays, using math functions, using an array as arguments, addding anitem to a list, adding to state in react, combining objects, converting nodelist to an array.

3. Give an example of using the spread operator to add a new item to an array.
An example of using the spread operator to add a new item to an array would be: const newArray = [...oldArray, newItem];

4. Give an example of using the spread operator to combine two objects into one.
An example of using the spread operator to combine two objects into one would be: const combinedObject = {...object1, ...object2};

### How to Pass Functions Between Components

1. In the video, what is the first step that the developer does to pass functions between components? 
Define the function in the parent component.

2. In your own words, what does the increment function do?
It increases a counter variable by one anf sets the value in the component's state.

3. How can you pass a method from a parent component into a child component?
Using props

4. How does the child component invoke a method that was passed to it from a parent component?
Calling it as a function and passing any neccessary arguments.

## Books & Review

- https://reactjs.org/docs/lifting-state-up.html
- https://reactjs.org/tutorial/tutorial.html

