SELECT role.id, role.title, department.name AS department, role.salary
FROM role
LEFT JOIN department
on role.department_id = department.id;



SELECT employee.*, role.title AS role, role.salary AS salary, department.name AS department
From employee
JOIN role
ON employee.role_id = role.id
JOIN department
ON role.department_id = department.id






