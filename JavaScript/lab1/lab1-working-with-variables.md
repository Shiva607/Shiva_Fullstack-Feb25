## Lab - Working with Variables
### Objective
* To practice creating variables with different types of data (var, let, and const).  
* To use the typeof function to verify the data type of each variable.  
* To update the content of an HTML element dynamically using JavaScript.  

### Steps
1. Set Up the HTML Structure:  

Create an HTML file with a `<div>` for displaying content and a button. The button will be used to trigger the JavaScript function to update the content of the `<div>`.  

2. Declare Variables:  

* Inside the `<script>` tag, declare three variables using var, let, and const.  
* You can declare variables like the below
```js
var userName = "Suresh";   // String
let userAge = 28;          // Number
const isEmployee = true;   // Boolean
```

3. Create a Function: 

* Write a JavaScript function that will gather the values of the variables and use the typeof function to determine their data types.
* The function should update the content of the `<div>` with this information.

4. Link the Function to a Button:   
Add an onclick event to the button in your HTML that will call the function when clicked.   

5. Update Variables Dynamically:
Inside the function, change the values of the var and let variables to demonstrate how they can be reassigned.

6. Test Constant Variables:  
Attempt to change the value of the const variable and observe the error in the browser's console. This will help you understand the behavior of const when trying to reassign its value.  

7. Check the Output:  
Ensure that when the button is clicked, the variable values and their data types are displayed inside the `<div>`.  