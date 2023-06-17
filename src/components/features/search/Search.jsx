/* eslint-disable */

import { useNavigate } from "react-router";
import { categories } from "../../../config/app-config";
import { useBookshelf } from "../../../core/contexts/BookshelfContext";
import "./Search.css";

const Search = () => {
  const {
    searchedBooks,
    handleShelfChange,
    handleSearchInput,
    currentSearchValue,
  } = useBookshelf();

  const navigate = useNavigate();

  return (
    <div className="search-container category">
      <input
        className="search-bar"
        type="text"
        value={currentSearchValue}
        onChange={handleSearchInput}
        placeholder="Search books by title or author"
      />
      <div className="books-listing">
        {searchedBooks?.length > 0 &&
          searchedBooks.map((book) => {
            const {
              id,
              title,
              author,
              publisher,
              year,
              image,
              price,
              category,
            } = book;
            return (
              <div key={id} className="book-container">
                <img src={image} alt={title} className="book-image" />
                <p>
                  <strong>Title:</strong> {title}
                </p>
                <p>
                  <strong>Author:</strong> {author}
                </p>
                <label htmlFor="curr-read">Move to: </label>
                <select
                  id="curr-read"
                  value={category}
                  onChange={(event) => handleShelfChange(id, event)}
                >
                  {categories.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        {searchedBooks?.length < 1 && currentSearchValue.length < 1 && (
          <p>Search books by title or author.</p>
        )}
        {searchedBooks?.length < 1 && currentSearchValue.length > 0 && (
          <p>No books found.</p>
        )}
      </div>
      <button className="go-back-btn" onClick={() => navigate("/")}>
        ⬅️Back to Home
      </button>
    </div>
  );
};

export default Search;
