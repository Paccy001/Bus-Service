function showTab(tabId) {
    var contentSection = document.getElementById('content-section');
    switch (tabId) {
        case 'history':
            contentSection.innerHTML = ''; // Clear any previous content
            generateBookingHistoryTable();
            break;
        case 'ticket':
            contentSection.innerHTML = ''; // Clear any previous content
            generateBookTicketForm();
            break;
        case 'account':
            contentSection.innerHTML = ''; // Clear any previous content
            generateAccountManagementOptions();
            break;
        default:
            contentSection.innerHTML = '';
            break;
    }
}

function generateBookingHistoryTable() {
    var contentSection = document.getElementById('content-section');

    // Create a table element
    var table = document.createElement('table');
    table.border = '1';
    

    // Create table header row
    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    var headers = ['Ticket ID', 'Date', 'Origin', 'Destination', 'Passenger Name', 'Amount']; // Modified headers

    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement('th');
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }

    // Sample data (you should replace this with your actual data)
    var bookingData = [
        ['001', '2023-08-01', 'City A', 'City B', 'John Doe', '$50'], // Modified data
        ['002', '2023-08-10', 'City C', 'City D', 'Jane Smith', '$45'], // Modified data
        // Add more rows as needed
    ];

    // Create table body
    var tbody = table.createTBody();
    for (var j = 0; j < bookingData.length; j++) {
        var row = tbody.insertRow();
        for (var k = 0; k < bookingData[j].length; k++) {
            var cell = row.insertCell();
            cell.textContent = bookingData[j][k];
        }
    }

    // Append the table to the content section
    contentSection.appendChild(table);
}

function generateBookTicketForm() {
    var contentSection = document.getElementById('content-section');

    // Create a form element
    var form = document.createElement('form');
    form.className = 'book-ticket-form';
    form.action = '/book_ticket'; // Replace with your actual form action
    form.method = 'post';

    // Create form fields
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;

    var contactInput = document.createElement('input');
    contactInput.type = 'text';
    contactInput.name = 'contact';
    contactInput.placeholder = 'Contact Number';
    contactInput.required = true;

    var originDropdown = document.createElement('select'); // Create a dropdown
    var destinations = ['City A', 'City B', 'City C']; // Replace with actual options
    for (var i = 0; i < destinations.length; i++) {
        var option = document.createElement('option');
        option.value = destinations[i];
        option.text = destinations[i];
        originDropdown.appendChild(option);
    }

    var destinationDropdown = document.createElement('select'); // Create a dropdown
    for (var j = 0; j < destinations.length; j++) {
        var option = document.createElement('option');
        option.value = destinations[j];
        option.text = destinations[j];
        destinationDropdown.appendChild(option);
    }

    var priceInput = document.createElement('input');
    priceInput.type = 'text';
    priceInput.name = 'price';
    priceInput.placeholder = 'Price';
    priceInput.disabled = true; // Disable user input
    priceInput.value = ''; // Set initial value to empty

    var dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.required = true;

    var timeDropdown = document.createElement('select'); // Create a dropdown
    var timeOptions = ['9:00 AM', '1:00 PM', '5:00 PM']; // Replace with actual options
    for (var k = 0; k < timeOptions.length; k++) {
        var option = document.createElement('option');
        option.value = timeOptions[k];
        option.text = timeOptions[k];
        timeDropdown.appendChild(option);
    }

    var bookButton = document.createElement('button');
    bookButton.type = 'submit';
    bookButton.textContent = 'Book Now';

    // Append form fields to the form
    form.appendChild(nameInput);
    form.appendChild(contactInput);
    form.appendChild(originDropdown);
    form.appendChild(destinationDropdown);
    form.appendChild(priceInput);
    form.appendChild(dateInput);
    form.appendChild(timeDropdown);
    form.appendChild(bookButton);

    // Append the form to the content section
    contentSection.appendChild(form);

    // Update price based on selected origin and destination
    originDropdown.addEventListener('change', updatePrice);
    destinationDropdown.addEventListener('change', updatePrice);

    function updatePrice() {
        var calculatedPrice = calculatePrice(originDropdown.value, destinationDropdown.value);
        priceInput.value = calculatedPrice;
    }
}

function calculatePrice(origin, destination) {
    // Replace this with your actual price calculation logic
    // For now, using a simple fixed price based on dummy data
    var price = 50; // Dummy price
    return '$' + price;
}

function generateAccountManagementOptions() {
    var contentSection = document.getElementById('content-section');
    contentSection.innerHTML = ''; // Clear any previous content

    // Create a select element as the dropdown
    var accountOptionsDropdown = document.createElement('select');
    accountOptionsDropdown.className = 'account-dropdown';

    // Create the default and non-selectable option
    var defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select option';
    defaultOption.disabled = true; // Make it non-selectable
    defaultOption.selected = true; // Select it by default
    accountOptionsDropdown.appendChild(defaultOption);

    // Modify the 'Profile Information' option to display content as a dropdown
    appendAccountOption(accountOptionsDropdown, 'Profile Information', [
        { label: 'Full Name', value: 'Tuyizere Pacifique' },
        { label: 'Email', value: 'tzrpcfq@gmail.com' },
        { label: 'Phone Number', value: '250-789-21643' }
    ], true); // The last argument 'true' indicates that it's a dropdown

    // Modify the 'Change Password' option to include an input for old password
    appendAccountOption(accountOptionsDropdown, 'Change Password', [
        { label: 'Old Password', type: 'password', name: 'oldPassword' },
        { label: 'New Password', type: 'password', name: 'newPassword' },
        { label: 'Confirm Password', type: 'password', name: 'confirmPassword' }
    ]);

    appendAccountOption(accountOptionsDropdown, 'Change Phone Number', [
        { label: 'New Phone Number', placeholder: 'Enter new phone number' }
    ]);

    appendAccountOption(accountOptionsDropdown, 'Change Email Address', [
        { label: 'New Email Address', placeholder: 'Enter new email address' }
    ]);

    // Append the dropdown to the content section
    contentSection.appendChild(accountOptionsDropdown);

    // Listen for the "change" event on the dropdown
    accountOptionsDropdown.addEventListener('change', function () {
        var selectedOption = accountOptionsDropdown.options[accountOptionsDropdown.selectedIndex];
        displaySelectedOptionContent(selectedOption);
    });
}

function appendAccountOption(dropdown, title, inputFields, isDropdownContent) {
    var option = document.createElement('option');
    option.textContent = title;
    option.value = title;
    dropdown.appendChild(option);

    if (inputFields) {
        option.inputFields = inputFields;
    }

    if (isDropdownContent) {
        option.isDropdownContent = true;
    }
}

function displaySelectedOptionContent(selectedOption) {
    var contentSection = document.getElementById('content-section');
    contentSection.innerHTML = ''; // Clear any previous content

    if (selectedOption.inputFields) {
        if (selectedOption.isDropdownContent) {
            var dropdownContent = document.createElement('div');
            dropdownContent.className = 'profile-dropdown-content';

            for (var i = 0; i < selectedOption.inputFields.length; i++) {
                var inputField = selectedOption.inputFields[i];

                var paragraph = document.createElement('p');
                paragraph.textContent = inputField.label + ': ' + inputField.value;
                dropdownContent.appendChild(paragraph);
            }

            contentSection.appendChild(dropdownContent);
        } else {
            var form = document.createElement('form');
            form.className = 'account-option-form';

            for (var i = 0; i < selectedOption.inputFields.length; i++) {
                var inputField = selectedOption.inputFields[i];

                var label = document.createElement('label');
                label.textContent = inputField.label;
                form.appendChild(label);

                var inputElement = document.createElement('input');
                inputElement.type = inputField.type || 'text';
                inputElement.name = inputField.name || '';
                inputElement.placeholder = inputField.placeholder || '';
                inputElement.value = inputField.value || '';
                form.appendChild(inputElement);

                form.appendChild(document.createElement('br'));
            }

            var submitButton = document.createElement('button');
            submitButton.type = 'button';
            submitButton.textContent = 'Save Changes';
            submitButton.addEventListener('click', function () {
                // Add your logic here to save changes

                // Redirect or clear screen logic
                contentSection.innerHTML = ''; // Clear the screen
                // Or use the following line to simulate a redirect
                // window.location.href = 'https://your-redirect-url.com';
            });
            form.appendChild(submitButton);

            contentSection.appendChild(form);
        }
    }
   
}
 function logout(){
        window.location.href="login.html"
    }
generateAccountManagementOptions();
