# Lab 7 : Positioning (Absolute, Relative) and Z-Index

## Objective:
Use positioning properties and manage element stacking with z-index.

## Steps:

1. Create an HTML file lab7.html.

2. Add a div inside another div. Style them with position: relative for the parent and position: absolute for the child.

3. Move the child div 50px from the top and 30px from the left.

4. Add another div with a higher z-index to overlap the previous one.


## Expected Output:
Elements should be positioned relative to their container, with one overlapping the other based on z-index.

## Reference Code:

```html
<html>
<head>
    <title>Lab 4: Positioning and Z-Index</title>

</head>
<body>
    <div class="container">
        <div class="child">Child Box</div>
        <div class="overlap">Overlapping Box</div>
    </div>
</body>
</html>

```