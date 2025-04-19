import { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/BookContext';
import './BookList.css';

function BookList({ searchQuery, filterStatus }) {
  const { books, setBooks, setEditBook, setNotification } = useContext(BookContext);
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || book.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const deleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    setNotification({ type: 'success', message: 'Buku berhasil dihapus!' });
  };

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <span className={`status-badge ${book.status}`}>
                  {book.status === 'milik' && 'Milik Saya'}
                  {book.status === 'baca' && 'Sedang Dibaca'}
                  {book.status === 'beli' && 'Ingin Membeli'}
                </span>
              </td>
              <td>
                <button 
                  className="edit-btn"
                  onClick={() => setEditBook(book)}
                >
                  Edit
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => deleteBook(book.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

BookList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired
};

export default BookList;