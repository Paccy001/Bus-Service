<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server name
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$database = "bus"; // Change this to your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize a variable to track password match status
$password_match = true;

// Process the form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Check if the entered password and confirm password match
    if ($password !== $confirm_password) {
        $password_match = false;
    } else {
        // Determine the role based on the selection in the form
        $role = $_POST["role"];

        // Validate and sanitize your form data here...

        // Hash the password before storing it in the database
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Handle file uploads
        $business_document = $_FILES["business_document"]["name"];
        $personal_id = $_FILES["personal_id"]["name"];

        // Move uploaded files to a specific folder on the server
        $upload_directory = "uploads/";

        if (move_uploaded_file($_FILES["business_document"]["tmp_name"], $upload_directory . $business_document) &&
            move_uploaded_file($_FILES["personal_id"]["tmp_name"], $upload_directory . $personal_id)) {

            // Insert data into the "users" table
            $sql = "INSERT INTO users (User_Id, Username, User_Password, Phone_Number, Email, Role, Document, Personal_Id) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssssss", $fullname, $hashed_password, $phone, $email, $role, $business_document, $personal_id);

            if ($stmt->execute()) {
                // Data inserted successfully
                echo "Registration successful! Redirecting to login page...";
                // Redirect to the login page after a brief delay
                header("refresh:2;url=login.html");
                exit();
            } else {
                // Error occurred during insertion
                echo "Error: " . $conn->error;
            }

            // Close the database connection
            $stmt->close();
        } else {
            echo "File upload failed.";
        }
    }
}

// If passwords don't match, redirect to signup.html
if (!$password_match) {
    header("Location: signup.html");
    exit();
}

// Close the database connection
$conn->close();
?>
