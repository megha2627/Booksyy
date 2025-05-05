import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>📚 BookShelf App</h3>
          <p>Built with ❤️ by Megha</p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">🏠 Home</a>
            </li>
            <li>
              <a href="/add-book">➕ Add Book</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://github.com/megha2627"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐱 GitHub
            </a>

            <a
              href="https://linkedin.com/in/meghagupta2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookShelf App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
