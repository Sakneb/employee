const Knex = require("knex");

const knexConfig = {
  client: "mysql2",
  version: "8.0",
  connection: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees2",
  },
};

const knex = Knex(knexConfig);

const TABLE = "employees";

async function create(employee) {
  await knex(TABLE).insert(employee);
}

async function getAll() {
  //   return await knex.raw("SELECT * FROM employees");
  return await knex(TABLE).select();
}

async function getById(id) {
  return await knex(TABLE).select().where({ id });
  //   return null;
}

async function removeById(id) {
  return await knex(TABLE).select().where({ id }).del();
}

function searchByName(name) {
  return null;
}

function filterEmployees(title, tribe) {}

function employeesReport() {}

module.exports = {
  create,
  getAll,
  getById,
  removeById,
  searchByName,
  filterEmployees,
  employeesReport,
};
