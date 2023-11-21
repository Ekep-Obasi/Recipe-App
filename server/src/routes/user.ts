import express from "express";
import UserController from "../api/controllers/user-controller";
import AuthMiddleware from "../api/middleware/auth-middleware";
import RoleMiddleware from "../api/middleware/role-middleware";
import ApiMiddleware from "../api/middleware/api-middleware";

const router = express.Router();

const userController = new UserController();

router.post("/signup", userController.signUpUser.bind(userController));
router.post("/login", userController.loginUser.bind(userController));
router.post('/password-reset', userController.resetPassword.bind(userController))

router.use(AuthMiddleware);
router.patch("/:id", userController.editUserProfile.bind(userController));
router.delete("/:id", userController.deleteUser.bind(userController));
router.put("/:id", userController.resetUserInfo.bind(userController));
router.post("/subscribe", userController.subscribeToApi.bind(userController));
router.post("/upgrade-role", userController.becomeAdminUser.bind(userController));

router.use(AuthMiddleware);
router.use(RoleMiddleware);
router.get("/", userController.getAllUsers.bind(userController));
router.get("/:id", userController.getUserById.bind(userController));

router.use(AuthMiddleware);
router.use(RoleMiddleware);
router.use(ApiMiddleware);
router.get("/admin/list-drinks", userController.listUserDrinks.bind(userController));


export { router as userRouter };
