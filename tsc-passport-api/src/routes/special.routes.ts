import { Router, Request, Response } from "express";
import passport from "passport";
const router = Router();
const auth = passport.authenticate("jwt", { session: false });

router.get("/", auth, (req: Request, res: Response):Response => {
  //validamos el inicio de sesion con passport y luego retornamos una respuesta
  return res.json({message: "success"});
});

export default router;
