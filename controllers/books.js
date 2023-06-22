const pool = require("../db");

const getBooks = async (req, res) => {
  try {
    const { rows, rowCount } = await pool.query("SELECT * FROM books;");
    res.status(201).json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("didnt work");
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await pool.query("SELECT * FROM books WHERE id=$1;", [id]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("didnt work");
  }
};

const postBook = async (req, res) => {
  try {
    const {
      title,
      author,
      description,
      category,
      cover_url,
      publishedAt,
      isActive,
    } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO books (title, author, description, category, cover_url, publishedAt, isActive) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
      [title, author, description, category, cover_url, publishedAt, isActive]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("didnt work");
  }
};


const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM books WHERE id=$1;", [id]);
    res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("didnt work");
  }
};

module.exports = { getBooks, getBook, postBook, deleteBook };


