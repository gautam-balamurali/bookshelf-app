import { categories } from "../../../config/app-config";
import { useBookshelf } from "../../../core/contexts/BookshelfContext";
import "./Home.css";

const Home = () => {
  const {
    readBooks,
    wantToReadBooks,
    currentlyReadingBooks,
    handleShelfChange,
  } = useBookshelf();

  return (
    <div>
      <div className="currently-reading category">
        <h2>Currently Reading</h2>
        <div className="books-listing">
          {currentlyReadingBooks?.length > 0 &&
            currentlyReadingBooks.map((book) => {
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
          {currentlyReadingBooks?.length < 1 && (
            <p>No books found in this category.</p>
          )}
        </div>
      </div>
      <hr />

      <div className="want-to-read category">
        <h2>Want to Read</h2>
        <div className="books-listing">
          {wantToReadBooks?.length > 0 &&
            wantToReadBooks.map((book) => {
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
                  <label htmlFor="want-read">Move to: </label>
                  <select
                    id="want-read"
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
          {wantToReadBooks?.length < 1 && (
            <p>No books found in this category.</p>
          )}
        </div>
      </div>
      <hr />

      <div className="read category">
        <h2>Read</h2>
        <div className="books-listing">
          {readBooks?.length > 0 &&
            readBooks.map((book) => {
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
                  <label htmlFor="read-read">Move to: </label>
                  <select
                    id="read-read"
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
          {readBooks?.length < 1 && <p>No books found in this category.</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;
