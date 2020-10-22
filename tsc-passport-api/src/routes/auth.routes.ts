import { Router } from "express";
import { signup, signin, profile } from "../controllers/user.controller";
import passport from "passport";
const router = Router()
const auth = passport.authenticate("jwt", { session: false });


router.post('/signup', signup)
router.post('/signin', signin)
router.get('/profile', auth, profile)

export default router


