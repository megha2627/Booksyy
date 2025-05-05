import React, { useState, useEffect } from "react";
import axios from "axios";
import BookDetails from "./components/BookDetails"; // new page
import BookList from "./components/BookList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import EditBookForm from "./components/EditBookForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/edit/:id" element={<EditBookForm />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
