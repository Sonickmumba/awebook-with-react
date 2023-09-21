import React, { useEffect, useState } from "react";

const display = () => {
  const a = "sonick"
  const [book, setBook] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('storedAuthorData');
    
  })
  return (
    <div>
      <h2>Book Display</h2>
      <p>{ a }</p>
      <div id="books-div"></div>
    </div>
  )
};

export default display;