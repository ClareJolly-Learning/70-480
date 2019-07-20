# Javascript for Experienced Developers <!-- omit in toc -->

<!-- - [Link to video](https://www.youtube.com/watch?v=5Rcjl-kEaNc)
- [another link](https://www.youtube.com/watch?v=3Xdyj32SqzQ) -->
- [Link to videos](https://www.youtube.com/playlist?list=PLIoX3-mcY80jWF8tDBeId1_R-OeEnWKyO)
- [github](https://github.com/MicrosoftLearning/JavaScript-Experienced-Developers)

---

- [**Getting started with JavaScript**](#Getting-started-with-JavaScript)
  - [Variables](#Variables)
    - [Global scope variable](#Global-scope-variable)
    - [Local scope variable](#Local-scope-variable)
  - [Functions and Enclosures](#Functions-and-Enclosures)
    - [Self invoking functions](#Self-invoking-functions)
    - [Enclosures](#Enclosures)
  - [Anonymous functions](#Anonymous-functions)
    - [Types of anonymous functions](#Types-of-anonymous-functions)
    - [Recursion with anonymous function](#Recursion-with-anonymous-function)
  - [Errors and exceptions](#Errors-and-exceptions)
- [**Object Oriented Programming**](#Object-Oriented-Programming)
- [**Web Workers**](#Web-Workers)
- [**Web Sockets**](#Web-Sockets)
- [**Common Libraries**](#Common-Libraries)

---

## **Getting started with JavaScript**

### Variables

#### Global scope variable

```js
var color = "blue"

if(color){
    var color = "purple"; //this is a global variable so color will be changed to purple

    console.log(color) // purple
}
console.log(color) // purple
```

As you can see the color variable in the if statement is global and though it is declared as a new variable in the if statement it's not considered local because it is not in a function

---

#### Local scope variable

```js
var color = "blue"

function printColor() {

    var color = "purple"; //this is a local variable

    console.log(color) // purple
}
printColor()
console.log(color) // blue
```

As you can see the local color variable is labelled as purple, and is only purple within the printColor function

Though both the local and global variable have the same nae, the local variable will take precedence over the global variable in the printColor function

---

### Functions and Enclosures

Function is defined by `function <name> () { ...}`

```js
var x = 3;

function numSquared(x){
    return x*x;
}

var sentence = "The square of " + x + " is " + numSquared(x);
//unlike other ooj langauges the function can be used to build a variable

console.log(sentence); // "The square of 3 is 9"

// Sidenote:
// Just like other ooj languages, functions can be used to define a variable

var num = numSquared(6);
console.log(num); //36
```

![func](../images/func1.png)

---

#### Self invoking functions

```js
((function selfPrint(){
    console.log("This function will automatically print this statement");
})());
```

---

#### Enclosures

Function inside another function

Has access to:

- its own variables
- outer functions variables, as well as parameters
- global variables

```js
function showName (firstName, lastName) {
    var nameIntro = "Your name is " ;

    function makeFullName(){ // this is an enclosure
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName()
}

console.log(showName("Princess","Gabby")); // Your name is Princess Gabby
```

---

```js
// This first example shows how enclosures can be called after other functions have

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";

    function lastName (theLastName) {
        console.log( nameIntro + firstName + " " + theLastName);
    }

    return lastName;
}

var myName = celebrityName("Clare"); // The celebrityName outer function has returned.
myName("Jolly"); // This celebrity is Clare Jolly

// The enclosure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
// If you were to comment out the last line, the enclosure will never be invoked.

```

---

```js
function theLocation(){
    var city = "San Francisco";

    return {
        get: function() {console.log(city);},
        set: function(newCity) {city = newCity;}
    };
}

var myPlace = theLocation();

myPlace.get();
myPlace.set("Oakland");
myPlace.get();
```

![func](../images/func2.png)

---

### Anonymous functions

Functions without names

Dynamically declared at runtime

Common uses are for recursion and enclosures

```js
function meTime () { //named function
    alert("go do something fun!");
}

var meTime = function () { //Anonymous function
    alert("go do something fun!");
}
```

Both functions logically do the same things and can both be invoked the same way (by calling `meTime()`)

However, the anonymous function can not be accessed before the neTime variable is declared while the named function can be accessed at any time

---

#### Types of anonymous functions

- function expression

    ```js
    var sayHi = function(){
        alert("hello");
    };
    ```

- in an object

    ```js
    var Pony = {
        sayName: function(){
            alert("My name is Pony");
        }
    };
    ```

- event handler

    ```js
    $("p").click = function(){
        alert("hello");
    };
    ```

- self invoking functions

    ```js
    ((function(){
        alert("hello");
    })());
    ```

---

#### Recursion with anonymous function

```js
// this function will calculate the factorial of any given number
var factorial = function (n){
    return !(n > 1) ? 1 : arguments.callee(n-1) * n;
}

console.log(factorial(10));
```

Since this function doesn't have a name to call the function again you use the `arguments.callee` local variable

---

<!-- ### Dot and bracket notation



--- -->

### Errors and exceptions

Errors found in JavaScript:

- suntax
- Runtime
- Logical

Methods used for exception handling

- try...catch...finally statement
- throw statement - customised errors
- the onerror() method - event handler

```js
    // simple and easy error tutorial
    //  /* comment out function when testing the onerror function to see error
    function myFunc()
    {
        var a = 100;
        var b = 10;

        try{
            if ( b == 0 ){
                throw( "Divide by zero error." );
            }

            else
            {
                var c = a / b;
                alert("c = " + c);
            }
        }

        catch ( e ) {
            console.log("Error: " + e );
        }

        finally {
            console.log("Finally block will always execute!" );
        }
    } // */

    /*
    window.onerror = function (msg, url, line) { // using this information is optional 
        console.log("Message : " + msg );
        console.log("url : " + url );
        console.log("Line number : " + line );
    }
    // */
```

```html
<html>
   <head>
   </head>
   <body>
      <p>Click the following to see the result:</p>
      <form>
         <input type="button" value="Click Me" onclick="myFunc();" />
      </form>
   </body>
</html>
```

![err](../images/err-1.png)

The error (commenting the code example)

![err](../images/err-2png)

---

## **Object Oriented Programming**



---

## **Web Workers**




---

## **Web Sockets**



---

## **Common Libraries**



---
