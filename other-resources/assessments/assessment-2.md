# Assessment 2 Notes <!-- omit in toc -->

[Link](https://docs.google.com/forms/d/e/1FAIpQLSd67ICFd-mSzHr93Z29JNTnTfhxwEVczxleTsF3xv4ukd4oeg/viewform)

- [❓](#%E2%9D%93)
- [Results](#Results)
  - [:x: Q5 - overridden method](#x-Q5---overridden-method)
  - [:x: Q12 - overridden method](#x-Q12---overridden-method)
  - [:x: Q13 - auto vs. min-content](#x-Q13---auto-vs-min-content)
  - [:x: Q15 - pseudo and not selectors](#x-Q15---pseudo-and-not-selectors)
  - [:x: Q16 - disable form fields](#x-Q16---disable-form-fields)
  - [:x: Q17 - prototype](#x-Q17---prototype)
  - [:x: Q22 - canvas](#x-Q22---canvas)
  - [:x: Q25 - uploading files](#x-Q25---uploading-files)
  - [:x: Q31 - isPrototypeOf](#x-Q31---isPrototypeOf)
  - [:x: Q37 - onChange](#x-Q37---onChange)
- [Themes to work on](#Themes-to-work-on)

---

## ❓

<details><summary>Not sure</summary>

- 5
- 10
- 12
- 13 - min-content vs auto
- 15
- 17
- 22 - canvas
- 25
- 28 - geo
- 34 - canvas
- 38

</details>

---

## Results

![assessment2](../../images/assessment2-score.png)

74%

[results](https://docs.google.com/forms/d/e/1FAIpQLSd67ICFd-mSzHr93Z29JNTnTfhxwEVczxleTsF3xv4ukd4oeg/viewscore?viewscore=AE0zAgAx_E40aOWNXVg1Pb7rPLylUWczg5dpBK5X8vZ7wkLOtUObnvijbNyGgqHGjt1Ir-c)

---

### :x: Q5 - overridden method

![2.5](../../images/2-5.png)

---

### :x: Q12 - overridden method

![2.12](../../images/2-12.png)

---

### :x: Q13 - auto vs. min-content

![2.13](../../images/2-13.png)

---

### :x: Q15 - pseudo and not selectors

![2.15](../../images/2-15.png)

However, this doesn't actually work

`#dataTable tbody tr.selected:not(tr:last-child) {background-color: purple}`
![testing](../../images/2-15-testing.png)

This works
`#dataTable tbody tr.selected:not(:last-child) {background-color: orange}`

However the question doesn't mention that we should only look at tbody - just says 'in the table'

So this would work too and is the working equivalent of what I selected

`#dataTable tr.selected:not(:last-child) {background-color: orange}`

---

### :x: Q16 - disable form fields

![2.16](../../images/2-16.png)

```html
<body>
    <input id="btnSubmit" type="button" value="submit" onclick="disable(this)" />
    <input id="btnCancel" type="button" value="submit" onclick="disable(this)" />
    <script>
    function disable(ctrl) {
        ctrl.disabled = true
    }
    </script>
```

Putting this on down to not being able to read the screenshot properly as I can see this is correct not I look REALLY closely at it

---

### :x: Q17 - prototype

![2.17](../../images/2-17.png)

---

### :x: Q22 - canvas

![2.22](../../images/2-22.png)

---

### :x: Q25 - uploading files

![2.25](../../images/2-25.png)

---

### :x: Q31 - isPrototypeOf

![2.31](../../images/2-31.png)

---

### :x: Q37 - onChange

![2.37](../../images/2-37.png)

---

## Themes to work on

- inheritance
- overridden method
- canvas
- uploading files
- auto vs min-content
- pseudo and not selectors
