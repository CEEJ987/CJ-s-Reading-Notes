# Class06 Reading-Notes

# JavaScript

## 3 Major parts of JavaScript

1. The language itself. This is fairly standard among the various environments, both in the various browsers and in the various server-side environments.

2. The DOM API - how the language can interact with the various parts of a web page while in the browser. While in this respect the various browsers are getting closer to each other they still differ. Several libraries, most prominently JQuery, is trying to provide a unified API.

3. The server API (or just API) provided by Node.js or one of the other server-side systems.

## Why JavaScript is important?

JavaScript was used inside web browsers like; **Mozilla Firefox, Internet Explorer, Chrome, Opera, or Safari.** The author would include some JavaScript code in the HTML page the user receives when she visits a web site. That JavaScript code would run in the browser (what we call "client side", as opposed to running on the web server which is called "server side

## Input Output
The very first thing we need to learn is how to interact with the JavaScript code running in the browse. There are a number of way JavaScript can display text for the user (output). The most simple one is by using the alert function:

## Alert
This will show a pop-up in the browser with the text. (You can click on Try! that will open the specific script in a separate window.) The alert() function is actually rarely used, but it is an easy way to show the use of JavaScript.

**Examples**/js/alert.html

<script language="javascript">

alert("Hello World");

</script>


(If you'd like to try it yourself, open your editor and create a file with .html extension) (for example hello.html) and put the above code in the file. Then switch to your browser and open the file with the browser. (Most browsers will let you do that using the File/Open File menu option.)

document.write
examples/js/document_write.html

First line
<script>

document.write("<h1>Hello World</h1>");

</script>
Last line

In this example we have some text (First line), then the JavaScript code, and then some more text (Last line). The JavaScript code uses the document.write function to change the content of the page. It will embed the html snippet <h1>Hello World</h1> after the "First line", but before the "Last line".

This function was often used when one wanted to change what's shown. Today, there are some more advanced techniques.

console.log
Finally let's see how developers usually print out debugging information.

examples/js/console.html

<script>

console.log("Hello World");

</script>

## Prompt & Confirm Examples!

<script>

Prompt
var name = prompt("Your name:", "");
document.write("Hello ", name);

</script>

Confirm

<script>

var name = prompt("Please correct your e-mail address:", "foo@bar.co");
document.write("Your e-mail address is ", name);

</script>

## Reference Web Pages

1. https://code-maven.com/functions-in-javascrip
2. https://code-maven.com/introduction-to-javascript
3. https://www.w3schools.com/js/default.asp

## What are variables?

x, y, and z are Considered as variables. Used as containers to store data.

## 4 ways to declare a variable
1. Using var
2. Using let
3. Using const
4. Using nothing?


### Things I want to know about JavaScript 


