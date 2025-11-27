document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Get the Cancel button element (which has type="button")
    const cancelButton = form.querySelector('button[type="button"]');

    // Error message display elements
    const emailError = document.getElementById('emailError');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // --- Validation Functions ---

    // 1. Validate Email using a basic regex
    function validateEmail(email) {
        // Simple regex: checks for 'something@something.domain'
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    }

    // 2. Validate Username
    function validateUsername(username) {
        // Must be between 3 and 15 characters
        return username.length >= 3 && username.length <= 15;
    }

    // 3. Validate Password
    function validatePassword(password) {
        // Must be at least 8 characters long
        // Must contain at least one letter and one number
        const lengthCheck = password.length >= 8;
        const letterCheck = /[a-zA-Z]/.test(password);
        const numberCheck = /[0-9]/.test(password);

        return lengthCheck && letterCheck && numberCheck;
    }

    // --- Form Submission Handler ---

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission (which reloads the page)
        event.preventDefault();

        // Clear previous error messages
        emailError.textContent = '';
        usernameError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;

        // --- Run Checks ---

        // 1. Email Validation
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address (e.g., user@domain.com).';
            isValid = false;
        }

        // 2. Username Validation
        if (!validateUsername(usernameInput.value)) {
            usernameError.textContent = 'Username must be between 3 and 15 characters long.';
            isValid = false;
        }

        // 3. Password Validation
        if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters and include both letters and numbers.';
            isValid = false;
        }

        // --- Final Action ---

        if (isValid) {
            // If all checks pass, you would typically:
            // 1. Submit the form to the server (e.g., form.submit();)
            // 2. Or, use fetch/AJAX to send the data without a full page reload.

            // For now, let's just log success
            console.log('Form is valid! Submitting data...');
            alert('Login Successful!');
            // To genuinely submit the form, you would call form.submit(); here.
        } else {
            console.log('Form validation failed.');
        }
    });

    // --- 2. Cancel Button Functionality ---

    cancelButton.addEventListener('click', function() {
        // Clears all form fields back to their initial state
        form.reset();

        // Also clear any displayed error messages
        emailError.textContent = '';
        usernameError.textContent = '';
        passwordError.textContent = '';

        console.log('Form cleared.');
    });
});
