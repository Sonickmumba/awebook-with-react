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
  }, [storedData]);
  return (
    <div>
      <h2>Book Display</h2>
      {book.map((bo) => (
        <li key={uniqueId}>{ bo.authorName }</li>
      ))}
    </div>
  );
};

export default Display;
