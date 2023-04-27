# Reading -Notes Class04


## React Docs - Forms

1. What is a ‘Controlled Component’?
We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way

2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
You want to update state as soon as you get the users feedback. React make it easier to do this.

3. How do we target what the user is entering if we have an event handler on an input field?
The event object that is passed to an event listener behind the scenes has access to the element that the event occurred on and the value stored in it e.target.value



## The Conditional (Ternary) Operator Explained

1. Why would we use a ternary operator?
To store value of an expression in a variable

2. Rewrite the following statement using a ternary statement:


if(x===y){
  console.log(true);
} else {
  console.log(false);
}
console.log( x===y ? true : false)

### Bookmark and Review

- React Bootstrap - Forms = https://react-bootstrap.github.io/forms/overview/
- React Docs - conditional rendering = https://reactjs.org/docs/conditional-rendering.html