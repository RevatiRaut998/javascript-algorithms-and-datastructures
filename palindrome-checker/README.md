# 🧠 Palindrome Checker

A simple and responsive web app that checks whether a given string is a **palindrome** — a word or phrase that reads the same forward and backward, ignoring punctuation, case, and spacing.

---

## ✨ Features

- Instant palindrome validation  
- Input sanitization (ignores punctuation, symbols, and spaces)  
- Case-insensitive check  
- Alert for empty input  
- Clean and minimal UI design  

---

## 📁 Project Structure

```
palindrome-checker/
├── index.html     # Markup structure  
├── style.css      # Stylesheet  
└── script.js      # Palindrome logic + DOM handling  
```

---

## ⚙️ How to Run Locally

1. Clone the repository and navigate to the project folder:

   ```bash
   git clone https://github.com/RevatiRaut998/javascript-algorithms-and-datastructures.git
   cd javascript-algorithms-and-datastructures/palindrome-checker
   ```

2. Open `index.html` in any modern browser.

---

## 🧠 Logic Overview

The app strips all non-alphanumeric characters and converts the string to lowercase before checking whether it reads the same forward and backward.

```js
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}
```
