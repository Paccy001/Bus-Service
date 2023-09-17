<?php
// This part of the code assumes you have a database connection already established.
// Replace the database connection details with your actual credentials.
$host = "localhost";
$username = "Pacifique";
$password = "Smart2001";
$dbname = "bus";

// Create a database connection
$conn =  mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function generateBookingHistoryTable() {
    // Your code for generating the booking history table goes here.
    // You can use PHP to fetch data from the database and generate the table.
    global $conn;

    $contentSection = '<table border="1"><thead><tr><th>Ticket ID</th><th>Date</th><th>Origin</th><th>Destination</th><th>Passenger Name</th><th>Amount</th></tr></thead><tbody>';

    // Sample data (you should replace this with database query results)
    $sql = "SELECT * FROM booking_history"; // Replace with your actual table name
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $contentSection .= '<tr>';
            $contentSection .= '<td>' . $row['ticket_id'] . '</td>';
            $contentSection .= '<td>' . $row['date'] . '</td>';
            $contentSection .= '<td>' . $row['origin'] . '</td>';
            $contentSection .= '<td>' . $row['destination'] . '</td>';
            $contentSection .= '<td>' . $row['passenger_name'] . '</td>';
            $contentSection .= '<td>' . '$' . $row['amount'] . '</td>';
            $contentSection .= '</tr>';
        }
    }

    $contentSection .= '</tbody></table>';

    return $contentSection;
}

function generateBookTicketForm() {
    // Your code for generating the book ticket form goes here.
    // You can use PHP to populate dropdown options from the database if needed.
    global $conn;

    $contentSection = '<form class="book-ticket-form" action="/book_ticket" method="post">';
    $contentSection .= '<input type="text" name="name" placeholder="Name" required>';
    $contentSection .= '<input type="text" name="contact" placeholder="Contact Number" required>';

    // Fetch origin and destination options from the database
    $sql = "SELECT * FROM destinations"; // Replace with your actual table name
    $result = $conn->query($sql);

    $contentSection .= '<select name="origin">';
    while ($row = $result->fetch_assoc()) {
        $contentSection .= '<option value="' . $row['destination_name'] . '">' . $row['destination_name'] . '</option>';
    }
    $contentSection .= '</select>';

    $contentSection .= '<select name="destination">';
    $result->data_seek(0); // Reset result pointer to fetch again
    while ($row = $result->fetch_assoc()) {
        $contentSection .= '<option value="' . $row['destination_name'] . '">' . $row['destination_name'] . '</option>';
    }
    $contentSection .= '</select>';

    $contentSection .= '<input type="text" name="price" placeholder="Price" disabled>';
    $contentSection .= '<input type="date" name="date" required>';

    $contentSection .= '<select name="time">';
    $timeOptions = ['9:00 AM', '1:00 PM', '5:00 PM']; // Replace with actual options from the database
    foreach ($timeOptions as $option) {
        $contentSection .= '<option value="' . $option . '">' . $option . '</option>';
    }
    $contentSection .= '</select>';

    $contentSection .= '<button type="submit">Book Now</button>';
    $contentSection .= '</form>';

    return $contentSection;
}

function generateAccountManagementOptions() {
    // Your code for generating account management options goes here.
    // This can be done using PHP to create HTML elements as needed.
    // You can also use PHP to fetch and display user account information.
    $contentSection = '';

    // Generate the account options dropdown
    $contentSection .= '<select class="account-dropdown" id="account-options">';
    $contentSection .= '<option value="Profile Information">Profile Information</option>';
    $contentSection .= '<option value="Change Password">Change Password</option>';
    $contentSection .= '<option value="Change Phone Number">Change Phone Number</option>';
    $contentSection .= '<option value="Change Email Address">Change Email Address</option>';
    $contentSection .= '</select>';

    return $contentSection;
}

// Close the database connection
$conn->close();
?>
