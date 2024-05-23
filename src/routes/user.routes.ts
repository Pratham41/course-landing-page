import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

export const userRouter: Router = Router();

userRouter.route("/register").post(registerUser);
