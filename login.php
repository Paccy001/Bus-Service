<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$database = "bus";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Query the database to check credentials and get the user's role
    $sql = "SELECT User_Password, Role FROM users WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        $storedPassword = $row["User_Password"];
        $userRole = $row["Role"];

        if (password_verify($password, $storedPassword)) {
            // Valid credentials
            session_start();
            $_SESSION["username"] = $username;
            
            // Redirect based on the user's role
            if ($userRole === "Passenger") {
                header("Location: Customer.html"); // Redirect to passenger dashboard
            } elseif ($userRole === "Owner") {
                header("Location: owner.html"); // Redirect to owner dashboard
            } else {
                // Handle other roles as needed
                // You can add additional elseif blocks here for other roles
            }

            exit();
        } else {
            // Invalid password
            echo "Invalid password. Please try again.";
        }
    } else {
        // User not found
        echo "User not found. Please check your username.";
    }

    $stmt->close();
}

// Close the database connection
$conn->close();
?>
