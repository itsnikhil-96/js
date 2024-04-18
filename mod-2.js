import employees from './mod-1.js';

let hyde= employees.filter(employee => employee.address.city === 'hyderabad');
let hyden = hyde.map(employee => employee.name);
console.log("Employees from Hyderabad:", hyden);

let mid = employees.filter(employee => employee.age >= 40 && employee.age <= 50);
const midinfo = mid.map(employee => ({ name: employee.name, address: employee.address }));
console.log("Middle-aged Employees:", midinfo);

const nonHyd = employees.filter(employee => employee.address.city !== 'hyderabad');
console.log("Employees not from Hyderabad:", nonHyd);

const react = employees.filter(employee => employee.skills.includes('reactjs'));
const reactn = react.map(employee => employee.name);
console.log("Employees with skill reactjs:", reactn);
