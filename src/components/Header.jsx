import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/books">Books</Link>
        </li>
        <li className="nav-item">
          <Link to="/create-book">Create Book</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
