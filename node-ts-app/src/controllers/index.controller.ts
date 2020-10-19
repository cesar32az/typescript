import { Request, Response } from "express";

class IndexController {
  public index(req: Request, res: Response):void {
    res.render('index', {title: "welcome to book app"})
  }
}

export const indexController = new IndexController()
