import React, { useState } from "react";

const display = () => {
  const a = "sonick"
  const [book, setBook] = useState({});

  return (
    <div>
      <h2>Book Display</h2>
      <p>{ a }</p>
      <div id="books-div"></div>
    </div>
  )
};

export default display;