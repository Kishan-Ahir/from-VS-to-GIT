// Get the submit button and the customer list element
let submit = document.getElementById("submit");
let ul = document.getElementById("customer-list");

// Add a click event listener to the submit button
submit.addEventListener("click", saveinfo);

// Function to handle saving customer information
function saveinfo(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from input fields
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  // Create an array with customer details
  let details = [fname, lname, email, date, time];

  // Convert the details array to a JSON string
  let string = JSON.stringify(details);

  // Store the customer details in local storage using the email as the key
  localStorage.setItem(email, string);

  // Retrieve the stored customer details
  let customerinfo = localStorage.getItem(email);
  
  // Parse the stored customer details JSON string back into an array
  let array_of_customerinfo = JSON.parse(customerinfo);

  // Create a new list item for the customer
  let customer = document.createElement("li");
  customer.className = "list-group-item";
  
  // Add customer name and email to the list item's text content
  customer.appendChild(document.createTextNode("Name is " + array_of_customerinfo[0] + " " + array_of_customerinfo[1] + ". Email Address is " + array_of_customerinfo[2]));

  // Create a delete button for the customer
  let deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-danger btn-sm delete";
  deletebtn.setAttribute("style", "float: right;");
  deletebtn.appendChild(document.createTextNode("X"));
  customer.appendChild(deletebtn);

  // Create an edit button for the customer
  let editbtn = document.createElement("button");
  editbtn.className = "btn btn-dark btn-sm";
  editbtn.setAttribute("style", "margin-right:5px;float: right;");
  editbtn.appendChild(document.createTextNode("Edit"));
  customer.appendChild(editbtn);

  // Add the customer list item to the unordered list
  ul.appendChild(customer);
}


//adding delete button functionality
ul.addEventListener("click",remove);
function remove(event){
    if(event.target.classList.contains("delete"))
    {
        if(confirm("Are you sure?"))
        {
            let li = event.target.parentNode;
            ul.removeChild(li);

            let emailofcustomer = event.target.parentNode.firstChild.textContent.split(" ").pop();
            localStorage.removeItem(emailofcustomer);
        }
    }
}