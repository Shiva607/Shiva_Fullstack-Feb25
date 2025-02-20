## Introduction to Web Technology
Web technology powers websites and web applications. It includes languages, protocols, and tools used to develop websites.  

### Overview of Web Technology
Web technology includes HTML, CSS, JavaScript, and backend technologies that work together to create websites.  

### Role of HTML in Web Development
HTML is the foundation of all webpages. It structures content using tags like headings, paragraphs, and lists.  

## HTML Tags, Elements, Attributes
HTML uses tags to define elements. Attributes give extra information about elements (e.g., id, class).

### Understanding HTML Tags
HTML tags are like labels that define content types. They tell browsers how to display content.

### Common HTML Elements
Elements like `<h1>`, `<p>`, and `<div>` define headings, paragraphs, and containers. They organize webpage content.

### Headings
Headings (`<h1>` to `<h6>`) organize content hierarchically. `<h1>` is the main heading, and `<h6>` is the smallest.

### Paragraphs
Paragraphs are defined by the `<p>` tag. They are used to display blocks of text on a webpage.

### HTML Attributes and Their Usage
Attributes provide additional details about elements (e.g., src for images, href for links). They appear inside the opening tag.
<hr />


## Html Lists
A list is a **collection of items grouped together in a structured format**. Lists help in organizing information and improving readability in documents, websites, and applications.

### Types of Lists:
**Ordered List (\<ol\>)**
* Displays items in a numbered sequence.  
* Useful for step-by-step instructions, rankings, or hierarchical content.  
* Demo:
  ```html
  <ol>
    <li>Visit the website.</li>
    <li>Choose a course (Frontend, Backend, Full Stack).</li>
    <li>Register and make the payment.</li>
    <li>Start learning with provided resources.</li>
  </ol>
  ```

**Unordered List (\<ul\>)**
* Displays items with bullet points.  
* Best for non-sequential information, categories, or feature listings.  
* Demo:
  ```html
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React.js</li>
    <li>Vue.js</li>
  </ul>
  ```

**Definition List (\<dl\>)**
* Displays terms and their descriptions.  
* Ideal for glossaries, FAQs, or structured course details.  
* Demo:
  ```html
  <dl>
  <dt>Frontend Development</dt>
  <dd>Learn HTML, CSS, JavaScript, and modern frontend frameworks like React.js and Vue.js.</dd>

  <dt>Backend Development</dt>
  <dd>Learn Node.js, Express.js, databases like MySQL and MongoDB, and API development.  </dd>

  <dt>Full Stack Development</dt>
  <dd>Combine frontend and backend skills to build complete applications.</dd>
  </dl>
  ```
  
**Nested List Example (Combination of Ordered, Unordered, and Definition Lists)**
```html
  <ol>
  <li>Frontend Development
    <ul>
      <li>Technologies:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </li>
      <li>Frameworks:
        <ul>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>Angular</li>
        </ul>
      </li>
    </ul>
  </li>

  <li>Backend Development
    <ul>
      <li>Technologies:
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Spring Boot</li>
        </ul>
      </li>
      <li>Databases:
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </li>
    </ul>
  </li>

  <li>Full Stack Development
    <dl>
      <dt>Frontend</dt>
      <dd>Includes HTML, CSS, JavaScript, and modern frameworks.</dd>

      <dt>Backend</dt>
      <dd>Uses Node.js, Express.js, databases, and API development.</dd>

      <dt>Tools</dt>
      <dd>Git, Docker, CI/CD pipelines, and cloud deployment.</dd>
    </dl>
  </li>
</ol>

```

### Lab
1. [Define a list](https://github.com/vlaksush2021/feb-2025/blob/main/labs/list.md)


<hr />

##  HTML Images and Tables
Images and tables help present visual content and data. Images use the `<img>` tag, and tables use `<table>`.

### Embedding Images in HTML
Images are added with the `<img>` tag. The src attribute specifies the image source, and alt provides a description.

### Image Tags
The `<img>` tag is used to insert images. Always include the alt attribute for accessibility.

### Alt Text
Alt text (alt attribute) is a description of an image. It helps screen readers and appears if the image fails to load.

### Image Sources
The src attribute defines the path to the image file. It can be a relative path or a full URL.

### Demo 1 - Basic `<img>` with Attributes
```html
<img src="example.jpg"
alt="A beautiful landscape"
title="Landscape View" width="300" height="200"
border="2">
```
**Explanation of Attributes:** 
* src → Specifies the image file path.  
* alt → Provides a text description if the image doesn’t load.  
* title → Displays a tooltip on hover.  
* width & height → Defines the image size.  
* border → Adds a border around the image.   

### Demo 2 - Two Images with Content in Between
```html
<table>
  <tr>
    <td><img src="left-image.jpg" alt="Left Side Image" width="150" height="150"></td>
    <td>Welcome to our website! Explore amazing content and stunning visuals.</td>
    <td><img src="right-image.jpg" alt="Right Side Image" width="150" height="150"></td>
  </tr>
</table>
```

### Creating Tables in HTML
Tables organize data in rows and columns. The basic structure includes `<table>`, `<tr>` (rows), and `<td>` (data cells).

### Table Structure
Tables are defined by the <table> tag. Rows are created with `<tr>`, and columns are created with `<td>`.

### Table Rows and Columns
Rows (`<tr>`) hold groups of cells in a table. Columns are defined within rows using `<td>` for data and `<th>` for headers.

### Table Attributes
Table attributes like border, cellpadding, and cellspacing style the table. They control how the table looks and feels.

### Demo 
```html
<table border="1" width="70%" cellspacing="15" cellpadding="5">

        <tr style="color:red">
            <th>Batch - Feb 2025</th>
        </tr>
        <tr>
            <th>Modules</th>
            <th>Topics</th>
            <th>Trainer</th>
            <th>Duration</th>
        </tr>

        <tr>
            <td>HTML</td>
            <td>
                List
                Image
                Table
                Form
            </td>
            <td rowspan="2">
                <img src="../../images/image03.jpg" />
            </td>
            <td>6 hours</td>
        </tr>

        <tr>
            <td>CSS</td>
            <td>
                Selectors, Types
            </td>

            <td>6 hours</td>
        </tr>

        <tr>
            <td>Javascript</td>
            <td>
                Intro
                Validations
                DOM
            </td>
            <td>Naresh</td>
            <td>12 hours</td>
        </tr>
    </table>

```
### Lab
1. [Define a table](https://github.com/vlaksush2021/feb-2025/blob/main/labs/table.md)

