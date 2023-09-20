import React from 'react';

const Forms = () => {
  const a = 'sonick';
  return (
    <div className="form-container">
      <h2>
        { a }
      </h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            id="authorName"
            name="authorName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            required
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
