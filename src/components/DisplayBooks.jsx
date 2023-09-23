import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Display = () => {
  const [book, setBook] = useState([]);

  const handleDelete = (e) => {
    const updatedBooks = book.filter((boo) => Number(e.target.id) !== boo.id);
    console.log(typeof e.target.id);
    setBook(updatedBooks);
    localStorage.setItem('AuthorsBooks', JSON.stringify(updatedBooks));
  };
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
              <span className="title">by</span>
              <span className="title">{ bo.authorName }</span>
            </div>
            <button type="button" id={bo.id} className="remove" onClick={handleDelete}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
