import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Display = () => {
  const [book, setBook] = useState([]);
  const uniqueId = uuidv4();
  const storedData = localStorage.getItem('AuthorBooks');
  console.log(storedData);
  useEffect(() => {
    const storedData = localStorage.getItem('AuthorsBooks');
    console.log(storedData);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBook(parsedData);
    }
  }, []);
  return (
    <div className="book-display-container">
      <h2 className="book-display-title">Book Display</h2>
      <ul className="book-list">
        {book.map((bo) => (
          <li className="book-item" key={uniqueId}>
            <p>
              { bo.bookTitle }
              by
              { bo.authorName }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
