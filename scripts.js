onReady();

function onReady() {
	console.log('Javascript is working!');
}

let employees = [];
let salaryCalc = 0;

function addEmployeeData(event) {
	event.preventDefault();
	let firstName = document.getElementById('emp-first-name');
	let lastName = document.getElementById('emp-last-name');
	let employeeID = document.getElementById('emp-id');
	let jobTitle = document.getElementById('emp-job-title');
	let annualSalary = document.getElementById('emp-salary');
	let employeeTable = document.getElementById('employee-table');
	let monthlySalary = document.getElementById('monthly-salary');
    let h3Right = document.getElementById('h3-right');
	// console.log(`${firstName.value} ${lastName.value}`);
	employeeTable.innerHTML += `
      <tr> 
      <td>${firstName.value}</td>
      <td>${lastName.value}</td>
      <td>${employeeID.value}</td>
      <td>${jobTitle.value}</td>
      <td>${annualSalary.value}</td>
      <td class="deleteColumn"> <button class = "delete-btn" onClick="removeEmployee(event)">❌</button> </td>
      </tr>`;
	salaryCalc += Number(annualSalary.value);
	console.log('Salary calculation is:', salaryCalc);
	//       console.log('Salary coming in is: ', Number(annualSalary.value));
	monthlySalary.innerText = Math.round(salaryCalc / 12);
	console.log('The monthly salary now is: ', monthlySalary);
	employees.push({
		First: firstName.value,
		Last: lastName.value,
		id: employeeID.value,
		Title: jobTitle.value,
		Salary: annualSalary.value,
	});
    if (Number(monthlySalary.innerText) > 20000) {
        // If true, set background-color to red
        h3Right.style.backgroundColor = 'red';
    } else {
        // If false, remove any existing background-color
        h3Right.style.backgroundColor = '#a0c926';
    }
	// console.log([employees]);
	// renderMonthlySalary()
	firstName.value = '';
	lastName.value = '';
	employeeID.value = '';
	jobTitle.value = '';
	annualSalary.value = '';
}

function removeEmployee(event) {
    let h3Right = document.getElementById('h3-right');
	//need to find the object that is being removed
	let removedSalary = parseFloat(event.target.closest('TR').querySelector('td:nth-child(5)').textContent);
	salaryCalc -= removedSalary;
	let monthlySalary = document.getElementById('monthly-salary');
	monthlySalary.innerText = Math.round(salaryCalc / 12);
    if (Number(monthlySalary.innerText) > 20000) {
        // If true, set background-color to red
        h3Right.style.backgroundColor = 'red';
    } else {
        // If false, remove any existing background-color
        h3Right.style.backgroundColor = '#a0c926';
    }
	event.target.closest('TR').remove();
}

// function renderMonthlySalary() {
//     for (let i = 0; i < employees.length; i++){
//         salaryCalc += Number(employees[i].value);
//       console.log('Salary calculation is:', Number(salaryCalc));
//       monthlySalary.innerText = Math.round(salaryCalc / 12);
//     }
// }
//todos:
// 1. Create a form to allow employee data to be input (done)
// 2. Create a table to store employee data (done)
// 2. Clear the form data after input (done)
// 3. Grab the employee data that is entered (store as array of objects?) (done)
// 4. store the employee data in a table (done)
// 5. create a button when employee row is created to delete that row in the table (done)
// 6. Calculate monthly cost of the employees (Annual salary / 12) (done)
