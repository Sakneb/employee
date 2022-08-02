const Router = require("@koa/router");
const router = new Router();

const employeesController = require("../controllers/employee-controller");

router.get("/employees", employeesController.getAll);
router.post("/employees", employeesController.create);
router.get("/employees/:id", employeesController.getById);
router.delete("/employees/:id", employeesController.remove);

router.get("/search/employees", employeesController.searchByName);
router.get("/filter/employees", employeesController.filterEmployees);

router.get("/reports/employees", employeesController.employeesReport);

module.exports = router;
