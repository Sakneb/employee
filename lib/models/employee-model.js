const employees = [
  { name: "Annabel Pugi", title: "Intern", tribe: "Internstellar" },
  { name: "Egle Tannenberg", title: "Intern", tribe: "Internstellar" },
  { name: "Gloria Krieger", title: "Intern", tribe: "Internstellar" },
  { name: "Kristen Kuldmaa", title: "Intern", tribe: "Internstellar" },
  { name: "Maksim Ramazanov", title: "Intern", tribe: "Internstellar" },
  { name: "Rainar Razumovski", title: "Intern", tribe: "Internstellar" },
  { name: "Risto Vatsar", title: "Intern", tribe: "Internstellar" },
  { name: "Sakina Ibrahimova", title: "Intern", tribe: "Internstellar" },
  { name: "Sazzad Hossain", title: "Intern", tribe: "Internstellar" },
  { name: "Sirli Kont", title: "Intern", tribe: "Internstellar" },
  { name: "Natalja Banketova", title: "Intern", tribe: "Database Guys" },
  { name: "Mike", title: "Backend Developer", tribe: "Internstellar" },
  { name: "Zohaib Ahmed Butt", title: "Full Stack Developer", tribe: "Rigas" },
  { name: "Tiina Härm", title: "Senior Data Engineer", tribe: "Data" },
];

function create(employee) {
  employees.push(employee);
}

function getAll() {
  return employees;
}

function getById(id) {
  return employees[id];
}

function remove(id) {
  employees.splice(id, 1);
}

function searchByName(name) {
  const result = employees.filter((x) =>
    x.name.toLowerCase().includes(name.toLowerCase())
  );

  return result;
}

function filterEmployees(title, tribe) {
  const result = employees.filter(
    (x) =>
      (title ? x.title === title : true) && (tribe ? x.tribe === tribe : true)
  );

  return result;
}

function employeesReport() {
  const report = {};
  for (employee of employees) {
    if (employee.tribe in report) {
      report[employee.tribe].push(employee);
    } else {
      report[employee.tribe] = [];
      report[employee.tribe].push(employee);
    }
  }

  return report;
}

module.exports = {
  employees,
  create,
  getAll,
  getById,
  remove,
  searchByName,
  filterEmployees,
  employeesReport,
};
