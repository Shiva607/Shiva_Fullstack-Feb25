# 📚 **Ultimate Guide to Regular Expressions (Regex)**

### Reference page: [JavaScript RegExp](https://www.w3schools.com/jsref/jsref_regexp_charset.asp)

## **🔍 What is Regex?**

Regular Expressions (**Regex**) are powerful patterns used to **search, match, and validate** text. They are widely used in **form validation, text processing, and data extraction**.

---

## **🔵 1. Breakdown of `!/^[a-zA-Z\s]+$/`**

This regex ensures that the input contains **only letters (uppercase or lowercase) and spaces**. If it doesn’t match, the `!` (logical NOT) operator makes the condition `true`, triggering an error.

### **👉 Explanation of Each Part:**

| **Component** | **Meaning**                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `!`           | Negates the result (i.e., returns `true` if the regex **does not** match) |
| `/.../`       | Delimiters for the regular expression                                     |
| `^`           | The start of the string                                                   |
| `[a-zA-Z\s]`  | Matches **any uppercase (`A-Z`), lowercase (`a-z`), or space (`\s`)**     |
| `+`           | Ensures at least one or more valid characters are present                 |
| `$`           | The end of the string (ensuring no extra invalid characters)              |

### **👉 Example Usage:**

```javascript
function validateName(name) {
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    throw new Error("Name should only contain letters and spaces");
  }
  console.log("Valid Name:", name);
}

validateName("John Doe"); // ✅ Valid
validateName("John123"); // ❌ Invalid (contains numbers)
validateName("John_Doe"); // ❌ Invalid (contains an underscore)
validateName("  "); // ❌ Invalid (only spaces)
```

---

## **🔵 2. Email Validation: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`**

### **👉 Explanation of Each Part:**

| **Component**       | **Meaning**                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `^`                 | The start of the string                                          |
| `[a-zA-Z0-9._%+-]+` | Matches username part (letters, digits, `_`, `.`, `%`, `+`, `-`) |
| `@`                 | Requires the `@` symbol                                          |
| `[a-zA-Z0-9.-]+`    | Matches domain name (letters, digits, `.` or `-`)                |
| `\.`                | Requires a dot `.` before the TLD                                |
| `[a-zA-Z]{2,}$`     | Ensures at least **2** letters in the TLD (e.g., `.com`, `.org`) |

### **👉 Example Usage:**

```javascript
function validateEmail(email) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new Error(
      "Invalid email: Must contain @ and . with at least 6 characters"
    );
  }
  console.log("Valid Email:", email);
}
validateEmail("user@example.com"); // ✅ Valid
validateEmail("userexample.com"); // ❌ Invalid (no `@` symbol)
validateEmail("user@.com"); // ❌ Invalid (no domain name)
```

---

## **🔵 3. Phone Number Validation: `^\d{10}$`**

### **👉 Explanation of Each Part:**

| **Component** | **Meaning**                                      |
| ------------- | ------------------------------------------------ |
| `^`           | The start of the string                          |
| `\d{10}`      | Exactly **10** digits (0-9)                      |
| `$`           | The end of the string (ensuring no extra digits) |

### **👉 Example Usage:**

```javascript
function validatePhone(phone) {
  if (!/^\d{10}$/.test(phone)) {
    throw new Error("Phone number must be exactly 10 digits");
  }
  console.log("Valid Phone:", phone);
}
validatePhone("9876543210"); // ✅ Valid
validatePhone("12345"); // ❌ Invalid (too short)
validatePhone("12345678901"); // ❌ Invalid (too long)
```

---

## **🔵 4. Special Symbols in Regex**

| **Symbol** | **Meaning**                            | **Example** | **Matches?**           |
| ---------- | -------------------------------------- | ----------- | ---------------------- |
| `^`        | Start of string                        | `^Hello`    | `"Hello World"` ✅     |
| `$`        | End of string                          | `World$`    | `"Hello World"` ✅     |
| `.`        | Any single character                   | `h.t`       | `"hat", "hit"` ✅      |
| `+`        | One or more occurrences                | `a+b`       | `"aaab"` ✅            |
| `*`        | Zero or more occurrences               | `a*b`       | `"b", "ab", "aaab"` ✅ |
| `?`        | Zero or one occurrence                 | `colou?r`   | `"color", "colour"` ✅ |
| `\d`       | Any digit (0-9)                        | `\d+`       | `"123", "45"` ✅       |
| `\D`       | Any non-digit                          | `\D+`       | `"abc", "#$!"` ✅      |
| `\s`       | Any whitespace                         | `\s+`       | `"  "` ✅              |
| `\S`       | Any non-whitespace                     | `\S+`       | `"Hello"` ✅           |
| `\w`       | Any word character (a-z, A-Z, 0-9, \_) | `\w+`       | `"word_123"` ✅        |
| `\W`       | Any non-word character                 | `\W+`       | `"#$%"` ✅             |

---

## **🔵 5. Character Classes (`[ ]`)**

| **Pattern** | **Meaning**                                                 | **Example String** | **Matches?** |
| ----------- | ----------------------------------------------------------- | ------------------ | ------------ |
| `[abc]`     | Matches `a`, `b`, or `c`                                    | `"bat"`            | ✅ Yes       |
| `[A-Z]`     | Matches any uppercase letter                                | `"HELLO"`          | ✅ Yes       |
| `[a-z]`     | Matches any lowercase letter                                | `"hello"`          | ✅ Yes       |
| `[A-Za-z]`  | Matches any letter                                          | `"Hello"`          | ✅ Yes       |
| `[0-9]`     | Matches any digit                                           | `"123"`            | ✅ Yes       |
| `[^a-z]`    | **Negation:** Matches anything **except** lowercase letters | `"123"`            | ✅ Yes       |

---

## **🔵 6. Quantifiers (`+`, `*`, `{}`)**

| **Pattern** | **Meaning**          | **Example String** | **Matches?** |
| ----------- | -------------------- | ------------------ | ------------ |
| `a+`        | One or more `a`s     | `"aaa"`            | ✅ Yes       |
| `a*`        | Zero or more `a`s    | `""`               | ✅ Yes       |
| `a?`        | Zero or one `a`      | `"a"`              | ✅ Yes       |
| `a{3}`      | Exactly **3** `a`s   | `"aaa"`            | ✅ Yes       |
| `a{2,4}`    | Between 2 and 4 `a`s | `"aaa"`            | ✅ Yes       |
| `a{2,}`     | At least **2** `a`s  | `"aaaaa"`          | ✅ Yes       |

---

## **🎯 Conclusion**

- **Regex is a powerful tool** for validation and pattern matching.
- It can be used to validate **names, emails, phone numbers, and more**.
- **Anchors (`^`, `$`), special characters (`+`, `*`, `?`), and character classes (`[ ]`)** help define rules.

---

### 📌 **Difference Between `innerHTML`, `textContent`, and `innerText`**

| Property          | Reads HTML? | Reads Text? | Modifies HTML? | Preserves Spacing? |
| ----------------- | ----------- | ----------- | -------------- | ------------------ |
| **`innerHTML`**   | ✅ Yes      | ✅ Yes      | ✅ Yes         | ❌ No              |
| **`textContent`** | ❌ No       | ✅ Yes      | ❌ No          | ✅ Yes             |
| **`innerText`**   | ❌ No       | ✅ Yes      | ❌ No          | ❌ No              |

---

### ✅ **1. `innerHTML`**

✔ Gets or sets **HTML and text content** inside an element.  
✔ Allows HTML tags inside the element.  
❌ **Security risk:** Vulnerable to XSS (Cross-Site Scripting) if not sanitized.

#### 🔍 **Example:**

```html
<div id="example1">Hello <b>World</b></div>

<script>
  let div = document.getElementById("example1");
  console.log(div.innerHTML); // Output: Hello <b>World</b>
  div.innerHTML = "New <i>Content</i>"; // Updates with HTML
</script>
```

---

### ✅ **2. `textContent`**

✔ Retrieves or sets **only the text**, ignoring HTML.  
✔ Preserves spacing and hidden text.  
❌ Does not interpret HTML tags.

#### 🔍 **Example:**

```html
<div id="example2">Hello <b>World</b></div>

<script>
  let div = document.getElementById("example2");
  console.log(div.textContent); // Output: Hello World (ignores <b>)
  div.textContent = "New <i>Content</i>"; // Renders as plain text
</script>
```

---

### ✅ **3. `innerText`**

✔ Retrieves or sets **only visible text** (ignores hidden elements via CSS).  
❌ Does not include hidden elements (`display: none;`).  
❌ Ignores HTML tags.

#### 🔍 **Example:**

```html
<div id="example3">Hello <span style="display: none;">Hidden</span> World</div>

<script>
  let div = document.getElementById("example3");
  console.log(div.innerText); // Output: "Hello World" (ignores hidden text)
</script>
```

---

### 🎯 **Key Takeaways:**

1. **Use `innerHTML`** → When modifying or reading HTML structure.
2. **Use `textContent`** → When working with **raw text only** (preserves spacing).
3. **Use `innerText`** → When working with **visible text only** (ignores hidden text).
