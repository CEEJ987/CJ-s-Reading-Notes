# Class08 Reading-Notes

## Expressions and Operators

### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

### Types of operators

- Assignment
- Arithmetic
- Comparison
- Bitwise
- Logical
- BigIntergers (BigInt)
- String
- Conditional
- Comma
- Unary
- Relational

**Examples of Expressions**

- x = 7 
- 3 + 4

These examples are the 2 type of expressions. 

## Loops and iterations

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

### loop statements

- for statement = repeats until a specified condition evaluates to false.
for (initialization; condition; afterthought)
  statement

- do ... while statement
do
  statement
while (condition);

- while statement
while (condition)
  statement

- labeled statement
label:
  statement

- break statement
break;
break label;

- continue statement
continue;
continue label;

- for... in statement
for (variable in object)
  statement

- for... of statement
for (variable of object)
  statement




