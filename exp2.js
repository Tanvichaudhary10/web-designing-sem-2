let employees = [];

function addEmployee() {
    let id = document.getElementById("empId").value;
    let name = document.getElementById("empName").value;
    let salary = parseFloat(document.getElementById("empSalary").value);
    let dept = document.getElementById("empDept").value;

    if (!id || !name || !salary || !dept) {
        alert("Please fill all fields");
        return;
    }

    employees.push({ id, name, salary, dept });

    alert("Employee added successfully!");

    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}

function displayEmployees() {
    let output = "<h3>All Employees</h3>";

    employees.forEach(emp => {
        output += `
        ID: ${emp.id}<br>
        Name: ${emp.name}<br>
        Salary: ${emp.salary}<br>
        Department: ${emp.dept}<br><hr>`;
    });

    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Employees with Salary > 50000</h3>";

    filtered.forEach(emp => {
        output += `
        Name: ${emp.name}<br>
        Salary: ${emp.salary}<br><hr>`;
    });

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees available";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h3>Average Salary: ${avg}</h3>`;
}

function countDepartment() {
    let deptName = prompt("Enter department name:");
    let count = employees.filter(emp => emp.dept === deptName).length;

    document.getElementById("output").innerHTML =
        `<h3>Employees in ${deptName}: ${count}</h3>`;
}