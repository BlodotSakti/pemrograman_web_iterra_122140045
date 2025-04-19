import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/BookContext';
import './BookForm.css';

function BookForm({ editBook, setEditBook }) {
  const [formData, setFormData] = useState(editBook || { 
    title: '', author: '', status: 'milik' 
  });
  const [error, setError] = useState('');
  const { books, setBooks, setNotification } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.author.trim()) {
      setError('Judul dan Penulis wajib diisi!');
      return;
    }
    
    if (editBook) {
      const updatedBooks = books.map(b => 
        b.id === editBook.id ? { ...formData, id: b.id } : b
      );
      setBooks(updatedBooks);
      setNotification({ type: 'success', message: 'Buku berhasil diupdate!' });
    } else {
      setBooks([...books, { ...formData, id: Date.now() }]);
      setNotification({ type: 'success', message: 'Buku baru ditambahkan!' });
    }
    setFormData({ title: '', author: '', status: 'milik' });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Judul Buku"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Penulis"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="milik">Milik Saya</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Membeli</option>
      </select>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="submit-btn">
        {editBook ? 'Update Buku' : 'Tambah Buku'}
      </button>
    </form>
  );
}

BookForm.propTypes = {
  editBook: PropTypes.object,
  setEditBook: PropTypes.func
};

export default BookForm;