# Assessment 3 Notes <!-- omit in toc -->

[Link](https://docs.google.com/forms/d/e/1FAIpQLSeU219LrKoma-D-s2EgC-AKA8IsBAc1-2yLaz7abiegNX6O-w/viewform)

- [❓](#%e2%9d%93)
- [Results](#results)
  - [:x: Q6 - relative/absolute position](#x-q6---relativeabsolute-position)
  - [:x: Q13 -](#x-q13)
  - [:x: Q27 -](#x-q27)
  - [:x: Q28 - missed that needed 2](#x-q28---missed-that-needed-2)
  - [:x: Q29 -](#x-q29)
  - [:x: Q30 -](#x-q30)
- [Themes to work on](#themes-to-work-on)

---

## ❓

<details><summary>Not sure</summary>

- 6 - relative/absolute
- 11 - ms-wrap-flow
- 17 - json parse
- 25 - SVG transform/scale
- 27 - self executing function
- 28 - web workers terminate
- 29 - toggle/trigger
- 30 - border-box
- 34 - flex column/row reverse

</details>

---

## Results

![assessment3](../../images/assessment3-score.png)

80%

[results](https://docs.google.com/forms/d/e/1FAIpQLSeU219LrKoma-D-s2EgC-AKA8IsBAc1-2yLaz7abiegNX6O-w/viewscore?viewscore=AE0zAgBQGU1whHVG35Sl9uLPKGgCR3yAIfZyWvilmu7ZpbokxGgOAbsGHLBdHXjG8vDyZCI) 

---

### :x: Q6 - relative/absolute position

![3.6](../../images/3-6.png)

---

### :x: Q13 - 

![3.13](../../images/3-13.png)

However, this doesn't actually work as it's an id of container and not a class

```css
.container > ul {
  border: 1px solid black;
}
```

If the css was for ID then it would work
![testing](../../images/3-13-apparent-right.png)

My answer is actually correct

```js
 $("div#container > ul").css("border","1px solid black");
 ```

![my answer](../../images/3-13-actual-right-my-answer.png)

---

### :x: Q14 - 

![3.14](../../images/3-14.png)

---

### :x: Q25 - 

![3.25](../../images/3-25.png)

I was wrong but actually none of these work

something like this might work

```js
function zoomIn() {
    
var myCircle = document.getElementById("myCircle");
    
myCircle.r.baseVal.value = myCircle.r.baseVal.value * 1.5;
}
```

or 

```js
function zoomIn() {
    
var myCircle = document.getElementById("myCircle");
    
myCircle.setAttribute("r", 20 * 1.5);
}
```

---

### :x: Q27 - 

![3.27](../../images/3-27.png)

---

### :x: Q28 - missed that needed 2

![3.28](../../images/3-28.png)

---

### :x: Q29 - 

![3.29](../../images/3-29.png)

---

### :x: Q30 - 

![3.30](../../images/3-30.png)

---

## Themes to work on

- web workers
- absolute and relative positions
- border-box
- click in jquery - on click
