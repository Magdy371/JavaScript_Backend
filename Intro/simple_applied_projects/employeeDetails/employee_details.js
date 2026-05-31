const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];

function displayEmployees()
{
    const totalEmployees = employees.map(employee=>
    `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// function calculateTotalSalaries(){
//     let total =0;
//     for(let i=0; i < employees.length; i++){
//         total += employees[i].salary;
//     }
//     alert(`total salaries : ${total}`);
// }
function calculateTotalSalaries(){
    totalSalary = employees.reduce((total, employee)=>
        total + employee.salary, 0);
        alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployess = employees.filter((e)=> e.department ==='HR');
    const hrEmployeeDisplay = hrEmployess.map(employee=>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeeDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

