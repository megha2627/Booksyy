import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookDetails.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetail();
  }, [id]);

  return (
    <div className="book-detail-container">
      {book ? (
        <div className="book-card">
          <div className="book-content">
            <div className="book-image">
              <img src={book.cover_image} alt={`${book.title} cover`} />
            </div>
            <div className="book-info">
              <h2 className="book-title">📖 {book.title}</h2>
              <p>
                <strong>✍️ Author:</strong> {book.author}
              </p>
              <p>
                <strong>📚 Genre:</strong> {book.genre}
              </p>
              <p>
                <strong>📅 Year:</strong> {book.year}
              </p>
              <p>
                <strong>⭐ Rating:</strong> {book.rating} / 5
              </p>
              <p className="book-description">📝 {book.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetail;
