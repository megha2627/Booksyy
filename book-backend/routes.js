//its a file where you can define all the app functionality in one plcce to maake you app look cleaner

//express is generallly used to buil web server and api without it is very complex to create server
const express = require("express");
const pool = require("./db"); // Database connection
const router = express.Router();

// Get all books
// Get a single book by ID
// Get all books
router.get("/books", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get a single book by ID
router.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching book by ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});



// Add a new book
// Add a new book
router.post("/books", async (req, res) => {
  const { title, author, genre, year, description, rating, cover_image } = req.body;
  
  // Check if all fields are provided
  if (!title || !author || !genre || !year || !description || !rating || !cover_image) {
    return res.status(400).json({ error: "Please provide all required fields." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO books (title, author, genre, year, description, rating, cover_image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [title, author, genre, year, description, rating, cover_image]
    );
    res.json(result.rows[0]);
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Update a book
router.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year, description, rating, cover_image } =
    req.body;
  try {
    const result = await pool.query(
      "UPDATE books SET title = $1, author = $2, genre = $3, year = $4, description = $5, rating = $6, cover_image = $7 WHERE id = $8 RETURNING *",
      [title, author, genre, year, description, rating, cover_image, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a book
// In routes.js
// Delete a book
router.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM books WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
