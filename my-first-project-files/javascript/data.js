function displayStoredData() {
    // Retrieve ALL four values from localStorage using the same keys used for saving
    const storedUsername = localStorage.getItem('saved_username');
    const storedEmail = localStorage.getItem('saved_email');
    const storedPassword = localStorage.getItem('saved_password');
    const storedTickets = localStorage.getItem('saved_tickets');

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
            <p><strong>Password Stored:</strong> ${storedPassword || 'Not Provided'} (This would not be saved in a real world app or page for security reasons.)</p>
            <p><strong>Tickets Requested:</strong> ${storedTickets || '0'}</p>
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

