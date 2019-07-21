# Assessment 2 Notes <!-- omit in toc -->

[Link](https://docs.google.com/forms/d/e/1FAIpQLSd67ICFd-mSzHr93Z29JNTnTfhxwEVczxleTsF3xv4ukd4oeg/viewform)

- [❓](#%E2%9D%93)
- [Results](#Results)
  - [❌ Q5 - overridden method](#%E2%9D%8C-Q5---overridden-method)
  - [❌ Q12 - overridden method](#%E2%9D%8C-Q12---overridden-method)
  - [❌ Q13 - auto vs. min-content](#%E2%9D%8C-Q13---auto-vs-min-content)
  - [❌ Q15 - pseudo and not selectors](#%E2%9D%8C-Q15---pseudo-and-not-selectors)
  - [❌ Q16 - disable form fields](#%E2%9D%8C-Q16---disable-form-fields)
  - [❌ Q17 - prototype](#%E2%9D%8C-Q17---prototype)
  - [❌ Q22 - canvas](#%E2%9D%8C-Q22---canvas)
  - [❌ Q25 - uploading files](#%E2%9D%8C-Q25---uploading-files)
  - [❌ Q31 - isPrototypeOf](#%E2%9D%8C-Q31---isPrototypeOf)
  - [❌ Q37 - onChange](#%E2%9D%8C-Q37---onChange)
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

### ❌ Q5 - overridden method

![2.5](../../images/2-5.png)

---

### ❌ Q12 - overridden method

![2.12](../../images/2-12.png)

---

### ❌ Q13 - auto vs. min-content

![2.13](../../images/2-13.png)

---

### ❌ Q15 - pseudo and not selectors

![2.15](../../images/2-15.png)

However, this doesn't actually work

`#dataTable tbody tr.selected:not(tr:last-child) {background-color: purple}`
![testing](../../images/2-15-testing.png)

---

### ❌ Q16 - disable form fields

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

### ❌ Q17 - prototype

![2.17](../../images/2-17.png)

---

### ❌ Q22 - canvas

![2.22](../../images/2-22.png)

---

### ❌ Q25 - uploading files

![2.25](../../images/2-25.png)

---

### ❌ Q31 - isPrototypeOf

![2.31](../../images/2-31.png)

---

### ❌ Q37 - onChange

![2.37](../../images/2-37.png)

---

## Themes to work on

- inheritance
- overridden method
- canvas
- uploading files
- auto vs min-content
- pseudo and not selectors
