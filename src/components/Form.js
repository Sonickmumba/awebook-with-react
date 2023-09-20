import React, { useState } from 'react';

const Forms = () => {
  const a = 'sonick';
  const [authorData, setAuthorData] = useState({
  });

  const handleInputChange = (e) => {
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
    // localStorage.setItem('AuthorsBooks', JSON.stringify(storedAuthorData));
  };
  return (
    <div className="form-container">
      <h2>
        { a }
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
