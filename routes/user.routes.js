const Router = require("express");
const router = new Router();
const UserController = require("../controllers/user.controller");
// продолжить тут пофиксить ошибки с Udnefined userController и дальше сделтаь новую ветку закоммитить на гитхаб и pull request на EC2
router.post("/user", UserController.createUser);
router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getOneUser);
router.put("/user", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
