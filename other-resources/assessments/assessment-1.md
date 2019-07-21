# Assessment 1 Notes

[Link](https://docs.google.com/forms/d/e/1FAIpQLSfvthkRSKKGWKTq84Q-xWpkdVVmVS5J-vbhM7asXkit29Wdqg/viewform)

- [Assessment 1 Notes](#Assessment-1-Notes)
  - [❓](#%E2%9D%93)
  - [Results](#Results)
    - [❌ Q10 - flexbox](#%E2%9D%8C-Q10---flexbox)
    - [❌ Q11 - XHR](#%E2%9D%8C-Q11---XHR)
    - [❌ Q13 - css](#%E2%9D%8C-Q13---css)
    - [❌ Q23 - readAsArrayBuffer](#%E2%9D%8C-Q23---readAsArrayBuffer)
    - [❌ Q24 - regex](#%E2%9D%8C-Q24---regex)
    - [❌ Q34 - jquery selector (ends with etc)](#%E2%9D%8C-Q34---jquery-selector-ends-with-etc)
    - [❌ Q38 - security techniques](#%E2%9D%8C-Q38---security-techniques)
  - [Themes to work on](#Themes-to-work-on)

---

## ❓

<details><summary>Not sure</summary>

- 2
- 7
- 9 - nth is 1 based, eq is 0 based
- 10
- 17
- 24 - regex
- 26
- 29
- 32 - multiple possible answers (b and d) (I chose b)
- 34 - typo? `$("input[name$='name']").css('background-color', 'red')`
- 38
- 39
- 40 - typo? missing `()` at end of line 3???
  
</details>

---

## Results

![assessment1](../../images/assessment1-score.png)

82%

---

### ❌ Q10 - flexbox

![1.10](../../images/1-10.png)

---

### ❌ Q11 - XHR

![1.11](../../images/1-11.png)

---

### ❌ Q13 - css

Answer is:
- The first row of the table will have a red background
- The second cell in the third row of the table will have not have blue background.

However, this doesn't match with what I get when testing.

![1.13](../../images/1-13-testing.png)

My answer is correct in that case.  I answered:

- The first row of the table will have a red background
- The second cell in the third row of the table will have a blue background

---

### ❌ Q23 - readAsArrayBuffer

![1.23](../../images/1-23.png)

---

### ❌ Q24 - regex

![1.24](../../images/1-24.png)

---

### ❌ Q34 - jquery selector (ends with etc)

![1.34](../../images/1-34.png)

However, none of these actually work

![1.34](../../images/1-34-testing.png)

`$('input[name*="name"]').css("background-color", "red")` does though

But the question said **ENDS** with - which would be

`$('input[name$="name"]').css("background-color", "red")` which is closer to what I answered as none are actually correct

---

### ❌ Q38 - security techniques

![1.38](../../images/1-38.png)

---

## Themes to work on

- flexbox
- XHR
- readAsArrayBuffer
- regex
- XSS attacks - techniques for security
