import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditBookForm.css";

const EditBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/books/${id}`, book);
    navigate("/");
  };

  return (
    <div className="edit-book-container">
      <form onSubmit={handleSubmit} className="edit-book-form">
        <h2>📚 Edit Book Details</h2>

        <label>🎭 Genre</label>
        <input
          name="genre"
          value={book.genre || ""}
          onChange={handleChange}
          placeholder="e.g. Fiction, Drama"
        />

        <label>📅 Year</label>
        <input
          name="year"
          value={book.year || ""}
          onChange={handleChange}
          placeholder="e.g. 2023"
        />

        <label>📝 Description</label>
        <textarea
          name="description"
          value={book.description || ""}
          onChange={handleChange}
          placeholder="Write a short description..."
        ></textarea>

        <label>⭐ Rating</label>
        <input
          name="rating"
          type="number"
          step="0.1"
          value={book.rating || ""}
          onChange={handleChange}
          placeholder="e.g. 4.5"
        />

        <label>🖼️ Cover Image URL</label>
        <input
          name="cover_image"
          value={book.cover_image || ""}
          onChange={handleChange}
          placeholder="Paste image URL"
        />

        <button type="submit">🚀 Update Book</button>
      </form>
    </div>
  );
};

export default EditBookForm;
