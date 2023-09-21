import React, { useEffect, useState } from "react";

const display = () => {
  const a = "sonick"
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
      <p>{ a }</p>
      <div id="books-div"></div>
    </div>
  )
};

export default display;