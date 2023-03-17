// Write your solution in this file!


const employee = {
    name: "adam",
    streetAddress: "123 A Street",
};

console.log(employee);

console.log(employee["name"]);

console.log(employee.name);

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const updatedEmployee = {...employee};

    updatedEmployee[key] = value;

    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value; 

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;

    return employee;
}