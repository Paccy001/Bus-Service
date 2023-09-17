document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".decor");
    const contentContainer = document.getElementById("content");

    // Load the default content on page load
    const defaultContent = getCorrespondingContent("Manage account");
    contentContainer.innerHTML = defaultContent;

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const linkText = link.textContent.trim();
            const content = getCorrespondingContent(linkText);
            contentContainer.innerHTML = content;
        });
    });

    function getCorrespondingContent(linkText) {
        let content = "";
        switch (linkText) {
            case "Manage account":
                content = `
                    <h2>Manage Account</h2>
                    <p>Main personal account information and options to change details.</p>

                    <p>Form to update password, phone number, email, etc.
                    
                    
                    
                    
                    
                    </p>
                `;
                break;
            case "Transactions":
                content = generateTransactionsTable();
                break;
            case "Owners":
                content = generateOwnersTable();
                break;
            case "Users":
                content = generateUsersTable();
                break;
            case "Bus Drivers": // New case for Bus Drivers
                content = generateBusDriversTable();
                break;
            default:
                content = "<p>Select a link to see its content.</p>";
        }
        return content;
    }

    function generateTransactionsTable() {
        const transactions = [
            { id: "#001", Passenger: "Alice Smith", Date: "2023-08-20", transactionDate: "2023-08-25", time: "10:00 AM",  PassengerPhone: "+9876543210", status: "Completed" },
            { id: "#002", Passenger: "Bob Johnson", Date: "2023-08-21", transactionDate: "2023-08-26", time: "11:00 AM",  PassengerPhone: "+8765432109", status: "Pending" },
            // Add more transaction objects...
        ];

        let table = `
            <h2>Transactions</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        
                        <th>Passenger</th>
                        <th> Date</th>
                        <th>Transaction Date</th>
                        <th>Time</th>
                        
                        <th>Passenger's Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        transactions.forEach((transaction, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${transaction.id}</td>
                   
                    <td>${transaction.Passenger}</td>
                    <td>${transaction.Date}</td>
                    <td>${transaction.transactionDate}</td>
                    <td>${transaction.time}</td>
                   
                    <td>${transaction.PassengerPhone}</td>
                    <td>${transaction.status}</td>
                    <td><button>Delete</button><button>Update</button></td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        return table;
    }

    function generateOwnersTable() {
        const owners = [
            { id: "#101", name: "Dr. Tuyisenge olivier", phone: "+250790212123", Company: "JAGUAR", email: "tuyisenge@gmail.com" },
           
        ];

        let table = `
            <h2>Owners</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        owners.forEach((owner, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${owner.id}</td>
                    <td>${owner.name}</td>
                    <td>${owner.phone}</td>
                    <td>${owner.Company}</td>
                    <td>${owner.email}</td>
                    <td><button onclick="Delete()">Delete</button>
                    <button onclick="Update()">Update</button></td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        return table;
    }
    function Delete( index){
        owners.values="";
        const updatedContent=generateOwnersTable();
        contentContainer=updatedContent;
      

    }


    function generateUsersTable() {
        const users = [
            { id: "#201", name: "Alice Johnson", phone: "+5678901234", role: "User", email: "alice@example.com", lastLogin: "2023-08-18 08:30 AM" },
            { id: "#202", name: "Bob Smith", phone: "+6789012345", role: "Admin", email: "bob@example.com", lastLogin: "2023-08-19 09:45 AM" },
            // Add more user objects...
        ];

        let table = `
            <h2>Users</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        users.forEach((user, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.role}</td>
                    <td>${user.email}</td>
                    <td>${user.lastLogin}</td>
                    <td><button>Delete</button><button>Update</button></td>
                </tr>
               
            `;
            
        });

        table += `
                </tbody>
            </table>

            <div style="text-align: center;">
            <button onclick="AddNewUser()">Add New User</button>
        </div>
        `;

        return table;
        
    }
    function generateBusDriversTable() {
        const busDrivers = [
            { id: "#301", name: "GAKURU", licenseNumber: "1234567890", company: "JAGUAR", email: "gakuru@example.com" },
            // Add more bus driver objects...
        ];

        let table = `
            <h2>Bus Drivers</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>License Number</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        busDrivers.forEach((driver, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${driver.id}</td>
                    <td>${driver.name}</td>
                    <td>${driver.licenseNumber}</td>
                    <td>${driver.company}</td>
                    <td>${driver.email}</td>
                    <td><button>Delete</button><button>Update</button></td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        return table;
    }
});
function logout() {
    // Redirect to the login page
    window.location.href = "login.html";
    return false; // Prevent form submission (if it's inside a form)
}
