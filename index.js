const Koa = require("koa");
const app = new Koa();

const PORT = 3000;

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const router = require("./lib/routes/employee-router");
app.use(router.middleware());

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
