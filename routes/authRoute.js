import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routing
// Register || METHOD POST
router.post("/register", registerController);

// LOGIN// || POST

router.post("/Login", loginController);

// forget password || post

router.post("/forgot-password", forgotPasswordController);
// code for forget password

// test  routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected route auth

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ data: "ok" });
});

export default router;
