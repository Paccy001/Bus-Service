document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".decor");
    const contentContainer = document.getElementById("content");
    const drivers = [
        { id: "#201", name: "Alice Johnson", licenseNumber: "1234567890", company: "ExpressBus", email: "alice@example.com" },
        // Add more driver objects...
    ];

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
                    <p>Form to update password, phone number, email, etc.</p>
                `;
                break;
            case "Transactions":
                content = generateTransactionsTable();
                break;
            case "Tickets":
                content = generateTicketsTable();
                break;
            case "Drivers":
                content = generateDriversTable();
                break;
            case "Buses":
                content = generateBusesTable();
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
                        <th>Date</th>
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

    function generateTicketsTable() {
        const tickets = [
            { id: "#101", passenger: "Katoya Peter",origin: "Kigali" ,destination: "Kampala", price: "5500rwf", status: "Valid" },
            // Add more ticket objects...
        ];

        let table = `
            <h2>Tickets</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Passenger</th>
                        <th>origin</th>
                        <th>Destination</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        tickets.forEach((ticket, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${ticket.id}</td>
                    <td>${ticket.passenger}</td>
                    <td>${ticket.origin}</td>
                    <td>${ticket.destination}</td>
                    <td>${ticket.price}</td>
                    <td>${ticket.status}</td>
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

    function generateDriversTable() {
        let table = `
            <h2>Drivers</h2>
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

        drivers.forEach((driver, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${driver.id}</td>
                    <td>${driver.name}</td>
                    <td>${driver.licenseNumber}</td>
                    <td>${driver.company}</td>
                    <td>${driver.email}</td>
                    <td><button onclick="deleteDriver(${index})">Delete</button><button>Update</button></td>
                </tr>
                 <div style="text-align: center;">
                <button onclick="DriverForm()">Register New Driver</button>
            </div>

            `;
        });
       

        table += `
                </tbody>
            </table>
           
           
            
        `;

        return table;
        
    } 
   
    
        function generateBusesTable() {
            const buses = [
                { id: "#301", busNumber: "BUS123", capacity: "50", company: "ExpressBus" },
                // Add more bus objects...
            ];
        
            let table = `
                <h2>Buses</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>#ID</th>
                            <th>Bus Number</th>
                            <th>Capacity</th>
                            <th>Company</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
        
            buses.forEach((bus, index) => {
                table += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${bus.id}</td>
                        <td>${bus.busNumber}</td>
                        <td>${bus.capacity}</td>
                        <td>${bus.company}</td>
                        <td><button>Delete</button><button>Update</button></td>
                    </tr>
                `;
            });
        
            table += `
                    </tbody>
                </table>
                
                <div style="text-align: center;">
                <button onclick="AddNewBus()">Add New Bus</button>
            </div>
            
            `;
        
            return table;
            
        }
       
   

   
   
});
 function DriverForm() {
        const registrationForm = `
            <h2>Register New Driver</h2>
            <form id="driverRegistrationForm" >
                <label for="name">Name:</label>
                <input type="text" id="name" required><br>
                <label for="licenseNumber">License Number:</label>
                <input type="text" id="licenseNumber" required><br>
                <label for="company">Company:</label>
                <input type="text" id="company" required><br>
                <label for="email">Email:</label>
                <input type="email" id="email" required><br>
                <button type="submit">Submit</button>
            </form>
        `;

        contentContainer.innerHTML = registrationForm;
        const form=document.getElementById("driverRegistrationForm");
        form.addEventListener("submit", registerNewDriver);
    }
   
     function registerNewDriver(event ) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const licenseInput = document.getElementById("licenseNumber");
        const companyInput = document.getElementById("company");
        const emailInput = document.getElementById("email");

        const name = nameInput.value;
        const licenseNumber = licenseInput.value;
        const company = companyInput.value;
        const email = emailInput.value;

        const newDriver = {
            id: "#" + (drivers.length + 1),
            name: name,
            licenseNumber: licenseNumber,
            company: company,
            email: email
        };

        drivers.push(newDriver);

        const updatedContent = generateDriversTable();
        contentContainer.innerHTML = updatedContent;

        // Clear the input fields
        nameInput.value = "";
        licenseInput.value = "";
        companyInput.value = "";
        emailInput.value = "";
    }
    function AddNewBus() {
        const busForm = `
            <h2>Register New Bus</h2>
            <form id="registerNewbus" action="bus.php" method="post" >
                <label for="busnumber">BusNumber:</label>
                <input type="text" name="Busnumber" id="busnumber" required><br>
                <label for="capacity">Capacity:</label>
                <input type="text" name="Capacity" id="capacity" required><br>
                <label for="company">Company:</label>
                <input type="text" name="Company" id="company" required><br>
                <button type="submit">Submit</button>
            </form>
        `;

        contentContainer.innerHTML = busForm;
        const form=document.getElementById("AddNewBus");
        form.addEventListener("submit", registerNewbus);
    }



function  registerNewbus(event ) {
    event.preventDefault();
    const  inputbusnumber = document.getElementById("busnumber");
    const capacityinput = document.getElementById("capacity");
    const companyInput = document.getElementById("company");
    

    const name = inputbusnumber.value;
    const capacity = capacityinput.value;
    const company = companyInput.value;
    const email = emailInput.value;

    const NewBus = {
        id: "#" + (drivers.length + 1),
        inputbusnumber:inputbusnumber,
        capacity: capacity,
        company: company,
        
    };

    drivers.push(NewBus);

    const updatedContent = generateDriversTable();
    contentContainer.innerHTML = updatedContent;

    // Clear the input fields
    inputbusnumber.value = "";
    capacity.value = "";
    companyInput.value = "";
    
}
 function deleteDriver(index) {
        drivers.splice(index, 1);
        const updatedContent = generateDriversTable();
        contentContainer.innerHTML = updatedContent;
    }
     function logout() {
        window.location.href = "login.html";
        return false;
    }
    
