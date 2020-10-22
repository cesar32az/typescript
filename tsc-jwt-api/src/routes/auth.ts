import { Router } from "express";
import { signin, signup, profile } from "../controllers/auth.controller";
import { checkDuplicateEmail as check } from "../middlewares/verifySignup";
import { verifyToken } from "../middlewares/verifyToken";

const router: Router = Router();

router.post("/signup", check, signup);

router.post("/signin", signin);

router.get("/profile", verifyToken, profile);

export default router;
