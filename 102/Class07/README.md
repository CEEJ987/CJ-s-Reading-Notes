# Class07 Reading-Notes

## What is Control Flow?

Control flow is the chronilogical order of code.

**Example**

if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}

## Functions in JavaScript

 **What is JavaScript Function?**
  
  JavaScipt Function is a block of code set tp perform a particular task.
  Executed when something invokes it.

### Examples

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

## JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
**(parameter1, parameter2, ...)**

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

## Function Return

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":


## JavaScript Operators

Types of JavaScript Operators

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Operators
- Type Operators

## Operator	Description
(+)	Addition
(-)	Subtraction
(*)	Multiplication
(**)Exponentiation (ES2016)
(/)	Division
(%)	Modulus (Division Remainder)
(++)Increment
(--)Decrement

## JavaScript Comparison Operators

( == )	equal to
( ===	) equal value and equal type
(!=	)   not equal
(!==	) not equal value or not equal type
( >	)   greater than
( < )	  less than
( >= )  greater than or equal to
( <= )	less than or equal to
( ? )	  ternary operator

## JavaScript Logical Operators

( && )	logical and
( || )	logical or
( !	)   logical not

## JavaScript Bitwise Operators
**Bit operators work on 32 bits numbers.**

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	Example	Same as	Result	Decimal
( & )	  AND	5 & 1	0101 & 0001	0001	 1
( |	)   OR	5 | 1	0101 | 0001	0101	 5
( ~ )	  NOT	~ 5	 ~0101	1010	 10
( ^	)   XOR	5 ^ 1	0101 ^ 0001	0100	 4
( << )  left shift	5 << 1	0101 << 1	1010	 10
( >> )	right shift	5 >> 1	0101 >> 1	0010	  2
( >>> )	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2



