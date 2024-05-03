onReady();

function onReady() {
	console.log('Javascript is working!');
}

let firstName = document.getElementById("emp-first-name");
let lastName = document.getElementById("emp-last-name");
let employeeID = document.getElementById("emp-id");
let jobTitle = document.getElementById("emp-job-title");
let annualSalary = document.getElementById("emp-salary");

function addEmployeeData(event) {

}
//todos:
// 1. Create a form to allow employee data to be input (done)
// 2. Create a table to store employee data
// 2. Clear the form data after input
// 3. Grab the employee data that is entered (store as array of objects?)
// 4. store the employee data in a table
// 5. create a button when employee row is created to delete that row in the table
// 6. Calculate monthly cost of the employees (Annual salary / 12)