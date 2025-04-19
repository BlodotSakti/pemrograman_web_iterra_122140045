import React, { useState, useEffect } from 'react';
import { Routes, Route, Link /* useNavigate */ } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { BookContext } from './context/BookContext';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
// import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const [books, setBooks] = useLocalStorage('books', []);
  const [editBook, setEditBook] = useState(null);
  const [notification, setNotification] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <BookContext.Provider value={{ 
      books, 
      setBooks, 
      editBook, 
      setEditBook,
      notification,
      setNotification
    }}>
      <div className="App">
        <header className="header">
          <h1>📚 My Book Manager</h1>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/stats" className="nav-link">Statistics</Link>
          </nav>
        </header>

        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </BookContext.Provider>
  );
}

export default App;