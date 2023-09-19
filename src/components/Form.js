import React from "react";

const Forms = () => {
  const a = 'sonick';
  return (
    <div className="form-container"> {/* Apply CSS class */}
        <h2>Author and Book Title Form</h2>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group"> {/* Apply CSS class */}
                <label htmlFor="authorName">Author's Name:</label>
                <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    value={""}
                    onChange={""}
                    required
                />
            </div>
            <div className="form-group"> {/* Apply CSS class */}
                <label htmlFor="bookTitle">Book Title:</label>
                <input
                    type="text"
                    id="bookTitle"
                    name="bookTitle"
                    value={this.state.bookTitle}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-group"> {/* Apply CSS class */}
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
};


export default Forms;