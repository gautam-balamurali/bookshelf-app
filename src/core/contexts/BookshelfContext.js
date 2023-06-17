/* eslint-disable */

import { createContext, useContext, useEffect, useState } from "react";
import { books } from "../database/Database";

export const BookshelfContext = createContext();

export const BookshelfProvider = ({ children }) => {
  const [bookshelf, setBookshelf] = useState({
    booksData: null,
    readBooks: null,
    wantToReadBooks: null,
    currentlyReadingBooks: null,
  });

  useEffect(() => {
    setBookshelf((prev) => ({
      ...prev,
      booksData: books,
      readBooks: books.filter((book) => book.category === "read"),
      wantToReadBooks: books.filter((book) => book.category === "want"),
      currentlyReadingBooks: books.filter(
        (book) => book.category === "current"
      ),
      noneCategory: books.filter((book) => book.category === "none"),
    }));
  }, []);

  const moveBook = (id, category) => {
    const updatedBooksData = bookshelf.booksData.map((bookDetails) =>
      bookDetails.id === id ? { ...bookDetails, category } : bookDetails
    );
    setBookshelf((prev) => ({
      ...prev,
      booksData: updatedBooksData,
      readBooks: updatedBooksData.filter((book) => book.category === "read"),
      wantToReadBooks: updatedBooksData.filter(
        (book) => book.category === "want"
      ),
      currentlyReadingBooks: updatedBooksData.filter(
        (book) => book.category === "current"
      ),
      noneCategory: updatedBooksData.filter((book) => book.category === "none"),
    }));
  };

  const handleShelfChange = (id, event) => {
    const category = event.target.value;
    moveBook(id, category);
  };

  return (
    <BookshelfContext.Provider value={{ ...bookshelf, handleShelfChange }}>
      {children}
    </BookshelfContext.Provider>
  );
};

export const useBookshelf = () => useContext(BookshelfContext);
