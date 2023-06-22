const express = require("express");
const { getBooks, getBook, postBook, deleteBook } = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBook);
booksRouter.post("/", postBook);
booksRouter.delete("/:id", deleteBook);




module.exports = booksRouter;