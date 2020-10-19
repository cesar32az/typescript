import { Router, Request, Response } from "express";
import TaskModel, { Task } from "../models/Task";

const router = Router();

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("tasks/create");
  })
  .post(
    async (req: Request, res: Response): Promise<void> => {
      const { title, description } = req.body;
      const newTask: Task = new TaskModel({ title, description });
      const taskSaved: Task = await newTask.save();
      console.log(taskSaved);
      res.redirect("/tasks/list");
    }
  );
router.route("/list").get(
  async (req: Request, res: Response): Promise<void> => {
    const tasks: Task[] = await TaskModel.find().lean();
    // console.log(tasks);
    res.render("tasks/list", { tasks });
  }
);
router.route("/delete/:id").get(async (req: Request, res: Response) => {
  const { id } = req.params;
  await TaskModel.findByIdAndDelete(id);
  res.redirect("/tasks/list");
});

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await TaskModel.findById(id).lean();
    res.render("tasks/edit", { task });
  })
  .post(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      const { title, description } = req.body;
      await TaskModel.findByIdAndUpdate(id, { title, description });
      res.redirect('/tasks/list')
    }
  );

export default router;
