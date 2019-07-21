# Assessment 1 Notes

[Link](https://docs.google.com/forms/d/e/1FAIpQLSfvthkRSKKGWKTq84Q-xWpkdVVmVS5J-vbhM7asXkit29Wdqg/viewform)

## ❓

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

---

## Results

![assessment1](../../images/assessment1-score.png)

82%

---

❌ Q10

![1.10](../../images/1-10.png)

❌ Q11

![1.11](../../images/1-11.png)

❌ Q13

Answer is:
- The first row of the table will have a red background
- The second cell in the third row of the table will have not have blue background.

However, this doesn't match with what I get when testing.

My answer is correct in that case.  I answered:

- The first row of the table will have a red background
- The second cell in the third row of the table will have a blue background

![1.13](../../images/1-13-testing.png)

❌ Q23

![1.23](../../images/1-23.png)

❌ Q24

![1.24](../../images/1-24.png)

❌ Q34

![1.34](../../images/1-34.png)

However, none of these actually work

![1.34](../../images/1-34-testing.png)

`$('input[name*="name"]').css("background-color", "red")` does though

But the question said **ENDS** with - which would be

`$('input[name$="name"]').css("background-color", "red")` which is closer to what I answered as none are actually correct

❌ Q38

![1.38](../../images/1-38.png)

---

## Themes to work on

- flexbox
- XHR
- readAsArrayBuffer
- regex
- XSS attacks - techniques for security
