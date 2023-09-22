import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Display = () => {
  const [book, setBook] = useState([]);
  // const uniqueId = uuidv4();
  useEffect(() => {
    const storedData = localStorage.getItem('AuthorsBooks');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBook(parsedData);
    }
  }, []);
  return (
    <div className="book-display-container">
      <h2 className="book-display-title">Book Display</h2>
      <div className="book-list">
        {book.map((bo) => (
          <div className="book-item" key={uuidv4()}>
            <div className="details-div">
              <span className="title">
                { bo.bookTitle }
              </span>
              <span>by</span>
              <span>{ bo.authorName }</span>
            </div>
            <button type="button" className="remove">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
