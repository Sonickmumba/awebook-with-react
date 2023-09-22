import React, { useState } from 'react';

const Forms = () => {
  const [authorData, setAuthorData] = useState({
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAuthorData({
      ...authorData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedAuthorData = JSON.parse(localStorage.getItem('AuthorsBooks')) || [];
    storedAuthorData.push(authorData);
    localStorage.setItem('AuthorsBooks', JSON.stringify(storedAuthorData));
  };
  return (
    <div className="form-container">
      <h2>
        ADD AUTHOR AND BOOK TITLE
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="authorName"
            name="authorName"
            required
            placeholder="Author's name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            required
            placeholder="Book Title"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="sub">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
