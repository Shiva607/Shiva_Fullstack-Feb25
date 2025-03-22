### 1️⃣ Setup the HTML Form
1. Create an `index.html` file.
2. Add input fields for Name, Email, and Phone Number.
3. Include a submit button.

### 2️⃣ Add JavaScript for Validation
1. Prevent default form submission using `event.preventDefault()`.
2. Validate fields: 
   - Name should contain only letters and spaces.
   - Email should have `@` and `.` with a minimum length.
   - Phone Number should be exactly 10 digits.
3. Display error messages in `#errorMessage`.

### 3️⃣ Testing the Form
1. Open `index.html` in a browser.
2. Try different test cases:
   - Leave fields empty.
   - Enter an invalid email (e.g., `test.com`).
   - Use a phone number shorter or longer than 10 digits.
3. Ensure proper error messages appear.
4. Enter correct data and confirm the success message.

## ✅ Expected Output
- If fields are empty: *"All fields are required."*
- If name contains numbers: *"Name should only contain letters and spaces."*
- If email is invalid: *"Invalid email format."*
- If phone number is incorrect: *"Phone number must be exactly 10 digits."*
- If all fields are correct: *"Form submitted successfully!"*
