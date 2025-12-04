// Get the tickets from localStorage and convert back to an array
let allTickets = JSON.parse(localStorage.getItem('tickets')) || [];

// Get table body element
let tableBody = document.getElementById('ticketTableBody');

// Clear any existing rows
tableBody.innerHTML = '';

// Loop through each ticket and create a row
allTickets.forEach(function(ticket, index) {
    let row = `
        <tr>
            <td>${ticket.city}</td>
            <td>${ticket.name}</td>
            <td>${ticket.email}</td>
            <td>${ticket.tickets}</td>
            <td>${ticket.section}</td>
            <td>
                <button onclick="deleteTicket(${index})">Delete</button>
            </td>
        </tr>
    `;
    tableBody.innerHTML += row;
});

// Delete button functionality
function deleteTicket(index) {
    // Get the current tickets
    let allTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    
    // Remove the ticket at the specified index
    allTickets.splice(index, 1);
    
    // Save the updated array back to localStorage
    localStorage.setItem('tickets', JSON.stringify(allTickets));
    
    // Reload the page to show the updated table
    location.reload();
}