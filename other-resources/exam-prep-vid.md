# Microsoft Ignite 2015 Exam Prep Session for Exam 70 480 Programming in HTML5 with JavaScript and CSS <!-- omit in toc -->

[Link to video](https://www.youtube.com/watch?v=1M2LdJDBLwg)

- [Exam Tips](#Exam-Tips)
- [Exam Topics](#Exam-Topics)
  - [Drawing, Style and Animations](#Drawing-Style-and-Animations)
    - [SVG shapes](#SVG-shapes)
      - [Path Commands](#Path-Commands)
  - [HTML5 Objects](#HTML5-Objects)
  - [Remote Communication](#Remote-Communication)
  - [JavaScript](#JavaScript)

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

### HTML5 Objects



---

### Remote Communication



---

### JavaScript



---
