# Web Development Grade Classification
## Objective
To classify a participant's performance in three subjects (HTML, CSS, JavaScript) using conditional statements (if, else if, and nested if). The result will be displayed with different background colors based on the classification.

## Steps

1. Design a Basic HTML Form
* Create a form with three input fields for entering marks for HTML, CSS, and JavaScript.  
* Add a button labeled "Calculate Grade" to trigger the calculation.

2. Capture User Input:

* When the button is clicked, capture the values entered into the input fields for HTML, CSS, and JavaScript. 

3. Check for Failure:

* Implement a check using if statements to verify if any of the marks entered for HTML, CSS, or JavaScript are below 50.
If any subject score is less than 50, classify the student as "Fail".

4. Calculate Total Marks:  

* If all the marks are above 50, calculate the total marks by adding the scores of HTML, CSS, and JavaScript.  

5. Implement Conditional Logic:

* Use an else if statement to classify the student based on their total score:  
    * If the total is greater than or equal to 240, classify as "First Class".  
    * If the total is between 210 and 239, classify as "Second Class".  
    * If the total is between 180 and 209, classify as "Third Class".  
    * If the total is between 150 and 179, classify as "Pass".  

6. Display the Result:  

* Display the classification (First Class, Second Class, Third Class, Pass, or Fail) in a div element below the form.  

* Based on the classification, apply different background colors:  
    * First Class: Green background.  
    * Second Class: Yellow background. 
    * Third Class: Light Green background with Light Red overlay.  
    * Pass: Black background with white text.  
    * Fail: Red background with white text.  

7. Run and Test


* Failure: Test scenarios where one or more marks are below 50, ensuring that the result is correctly classified as "Fail" with the appropriate red background.

* Success: Test scenarios where all marks are above 50, checking that the result is correctly classified based on the total marks with the appropriate background color for First Class, Second Class, Third Class, or Pass.