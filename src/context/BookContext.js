import { createContext, useContext, useState } from 'react';

export const BookContext = createContext();

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
}

export function BookProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);
  const [notification, setNotification] = useState(null);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        editBook,
        setEditBook,
        searchQuery,
        setSearchQuery,
        filterStatus,
        setFilterStatus,
        notification,
        setNotification
      }}
    >
      {children}
    </BookContext.Provider>
  );
}