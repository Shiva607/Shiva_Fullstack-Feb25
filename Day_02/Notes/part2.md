## HTML Links, Lists, Forms
Links, lists, and forms are crucial for interaction. Links navigate between pages, lists structure items, and forms collect user input.

### Creating Hyperlinks in HTML
Hyperlinks are created with the `<a>` tag. The href attribute defines the destination of the link.

### Anchor Tags
Anchor tags (`<a>`) create clickable links. The href attribute specifies the URL or section of the page.

### Linking to External Resources
Links can direct users to external websites by using the full URL in the href attribute.

### Internal Page Links
Anchor links navigate within the same page. Use # followed by the id of the element to jump to.



# HTML Links - Demos

1. Link to Another Page

```html
<h2 id="links"> Links </h2>
<a href="newpage.html" target="_self">Open New Page</a>
```

- Opens `newpage.html` in the **same tab** (default behavior).

---

2. Different `target` Attribute Options The `target` attribute specifies where to open the linked page.

| `target` Value | Behavior                                        |
| -------------- | ----------------------------------------------- |
| `_self`        | Opens in the same tab (default)                 |
| `_blank`       | Opens in a new tab                              |
| `_parent`      | Opens in the parent frame (if inside an iframe) |
| `_top`         | Opens in the full body (removes iframes)        |

Example:

```html
<a href="https://www.example.com" target="_blank">Open Example in New Tab</a>
```

---

3. Link Within the Same Page (Anchor Links) Example:

```html
...
<nav align="right" id="menu"> |
...
<a href="#menu">Go to Menu</a>
```

- Clicking this link **scrolls** the page to the menu section.

---

4. Email & Phone Links

Email Link:

```html
<a href="mailto:someone@example.com">Send Email</a>
```

Phone Call Link:

```html
<a href="tel:+919876543210">Call Us</a>
```

---

5. Open Google Search in a New Window with Specific Size

```html
<a href="https://www.google.com" target="_blank"
   onclick="window.open(this.href, '_blank', 'width=600,height=400'); return false;">
    Open Google in Small Window
</a>
```

- Opens Google in a **popup window** (600x400) instead of a full tab.

---


### Demo - Link to other page
```html
<h2 id="links"> Links </h2>
    <a href="newpage.html" target="_self">new page</a>
```

### Demo - Link with in the page
```html
...
  <nav align="right" id="menu"> |
...

<a href="#menu"> go to menu </a>
```

<hr />


## HTML Forms
Forms allow users to submit information. Forms use the `<form>` tag to wrap input elements like text fields and buttons.

### Form Elements
Form elements include input fields (`<input>`), dropdowns (`<select>`), and text areas (`<textarea>`). They collect user data.

### Input Types
Different input types (text, email, password, etc.) define what kind of data the user should enter.

### Form Attributes
Form attributes like action and method control form behavior. action specifies where data is sent, and method specifies how it is sent.


### Demo
```html
<h2>Form - Registration</h2>
    <form action="html.html" method="post">

        <table>
            <tr>
                <td>
                    <div align="center">
                        <fieldset style="width:400px">
                            <legend>Basics Details</legend>
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td><input type="text" placeholder="enter your fullname" required></td>
                                </tr>

                                <tr>
                                    <td>Username</td>
                                    <td><input required type="text" size="30" minlength="10" maxlength="25"></td>
                                </tr>

                                <tr>
                                    <td>Password</td>
                                    <td><input type="password"></td>
                                </tr>


                                <tr>
                                    <td>Confirm Password</td>
                                    <td><input type="password"></td>
                                </tr>


                                <tr>
                                    <td>Gender</td>
                                    <td>
                                        <input name="gender" type="radio" value="male" checked>Male
                                        <input name="gender" type="radio" value="female">Female
                                    </td>
                                </tr>

                                <tr>
                                    <td>Language Known</td>
                                    <td>
                                        <input type="checkbox" value="english" checked>English
                                        <input type="checkbox" value="hindi">Hindi
                                        <input type="checkbox" value="tamil">Tamil
                                    </td>
                                </tr>

                            </table>

                        </fieldset>
                    </div>
                </td>
                <TD>
                    <Fieldset style="width:400px">
                        <legend align="center">Other Details</legend>
                        <table>

                            <tr>
                                <td>Qualification</td>
                                <td>
                                    <select>
                                        <option value="diploma">Diploma</option>
                                        <optgroup label="Arts">
                                            <option>BSc / BCA</option>
                                            <option>MSc / MCA</option>
                                        </optgroup>
                                        <optgroup label="Engg">
                                            <option selected>BE</option>
                                            <option>ME</option>
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>DOB</td>
                                <td>
                                    <input type="date">
                                </td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="email">
                                </td>
                            </tr>

                            <tr>
                                <td>Resume</td>
                                <td>
                                    <input type="file">
                                </td>
                            </tr>

                            <tr>
                                <td>Fav Color</td>
                                <td>
                                    <input type="color">
                                </td>
                            </tr>

                            <tr>
                                <td>Address</td>
                                <td>
                                    <textarea rows="5" cols="35">

                               </textarea>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="2" align="center">
                                    <input type="submit" value="Submit">

                                    <input type="reset" value="Reset">
                                </td>
                            </tr>

                        </table>
                </td>
            </tr>
        </table>
        <br>
        </fieldset>
    </form>

```
