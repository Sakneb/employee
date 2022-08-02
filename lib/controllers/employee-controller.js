const employeesModel = require("../models/employees-db-model");

async function create(ctx) {
  const employee = ctx.request.body;
  await employeesModel.create(employee);

  //   if (!name || !title || !tribe) {
  //     ctx.status = 400;
  //     return;
  //   }

  //   employeesModel.employees.push({ name, title, tribe });

  ctx.status = 201;
}

async function getAll(ctx) {
  ctx.status = 200;
  ctx.body = await employeesModel.getAll();
}

async function getById(ctx) {
  const id = ctx.params.id;

  ctx.status = 200;
  ctx.body = await employeesModel.getById(id);

  //   const employee = employeesModel.employees[id];

  //   if (!employee) {
  //     ctx.status = 404;
  //     return;
  //   }
}

async function remove(ctx) {
  const id = ctx.params.id;

  //   employeesModel.employees.splice(id, 1);

  ctx.status = 200;
  await employeesModel.remove(id);
}

function searchByName(ctx) {
  const name = ctx.query.name;
  console.log(name);
  if (!name) {
    ctx.status = 400;
    return;
  }

  //   const employees = employeesModel.employees.filter((x) =>
  //     x.name.toLowerCase().includes(name.toLowerCase())
  //   );

  //ctx.body = employees;

  ctx.status = 200;
  ctx.body = employeesModel.searchByName(name);
}

function filterEmployees(ctx) {
  const title = ctx.query.title;
  const tribe = ctx.query.tribe;

  if (!title && !tribe) {
    ctx.status = 400;
    return;
  }

  ctx.body = employeesModel.filterEmployees(title, tribe);
}

function employeesReport(ctx) {
  ctx.status = 200;
  ctx.body = employeesModel.employeesReport();
}

//   const employees = employeesModel.employees.filter(
//     (x) =>
//       (title ? x.title === title : true) && (tribe ? x.tribe === tribe : true)
//   );

//   ctx.body = employees;
// }

// function employeesReport(ctx) {
//   const report = {};
//   for (employee of employeesModel.employees) {
//     if (employee.tribe in report) {
//       report[employee.tribe].push(employee);
//     } else {
//       report[employee.tribe] = [];
//       report[employee.tribe].push(employee);
//     }
//   }

//   ctx.body = report;
// }

module.exports = {
  create,
  getAll,
  getById,
  remove,
  searchByName,
  filterEmployees,
  employeesReport,
};
