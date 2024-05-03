onReady();

function onReady() {
	console.log('Javascript is working!');
}


let employees = [];

function addEmployeeData(event) {
    event.preventDefault();
    let firstName = document.getElementById("emp-first-name");
    let lastName = document.getElementById("emp-last-name");
    let employeeID = document.getElementById("emp-id");
    let jobTitle = document.getElementById("emp-job-title");
    let annualSalary = document.getElementById("emp-salary");
    let employeeTable = document.getElementById("employee-table");
    // console.log(`${firstName.value} ${lastName.value}`);
    employeeTable.innerHTML += `
      <tr> 
      <td>${firstName.value}</td>
      <td>${lastName.value}</td>
      <td>${employeeID.value}</td>
      <td>${jobTitle.value}</td>
      <td>${annualSalary.value}</td>
      <td class="deleteColumn"> <button class = "delete-btn" onClick="employee(event)">❌</button> </td>
      </tr>`;
        employees+={
            First: firstName.value,
            Last: lastName.value,
            id: employeeID.value,
            Title: jobTitle.value,
            Salary: annualSalary.value,

}
        console.log([employees]);
        firstName.value = '';
        lastName.value = '';
        employeeID.value = '';
        jobTitle.value = '';
        annualSalary.value = '';
    }
//todos:
// 1. Create a form to allow employee data to be input (done)
// 2. Create a table to store employee data (done)
// 2. Clear the form data after input (done)
// 3. Grab the employee data that is entered (store as array of objects?)
// 4. store the employee data in a table
// 5. create a button when employee row is created to delete that row in the table
// 6. Calculate monthly cost of the employees (Annual salary / 12)