function displayStoredData() {
    // Retrieve ALL four values from localStorage using the same keys used for saving
    const storedUsername = localStorage.getItem('saved_username');
    const storedEmail = localStorage.getItem('saved_email');
    const storedLocation = localStorage.getItem('saved_location');
    const storedRoll = localStorage.getItem('saved_roll');

    // Get the single display container
    const displayDiv = document.getElementById('displayUsername');

    // Check if the display element exists and we have a username to show
    if (displayDiv && storedUsername) {
        // Construct the HTML content to display all four pieces of data
        // We use innerHTML to insert formatting like <p> and <strong> tags
        displayDiv.innerHTML = `
            <h3>Hello, ${storedUsername}! Thanks for signing up for our mission. If this was real, you would recieve an email telling you that you will get confirmation.</h3>
            <p><strong>Username:</strong> ${storedUsername}</p>
            <p><strong>Email:</strong> ${storedEmail || 'Not Provided'}</p>
            <p><strong>Requested Planet Location:</strong> ${storedLocation || 'Not Provided'}</p>
            <p><strong>Requested Job Roll:</strong> ${storedRoll || 'Not Provided'}</p>
        `;
    } else if (displayDiv) {
        // Fallback message if no data was found (e.g., user navigated here directly)
        displayDiv.innerHTML = `<p>No recent registration data found in local storage.</p>`;
    }

    // Optional: Clear the data from localStorage after displaying it. A page reload will clear the page.
    localStorage.clear();
}

// Run the function as soon as the window finishes loading
window.onload = displayStoredData;

// Getting all of this to work was tricky.
