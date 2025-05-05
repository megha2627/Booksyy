import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BookForm.css"; // 👈 CSS file

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (
      !title ||
      !author ||
      !genre ||
      !year ||
      !description ||
      !rating ||
      !coverImage
    ) {
      setError("⚠️ Please fill in all the fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newBook = {
      title,
      author,
      genre,
      year,
      description,
      rating,
      cover_image: coverImage,
    };

    try {
      await axios.post("http://localhost:5000/api/books", newBook);
      navigate("/");
    } catch (error) {
      setError("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="book-form-container">
      <h2 className="form-heading">📖 Add a New Book</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="📚 Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="✍️ Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="🏷️ Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="📅 Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <textarea
          placeholder="📝 Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="⭐ Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="🖼️ Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />
        <button type="submit">🚀 Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
