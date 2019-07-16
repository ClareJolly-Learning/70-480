# Microsoft Ignite 2015 Exam Prep Session for Exam 70 480 Programming in HTML5 with JavaScript and CSS <!-- omit in toc -->

[Link to video](https://www.youtube.com/watch?v=1M2LdJDBLwg)
[github](https://github.com/SidneyAndrewsOpsgility/HTML5Demos)

- [Exam Tips](#Exam-Tips)
- [Exam Topics](#Exam-Topics)
  - [Drawing, Style and Animations](#Drawing-Style-and-Animations)
    - [SVG shapes](#SVG-shapes)
      - [Path Commands](#Path-Commands)

## Exam Tips

**Exam outline**

- Use CSS3 in Applications (25%)
- Implement programme flow (js) (25%)
- Implement and manipulate document structures and objects (DOM and some jQuery) (25%)
- Access and Secure data (25%)

## Exam Topics

### Drawing, Style and Animations

#### SVG shapes

Using markup to define shapes. and location

Put geometric objects in html markup - absolute position

- Circle
- Ellipse
- Rectangle
- Polyline
- Polygon
- Path

##### Path Commands

Manually define a shape or open path

Command   | Name
---------|----------
 M |      Move to location
 L |      Draw line
 A |      Elliptical arc
 Q |      Quadratic Bezier Curve
 C |      Cubic Bezier curve
 Z |      Close path

 Uppercase is absolute and lowercase is relative

 #### Example

 ```js
 <svg height="140" width="500">
  <ellipse cx="200" cy="80" rx="100" ry="50"
  style="fill:yellow; stroke:purple; stroke-width:2;" />
</svg>

<svg height="400" width="500">
  <rect x="50" y="20" width="150" height="150"
  style="fill:blue; stroke:pink; stroke-width:5;fill-opacity: 0.9;" />
</svg>

<svg height="210" width="500">
    <polygon points="200,10 250,190 160,210"
    style="fill:lime; stroke:purple; stroke-width:1;" />
</svg>

<svg height="400" width="450">
  <path id="lineAB" d="M 100 350 l 150 -300" stroke="blue"
  stroke-width="3" fill="none" />
  <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
</svg>

<svg height="210" width="400">
    <path d="M150 0 L75 200 L225 200 Z" stroke="green" stroke-width="5" />
</svg>
```

![svg](../images/svg1.png)

- Ellipse

  `<ellipse cx="200" cy="80" rx="100" ry="50"`

  - `cx` =  attribute defines the x coordinate of the center of the ellipse
  - `cy` =  attribute defines the y coordinate of the center of the ellipse
  - `rx` =  attribute defines the horizontal radius
  - `ry` =  attribute defines the vertical radius

  CSS styling

- Rectangle

  `<rect x="50" y="20" width="150" height="150"`

  Set an absolute position with `x` and `y` and then a `height` and `width`

  CSS Styling

- Polygon

  `<polygon points="200,10 250,190 160,210"`

  `200,10` is `x,y` point.  Then line to the next point, then next point, then closes automatically and fills

  CSS Styling

- Path

  `<path id="lineAB" d="M 100 350 L 150 -300" stroke="blue" stroke-width="3" fill="none" />`

  **M**ove to 100 350, then draw a **L**ine to 150 -300

  `M` = move
  `L` = line

  e.g. 
  - `M 100,100` means "Pick up the pen and move it to the exact coordinates 100,100"
  - `m 100,100` means "Move the Pen 100 down and 100 right from wherever you currently are."

---

#### Transformations

- Translate - move
- Rotate
- Scale
- Skew

Apply an effect to an element

---

#### Transitions

- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `linear (default)`
  - `ease`
  - `ease-in`
  - `ease-out`
  - `ease-in-out`
  - `cubic-bezier`

---

#### Canvas

```html
<canvas id="canvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
```

![canvas](../images/canvas1.png)

```js
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.clearRect(0, 0, canvas.width, canvas.height)

context.strokeStyle = "rgb(0, 0, 255)";
context.fillStyle = "rgb(255, 0, 0, 0.75)";

// create a path
context.beginPath();
context.moveTo(20, 20);
context.lineTo(80, 70);
context.stroke();
context.lineTo(40, 110);
context.stroke();
context.closePath();
context.stroke();
context.fill();
```

![canvas](../images/canvas2.png)

---

### CSS Selectors

- `>` - Direct descendent
- `+` - Adjacent (after)
- `:after` - Add content after item
- `:required` - Filter to required input items
- and many more

```html
<div>
  <p id="three">First Paragraph</p>
  <div class="hello" lang="en">Hi</div>
    <ul>
      <p id="two">Second Paragraph</p>
    </ul>
    <div id="three">Test</div>
</div>
```

```css
div > p {
  /* p that's a child of a div - direct descendent */
  background-color: yellow;
}
```

![c1](../images/c1.png)

```css
div p {
  /* p that's a child of a div - not just direct descendent */
  background-color: yellow;
}
```

![c1](../images/c2.png)

```css
ul + div {
  /* div that comes right after a ul */
  background-color: orange;
}
```

![c1](../images/c3.png)

```css
div.hello {
  /* div with class of hello */
  background-color: lime;
}
```

![c1](../images/c4.png)

```css
div#three {
  /* div with id of three */
  background-color: seagreen;
}
```

![c1](../images/c5.png)

```css
#three {
  /* anything with id of three */
  background-color: seagreen;
}
```

![c1](../images/c6.png)

```css
div[lang=en]{
  /* div with attribute of lang-en */
  background-color: red;
} 
```

![c1](../images/c7.png)

---

#### Questions

![question](../images/q1.png)

Answer - c: `nav a`

![question](../images/q2.png)

Answer - a + b

![question](../images/q3.png)

Answer - b: `input:required { background-color: yellow;`

---

### HTML5 Objects

#### Audio/Video

Video

```html
<video width="320" height="240" poster="logo.jpg"
controls autobuffer autoplay loop mute>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

Audio

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

---

### Application cache

Caching certain files and what files to fallback to

```
CACHE MANIFEST
#VERSION 1.0

CACHE:
/index.html/styles/site.css
/images/logo.jpg

NETWORK:
/members

FALLBACK:
/details/ /offline.html
```

---

#### Updating Application cache

Swap cache and download new files

```js
//download new application cache
applicationCache.Update();

// wait for the data to be downloaded, then swap cache
if (aplicationCache.status == 4) {
  applicationCache.swapCache();
}
```

---

### Geolocation

Being able to use the client/browser geolocation

Methods, options and return data

![geo](../images/geo.png)

---

### More questions

![q](../images/q4.png)

Answer - b: sessionStorage

localStorage persists across tabs

sessionStorage only in same tab

Think of browser as a browser session

![q](../images/q5.png)

Answer - a + d

---

### Remote Communication



---

### JavaScript

#### Web worker

When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

Allow you to run asynchronous processes in the background.  Offload things to another thread

Have a script file - what the worker does asynchronously.

Create a callback that handles the message

```js
var worker = new Worker("/scripts/worker.js"); 
  
worker.onmessage = function (event) {
  
  console.log(event.data);
  
  var newItem = $('<li>', {
    html: event.data,
    'class': 'list-group-item'
  });
  
  $("#messageList").append(newItem);
  
};

// postMessage sends signals to the web worker
// Web worker starts automatically, so if you want to delay execution
// you need to provide that mechanism
worker.postMessage("START");
  
$("#send").click(function () {
  
    worker.postMessage($("#message").val());
  });
  
// var worker = new Worker("/Scripts/Worker.js");

// worker.onmessage = function (event) {
//   $("#messageList").append("<li>" + event.data + "</li>");
// };


// worker.postMessage("START");

// $("#send").click(function () {
//   worker.postMessage($("#message").val());
// });
```

In this example, any time the worker responds we append an `<li>` to the `#messageList`

The worker.js

```js
var started = false
self.onmessage = function (event) {
  if (event.data == "START") {
    startWork();
  } else {
    sendMessage(event.data);
  }
}

// postMessage sends signals to the caller
function startWork() {
  started = true
  self.postMessage("Worker started.");
}

function sendMessage(message) {
  if (started) {
    self.postMessage('[Processed]: ' + message);
  }
}
```

Has a callback when it receives a message

if message received "START" then proceeds and sends message saying started.  Otherwise will echo the received message back

---

#### Creating objects

```js
"use strict"
var Student = function (name) {
  var name = name
  var getName = function () {
    return name;
  };
  return {
    get_name: getName
  }
}

var student = new Student("Christopher");
alert(student.get_name());
```
