import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./BookList.css"; // Import the updated CSS file

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Fetch books from the server
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Handle delete of a book
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks(); // Refresh the list after delete
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books when the component mounts
  }, []);

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {/* Make book title clickable to go to the book details page */}
              <Link to={`/book/${book.id}`} className="book-title">
                <strong>{book.title}</strong>
              </Link>
              <div className="book-actions">
                {/* Author name */}
                <span className="author">by {book.author}</span>
                {/* Edit and Delete buttons */}
                <div>
                  <button onClick={() => navigate(`/edit/${book.id}`)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
