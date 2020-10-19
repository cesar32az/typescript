import { Request, Response } from "express";
import BookModel, { Book } from "../models/Book";

class BooksController {
  public async index(req: Request, res: Response): Promise<void> {
    const books: Book[] = await BookModel.find().lean();
    res.render("books/index", {
      title: "Books",
      books
    });
  }

  public renderFormBook(req: Request, res: Response): void {
    res.render("books/add", {
      title: "Add a book",
    });
  }

  public async saveBook(req: Request, res: Response):Promise<void> {
    const { title, author, isbn } = req.body;
    const book: Book = new BookModel({ title, author, isbn });
    const bookSaved: Book = await book.save();
    console.log(bookSaved);
    res.redirect("/books");
  }
}

export const booksController = new BooksController();
