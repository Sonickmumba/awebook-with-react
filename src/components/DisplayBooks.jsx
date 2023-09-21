import React, { useEffect, useState } from 'react';

const Display = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('storedAuthorData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBook(parsedData);
    }
  }, []);
  console.log(book);
  return (
    <div>
      <h2>Book Display</h2>
      <div id="books-div" />
    </div>
  );
};

export default Display;
